var introButton=document.getElementById('introButton');
var supportButton=document.getElementById('supportButton');
var actButton=document.getElementById('actButton');

var introMenu=document.getElementsByClassName('menu')[0];
var actMenu=document.getElementsByClassName('menu')[1];
var applyMenu=document.getElementsByClassName('menu')[3];

var act=document.getElementsByClassName('act_Container')[0];
var intro=document.getElementsByClassName('introduce_Container')[0];
var apply=document.getElementsByClassName('apply_Container')[0];
var moveTop=document.getElementsByClassName('moveTop')[0];
$('.menuLogin').click(function(){
      $(window).attr('location','/login/');
})
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll==0){
    moveTop.style.display='none';
  }
  else{
    moveTop.style.display='block';
  }
});
$('input:radio[name="gender"]').change(
    function(){
        if (this.checked && this.value == '남') {
        // $('.army').css('display','block');
        $(".army").fadeIn(400);
        }
        else{
        $(".army").fadeOut(400);
        }
    });
actButton.onclick=function(){
  $('html').css('overflow','visible');
  act.style.display="block";
  intro.style.display="none";
  apply.style.display="none";
  $('html,body').animate({'scrollTop':$(act).offset().top}, 500);
}
introButton.onclick=function(){
  $('html').css('overflow','visible');
  act.style.display="none";
  intro.style.display="block";
  apply.style.display="none";
  $('html,body').animate({'scrollTop':$(intro).offset().top}, 500);
}
supportButton.onclick=function(){
  $('html').css('overflow','visible');
  intro.style.display="none";
  act.style.display="none";
  apply.style.display="block";
  $('html,body').animate({'scrollTop':$(apply).offset().top}, 500);
}



introMenu.onclick=function(){
  $('html').css('overflow','visible');
  act.style.display="none";
  intro.style.display="block";
  apply.style.display="none";
  $('html,body').animate({'scrollTop':$(intro).offset().top}, 500);
}
actMenu.onclick=function(){
  $('html').css('overflow','visible');
  act.style.display="block";
  intro.style.display="none";
  apply.style.display="none";
  $('html,body').animate({'scrollTop':$(act).offset().top}, 500);
}
applyMenu.onclick=function(){
  $('html').css('overflow','visible');
  intro.style.display="none";
  act.style.display="none";
  apply.style.display="block";
  $('html,body').animate({'scrollTop':$(apply).offset().top}, 500);
}

$('#goboard').click(function(){
  $(window).attr('location','/board/1');
});
$('#noticeButtonM').click(function(){
  $(window).attr('location','/board/1');
});
