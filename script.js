const images = [
    'b_pics/.png'
    /*'b_pics/bar2.png',
    'b_pics/bowl.png',
    'b_pics/SmoothTeakettle.png',*/
    // Add more image paths as needed
];

let currentIndex = 0;

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById('mainImage').src = images[currentIndex];
}