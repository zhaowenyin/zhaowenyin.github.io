document.querySelectorAll('.div')[0].addEventListener('click', ()=>{
    alert(111)
}, false)

var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象
request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            console.log(request.responseText)
        } else {
            // 失败，根据响应码判断失败原因:
            console.log(request.status)
        }
    } else {
        // HTTP请求还在继续...
    }
}
// 发送请求:
request.open('GET', 'http://47.97.35.68:7070/api/v3/pcweb/counties/prefix/zmd');
request.send();


var request2 = new XMLHttpRequest(); // 新建XMLHttpRequest对象
request2.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request2.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request2.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            console.log(request2.responseText)
        } else {
            // 失败，根据响应码判断失败原因:
            console.log(request2.status)
        }
    } else {
        // HTTP请求还在继续...
    }
}
request2.open("POST","http://47.97.35.68:7070/api/v3/oprpc/operators/session",true);
request2.setRequestHeader("Content-type", "application/json;charset=UTF-8");
request2.send(JSON.stringify({"username":"zmd_yunying","password":"e10adc3949ba59abbe56e057f20f883e","county":"zmd"}));