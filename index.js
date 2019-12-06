alert(666)
if ('serviceWorker' in window.navigator) {
    alert(555)
    navigator.serviceWorker.register('./sw.js', {scope: './'})
    
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload()
    })
}
