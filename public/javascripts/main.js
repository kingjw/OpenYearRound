var introButton=document.getElementById('introButton');
var supportButton=document.getElementById('supportButton');
var noticeButton=document.getElementById('noticeButtonM');
var actButton=document.getElementById('actButton');
// eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];
// e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}
// ('0 1=2;',3,3,'var|password|12314'.split('|'),0,{}));

var introMenu=document.getElementsByClassName('menu')[0];
var actMenu=document.getElementsByClassName('menu')[1];
var noticeMenu=document.getElementsByClassName('menu')[2];
var applyMenu=document.getElementsByClassName('menu')[3];

var act=document.getElementsByClassName('act_Container')[0];
var intro=document.getElementsByClassName('introduce_Container')[0];
var apply=document.getElementsByClassName('apply_Container')[0];
var notice=document.getElementsByClassName('notice_Container')[0];


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
  // notice.style.display="none";
  $('html,body').animate({'scrollTop':$(apply).offset().top}, 500);
}
// $("input").focus(function(){
//   $(this).animate({borderColor: '#3899EC'},'slow');
//   this._placeholder = this.placeholder;
//   $(this).removeAttr('placeholder');
// });
// $("input").focusout(function(){
//   $(this).animate({borderColor: '#EEEEEE'},'slow');
//   this.placeholder = this._placeholder;
// });
$('#goboard').click(function(){
  $(window).attr('location','/board/1');
});
$('#noticeButtonM').click(function(){
  $(window).attr('location','/board/1');
});
