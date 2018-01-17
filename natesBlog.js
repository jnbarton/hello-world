//Crime Analysis slideshow from 2016 Citizen's Academy
var images = [
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-1-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-2-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-3-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-4-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-5-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-6-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-7-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-8-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-9-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-10-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-11-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-12-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-13-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-14-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-15-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-17-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-20-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-21-638.jpg?raw=true', 
    'https://github.com/jnbarton/Crime-Analysis/blob/master/slide-22-638.jpg?raw=true', 
    ];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}