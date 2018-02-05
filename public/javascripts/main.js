var button1=document.getElementById('button1');
var button2=document.getElementById('button2');
var button3=document.getElementById('button3');
var button4=document.getElementById('button4');
var act=document.getElementsByClassName('act_Container')[0];
var intro=document.getElementsByClassName('introduce_Container')[0];
var apply=document.getElementsByClassName('apply_Container')[0];
var notice=document.getElementsByClassName('notice_Container')[0];
button1.onclick=function(){
  $('html').css('overflow','visible');
  act.style.display="block";
  intro.style.display="none";
  apply.style.display="none";
  notice.style.display="none";
  $('html,body').animate({'scrollTop':$(act).offset().top}, 500);
}
button2.onclick=function(){
  $('html').css('overflow','visible');
  act.style.display="none";
  intro.style.display="block";
  apply.style.display="none";
  notice.style.display="none";
    $('html,body').animate({'scrollTop':$(intro).offset().top}, 500);
}
button3.onclick=function(){
  $('html').css('overflow','visible');
  intro.style.display="none";
  act.style.display="none";
  apply.style.display="block";
  notice.style.display="none";
    $('html,body').animate({'scrollTop':$(apply).offset().top}, 500);
}
button4.onclick=function(){
  $('html').css('overflow','visible');
  intro.style.display="none";
  act.style.display="none";
  apply.style.display="none";
  notice.style.display="block";
    $('html,body').animate({'scrollTop':$(notice).offset().top}, 500);
}
