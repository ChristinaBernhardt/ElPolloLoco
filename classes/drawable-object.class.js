
class DrawableObject {

x = 100;
y = 230;
height = 210;
width = 100;
img;
imageCache = {};
currentImage = 0;

 
 /**
 * Loads an image from the given path.
 *
 * @param {string} path - The path to the image file.
 */
loadImage(path) {
  this.img = new Image();
  this.img.src = path;
}

/**
 * Draws the loaded image onto the canvas context.
 *
 * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
 */
draw(ctx) {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}

/**
 * Preloads images from an array of paths into the image cache.
 *
 * @param {string[]} arr - Array of paths to the image files to preload.
 */
loadImages(arr) {
  arr.forEach((path) => {
    let img = new Image();
    img.src = path;
    this.imageCache[path] = img;
  });
}

/**
 * Determines the image index based on the current percentage value.
 * Useful for status bars or similar UI elements.
 *
 * @returns {5 | 4 | 3 | 2 | 1 | 0} - Image index based on the percentage value.
 */
resolveImageIndex() {
  if (this.percentage == 100) {
    return 5;
  } else if (this.percentage >= 80) {
    return 4;
  } else if (this.percentage >= 60) {
    return 3;
  } else if (this.percentage >= 40) {
    return 2;
  } else if (this.percentage >= 20) {
    return 1;
  } else {
    return 0;
  }
}
}
