const clamp = (value, min = 0, max = 1) => Math.max(min, Math.min(value, max));
const pixelRound = (value, ratio) => Math.round(value * ratio) / ratio;
const isTransparentColor = (value) => value === "transparent" || /rgba\([^)]*,\s*0(?:\.0+)?\s*\)$/.test(value);

function getPageBackgroundColor() {
  const background = getComputedStyle(document.body).backgroundColor;
  return isTransparentColor(background) ? "#f8fafc" : background;
}

export async function capturePixelMosaic(overlay) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const cell = Math.max(10, Math.round(width / 48));
  const cols = Math.ceil(width / cell);
  const rows = Math.ceil(height / cell);
  try {
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const { default: html2canvas } = await import("html2canvas");
    const options = {
      backgroundColor: getPageBackgroundColor(),
      height,
      ignoreElements: (element) => element === overlay,
      logging: false,
      scale: 1,
      scrollX,
      scrollY,
      width,
      windowHeight: height,
      windowWidth: width,
      x: scrollX,
      y: scrollY,
    };
    let screenshot;
    try {
      screenshot = await html2canvas(document.documentElement, options);
    } catch {
      screenshot = await html2canvas(document.documentElement, { ...options, foreignObjectRendering: true });
    }

    const mosaic = document.createElement("canvas");
    mosaic.width = cols;
    mosaic.height = rows;
    const mosaicContext = mosaic.getContext("2d", { willReadFrequently: true });
    mosaicContext.imageSmoothingEnabled = true;
    mosaicContext.drawImage(screenshot, 0, 0, cols, rows);

    const pixels = mosaicContext.getImageData(0, 0, cols, rows).data;
    const colors = [];
    for (let index = 0; index < pixels.length; index += 4) {
      colors.push(`rgb(${pixels[index]}, ${pixels[index + 1]}, ${pixels[index + 2]})`);
    }
    return { width, height, cell, cols, rows, colors };
  } catch (error) {
    console.error("Pixel wave capture failed; using a CSS color mosaic instead.", error);
    return captureColorMosaic(overlay, { width, height, cell, cols, rows });
  }
}

function captureColorMosaic(overlay, mosaic) {
  const wasHidden = overlay.hidden;
  overlay.hidden = true;
  const colors = [];
  const { width, height, cell, cols, rows } = mosaic;
  const fallback = getPageBackgroundColor();

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const x = Math.min(width - 1, col * cell + cell / 2);
      const y = Math.min(height - 1, row * cell + cell / 2);
      let element = document.elementFromPoint(x, y);
      let color = fallback;
      while (element && element !== overlay) {
        const background = getComputedStyle(element).backgroundColor;
        if (background && !isTransparentColor(background)) {
          color = background;
          break;
        }
        element = element.parentElement;
      }
      colors.push(color);
    }
  }

  overlay.hidden = wasHidden;
  return { ...mosaic, colors };
}

function drawPixelWave(context, mosaic, mode, progress, ratio) {
  const { width, height, cell, cols, rows, colors } = mosaic;
  const band = 8;
  const front = progress * (cols + rows + band + 3);
  const unit = Math.max(2, Math.round(cell / 4));
  const amplitude = cell * 2.4;
  context.clearRect(0, 0, width, height);
  context.lineWidth = 1;
  context.strokeStyle = "rgba(0, 0, 0, 0.45)";

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const distance = col + row + Math.sin(col * 0.7) * 1.2 + Math.sin(row * 0.5) * 1.2;
      const wave = clamp((front - distance) / band);
      if ((mode === "cover" && wave <= 0) || (mode === "reveal" && wave >= 1)) continue;

      const x = col * cell;
      const y = row * cell;
      const rise = Math.round((Math.sin(wave * Math.PI) * amplitude) / unit) * unit;
      context.fillStyle = colors[row * cols + col] ?? "#f8fafc";
      context.fillRect(pixelRound(x, ratio), pixelRound(y, ratio), pixelRound(x + cell, ratio) - pixelRound(x, ratio), pixelRound(y + cell, ratio) - pixelRound(y, ratio));

      if (rise > 0) {
        const raisedY = y - rise;
        context.fillRect(pixelRound(x, ratio), pixelRound(raisedY, ratio), pixelRound(x + cell, ratio) - pixelRound(x, ratio), pixelRound(raisedY + cell, ratio) - pixelRound(raisedY, ratio));
        context.strokeRect(
          pixelRound(x, ratio) + 0.5 / ratio,
          pixelRound(raisedY, ratio) + 0.5 / ratio,
          pixelRound(x + cell, ratio) - pixelRound(x, ratio) - 1 / ratio,
          pixelRound(raisedY + cell, ratio) - pixelRound(raisedY, ratio) - 1 / ratio,
        );
      }
    }
  }
}

export function playPixelWave(canvas, mosaic, mode, duration = 800) {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const context = canvas.getContext("2d");
  canvas.width = Math.round(mosaic.width * ratio);
  canvas.height = Math.round(mosaic.height * ratio);
  context.setTransform(ratio, 0, 0, ratio, 0, 0);

  return new Promise((resolve) => {
    const start = performance.now();
    const frame = (now) => {
      const progress = clamp((now - start) / duration);
      const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      drawPixelWave(context, mosaic, mode, eased, ratio);
      if (progress < 1) requestAnimationFrame(frame);
      else resolve();
    };
    requestAnimationFrame(frame);
  });
}
