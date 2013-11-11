define(function (require) {
    'use strict';
    
    var MongoDB = require('MongoDB');

    var playerName = MongoDB.localStorageGet("username");
    var playerScore = MongoDB.localStorageGet("score");

    var text = "My score is: " + playerScore;

    $('#tweetBtnId').attr('data-text', text);

    !function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = "//platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, "script", "twitter-wjs");
});