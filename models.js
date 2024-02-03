const modelViewer = document.querySelector('#model');

// Disable zoom on the model viewer
modelViewer.addEventListener('mousedown', function (event) {
    if (event.targetTouches.length === 2) {
        event.preventDefault();
        event.stopPropagation();
    }
});

modelViewer.addEventListener('wheel', function (event) {
    event.preventDefault();
});
