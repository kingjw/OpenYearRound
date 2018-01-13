var section1=document.getElementById('section1');
var section2=document.getElementById('section2');
var section3=document.getElementById('section3');
var content1=document.getElementById('content1');
var content2=document.getElementById('content2');
var content3=document.getElementById('content3');
var applySubmit=document.getElementById('applyButton');
var moveTop1=document.getElementsByClassName('moveTop')[0];
var moveTop2=document.getElementsByClassName('moveTop')[1];
var moveTop3=document.getElementsByClassName('moveTop')[2];
var heightWindow=$( window ).height();
var height=$( window ).height();
$(".photostack").css("height",height);
function div2Resize() {
  var height=$( window ).height();
  $(".photostack").css("height",height);
}
window.onload = function() {
  div2Resize();
  // 브라우저 크기가 변할 시 동적으로 사이즈를 조절해야 하는경우
  window.addEventListener('resize', div2Resize);
}
applySubmit.onclick=function(){
  if (confirm("OpenYearRound 동아리에 지원하시겠습니까?") == true){
  }else{

    return;
  }
}
setInterval(function(){
  $('#mainImage').fadeOut(1000);
  $('#mainPage').fadeIn(1500);
}, 2500);

section1.onmouseover=function(){
  section1.style.opacity=0.75;
  section1.style.cursor='pointer';
  section1.innerHTML="동아리 활동";
  $('#section1').css('background-image', 'url(images/black.png)');
}
section1.onmouseout=function(){
  section1.style.opacity=1;
  section1.innerHTML="";
  $('#section1').css('background-image', 'url(images/actImage.jpg)');
}
section2.onmouseover=function(){
  section2.style.opacity=0.75;
  section2.style.cursor='pointer';
  section2.innerHTML="동아리 소개";
  $('#section2').css('background-image', 'url(images/black.png)');
}
section2.onmouseout=function(){
  section2.style.opacity=1;
  section2.innerHTML="";
  $('#section2').css('background-image', 'url(images/oyrLogo.jpg)');
}
section3.onmouseover=function(){
  section3.style.opacity=0.75;
  section3.style.cursor='pointer';
  section3.innerHTML="동아리 지원";
  $('#section3').css('background-image', 'url(images/black.png)');
}
section3.onmouseout=function(){
  section3.style.opacity=1;
  section3.innerHTML="";
  $('#section3').css('background-image', 'url(images/applyImage.jpg)');
}
section1.onclick=function(){
  jQuery('.moveTop').show(300);
  $('html').css('overflow','visible');
  content1.style.visibility="visible";
  content2.style.display="none";
  content3.style.display="none";
  $('html,body').animate({'scrollTop':$(content1).offset().top}, 500);
}
section2.onclick=function(){
  jQuery('.moveTop').show(300);
  $('html').css('overflow','visible');
  content2.style.display="block";
  content3.style.display="none";
  content1.style.display="none";
  $('html,body').animate({'scrollTop':$(content2).offset().top}, 500);
}
section3.onclick=function(){
  jQuery('.moveTop').show(300);
  $('html').css('overflow','visible');
  content3.style.display="block";
  content2.style.display="none";
  content1.style.display="none";
  $('html,body').animate({'scrollTop':$(content3).offset().top}, 500);
}

$(moveTop1).click(function() {
  $(this).hide(400);
  $(moveTop3).hide(400);
  content1.style.display="block";
  $('html, body').animate({
    scrollTop : 0
  }, 500);
  return false;
});

$(moveTop2).click(function() {
  $(this).hide(400);
  $(moveTop3).hide(400);
  $('html, body').animate({
    scrollTop : 0
  }, 500);
  setTimeout(function() {
  block();
}, 500);

  return false;
});
function block(){
  content1.style.display="block";
}
$(moveTop3).click(function() {
  $(this).hide(400);
  $('html, body').animate({
    scrollTop : 0
  }, 500);
    return false;
});


$(".box").each(function () {
  // 개별적으로 Wheel 이벤트 적용
  $(this).on("mousewheel DOMMouseScroll", function (e) {
    e.preventDefault();
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
      if (window.opera) delta = -delta;
    } else if (event.detail) delta = -event.detail / 3;
    var moveTop = null;
    // 마우스휠을 위에서 아래로
    if (delta < 0) {
      if ($(this).next() != undefined) {
        moveTop = $(this).next().offset().top;
      }
      // 마우스휠을 아래에서 위로
    } else {
      if ($(this).prev() != undefined) {
        moveTop = $(this).prev().offset().top;
      }
    }
    $("html,body").stop().animate({
      scrollTop: moveTop + 'px'
    }, {
      duration: 500, complete: function () {
      }
    });
  });
});

$(".box2").each(function () {
  // 개별적으로 Wheel 이벤트 적용
  $(this).on("mousewheel DOMMouseScroll", function (e) {
    e.preventDefault();
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
      if (window.opera) delta = -delta;
    } else if (event.detail) delta = -event.detail / 3;
    var moveTop = null;
    // 마우스휠을 위에서 아래로
    if (delta < 0) {
      if ($(this).next() != undefined) {
        moveTop = $(this).next().offset().top;
      }
      // 마우스휠을 아래에서 위로
    } else {
      if ($(this).prev() != undefined) {
        moveTop = $(this).prev().offset().top;
      }
    }
    $("html,body").stop().animate({
      scrollTop: moveTop + 'px'
    }, {
      duration: 500, complete: function () {
      }
    });
  });
});
$(".box3").each(function () {
  // 개별적으로 Wheel 이벤트 적용
  $(this).on("mousewheel DOMMouseScroll", function (e) {
    e.preventDefault();
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
      if (window.opera) delta = -delta;
    } else if (event.detail) delta = -event.detail / 3;
    var moveTop = null;
    // 마우스휠을 위에서 아래로
    if (delta < 0) {
      if ($(this).next() != undefined) {
        moveTop = $(this).next().offset().top;
      }
      // 마우스휠을 아래에서 위로
    } else {
      if ($(this).prev() != undefined) {
        moveTop = $(this).prev().offset().top;
      }
    }
    $("html,body").stop().animate({
      scrollTop: moveTop + 'px'
    }, {
      duration: 500, complete: function () {
      }
    });

    $(this).scroll( function() {
      var elem = $(this);
      if ( elem[0].scrollHeight - elem.scrollTop() == elem.outerHeight())
      alert("End of Yellow");
    });

  });
});
$("input").focus(function(){
  $(this).animate({borderColor: '#3899EC'},'slow');
  this._placeholder = this.placeholder;
  $(this).removeAttr('placeholder');
});
$("input").focusout(function(){
  $(this).animate({borderColor: '#EEEEEE'},'slow');
  this.placeholder = this._placeholder;
});
