var Global_config = {
  // VUE_APP_BACKEND_SERVER: 'http://118.31.117.149:8080', // 后台服务地址
  VUE_APP_BACKEND_SERVER: 'http://47.97.35.68:7070', // 后台服务地址
  VUE_APP_EXPIRE_IN: 7200 // 蓝牙自动断开时间（s)
}
alert(6666)
if ('serviceWorker' in window.navigator) {
  alert(5555)
  navigator.serviceWorker.register('./sw.js', {scope: './'})

  navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload();
  })
}
