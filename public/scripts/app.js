/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

//Calculate time between tweet and current time
const calculateTime = function(milliseconds) {
  const today = new Date();
  return `${Math.floor(((((today.getTime() - milliseconds) / 1000) / 60) / 60) / 24)} days ago`
}

// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
const renderTweets = function(tweets) {
  $('#tweetcontainer').empty();
  for (const tweet of tweets) {
    $('#tweetcontainer').prepend(createTweetElement(tweet));
  }
}

const createTweetElement = function(tweet) {
let $tweet = $('<article>').addClass('tweet');
$tweet.append(`
<span id="headoftweet">
  <span id="tweetheader">
    <img src="${tweet.user.avatars}"></img>
    <span>${tweet.user.name}</span>
  </span>
  <span id="atsign">${tweet.user.handle}</span>
</span>       
<p id="tweetoutput">${escape(tweet.content.text)}</p>
<footer id="tweetfooter">
  <span>${calculateTime(tweet.created_at)}</span>
  <span id="iconfooter">
  <i class="fas fa-flag"></i>
  <i class="fas fa-retweet"></i>
  <i class="fas fa-heart"></i>
  </span>
</footer>
`);
return $tweet;
}

const loadTweets = function() {
  $.ajax({ url: "/tweets"})
    .then(function (res) {
      renderTweets(res);
  })
}

//escape function to prevent scripts
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const $click = $(`i[class='fas fa-chevron-down']`);
$click.on("click", function() {
  $(".hidetweet").slideToggle('slow', () => {$("#tweettextarea").select();})
})

// form submission
const $tweet = $("#posttweet");
$tweet.on('submit', function (event) {
  event.preventDefault();
  let message = ($tweet.children("#tweettextarea").val());;
  if (message === "") {
    $(".alert").hide(600)
    $(".alert2").hide(600)
    $(".alert").show(600)
  } else if (message.length > 140) {
    $(".alert").hide(600)
    $(".alert2").hide(600)
    $(".alert2").show(600)
  } else {
    console.log('Button clicked, performing ajax call...');
    $(".alert").hide(600)
    $(".alert2").hide(600)
    $.ajax({ url: "/tweets", method: "POST", data: $tweet.serialize()})
    .then(function () {
      $("form").trigger("reset");
      loadTweets();
    });
  }
});


loadTweets();

});