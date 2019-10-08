/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
  for (const tweet of tweets) {
    $('#tweetcontainer').append(createTweetElement(tweet));
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
<p id="tweetoutput">${tweet.content.text}</p>

<footer id="tweetfooter">
<span>${tweet.created_at}</span>
<span id="iconfooter">
  <i class="fas fa-flag"></i>
  <i class="fas fa-retweet"></i>
  <i class="fas fa-heart"></i>
</span>
</footer>
`);
return $tweet;
}

renderTweets(data);