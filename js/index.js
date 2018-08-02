window.onload = function () {
    output();
};
function output() {
    // 获取DOM元素
    var con_btn = document.getElementsByClassName('btn')[0];
    var con_text = document.getElementsByClassName('con_text')[0];
    var con_output = document.getElementsByClassName('con_output')[0];

    // 注册事件
    // 点击button触发的监听事件
    con_btn.addEventListener('click',() => {
        appendLi();
    },false);
    // Enter被按下后触发的监听事件
    con_text.addEventListener('keydown',(e) => {
        e =  e || window.event;
        if (e.keyCode == 13){
              appendLi();
        }
    },false);

    //工具函数
    //动态添加li
    function appendLi(){
        var text = con_text.value;
        //text有值则console
        if(text) {
            var newli = document.createElement('li');
            newli.innerHTML = text;
            con_output.appendChild(newli);
            addEleStyle(newli.innerHTML, newli);
            var new_text = newli.innerHTML.replace(/(console\.(log|warning|error|info)\(|\))/g ," ");
            newli.innerHTML = new_text;
            document.getElementsByClassName('con_text')[0].value = "";
        }
        //将输出的内容倒序排列
        if (con_output.children.length>0) {
            var firstnode = con_output.children[0];
            con_output.insertBefore(newli, firstnode);
        }
    }
    //检测input有没有出现某些特定字符串
    function addEleStyle(ele,demo) {
        if(ele.search("warning") != -1) {
            demo.classList.add("warning");
        }
        else if(ele.search("error") != -1) {
            demo.classList.add("error");
        }
        else if(ele.search("info") != -1) {
            demo.classList.add("info");
        }
    }
}