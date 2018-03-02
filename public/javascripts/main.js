var introButton=document.getElementById('introButton');
var supportButton=document.getElementById('supportButton');
var actButton=document.getElementById('actButton');

var introMenu=document.getElementsByClassName('menu')[0];
var actMenu=document.getElementsByClassName('menu')[1];
var applyMenu=document.getElementsByClassName('menu')[3];

var act=document.getElementsByClassName('act_Container')[0];
var intro=document.getElementsByClassName('introduce_Container')[0];
var apply=document.getElementsByClassName('apply_Container')[0];
var login=document.getElementById('login');
var moveTop=document.getElementsByClassName('moveTop')[0];
login.onclick=function(){
    $(window).attr('location','/login/');
}
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
writebtn.onclick=function(){
  numberCheck.style.display = "block";
  checkbtn.onclick=function(){
    var password=passwordCheck.value;
    var data = {
      'Password': password
    }
    console.log(data);
    $.ajax({
      type: "POST",
      url: "/check/goCheck",
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
        alert('비밀번호가 일치하지 않습니다.');
        passwordCheck.value="";
      },
    })
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
document.getElementById('ok_button_on_board').onclick=function(){
  var title = $('#title').val();
  var contents = $('#contents').val();
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  if (title == '')
    alert("제목을 입력하세요");
  else if (contents == '')
    alert('내용을 적어주세요');

    var data={
      'title':title,
      'contents' : contents,
      'date' : date
    };
  console.log(data);
  $.ajax({ // ajax 통신으로 지원자 입력한 정보를 서버에 보낸다.
        type:'POST',
        url:'/goBoard',
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        cache:false,
        dataType:'json',
        data:data,
        success:function(result){
          if(result['result']=='success'){
            alert('등록완료');
            location.reload();//지원 완료 했으면 페이지 새로고침
          }//result if
        },
        error:function(error){
          alert('등록실패')
        }
  });//ajax
}
