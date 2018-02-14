var checkbtn=document.getElementsByClassName('checkbtn')[0];
var textUpload = document.getElementById('textUpload');
var numberCheck = document.getElementById('numberCheck');
var writebtn = document.getElementById('writeButton');
var uploadClose = document.getElementById('uploadClose');
var checkClose = document.getElementById('checkClose');


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
window.onclick = function(event) {
  if (event.target == numberCheck) {
    numberCheck.style.display="none";
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
else{
  var data={
    'title' : title,
    'contents' : contents,
    'date' : date
  }

  $.ajax({
    type: 'post',
    url: '/board/goBoard',
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    cache: false,
    data: data,
    datatype: 'json',
    success: function(result) {
      if (result['result']=='success'){
        console.log(result);
        alert('등록완료');
        location.reload();
      }
      else{
        console.log(result);
        alert('등록실패1');
      }
    },
    error: function(error){
      alert('등록실패2');
      location.reload();
    }
  })
}
});
