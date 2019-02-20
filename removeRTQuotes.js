// ==UserScript==
// @name         Remove RT Quotes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove RT quotes on Twitter
// @author       Hyorvenn
// @match        https://twitter.com/
// @grant        none
// ==/UserScript==

// Hi

function start(){
    if (window.jQuery !== undefined){
        let quotes = jQuery("li[data-item-type='tweet']").has(".QuoteTweet");
        quotes.css("display", "none");
    } else {
        console.log("[Remove RT Quotes] : Module loading");
    }
    setTimeout(start, 1000);
}

(function() {
    'use strict';
    start();
})();

