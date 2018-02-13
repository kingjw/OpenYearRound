var introButton=document.getElementById('introButton');
var supportButton=document.getElementById('supportButton');
var noticeButton=document.getElementById('noticeButton');
var actButton=document.getElementById('actButtonM');
// eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];
// e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}
// ('0 1=2;',3,3,'var|password|12314'.split('|'),0,{}));
var passwordCheck=document.getElementById("checkPassword");
var introMenu=document.getElementsByClassName('menu')[0];
var actMenu=document.getElementsByClassName('menu')[1];
var noticeMenu=document.getElementsByClassName('menu')[2];
var applyMenu=document.getElementsByClassName('menu')[3];

var act=document.getElementsByClassName('act_Container')[0];
var intro=document.getElementsByClassName('introduce_Container')[0];
var apply=document.getElementsByClassName('apply_Container')[0];
var notice=document.getElementsByClassName('notice_Container')[0];

var checkbtn=document.getElementsByClassName('checkbtn')[0];
var textUpload = document.getElementById('textUpload');
var numberCheck = document.getElementById('numberCheck');
var writebtn = document.getElementById('writeButton');
var uploadClose = document.getElementById('uploadClose');
var checkClose = document.getElementById('checkClose');
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
writebtn.onclick=function(){
  numberCheck.style.display = "block";
  checkbtn.onclick=function(){
    var password=passwordCheck.value;
    var data = {
      'Password': password
    }
    $.ajax({
      type: "POST",
      url: "",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      cache: false,
      datatype: "json", // expecting JSON to be returned
      data: data,
      success: function(result) {
        if(result['results']==100){
          numberCheck.style.display = "none";
          textUpload.style.display = "block";
        }
        else
        alert('아이디나 비밀번호가 잘 못 되었습니다.');
      },
    })
//   if(passwordCheck.value==password){
//   numberCheck.style.display = "none";
//   textUpload.style.display = "block";
// }
// else{
//   alert('비밀번호가 일치하지 않습니다.');
// }
}
}
uploadClose.onclick=function(){
  textUpload.style.display="none";
}
checkClose.onclick=function(){
  numberCheck.style.display="none";
}
//모달 밖을 클릿했을떄 닫히는것
window.onclick = function(event) {
  if (event.target == textUpload) {
    textUpload.style.display = "none";
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
$('#ok_button_on_board').click(function(){
  var title = $('#title_name').val();
  var contents = $('#contents').val();
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  if(title=='')
    alert("제목을 입력하세요");
  else if(contents == '')
    alert("내용을 입력하세요");

  var data={
    'title' : title,
    'contents' : contents,
    'date' : date
  }
  console.log(data);
  $.ajax({
        type: 'post',
        url: '/board/goBoard',
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        cache: false,
        data: data,
        datatype: 'json',
        success: function(result) {
          if (result['result']=='success')            {
            console.log(result);
            alert('등록완료');
            location.reload();
          }
          else{
            console.log(result);
            alert('등록실패1');
            location.reload();
          }
        },
        error: function(error){
        alert('등록실패2');
        location.reload();
        }
    })
});
