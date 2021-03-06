import ServerActions from "./actions/ServerActions";

export default {
  getAllTweets() {
    console.log(2, "API.getAllTweets");
    $.get("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets) )
    .error(error => console.log(error));
  },
  createTweet(tweet) {
    $.post("/tweets", { body: tweet })
    .success( savedTweet => ServerActions.receivedOneTweet(savedTweet) )
    .error(error => console.log(error));
  }
}
