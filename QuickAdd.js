// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      *
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nowcoder.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // alert(document.domain);//这个就是域名拿到了
    var Html = document.documentElement;
    Html.addEventListener("mousedown", function () {
        // alert(document.domain);//这个是域名
        if (event.button == 3) {//这样是进入选择,可以搞个
            alert("");
        } 
    });
    // Your code here...
})();