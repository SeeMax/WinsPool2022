/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_windowLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/windowLoad.js */ "./src/js/components/windowLoad.js");


/***/ }),

/***/ "./src/js/components/gsapRegisters.js":
/*!********************************************!*\
  !*** ./src/js/components/gsapRegisters.js ***!
  \********************************************/
/*! exports provided: gsapRegisters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gsapRegisters", function() { return gsapRegisters; });
var gsapRegisters = function gsapRegisters() {
  gsap.registerPlugin(ScrollTrigger);
};

/***/ }),

/***/ "./src/js/components/index.js":
/*!************************************!*\
  !*** ./src/js/components/index.js ***!
  \************************************/
/*! exports provided: preLoader, teamScroll, teamCardSetup, gsapRegisters, setupChartTeams, setupOwners, buildOwners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageSetup.js */ "./src/js/components/pageSetup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preLoader", function() { return _pageSetup_js__WEBPACK_IMPORTED_MODULE_0__["preLoader"]; });

/* harmony import */ var _teamScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teamScroll.js */ "./src/js/components/teamScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teamScroll", function() { return _teamScroll_js__WEBPACK_IMPORTED_MODULE_1__["teamScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teamCardSetup", function() { return _teamScroll_js__WEBPACK_IMPORTED_MODULE_1__["teamCardSetup"]; });

/* harmony import */ var _gsapRegisters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gsapRegisters.js */ "./src/js/components/gsapRegisters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gsapRegisters", function() { return _gsapRegisters_js__WEBPACK_IMPORTED_MODULE_2__["gsapRegisters"]; });

/* harmony import */ var _teamSetup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teamSetup.js */ "./src/js/components/teamSetup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupChartTeams", function() { return _teamSetup_js__WEBPACK_IMPORTED_MODULE_3__["setupChartTeams"]; });

/* harmony import */ var _ownerSetup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ownerSetup.js */ "./src/js/components/ownerSetup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupOwners", function() { return _ownerSetup_js__WEBPACK_IMPORTED_MODULE_4__["setupOwners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildOwners", function() { return _ownerSetup_js__WEBPACK_IMPORTED_MODULE_4__["buildOwners"]; });







/***/ }),

/***/ "./src/js/components/ownerSetup.js":
/*!*****************************************!*\
  !*** ./src/js/components/ownerSetup.js ***!
  \*****************************************/
/*! exports provided: setupOwners, buildOwners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupOwners", function() { return setupOwners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildOwners", function() { return buildOwners; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/js/components/index.js");

var setupOwners = function setupOwners() {
  $.ajax({
    url: 'https://www.wins-pool.com/wp-content/themes/seemax-theme/json/owners-102821.json',
    success: function success(data) {
      $.each(data, function (k, v) {
        var ownerID = v.ownerID;
        var teamName = v.nickname;
        $('.home-page').append("<section class='single-owner' data-owner='" + ownerID + "'>\n              <div class='content'>\n                <div class='owner-area'>\n                  <div class='owner-background c-block-fill'></div>\n                  <div class='owner-rank'></div>\n                  <div class='owner-info'>\n                    <div class='group-name'>\n                      <div class='nickname'>" + teamName + "</div>\n                    </div>\n                    <div class='title-wins-count titleWinsCount'>\n                      <span>Total Wins</span>\n                    </div>\n                  </div>\n                <div class='owner-teams'>\n                  <div class='owner-teams-inner ownerTeamsInner'>\n                  <div class='chart-titles'>\n                    <div class='team-info single-chart-title'>Team</div>\n                    <div class='team-info single-chart-title'>Wins</div>\n                    <div class='team-info single-chart-title'>Loses</div>\n                    <div class='team-info single-chart-title'>Win%</div>\n                  </div>\n                </div>\n              </div>\n            </section>");
      });
      Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["setupChartTeams"])();
    },
    cache: false
  });
}; // Get The Total Win Counts for Each Owner

var buildOwners = function buildOwners() {
  $('.single-owner').each(function () {
    var sumW = 0;
    var sumL = 0;
    var sumP = 0; // Get The Wins for Each Team The owner has and add them

    $(this).find('.single-team').each(function () {
      sumW += Number($(this).data('wins'));
      sumP += Number($(this).data('played'));
      sumL += Number($(this).data('loses'));
    });
    var winsMath = (sumW / sumP).toFixed(3);
    var winPercent = '.' + winsMath * 1000; // Add Total Wins as Data Attribute to the owner

    $(this).attr('data-totalw', sumW);
    $(this).attr('data-totalL', sumL);
    $(this).attr('data-totalplayed', sumP);
    $(this).attr('data-winpercent', winPercent);
    $(this).find('.wins-count').prepend(sumW);
    $(this).find('.titleWinsCount').prepend(sumW);
    $(this).find('.loses-count').append(sumL);
    $(this).find('.played-count').prepend(sumP);
    $(this).find('.winPercent').prepend(winPercent);
  });
  orderOwners();
}; // Count The Win Totals Data Attribute for each owner and Set the order of the owners

var orderOwners = function orderOwners() {
  $('.home-page').find('.single-owner').sort(function (a, b) {
    return +b.dataset.totalw - +a.dataset.totalw;
  }).appendTo($('.home-page'));
  ownerRankIcon();
};

var ownerRankIcon = function ownerRankIcon() {
  var i = 0;
  $('.single-owner').each(function () {
    i++;
    $(this).find('.owner-rank').prepend('<div class="rank-icon">' + i + '</div>');
  });
  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["teamCardSetup"])();
  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["teamScroll"])();
};

/***/ }),

/***/ "./src/js/components/pageSetup.js":
/*!****************************************!*\
  !*** ./src/js/components/pageSetup.js ***!
  \****************************************/
/*! exports provided: preLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preLoader", function() { return preLoader; });
var preLoader = function preLoader() {
  var tl = new gsap.timeline({
    duration: 0.05,
    ease: 'power4.out',
    onComplete: function onComplete() {
      $('#preloader').remove();
    }
  });
  tl.to('#preloader', {
    opacity: 0
  });
};

/***/ }),

/***/ "./src/js/components/teamScroll.js":
/*!*****************************************!*\
  !*** ./src/js/components/teamScroll.js ***!
  \*****************************************/
/*! exports provided: teamScroll, teamCardSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamScroll", function() { return teamScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamCardSetup", function() { return teamCardSetup; });
var teamScroll = function teamScroll() {
  $('.single-owner').each(function () {
    var theContent = $(this).find('.content');
    var ownerTeams = $(this).find('.owner-teams-inner');
    var oneTeam = $(this).find('.single-team');
    var tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: this,
        start: "top bottom",
        // when the top of the trigger hits the top of the viewport
        end: "top center-=200",
        scrub: 0.1,
        // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        toggleActions: "play none none reverse"
      }
    });
    tl.to(theContent, {
      scale: 1,
      rotationX: 0
    }, "teamIn");
    tl.to(ownerTeams, {
      y: 0
    }, "teamIn"); // tl.to(oneTeam, {height:40}, "teamIn");
  });
};
var teamCardSetup = function teamCardSetup() {
  gsap.set($('.single-owner .content'), {
    rotationX: -60
  });
  gsap.set($('.owner-teams-inner'), {
    y: -120
  }); // gsap.set($('.single-team'), {height:0});
};

/***/ }),

/***/ "./src/js/components/teamSetup.js":
/*!****************************************!*\
  !*** ./src/js/components/teamSetup.js ***!
  \****************************************/
/*! exports provided: setupChartTeams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupChartTeams", function() { return setupChartTeams; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/js/components/index.js");

var setupChartTeams = function setupChartTeams() {
  $.ajax({
    url: 'https://www.wins-pool.com/wp-content/themes/seemax-theme/json/teams102821.json',
    success: function success(data) {
      $.each(data, function (k, v) {
        var conf = v.leagues.standard.confName;
        var teamId = v.teamId;
        var city = v.city;
        var nickname = v.nickname;
        var logo = v.logo;
        var owner = v.owner;
        var pick = v.pick;
        var isNBA = v.nbaFranchise;
        $('*[data-owner="' + owner + '"]').find('.ownerTeamsInner').append("<div class='single-team c-width-100 " + conf.toLowerCase() + "-conf' \
            style='order:" + pick + "' \
            data-id='" + teamId + "' data-owned='" + owner + "'> \
              <div class='team-info team-logo'> \
                <img src='" + logo + "'> \
              </div> \
            </div>");
      });
      setupChartTotals();
      setupChartTeamRecords();
    },
    cache: false
  });
};

var setupChartTotals = function setupChartTotals() {
  $('.single-owner').each(function () {
    $(this).find('.ownerTeamsInner').append("<div class='c-width-100 owner-stats'>\n        <div class='team-info single-owner-stat'>Totals</div>\n        <div class='team-info single-owner-stat wins-count'></div>\n        <div class='team-info single-owner-stat loses-count'></div>\n        <div class='team-info single-owner-stat winPercent'></div>\n      </div>");
  });
}; // <div class='team-info single-owner-stat played-count'></div>


var setupChartTeamRecords = function setupChartTeamRecords() {
  $.ajax({
    url: 'https://www.wins-pool.com/wp-content/themes/seemax-theme/json/standings2.json',
    success: function success(data) {
      $.each(data.api.standings, function (k, v) {
        var thisId = v.teamId;
        var thisWins = v.win;
        var thisPercent = v.winPercentage;
        var thisLosses = v.loss;
        var thisPlayed = parseInt(thisLosses) + parseInt(thisWins);
        var thisTeamInfo = $('*[data-id=' + thisId + ']');
        var thisTeam = $('*[data-id=' + thisId + ']');
        thisTeamInfo.append( // "<div class='team-info team-played c-width-25'>"+thisPlayed +"</div> \
        "<div class='team-info team-wins c-width-25'>" + thisWins + "</div>\n          <div class='team-info team-loses c-width-25'>" + thisLosses + "</div>\n          <div class='team-info team-percent c-width-25'>" + thisPercent + "</div>\n        ");
        thisTeam.attr({
          "data-wins": thisWins,
          "data-loses": thisLosses,
          "data-played": thisPlayed
        });
      });
      Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["buildOwners"])();
    },
    cache: false
  });
};

/***/ }),

/***/ "./src/js/components/windowLoad.js":
/*!*****************************************!*\
  !*** ./src/js/components/windowLoad.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/js/components/index.js");

window.addEventListener('load', function () {
  // Setup Basic Functionality
  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["preLoader"])();
  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["gsapRegisters"])();
  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["setupOwners"])();

  if ($(window).width() <= 1024) {} else {}
});
window.addEventListener('resize', function () {
  if ($(window).width() < 1024) {} else {}
});

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seemax/code/winspool2022/wp-content/themes/seemax-theme/src/js/bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9nc2FwUmVnaXN0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL293bmVyU2V0dXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcGFnZVNldHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3RlYW1TY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGVhbVNldHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3dpbmRvd0xvYWQuanMiXSwibmFtZXMiOlsiZ3NhcFJlZ2lzdGVycyIsImdzYXAiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRyaWdnZXIiLCJzZXR1cE93bmVycyIsIiQiLCJhamF4IiwidXJsIiwic3VjY2VzcyIsImRhdGEiLCJlYWNoIiwiayIsInYiLCJvd25lcklEIiwidGVhbU5hbWUiLCJuaWNrbmFtZSIsImFwcGVuZCIsInNldHVwQ2hhcnRUZWFtcyIsImNhY2hlIiwiYnVpbGRPd25lcnMiLCJzdW1XIiwic3VtTCIsInN1bVAiLCJmaW5kIiwiTnVtYmVyIiwid2luc01hdGgiLCJ0b0ZpeGVkIiwid2luUGVyY2VudCIsImF0dHIiLCJwcmVwZW5kIiwib3JkZXJPd25lcnMiLCJzb3J0IiwiYSIsImIiLCJkYXRhc2V0IiwidG90YWx3IiwiYXBwZW5kVG8iLCJvd25lclJhbmtJY29uIiwiaSIsInRlYW1DYXJkU2V0dXAiLCJ0ZWFtU2Nyb2xsIiwicHJlTG9hZGVyIiwidGwiLCJ0aW1lbGluZSIsImR1cmF0aW9uIiwiZWFzZSIsIm9uQ29tcGxldGUiLCJyZW1vdmUiLCJ0byIsIm9wYWNpdHkiLCJ0aGVDb250ZW50Iiwib3duZXJUZWFtcyIsIm9uZVRlYW0iLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwic2NydWIiLCJ0b2dnbGVBY3Rpb25zIiwic2NhbGUiLCJyb3RhdGlvblgiLCJ5Iiwic2V0IiwiY29uZiIsImxlYWd1ZXMiLCJzdGFuZGFyZCIsImNvbmZOYW1lIiwidGVhbUlkIiwiY2l0eSIsImxvZ28iLCJvd25lciIsInBpY2siLCJpc05CQSIsIm5iYUZyYW5jaGlzZSIsInRvTG93ZXJDYXNlIiwic2V0dXBDaGFydFRvdGFscyIsInNldHVwQ2hhcnRUZWFtUmVjb3JkcyIsImFwaSIsInN0YW5kaW5ncyIsInRoaXNJZCIsInRoaXNXaW5zIiwid2luIiwidGhpc1BlcmNlbnQiLCJ3aW5QZXJjZW50YWdlIiwidGhpc0xvc3NlcyIsImxvc3MiLCJ0aGlzUGxheWVkIiwicGFyc2VJbnQiLCJ0aGlzVGVhbUluZm8iLCJ0aGlzVGVhbSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7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Q29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4vY29tcG9uZW50cy93aW5kb3dMb2FkLmpzJztcblxuXG5cblxuIiwiZXhwb3J0IGxldCBnc2FwUmVnaXN0ZXJzID0gKCkgPT4ge1xuXG4gIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG4gIFxufVxuIiwiZXhwb3J0IHtcbiAgcHJlTG9hZGVyLFxufSBmcm9tICcuL3BhZ2VTZXR1cC5qcydcblxuZXhwb3J0IHtcbiAgdGVhbVNjcm9sbCxcbiAgdGVhbUNhcmRTZXR1cCxcbn0gZnJvbSAnLi90ZWFtU2Nyb2xsLmpzJ1xuXG5leHBvcnQge1xuICBnc2FwUmVnaXN0ZXJzXG59IGZyb20gJy4vZ3NhcFJlZ2lzdGVycy5qcydcblxuZXhwb3J0IHtcbiAgc2V0dXBDaGFydFRlYW1zLFxufSBmcm9tICcuL3RlYW1TZXR1cC5qcydcblxuZXhwb3J0IHtcbiAgc2V0dXBPd25lcnMsXG4gIGJ1aWxkT3duZXJzLFxufSBmcm9tICcuL293bmVyU2V0dXAuanMnXG4iLCJpbXBvcnQgeyBcbiAgc2V0dXBDaGFydFRlYW1zLFxuICB0ZWFtU2Nyb2xsLFxuICB0ZWFtQ2FyZFNldHVwLFxufSBmcm9tICcuL2luZGV4LmpzJztcblxuZXhwb3J0IGxldCBzZXR1cE93bmVycyA9ICgpID0+IHsgIFxuICAkLmFqYXgoeyAgICAgICAgICBcbiAgICAgIHVybDogJ2h0dHBzOi8vd3d3LndpbnMtcG9vbC5jb20vd3AtY29udGVudC90aGVtZXMvc2VlbWF4LXRoZW1lL2pzb24vb3duZXJzLTEwMjgyMS5qc29uJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHsgXG4gICAgICAgIFxuICAgICAgICAkLmVhY2goIGRhdGEsIGZ1bmN0aW9uKGssIHYpIHsgICAgXG4gICAgICAgICAgbGV0IG93bmVySUQgPSB2Lm93bmVySUQ7XG4gICAgICAgICAgbGV0IHRlYW1OYW1lID0gdi5uaWNrbmFtZTtcbiAgXG4gICAgICAgICAgJCgnLmhvbWUtcGFnZScpLmFwcGVuZChcbiAgICAgICAgICAgIGA8c2VjdGlvbiBjbGFzcz0nc2luZ2xlLW93bmVyJyBkYXRhLW93bmVyPSdgK293bmVySUQrYCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbnRlbnQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J293bmVyLWFyZWEnPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nb3duZXItYmFja2dyb3VuZCBjLWJsb2NrLWZpbGwnPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nb3duZXItcmFuayc+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdvd25lci1pbmZvJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZ3JvdXAtbmFtZSc+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmlja25hbWUnPmArdGVhbU5hbWUrYDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGl0bGUtd2lucy1jb3VudCB0aXRsZVdpbnNDb3VudCc+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VG90YWwgV2luczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdvd25lci10ZWFtcyc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdvd25lci10ZWFtcy1pbm5lciBvd25lclRlYW1zSW5uZXInPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2hhcnQtdGl0bGVzJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGVhbS1pbmZvIHNpbmdsZS1jaGFydC10aXRsZSc+VGVhbTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtLWluZm8gc2luZ2xlLWNoYXJ0LXRpdGxlJz5XaW5zPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RlYW0taW5mbyBzaW5nbGUtY2hhcnQtdGl0bGUnPkxvc2VzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RlYW0taW5mbyBzaW5nbGUtY2hhcnQtdGl0bGUnPldpbiU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldHVwQ2hhcnRUZWFtcygpO1xuICAgICAgfSxcbiAgICAgIGNhY2hlOiBmYWxzZVxuICB9KTsgXG59XG5cbi8vIEdldCBUaGUgVG90YWwgV2luIENvdW50cyBmb3IgRWFjaCBPd25lclxuZXhwb3J0IGxldCBidWlsZE93bmVycyA9ICgpID0+IHtcbiAgJCgnLnNpbmdsZS1vd25lcicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICB2YXIgc3VtVyA9IDA7XG4gICAgdmFyIHN1bUwgPSAwO1xuICAgIHZhciBzdW1QID0gMDtcbiAgICAvLyBHZXQgVGhlIFdpbnMgZm9yIEVhY2ggVGVhbSBUaGUgb3duZXIgaGFzIGFuZCBhZGQgdGhlbVxuICAgICQodGhpcykuZmluZCgnLnNpbmdsZS10ZWFtJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgc3VtVyArPSBOdW1iZXIoJCh0aGlzKS5kYXRhKCd3aW5zJykpO1xuICAgICAgc3VtUCArPSBOdW1iZXIoJCh0aGlzKS5kYXRhKCdwbGF5ZWQnKSk7XG4gICAgICBzdW1MICs9IE51bWJlcigkKHRoaXMpLmRhdGEoJ2xvc2VzJykpO1xuICAgIH0pO1xuXG4gICAgbGV0IHdpbnNNYXRoID0gKHN1bVcgLyBzdW1QKS50b0ZpeGVkKDMpO1xuICAgIGxldCB3aW5QZXJjZW50ID0gJy4nICsgd2luc01hdGggKiAxMDAwO1xuICAgIC8vIEFkZCBUb3RhbCBXaW5zIGFzIERhdGEgQXR0cmlidXRlIHRvIHRoZSBvd25lclxuICAgICQodGhpcykuYXR0cignZGF0YS10b3RhbHcnLCBzdW1XKTtcbiAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtdG90YWxMJywgc3VtTCk7XG4gICAgJCh0aGlzKS5hdHRyKCdkYXRhLXRvdGFscGxheWVkJywgc3VtUCk7XG4gICAgJCh0aGlzKS5hdHRyKCdkYXRhLXdpbnBlcmNlbnQnLCB3aW5QZXJjZW50KTtcbiAgICAkKHRoaXMpLmZpbmQoJy53aW5zLWNvdW50JykucHJlcGVuZChzdW1XKTtcbiAgICAkKHRoaXMpLmZpbmQoJy50aXRsZVdpbnNDb3VudCcpLnByZXBlbmQoc3VtVyk7XG4gICAgJCh0aGlzKS5maW5kKCcubG9zZXMtY291bnQnKS5hcHBlbmQoc3VtTCk7XG4gICAgJCh0aGlzKS5maW5kKCcucGxheWVkLWNvdW50JykucHJlcGVuZChzdW1QKTtcbiAgICAkKHRoaXMpLmZpbmQoJy53aW5QZXJjZW50JykucHJlcGVuZCh3aW5QZXJjZW50KTtcbiAgfSk7XG5cbiAgb3JkZXJPd25lcnMoKTtcbn1cblxuLy8gQ291bnQgVGhlIFdpbiBUb3RhbHMgRGF0YSBBdHRyaWJ1dGUgZm9yIGVhY2ggb3duZXIgYW5kIFNldCB0aGUgb3JkZXIgb2YgdGhlIG93bmVyc1xubGV0IG9yZGVyT3duZXJzID0gKCkgPT4ge1xuICAkKCcuaG9tZS1wYWdlJykuZmluZCgnLnNpbmdsZS1vd25lcicpLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgcmV0dXJuICtiLmRhdGFzZXQudG90YWx3IC0gK2EuZGF0YXNldC50b3RhbHc7XG4gIH0pLmFwcGVuZFRvKCQoJy5ob21lLXBhZ2UnKSk7XG5cbiAgb3duZXJSYW5rSWNvbigpO1xufVxuXG5cbmxldCBvd25lclJhbmtJY29uID0gKCkgPT4ge1xuICBsZXQgaSA9IDA7XG4gICQoJy5zaW5nbGUtb3duZXInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBpKys7XG4gICAgICAkKHRoaXMpLmZpbmQoJy5vd25lci1yYW5rJykucHJlcGVuZCgnPGRpdiBjbGFzcz1cInJhbmstaWNvblwiPicraSsnPC9kaXY+Jyk7XG4gIH0pO1xuXG4gIHRlYW1DYXJkU2V0dXAoKTtcbiAgdGVhbVNjcm9sbCgpO1xufSIsImV4cG9ydCBsZXQgcHJlTG9hZGVyID0gKCkgPT4ge1xuICBsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG4gICAgZHVyYXRpb246MC4wNSxcbiAgICBlYXNlOidwb3dlcjQub3V0JyxcbiAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbigpe1xuICAgICAgJCgnI3ByZWxvYWRlcicpLnJlbW92ZSgpO1xuICAgIH1cbiAgfSlcblx0dGwudG8oJyNwcmVsb2FkZXInLCB7b3BhY2l0eTowfSlcbn0iLCJleHBvcnQgbGV0IHRlYW1TY3JvbGwgPSAoKSA9PiB7XG5cbiAgJCgnLnNpbmdsZS1vd25lcicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICBsZXQgdGhlQ29udGVudCA9ICQodGhpcykuZmluZCgnLmNvbnRlbnQnKTtcbiAgICBsZXQgb3duZXJUZWFtcyA9ICQodGhpcykuZmluZCgnLm93bmVyLXRlYW1zLWlubmVyJyk7XG4gICAgbGV0IG9uZVRlYW0gPSAkKHRoaXMpLmZpbmQoJy5zaW5nbGUtdGVhbScpO1xuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgLy8geWVzLCB3ZSBjYW4gYWRkIGl0IHRvIGFuIGVudGlyZSB0aW1lbGluZSFcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjp0aGlzLFxuICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsIC8vIHdoZW4gdGhlIHRvcCBvZiB0aGUgdHJpZ2dlciBoaXRzIHRoZSB0b3Agb2YgdGhlIHZpZXdwb3J0XG4gICAgICAgIGVuZDpcInRvcCBjZW50ZXItPTIwMFwiLFxuICAgICAgICBzY3J1YjogMC4xLCAvLyBzbW9vdGggc2NydWJiaW5nLCB0YWtlcyAxIHNlY29uZCB0byBcImNhdGNoIHVwXCIgdG8gdGhlIHNjcm9sbGJhclxuICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIixcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0bC50byh0aGVDb250ZW50LCB7c2NhbGU6MSwgcm90YXRpb25YOjB9LCBcInRlYW1JblwiKTtcbiAgICB0bC50byhvd25lclRlYW1zLCB7eTowfSwgXCJ0ZWFtSW5cIik7XG4gICAgLy8gdGwudG8ob25lVGVhbSwge2hlaWdodDo0MH0sIFwidGVhbUluXCIpO1xuICB9KTtcbn1cblxuZXhwb3J0IGxldCB0ZWFtQ2FyZFNldHVwID0gKCkgPT4ge1xuICBnc2FwLnNldCgkKCcuc2luZ2xlLW93bmVyIC5jb250ZW50JyksIHtyb3RhdGlvblg6LTYwfSk7XG4gIGdzYXAuc2V0KCQoJy5vd25lci10ZWFtcy1pbm5lcicpLCB7eTotMTIwfSk7XG4gIC8vIGdzYXAuc2V0KCQoJy5zaW5nbGUtdGVhbScpLCB7aGVpZ2h0OjB9KTtcbn1cbiIsImltcG9ydCB7IFxuICBidWlsZE93bmVycyxcbiAgb3JkZXJPd25lcnMsXG4gIG93bmVyUmFua0ljb25cbn0gZnJvbSAnLi9pbmRleC5qcyc7XG5cblxuXG5cbmV4cG9ydCBsZXQgc2V0dXBDaGFydFRlYW1zID0gKCkgPT4geyAgXG4gICQuYWpheCh7ICAgICAgICAgIFxuICAgICAgdXJsOiAnaHR0cHM6Ly93d3cud2lucy1wb29sLmNvbS93cC1jb250ZW50L3RoZW1lcy9zZWVtYXgtdGhlbWUvanNvbi90ZWFtczEwMjgyMS5qc29uJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHsgXG4gICAgICAgIFxuICAgICAgICAkLmVhY2goIGRhdGEsIGZ1bmN0aW9uKGssIHYpIHsgICAgXG4gICAgICAgICAgbGV0IGNvbmYgPSB2LmxlYWd1ZXMuc3RhbmRhcmQuY29uZk5hbWU7XG4gICAgICAgICAgbGV0IHRlYW1JZCA9IHYudGVhbUlkO1xuICAgICAgICAgIGxldCBjaXR5ID0gdi5jaXR5O1xuICAgICAgICAgIGxldCBuaWNrbmFtZSA9IHYubmlja25hbWU7XG4gICAgICAgICAgbGV0IGxvZ28gPSB2LmxvZ287XG4gICAgICAgICAgbGV0IG93bmVyID0gdi5vd25lcjtcbiAgICAgICAgICBsZXQgcGljayA9IHYucGljaztcbiAgICAgICAgICBsZXQgaXNOQkEgPSB2Lm5iYUZyYW5jaGlzZTtcbiAgICAgICAgICBcbiAgICAgICAgICAkKCcqW2RhdGEtb3duZXI9XCInK293bmVyKydcIl0nKS5maW5kKCcub3duZXJUZWFtc0lubmVyJykuYXBwZW5kKFxuICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdzaW5nbGUtdGVhbSBjLXdpZHRoLTEwMCBcIitjb25mLnRvTG93ZXJDYXNlKCkrXCItY29uZicgXFxcbiAgICAgICAgICAgIHN0eWxlPSdvcmRlcjpcIitwaWNrK1wiJyBcXFxuICAgICAgICAgICAgZGF0YS1pZD0nXCIrdGVhbUlkK1wiJyBkYXRhLW93bmVkPSdcIitvd25lcitcIic+IFxcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RlYW0taW5mbyB0ZWFtLWxvZ28nPiBcXFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdcIitsb2dvK1wiJz4gXFxcbiAgICAgICAgICAgICAgPC9kaXY+IFxcXG4gICAgICAgICAgICA8L2Rpdj5cIik7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXR1cENoYXJ0VG90YWxzKCk7XG4gICAgICAgIHNldHVwQ2hhcnRUZWFtUmVjb3JkcygpO1xuICAgICAgfSxcbiAgICAgIGNhY2hlOiBmYWxzZVxuICB9KTsgXG59XG5cblxubGV0IHNldHVwQ2hhcnRUb3RhbHMgPSAoKSA9PiB7XG4gICQoJy5zaW5nbGUtb3duZXInKS5lYWNoKCBmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLmZpbmQoJy5vd25lclRlYW1zSW5uZXInKS5hcHBlbmQoXG4gICAgICBgPGRpdiBjbGFzcz0nYy13aWR0aC0xMDAgb3duZXItc3RhdHMnPlxuICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtLWluZm8gc2luZ2xlLW93bmVyLXN0YXQnPlRvdGFsczwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtLWluZm8gc2luZ2xlLW93bmVyLXN0YXQgd2lucy1jb3VudCc+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3RlYW0taW5mbyBzaW5nbGUtb3duZXItc3RhdCBsb3Nlcy1jb3VudCc+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3RlYW0taW5mbyBzaW5nbGUtb3duZXItc3RhdCB3aW5QZXJjZW50Jz48L2Rpdj5cbiAgICAgIDwvZGl2PmBcbiAgICApO1xuICB9KVxufVxuXG4vLyA8ZGl2IGNsYXNzPSd0ZWFtLWluZm8gc2luZ2xlLW93bmVyLXN0YXQgcGxheWVkLWNvdW50Jz48L2Rpdj5cblxuXG5sZXQgc2V0dXBDaGFydFRlYW1SZWNvcmRzID0gKCkgPT4ge1xuXG4gICQuYWpheCh7ICAgICAgICAgIFxuICAgIHVybDogJ2h0dHBzOi8vd3d3LndpbnMtcG9vbC5jb20vd3AtY29udGVudC90aGVtZXMvc2VlbWF4LXRoZW1lL2pzb24vc3RhbmRpbmdzMi5qc29uJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7IFxuXG4gICAgICAkLmVhY2goZGF0YS5hcGkuc3RhbmRpbmdzLCBmdW5jdGlvbihrLCB2KSB7XG5cbiAgICAgICAgbGV0IHRoaXNJZCA9IHYudGVhbUlkO1xuICAgICAgICBsZXQgdGhpc1dpbnMgPSB2LndpbjtcbiAgICAgICAgbGV0IHRoaXNQZXJjZW50ID0gdi53aW5QZXJjZW50YWdlO1xuICAgICAgICBsZXQgdGhpc0xvc3NlcyA9IHYubG9zcztcbiAgICAgICAgbGV0IHRoaXNQbGF5ZWQgPSBwYXJzZUludCh0aGlzTG9zc2VzKSArIHBhcnNlSW50KHRoaXNXaW5zKTtcbiAgICAgICAgbGV0IHRoaXNUZWFtSW5mbyA9ICQoJypbZGF0YS1pZD0nK3RoaXNJZCsnXScpO1xuICAgICAgICBsZXQgdGhpc1RlYW0gPSAkKCcqW2RhdGEtaWQ9Jyt0aGlzSWQrJ10nKTtcbiAgXG4gICAgICAgIHRoaXNUZWFtSW5mby5hcHBlbmQoXG4gICAgICAgICAgLy8gXCI8ZGl2IGNsYXNzPSd0ZWFtLWluZm8gdGVhbS1wbGF5ZWQgYy13aWR0aC0yNSc+XCIrdGhpc1BsYXllZCArXCI8L2Rpdj4gXFxcbiAgICAgICAgICBgPGRpdiBjbGFzcz0ndGVhbS1pbmZvIHRlYW0td2lucyBjLXdpZHRoLTI1Jz5gK3RoaXNXaW5zK2A8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZWFtLWluZm8gdGVhbS1sb3NlcyBjLXdpZHRoLTI1Jz5gK3RoaXNMb3NzZXMrYDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9J3RlYW0taW5mbyB0ZWFtLXBlcmNlbnQgYy13aWR0aC0yNSc+YCt0aGlzUGVyY2VudCArYDwvZGl2PlxuICAgICAgICBgKTtcbiAgXG4gICAgICAgIHRoaXNUZWFtLmF0dHIoe1xuICAgICAgICAgIFwiZGF0YS13aW5zXCI6dGhpc1dpbnMsXCJkYXRhLWxvc2VzXCI6dGhpc0xvc3NlcyxcImRhdGEtcGxheWVkXCI6dGhpc1BsYXllZFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBidWlsZE93bmVycygpO1xuICAgIH0sXG4gICAgY2FjaGU6IGZhbHNlXG4gIH0pOyBcbn1cblxuIiwiaW1wb3J0IHsgXG4gIHByZUxvYWRlcixcbiAgZ3NhcFJlZ2lzdGVycyxcbiAgc2V0dXBPd25lcnMsXG59IGZyb20gJy4vaW5kZXguanMnO1xuIFxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gIC8vIFNldHVwIEJhc2ljIEZ1bmN0aW9uYWxpdHlcbiAgcHJlTG9hZGVyKCk7XG4gIGdzYXBSZWdpc3RlcnMoKTtcbiAgc2V0dXBPd25lcnMoKTtcbiAgICBcbiAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDEwMjQpIHtcbiAgICBcbiAgfVxuICBlbHNlIHtcbiAgXG4gIH0gIFxufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcblxuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxMDI0KSB7XG5cbiAgfVxuICBlbHNlIHtcblxuIH1cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=