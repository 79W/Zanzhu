
var kaishi = document.getElementById("wenzi");
var kailun = document.getElementById("lunguang");

    function lunwenzi(){ 
        if(kaishi.style.marginTop == "-680px"){
            yuan = 0;
        }else if(kailun.style.marginTop == "-250px"){
            yuan2 = 0;
        }
        else{
            yuan = parseInt(kaishi.style.marginTop)-40;
            yuan2 = parseInt(kailun.style.marginTop)-50;
        }
            kaishi.style.marginTop = yuan + "px";
            kailun.style.marginTop = yuan2 + "px";
        } 
        var t2 = window.setInterval("lunwenzi()",1500); 



var qiehuanzzff = document.getElementById("qiehuanzf");

function qhzf1(){
    qiehuanzzff.style.marginTop =  "0px";
}
function qhzf2(){
    qiehuanzzff.style.marginTop =  "-258px";
}
function qhzf3(){
    qiehuanzzff.style.marginTop =   "-525px";
}



/*
        var tip_box_a_h = document.querySelectorAll('lunxiag li')[0].offsetHeight;
           var i=0;
           setInterval(()=>{
            let startScroll = setInterval(()=>{
             i++;
             document.querySelector('ul').style.marginTop = -(tip_box_a_h/10)*i+'px';
             if(i%10==0)clearInterval(startScroll);
             },50)
             if(i>(10*(document.querySelectorAll('ul li').marginTop-2)))i = 0;
           },2500)

           */
           

































































































































































































































































// 我的要求并不高，保留这一句版权信息可好？
// 保留了，你不会损失什么；而保留版权，是对作者最大的尊重。
console.info('欢迎使用 79zanzhu!\n作者：乔越博客(http://79bk.cn)\nGithub：https://github.com/mengkunsoft/MKOnlineMusicPlayer');
