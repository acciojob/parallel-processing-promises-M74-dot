//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];


// Function to load a single image
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image's URL: ${url}`));
    img.src = url;
  });
}

// Function to load all images and display them
function downloadAndDisplayImages() {
  // Map each image URL to a promise
  const promises = images.map(image => loadImage(image.url));

  // Use Promise.all to wait for all images to be loaded
  Promise.all(promises)
    .then(images => {
      // Clear the output div before adding new images
      output.innerHTML = '';
      
      // Append each image to the output div
      images.forEach(img => {
        output.appendChild(img);
      });
    })
    .catch(error => {
      console.error(error.message);
    });
}

// Attach event listener to the button
btn.addEventListener("click", downloadAndDisplayImages);
