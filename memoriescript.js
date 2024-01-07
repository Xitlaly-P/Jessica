const backgroundImages = ["img1.jpeg", "img2.jpeg", "img3.jpeg"]; // Replace with your image names

// Function to change background image at intervals
function changeBackgroundImage() {
    let currentIndex = 0;

    setInterval(() => {
        document.querySelector("header").style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
        currentIndex = (currentIndex + 1) % backgroundImages.length;
    }, 5000); // Change image every 5 seconds (adjust as needed)
}

// Call the function when the page loads
window.onload = function () {
    changeBackgroundImage();
};