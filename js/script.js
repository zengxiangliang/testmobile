var wrap = document.querySelector('.container');
var oli = wrap.querySelectorAll('li');
var length = oli.length;
var x1, x2, d = 100;
for (var i = 0; i < length; i++) {
    oli[i].className = 'li' + i;
    (function(i) {
        oli[i].addEventListener('touchstart', function(e) {
            var ev = e.changedTouches[0];
            x1 = ev.pageX;
            oli[i].addEventListener('touchmove', move, false)
            oli[i].addEventListener('touchend', end, false);
        }, false);
    })(i);
}

function move(e) {
    var ev = e.changedTouches[0];
    x2 = ev.pageX;
    // console.log(x2);
}

h = 1;

function end(e) {
    this.removeEventListener('touchmove', move, false);
    if (Math.abs(x2 - x1) > d && x2 - x1 > 0) {
        for (var i = 0; i < length; i++) {
            (function(i, h) {
                h += i;
                if (h > length - 1) {
                    h = 0;
                }
                console.log(h);
                oli[i].className = 'li' + h;
            })(i, h);
        }
    }
    if (Math.abs(x2 - x1) > d && x2 - x1 < 0) {
        for (var i = 0; i <= length; i++) {
            (function(i) {
                h--;
                if (h < 1) {
                    h = length;
                }
                console.log(h);
                oli[i].className = 'li' + h;
            })(i);
        }
    }
}