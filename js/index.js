/**
 * Created by admin on 2017/4/6.
 */
// var oUl=document.getElementById('ul');
// var aLi=oUl.getElementsByTagName('li');
// var oOl=document.getElementById('ol');
// var aBtn=oOl.getElementsByTagName('li');
//     for(var i=0;i<aBtn.length;i++){
//         aBtn[i].index=i;
//         aBtn[i].onmouseover=function () {
//             for(var i=0;i<aBtn.length;i++){
//                 aBtn[i].className='';
//                 aLi[i].style.display='none';
//             }
//             this.className='active';
//             aLi[this.index].style.display='block';
//         }
//     }
$(function () {
    $('#ul').css('width',$('#ul li').width()*$('#ul li').length+'px');
    $('#ol li').mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('#ul').stop().animate({left:-$(this).index()*1349+'px'});
    });
    $('#side').mouseenter(function () {
        $(this).stop().animate({left:0});
    });
    $('#side').mouseleave(function () {
        $(this).stop().animate({left:-180});
    });
    $('#close').click(()=>{
        $('#side').css({display:'none'});
    });
    $('#side1').mouseenter(function () {
        $(this).stop().animate({right:0});
    });
    $('#side1').mouseleave(function () {
        $(this).stop().animate({right:-128})
    });
    $('#close1').click(()=>{
        $('#side1').css({display:'none'})
    });
});