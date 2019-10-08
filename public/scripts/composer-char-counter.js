$(document).ready(function() {
  $('#tweettextarea').on('input', function() {
    const tweetValLength = $(this).val().length;
    const buttonVal = 140; 
    $(this).siblings("#footertweet").children('.counter').text(buttonVal - tweetValLength);
    if (140 - tweetValLength < 0) {
      $(this).siblings().children('.counter').css("color", "red");
    } else {
      $(this).siblings().children('.counter').css("color", "black");
    }
  });  
});