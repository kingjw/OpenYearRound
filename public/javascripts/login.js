$(document).ready(function(){
  $('#loginButton').click(function(){
    var id = $('#login_id').val();
    var password = $('#login_password').val();

    if(id == '' || password == ''){
        alert('정보를 입력해주세요');
      }
    else{
    var data= {
      'id' : id,
      'password' : password
    }
    console.log(data);
    $.ajax({
      type : "POST",
      url : "/login/gologin",
      contentType : "application/x-www-form-urlencoded; charset=UTF-8",
      cache: false,
      datatype : "json",
      data : data,
      success : function(results){
        if(results == 'success'){
        console.log('성공');
        alert('성공');
        $(window).attr('location','/board/1');
      }
      if(results == 'error'){
        alert('로그인실패1');
      }
      },
      error: function(error){
        alert('로그인 실패2');
        console.log(results);
        console.log(data);
      }
    })
  }
});
});
