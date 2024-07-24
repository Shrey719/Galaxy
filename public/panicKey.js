// panicKey.js
function panicKeyListener(event) {
    const savedPanicKey = localStorage.getItem('panicKey');
    const savedPanicUrl = localStorage.getItem('panicUrl');

    if (event.key.toLowerCase() === savedPanicKey) {
        window.location.href = savedPanicUrl;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('panicKey') && localStorage.getItem('panicUrl')) {
        document.addEventListener('keydown', panicKeyListener);
    }
});
