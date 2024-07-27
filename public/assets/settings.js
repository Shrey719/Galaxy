function panicKeyListener(event) {
    const savedPanicKey = localStorage.getItem('panicKey');
    const savedPanicUrl = localStorage.getItem('panicUrl');

    console.log('Key pressed:', event.key);
    console.log('Saved Panic Key:', savedPanicKey);
    console.log('Saved Panic URL:', savedPanicUrl);

    if (event.key.toLowerCase() === savedPanicKey) {
        console.log('Panic key matched. Redirecting to:', savedPanicUrl);
        window.location.href = savedPanicUrl;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedPanicKey = localStorage.getItem('panicKey');
    const savedPanicUrl = localStorage.getItem('panicUrl');

    console.log('DOM loaded. Panic Key:', savedPanicKey, 'Panic URL:', savedPanicUrl);

    if (savedPanicKey && savedPanicUrl) {
        document.addEventListener('keydown', panicKeyListener);
        console.log('Panic key listener added.');
    } else {
        console.log('Panic key or URL not set.');
    }
});
