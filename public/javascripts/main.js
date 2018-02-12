var introButton=document.getElementById('introButton');
var supportButton=document.getElementById('supportButton');
var noticeButton=document.getElementById('noticeButton');
var actButton=document.getElementById('actButtonM');

var introMenu=document.getElementsByClassName('menu')[0];
var actMenu=document.getElementsByClassName('menu')[1];
var noticeMenu=document.getElementsByClassName('menu')[2];
var applyMenu=document.getElementsByClassName('menu')[3];

var act=document.getElementsByClassName('act_Container')[0];
var intro=document.getElementsByClassName('introduce_Container')[0];
var apply=document.getElementsByClassName('apply_Container')[0];
var notice=document.getElementsByClassName('notice_Container')[0];

var modal = document.getElementById('myModal');
var btn = document.getElementById('writeButton');
var span = document.getElementsByClassName('close')[0];
var moveTop=document.getElementsByClassName('moveTop')[0];
$(window).scroll(function() {
 var scroll = $(window).scrollTop();
if (scroll==0){
  moveTop.style.display='none';
}
else{
  moveTop.style.display='block';
}
});
moveTop.onclick=function(){
  $('html,body').animate({'scrollTop':0}, 500);
}
actButton.onclick=function(){
  $('html').css('overflow','visible');
  act.style.display="block";
  intro.style.display="none";
  apply.style.display="none";
  notice.style.display="none";
  $('html,body').animate({'scrollTop':$(act).offset().top}, 500);
}
introButton.onclick=function(){
  $('html').css('overflow','visible');
  act.style.display="none";
  intro.style.display="block";
  apply.style.display="none";
  notice.style.display="none";
  $('html,body').animate({'scrollTop':$(intro).offset().top}, 500);
}
supportButton.onclick=function(){
  $('html').css('overflow','visible');
  intro.style.display="none";
  act.style.display="none";
  apply.style.display="block";
  notice.style.display="none";
  $('html,body').animate({'scrollTop':$(apply).offset().top}, 500);
}
noticeButton.onclick=function(){
  $('html').css('overflow','visible');
  intro.style.display="none";
  act.style.display="none";
  apply.style.display="none";
  notice.style.display="block";
  $('html,body').animate({'scrollTop':$(notice).offset().top}, 500);
}

introMenu.onclick=function(){
  $('html').css('overflow','visible');
  act.style.display="none";
  intro.style.display="block";
  apply.style.display="none";
  notice.style.display="none";
  $('html,body').animate({'scrollTop':$(intro).offset().top}, 500);
}
actMenu.onclick=function(){
  $('html').css('overflow','visible');
  act.style.display="block";
  intro.style.display="none";
  apply.style.display="none";
  notice.style.display="none";
  $('html,body').animate({'scrollTop':$(act).offset().top}, 500);
}
noticeMenu.onclick=function(){
  $('html').css('overflow','visible');
  intro.style.display="none";
  act.style.display="none";
  apply.style.display="none";
  notice.style.display="block";
  $('html,body').animate({'scrollTop':$(notice).offset().top}, 500);
}
applyMenu.onclick=function(){
  $('html').css('overflow','visible');
  intro.style.display="none";
  act.style.display="none";
  apply.style.display="block";
  notice.style.display="none";
  $('html,body').animate({'scrollTop':$(apply).offset().top}, 500);
}
btn.onclick=function(){
  modal.style.display = "block";
}
span.onclick=function(){
  modal.style.display="none";
}
//모달 밖을 클릿했을떄 닫히는것
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$("input").focus(function(){
  $(this).animate({borderColor: '#3899EC'},'slow');
  this._placeholder = this.placeholder;
  $(this).removeAttr('placeholder');
});
$("input").focusout(function(){
  $(this).animate({borderColor: '#EEEEEE'},'slow');
  this.placeholder = this._placeholder;
});
