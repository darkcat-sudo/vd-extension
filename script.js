function addresponsivecss() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'assets/videoplayer/responsive.css';
    document.head.appendChild(link);
}
//addresponsivecss();



//html creaation

// Create the draggable container
var draggableContainer = document.createElement("div");
draggableContainer.className = "draggable";
draggableContainer.id = "draggable";

// Create the header
var header = document.createElement("div");
header.className = "headex";
var headerText = document.createElement("p");
headerText.textContent = "Video Downloader 1.0";
header.appendChild(headerText);

// Create the drag button
var dragButton = document.createElement("button");
dragButton.className = "drag-button";
dragButton.textContent = "Hold to Drag";
dragButton.addEventListener("mousedown", startDragging);

// Append the drag button to the header
var optionsContainer = document.createElement("div");
optionsContainer.className = "optionsex";
optionsContainer.appendChild(dragButton);
header.appendChild(optionsContainer);

// Append the header to the draggable container
draggableContainer.appendChild(header);

// Create the video links container
var videoLinksContainer = document.createElement("div");
videoLinksContainer.className = "vlinks-cont";

// Create the video links
var videoLink = document.createElement("div");
videoLink.className = "vlinks";

var videoThumbnail = document.createElement("video");
videoThumbnail.className = "tumb";
videoThumbnail.src = "https://memes.co.in/Uploads/Media/Jan24/Fri05/1023/d72af08b.mp4";

var videoTitle = document.createElement("div");
videoTitle.className = "extitle";
videoTitle.textContent = "this is my cute cat";

var downloadLink = document.createElement("div");
downloadLink.className = "downloadex";
var downloadAnchor = document.createElement("a");
downloadAnchor.href = "https://memes.co.in/Uploads/Media/Jan24/Fri05/1023/d72af08b.mp4";
downloadAnchor.setAttribute("download", "");
downloadAnchor.textContent = "Download";
downloadLink.appendChild(downloadAnchor);

// Append the video thumbnail, title, and download link to the video link container
videoLink.appendChild(videoThumbnail);
videoLink.appendChild(videoTitle);
videoLink.appendChild(downloadLink);

// Append the video link container to the video links container
videoLinksContainer.appendChild(videoLink);

// Append the video links container to the draggable container
draggableContainer.appendChild(videoLinksContainer);

// Append the draggable container to the body
document.body.appendChild(draggableContainer);






var dragging = false;
var dragElement = document.getElementById("draggable");
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