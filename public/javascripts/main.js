var button1=document.getElementById('button1');
var button2=document.getElementById('button2');
var button3=document.getElementById('button3');
var button4=document.getElementById('button4');
var act=document.getElementsByClassName('act_Container')[0];
var intro=document.getElementsByClassName('introduce_Container')[0];
var apply=document.getElementsByClassName('apply_Container')[0];
var notice=document.getElementsByClassName('notice_Container')[0];
var modal = document.getElementById('myModal');
var btn = document.getElementById('writeButton');
var span = document.getElementsByClassName('close')[0];
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
