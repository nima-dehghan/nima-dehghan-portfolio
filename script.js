(() => {
  const FRAME_COUNT = 300;
  const FRAME_PAD = 3;
  const FRAME_SRC = (i) =>
    `image-split/ezgif-frame-${String(i).padStart(FRAME_PAD, "0")}.png`;

  const section = document.getElementById("sequence");
  const canvas = document.getElementById("sequence-canvas");
  const ctx = canvas.getContext("2d", { alpha: false });

  const frames = new Array(FRAME_COUNT);
  let loaded = 0;
  let current = 0;
  let target = 0;
  let drawing = false;
  let nativeW = 1280;
  let nativeH = 720;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const { clientWidth: w, clientHeight: h } = canvas;
    canvas.width = Math.max(1, Math.round(w * dpr));
    canvas.height = Math.max(1, Math.round(h * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    paint(current, true);
  }

  function coverRect(srcW, srcH, dstW, dstH) {
    const scale = Math.max(dstW / srcW, dstH / srcH);
    const drawW = srcW * scale;
    const drawH = srcH * scale;
    return {
      x: (dstW - drawW) / 2,
      y: (dstH - drawH) / 2,
      w: drawW,
      h: drawH,
    };
  }

  function nearestLoaded(index) {
    if (frames[index]) return index;
    for (let d = 1; d < FRAME_COUNT; d += 1) {
      const before = index - d;
      const after = index + d;
      if (before >= 0 && frames[before]) return before;
      if (after < FRAME_COUNT && frames[after]) return after;
    }
    return -1;
  }

  function paint(index, force) {
    const frameIndex = nearestLoaded(Math.round(index));
    if (frameIndex < 0) return;
    if (!force && frameIndex === paint.last) return;
    paint.last = frameIndex;

    const img = frames[frameIndex];
    const dstW = canvas.clientWidth;
    const dstH = canvas.clientHeight;
    const r = coverRect(nativeW, nativeH, dstW, dstH);

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, dstW, dstH);
    ctx.drawImage(img, r.x, r.y, r.w, r.h);
  }
  paint.last = -1;

  function progressFromScroll() {
    const rect = section.getBoundingClientRect();
    const total = section.offsetHeight - window.innerHeight;
    if (total <= 0) return 0;
    const scrolled = -rect.top;
    return Math.min(1, Math.max(0, scrolled / total));
  }

  function updateTarget() {
    target = progressFromScroll() * (FRAME_COUNT - 1);
  }

  function tick() {
    drawing = true;
    const ease = reduceMotion ? 1 : 0.14;
    current += (target - current) * ease;

    if (Math.abs(target - current) < 0.001) {
      current = target;
    }

    paint(current);

    if (Math.abs(target - current) >= 0.001) {
      requestAnimationFrame(tick);
    } else {
      drawing = false;
    }
  }

  function onScroll() {
    updateTarget();
    if (!drawing) requestAnimationFrame(tick);
  }

  function loadFrame(i) {
    return new Promise((resolve) => {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        if (i === 1) {
          nativeW = img.naturalWidth;
          nativeH = img.naturalHeight;
        }
        frames[i - 1] = img;
        loaded += 1;
        if (i === 1 || loaded === FRAME_COUNT) paint(current, true);
        resolve();
      };
      img.onerror = resolve;
      img.src = FRAME_SRC(i);
    });
  }

  async function preload() {
    const first = [1, Math.ceil(FRAME_COUNT / 2), FRAME_COUNT];
    await Promise.all(first.map(loadFrame));
    paint(0, true);

    const rest = [];
    for (let i = 1; i <= FRAME_COUNT; i += 1) {
      if (!first.includes(i)) rest.push(i);
    }

    const batch = 12;
    for (let i = 0; i < rest.length; i += batch) {
      await Promise.all(rest.slice(i, i + batch).map(loadFrame));
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", resize);

  resize();
  updateTarget();
  preload().then(() => {
    updateTarget();
    paint(current, true);
    if (!drawing) requestAnimationFrame(tick);
  });
})();
