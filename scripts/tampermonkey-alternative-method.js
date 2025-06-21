// ==UserScript==
// @name         BuddyMeter Cheat
// @source       https://github.com/AdityaDwiNugroho/buddymeter-cheat
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Reveal BuddyMeter quiz answers!
// @author       Aditya Dwi Nugroho
// @match        https://buddymeter.com/*
// @icon         https://buddymeter.com/images/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Wait until questionArray is available on the page
    const checkInterval = setInterval(() => {
        if (typeof window.questionArray !== 'undefined' && window.questionArray.length > 1) {
            clearInterval(checkInterval);

            // Inject cheat from GitHub
            fetch("https://raw.githubusercontent.com/AdityaDwiNugroho/buddymeter-cheat/main/dist/bundle.js")
                .then(res => res.text())
                .then(code => eval(code))
                .catch(err => console.error("Failed to load cheat script", err));
        }
    }, 500);
})();
