// 鼠标跟随
// pageY和pageX的ie67ie兼容写法
// 在页面的位置 = 看得见的 + 看不见的
// pageY/pageX = event.clientY/clientX + scroll().top/scroll().left
var obj = document.getElementById("mouse_track_block");
var timer = null;
var targetX = 0,
    targetY = 0,
    leaderX = 0,
    leaderY = 0;

function scroll() {  // 开始封装自己的scrollTop
    if(window.pageYOffset !== undefined) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是0,所以需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {// 标准浏览器,来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {// 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}


// 给整个文档绑定点击事件获取鼠标位置
document.onmousemove = function(event){
    // 兼容获取事件对象
    event = event || window.event;
    // 鼠标在页面的位置 = 被卷去的部分 + 可视区域部分
    var pageY = event.pageY || scroll().top + event.clientY;
    var pageX = event.pageX || scroll().left + event.clientX;
    targetY = pageY - obj.offsetHeight/2;
    targetX = pageX - obj.offsetWidth/2;

    // 清除定时器
    clearInterval(timer);
    timer = setInterval(function(){
        // X,先左右,后上下
        // 为盒子的位置获取值
        leaderX = obj.offsetLeft;
        // 获取步长
        var stepX = (targetX - leaderX)/10;
        // 二次处理步长
        stepX = stepX > 0 ? Math.ceil(stepX) : Math.floor(stepX);
        leaderX = leaderX + stepX;
        // 赋值
        obj.style.left = leaderX + "px";
        // Y
        leaderY = obj.offsetTop;
        var stepY = (targetY - leaderY)/10;
        stepY = stepY > 0 ? Math.ceil(stepY) : Math.floor(stepY);
        leaderY = leaderY + stepY;
        obj.style.top = leaderY + "px";
    }, 3);
}