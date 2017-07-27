/*
* @Author: Marte
* @Date:   2017-07-27 20:34:36
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-27 20:58:13
*/

window.onload=function(){
    var div=document.querySelector(".div")
    var fullScreen=document.getElementById("btn1");
    var cancelFull=document.getElementById("btn2");
    var isFull=document.getElementById("btn3");
    fullScreen.addEventListener("click",function(){
        if(div.requestFullScreen){
            div.requestFullScreen();
        }else if(div.webkitRequestFullScreen){
            div.webkitRequestFullScreen();
        }else if(div.mozRequestFullScreen){
            div.mozRequestFullScreen();
        }else if(div.msRequestFullScreen){
            div.msRequestFullScreen();
        }else{
            div.oRequestFullScreen();
        }
    });
    cancelFull.addEventListener("click",function(){
        if(document.cancelFullScreen){
            document.cancelFullScreen();
        }else if(document.webkitCancelFullScreen){
            document.webkitCancelFullScreen();
        }else if(document.mozCancelFullScreen){
            document.mozCancelFullScreen();
        }else if(document.msCancelFullScreen){
            document.msCancelFullScreen();
        }else{
            document.oCancelFullScreen();
        }
    });
    isFull.addEventListener("click",function(){
        if(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullscreenElement||document.msFullscreenElement||document.oFullscreenElement){
            alert(true);
        }else{
            alert(false);
        }
    });
}