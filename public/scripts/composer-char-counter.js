$(document).ready(function() {
  $('#tweettextarea').on('input', function() {
    const tweetValLength = $(this).val().length;
    $(this).siblings("#footertweet").children('.counter').text(140 - tweetValLength);
    if (140 - tweetValLength < 0) {
      $(this).siblings().children('.counter').css("color", "red");
    } else {
      $(this).siblings().children('.counter').css("color", "black");
    }
  });  
});