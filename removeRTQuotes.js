// ==UserScript==
// @name         remove RT quotes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remove RT quotes from twitter
// @author       Hyorvenn
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

var name = "[Remove RT quotes]";
var tag = name + " : ";

// ==========================

//   CONFIGURE OPTION HERE
//---------------------------

var TL_only = true; // Remove RT quotes only of the timeline (main page)


// ==========================

function debug(message){
    console.log(tag + message);
}

function on_tl(){
    return window.location.href === "https://twitter.com/";
}

function start(){
    if (window.jQuery !== undefined){
        let quotes = jQuery("li[data-item-type='tweet']").has(".QuoteTweet");
        quotes.css("display", "none");
    } else {
        debug("Module is loading ...");
    }
    setTimeout(start, 1000);
}

(function() {
    // Don't run on frames or iframes
    if (window.top != window.self){
        return ;
    }
    'use strict';

    let shouldstart = true;

    if (TL_only){
        shouldstart = shouldstart && on_tl();
    }

    if (shouldstart){
        start();
    } else {
        debug(window.location.href);
    }
})();

