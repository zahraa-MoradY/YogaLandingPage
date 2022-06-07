const width = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;


window.addEventListener('resize', function(event) {
    var newWidth = window.innerWidth;
    if (newWidth < 1100) {

        element.style.setProperty("--dblock", "block");
        // layer.display.getComputedStyle = 'block'
    } else {
        element.style.setProperty("--dblock", "none");
    }
});
const element = document.getElementsByClassName("header")[0];
// console.log(changeDisplay())
if (width < 1100) {
    // console.log('chan')
    element.style.setProperty("--dblock", "block");
    // layer.display.getComputedStyle = 'block'
} else {
    element.style.setProperty("--dblock", "none");
}
// element.style.setProperty("--dblock", "none");
// layer.display.getComputedStyle = 'block'