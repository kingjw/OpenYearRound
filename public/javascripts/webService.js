
$(".logoClick").click(function(){
  var index = $(".logoClick").index(this);
    $(".webServiceModal:eq(" + index + ")").fadeIn(600);
});

$(".webServiceClose").click(function(){
  var index = $(".webServiceClose").index(this);
    $(".webServiceModal:eq(" + index + ")").fadeOut(600);
});

$(".left").click(function(){
  var index = $(".left").index(this);
if (index==0) {
  var before=6;
}
else{
  var before= index-1;
}
    $(".webServiceModal:eq(" + index + ")").css('display','none');
    $(".webServiceModal:eq(" + before + ")").css('display','block')
});
$(".right").click(function(){
  var index = $(".right").index(this);
  if(index==6){
    var next=0
  }
  else{
  var next = index+1;
}
    $(".webServiceModal:eq(" + index + ")").css('display','none');
    $(".webServiceModal:eq(" + next + ")").css('display','block')
});

moveTop.onclick=function(){
  $('html,body').animate({'scrollTop':0}, 500);
}

$('#allLogo').recopickSwipe({
  $target: $('ul'),
  total: 3, // total 3 pages
  $curr: $('#pageN')
});
var pageN=document.getElementById('pageN').innerText;
if (pageN=="2"){
  alert("323");
}
