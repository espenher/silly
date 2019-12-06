function clickButton(){
    document.getElementById("myButton").addEventListener("mouseenter", function(){
        var that = this;
        var maxX = window.innerWidth - this.offsetWidth;
        var maxY = window.innerHeight - this.offsetHeight;
        setTimeout(function() {
        that.style.left = getRandomInt(0, maxX)+'px'
        that.style.top = getRandomInt(0, maxY)+'px'
        },85);
    });
}

function caughtIt(){
    document.getElementById("myButton").addEventListener("click", function(){
        document.getElementById("skateGif").style.display = 'block';
    });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
caughtIt();
clickButton();
