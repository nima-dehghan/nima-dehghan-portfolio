"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT = 20;
const FRAME_PAD = 3;
const frameSrc = (i: number) =>
  `/image-split/ezgif-frame-${String(i).padStart(FRAME_PAD, "0")}.png`;

export function ScrollSequence({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const frames: (HTMLImageElement | undefined)[] = new Array(FRAME_COUNT);
    let nativeW = 1280;
    let nativeH = 720;
    let current = 0;
    let target = 0;
    let drawing = false;
    let lastPaint = -1;
    let raf = 0;
    let cancelled = false;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const coverRect = (
      srcW: number,
      srcH: number,
      dstW: number,
      dstH: number,
    ) => {
      const scale = Math.max(dstW / srcW, dstH / srcH);
      const w = srcW * scale;
      const h = srcH * scale;
      return { x: (dstW - w) / 2, y: (dstH - h) / 2, w, h };
    };

    const nearestLoaded = (index: number) => {
      if (frames[index]) return index;
      for (let d = 1; d < FRAME_COUNT; d += 1) {
        const before = index - d;
        const after = index + d;
        if (before >= 0 && frames[before]) return before;
        if (after < FRAME_COUNT && frames[after]) return after;
      }
      return -1;
    };

    const paint = (index: number, force = false) => {
      const frameIndex = nearestLoaded(Math.round(index));
      if (frameIndex < 0) return;
      if (!force && frameIndex === lastPaint) return;
      lastPaint = frameIndex;

      const image = frames[frameIndex];
      if (!image) return;

      const dstW = canvas.clientWidth;
      const dstH = canvas.clientHeight;
      const r = coverRect(nativeW, nativeH, dstW, dstH);

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, dstW, dstH);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(image, r.x, r.y, r.w, r.h);
    };

    const resize = () => {
      const maxDpr = window.matchMedia("(max-width: 767px)").matches ? 1.5 : 2;
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      paint(current, true);
    };

    const progressFromScroll = () => {
      const total = root.offsetHeight - window.innerHeight;
      if (total <= 0) return 0;
      const scrolled = -root.getBoundingClientRect().top;
      return Math.min(1, Math.max(0, scrolled / total));
    };

    const updateTarget = () => {
      target = progressFromScroll() * (FRAME_COUNT - 1);
    };

    const tick = () => {
      drawing = true;
      const ease = reduceMotion ? 1 : 0.14;
      current += (target - current) * ease;
      if (Math.abs(target - current) < 0.001) current = target;
      paint(current);
      if (Math.abs(target - current) >= 0.001) {
        raf = requestAnimationFrame(tick);
      } else {
        drawing = false;
      }
    };

    const onScroll = () => {
      updateTarget();
      if (!drawing) raf = requestAnimationFrame(tick);
    };

    const loadFrame = (i: number) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          if (cancelled) {
            resolve();
            return;
          }
          if (i === 1) {
            nativeW = img.naturalWidth;
            nativeH = img.naturalHeight;
          }
          frames[i - 1] = img;
          if (i === 1) paint(current, true);
          resolve();
        };
        img.onerror = () => resolve();
        img.src = frameSrc(i);
      });

    const preload = async () => {
      const first = [1, Math.ceil(FRAME_COUNT / 2), FRAME_COUNT];
      await Promise.all(first.map(loadFrame));
      if (cancelled) return;
      paint(0, true);

      const rest: number[] = [];
      for (let i = 1; i <= FRAME_COUNT; i += 1) {
        if (!first.includes(i)) rest.push(i);
      }

      const batch = 12;
      for (let i = 0; i < rest.length; i += batch) {
        if (cancelled) return;
        await Promise.all(rest.slice(i, i + batch).map(loadFrame));
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener("scroll", onScroll, { passive: true });
    resize();
    updateTarget();
    void preload().then(() => {
      if (cancelled) return;
      updateTarget();
      paint(current, true);
      if (!drawing) raf = requestAnimationFrame(tick);
    });

    return () => {
      cancelled = true;
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef} className="portfolio-sequence relative">
      <div className="sticky top-0 z-0 h-dvh overflow-hidden bg-transparent">
        <canvas
          ref={canvasRef}
          className="block h-full w-full"
          width={1280}
          height={720}
          aria-hidden
        />
      </div>
      <div className="relative z-10 -mt-[100dvh]">{children}</div>
    </div>
  );
}
