if ('serviceWorker' in window.navigator) {
    navigator.serviceWorker.register('./sw.js', {scope: './'})
    
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload()
    })
}
