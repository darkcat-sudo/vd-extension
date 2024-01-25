function addresponsivecss() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'assets/videoplayer/responsive.css';
    document.head.appendChild(link);
}
//addresponsivecss();

var dragging = false;
var dragElement = document.getElementById("draggable");

// Make the header draggable
dragElement.addEventListener("mousedown", function(e) {
    e.preventDefault();
});

function startDragging(e) {
    dragging = true;
    var pos1 = e.clientX;
    var pos2 = e.clientY;

    document.onmouseup = function() {
        dragging = false;
        document.onmouseup = null;
        document.onmousemove = null;
    };

    document.onmousemove = function(e) {
        if (dragging) {
            e.preventDefault();
            var pos3 = pos1 - e.clientX;
            var pos4 = pos2 - e.clientY;
            pos1 = e.clientX;
            pos2 = e.clientY;

            var newTop = dragElement.offsetTop - pos4;
            var newLeft = dragElement.offsetLeft - pos3;

            // Ensure the draggable element stays within the viewport
            if (newTop >= 0 && newTop <= window.innerHeight - dragElement.offsetHeight) {
                dragElement.style.top = newTop + "px";
            }

            if (newLeft >= 0 && newLeft <= window.innerWidth - dragElement.offsetWidth) {
                dragElement.style.left = newLeft + "px";
            }
        }
    };
}