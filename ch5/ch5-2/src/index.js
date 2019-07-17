console.log('hello, this is yosef yuan');

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('service-workder registed');
        }).catch(error => {
            console.log('service-workder register error');
        })
    })
}