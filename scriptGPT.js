// Array of image source file names
const imageSources = [
  "./photos/IMG_001.JPG",
  "./photos/IMG_002.JPG",
  "./photos/IMG_003.JPG",
  "./photos/IMG_004.JPG",
  "./photos/IMG_005.JPG",
  "./photos/IMG_006.JPG",
  "./photos/IMG_007.JPG",
  "./photos/IMG_008.JPG",
  "./photos/IMG_009.JPG",
  "./photos/IMG_010.JPG",
  "./photos/IMG_011.JPG",
  "./photos/IMG_012.JPG",
  "./photos/IMG_013.JPG",
  "./photos/IMG_014.JPG",
  "./photos/IMG_015.JPG",
  "./photos/IMG_016.JPG",
  "./photos/IMG_017.JPG",
  "./photos/IMG_018.JPG",
  "./photos/IMG_019.JPG",
  "./photos/IMG_020.JPG",
  "./photos/IMG_021.JPG",
  "./photos/IMG_022.JPG",
  "./photos/IMG_023.JPG",
  "./photos/IMG_024.JPG",
  "./photos/IMG_025.JPG",
  "./photos/IMG_026.JPG",
  "./photos/IMG_027.JPG",
  "./photos/IMG_028.jpg",
  "./photos/IMG_029.jpg",
  "./photos/IMG_030.jpg",
  "./photos/IMG_031.jpg",
  "./photos/IMG_032.jpg",
  "./photos/IMG_033.jpg",
  "./photos/IMG_034.jpg",
  "./photos/IMG_035.jpg",
  "./photos/IMG_036.jpg",
  "./photos/IMG_037.jpg",
  "./photos/IMG_038.jpg",
  "./photos/IMG_039.jpg",
  "./photos/IMG_040.jpg",
  "./photos/IMG_041.jpg",

  // Add more image source file names as needed
];

// Function to randomly select and highlight an image
function highlightRandomImage() {
  const highlightedImage = document.querySelector(".highlighted-image");

  // Select a random image source
  const randomImageSource =
    imageSources[Math.floor(Math.random() * imageSources.length)];

  // Set the source of the highlighted image
  highlightedImage.src = randomImageSource;
}

// Call the function to highlight a random image
highlightRandomImage();

setInterval(highlightRandomImage, 10000);
