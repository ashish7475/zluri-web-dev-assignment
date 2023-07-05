exports.id = "component---node-modules-gatsby-theme-portfolio-minimal-src-templates-article-listing-index-tsx";
exports.ids = ["component---node-modules-gatsby-theme-portfolio-minimal-src-templates-article-listing-index-tsx"];
exports.modules = {

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/ArticleCard/style.module.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/ArticleCard/style.module.css ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Banner: () => (/* binding */ Banner),
/* harmony export */   Card: () => (/* binding */ Card),
/* harmony export */   Category: () => (/* binding */ Category),
/* harmony export */   DescriptionWrapper: () => (/* binding */ DescriptionWrapper),
/* harmony export */   Details: () => (/* binding */ Details),
/* harmony export */   Image: () => (/* binding */ Image),
/* harmony export */   ImageWrapper: () => (/* binding */ ImageWrapper),
/* harmony export */   ReadingTime: () => (/* binding */ ReadingTime),
/* harmony export */   Title: () => (/* binding */ Title)
/* harmony export */ });
// Exports
var Card = "style-module--Card--c661d";
var Banner = "style-module--Banner--d401d";
var ImageWrapper = "style-module--ImageWrapper--50300";
var Image = "style-module--Image--43f10";
var DescriptionWrapper = "style-module--DescriptionWrapper--5f867";
var Category = "style-module--Category--eeb92";
var Title = "style-module--Title--de70d";
var Details = "style-module--Details--5ba4b";
var ReadingTime = "style-module--ReadingTime--a0392";


/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Button/style.module.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Button/style.module.css ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
// Exports
var Button = "style-module--Button--82b1f";


/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/CookieBar/style.module.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/CookieBar/style.module.css ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CookieBar: () => (/* binding */ CookieBar)
/* harmony export */ });
// Exports
var CookieBar = "style-module--CookieBar--93100";


/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Footer/style.module.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Footer/style.module.css ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentWrapper: () => (/* binding */ ContentWrapper),
/* harmony export */   Footer: () => (/* binding */ Footer),
/* harmony export */   Links: () => (/* binding */ Links)
/* harmony export */ });
// Exports
var Footer = "style-module--Footer--a57f4";
var ContentWrapper = "style-module--ContentWrapper--e818c";
var Links = "style-module--Links--2e0f2";


/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Header/style.module.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Header/style.module.css ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blurred: () => (/* binding */ Blurred),
/* harmony export */   Burger: () => (/* binding */ Burger),
/* harmony export */   ContentWrapper: () => (/* binding */ ContentWrapper),
/* harmony export */   CtaButton: () => (/* binding */ CtaButton),
/* harmony export */   Header: () => (/* binding */ Header),
/* harmony export */   NavLink: () => (/* binding */ NavLink),
/* harmony export */   SideBarBackdrop: () => (/* binding */ SideBarBackdrop),
/* harmony export */   SideBarWrapper: () => (/* binding */ SideBarWrapper),
/* harmony export */   SideNavigationBar: () => (/* binding */ SideNavigationBar),
/* harmony export */   TopNavigationBar: () => (/* binding */ TopNavigationBar)
/* harmony export */ });
// Exports
var Header = "style-module--Header--9993b";
var ContentWrapper  = "style-module--ContentWrapper --5d8c4";
var Burger = "style-module--Burger--1ab74";
var TopNavigationBar = "style-module--TopNavigationBar--574b3";
var NavLink = "style-module--NavLink--94101";
var CtaButton = "style-module--CtaButton--cf786";
var SideBarWrapper = "style-module--SideBarWrapper--e7152";
var SideNavigationBar = "style-module--SideNavigationBar--57a7b";
var SideBarBackdrop = "style-module--SideBarBackdrop--fb470";
var Blurred = "style-module--Blurred--f203e";


/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Layout/style.module.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Layout/style.module.css ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Layout: () => (/* binding */ Layout)
/* harmony export */ });
// Exports
var Layout = "style-module--Layout--b3aca";


/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Logo/style.module.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Logo/style.module.css ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logo: () => (/* binding */ Logo)
/* harmony export */ });
// Exports
var Logo = "style-module--Logo--c7351";


/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Section/style.module.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Section/style.module.css ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentWrapper: () => (/* binding */ ContentWrapper),
/* harmony export */   Heading: () => (/* binding */ Heading),
/* harmony export */   Section: () => (/* binding */ Section)
/* harmony export */ });
// Exports
var Section = "style-module--Section--1d871";
var Heading = "style-module--Heading--2c002";
var ContentWrapper  = "style-module--ContentWrapper --36dde";


/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Slider/style.module.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Slider/style.module.css ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlideContainer: () => (/* binding */ SlideContainer)
/* harmony export */ });
// Exports
var SlideContainer = "style-module--SlideContainer--60bf2";


/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/SplashScreen/style.module.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/SplashScreen/style.module.css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Backdrop: () => (/* binding */ Backdrop),
/* harmony export */   LogoWrapper: () => (/* binding */ LogoWrapper),
/* harmony export */   SplashScreen: () => (/* binding */ SplashScreen)
/* harmony export */ });
// Exports
var SplashScreen = "style-module--SplashScreen--bd73a";
var LogoWrapper = "style-module--LogoWrapper--040d0";
var Backdrop = "style-module--Backdrop--22a80";


/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/templates/ArticleListing/style.module.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/templates/ArticleListing/style.module.css ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Filter: () => (/* binding */ Filter),
/* harmony export */   Listing: () => (/* binding */ Listing),
/* harmony export */   LoadMore: () => (/* binding */ LoadMore),
/* harmony export */   Option: () => (/* binding */ Option),
/* harmony export */   Options: () => (/* binding */ Options),
/* harmony export */   Selected: () => (/* binding */ Selected)
/* harmony export */ });
// Exports
var Listing = "style-module--Listing--52eca";
var Filter = "style-module--Filter--31377";
var Options = "style-module--Options--3515b";
var Option = "style-module--Option--83bb9";
var Selected = "style-module--Selected--f3165";
var LoadMore = "style-module--LoadMore--8b4c0";


/***/ }),

/***/ "./node_modules/gatsby-plugin-gdpr-cookies/helper.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-gdpr-cookies/helper.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.validGATrackingId = function (options) {
  return options.trackingId && options.trackingId.trim() !== "";
};
exports.validGTMTrackingId = function (options) {
  return options.trackingId && options.trackingId.trim() !== "";
};
exports.validFbPixelId = function (options) {
  return options.pixelId && options.pixelId.trim() !== "";
};
exports.validTikTokPixelId = function (options) {
  return options.pixelId && options.pixelId.trim() !== "";
};
exports.validHotjarId = function (options) {
  return options.hjid && options.hjid.trim() !== "" && options.hjsv && options.hjsv.trim() !== "";
};
exports.validChatwootConfig = function (options) {
  return options.baseUrl && options.baseUrl.trim() !== "" && options.websiteToken && options.websiteToken.trim() !== "";
};
exports.validLinkedinTrackingId = function (options) {
  return options.trackingId && options.trackingId.trim() !== "";
};
exports.getCookie = function (name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
};
exports.isEnvironmentValid = function (environments) {
  var currentEnvironment = ({}).ENV || "development" || 0;
  return environments.includes(currentEnvironment);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-gdpr-cookies/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-plugin-gdpr-cookies/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ./services */ "./node_modules/gatsby-plugin-gdpr-cookies/services/index.js"),
  initializeAndTrackGoogleAnalytics = _require.initializeAndTrackGoogleAnalytics,
  initializeAndTrackGoogleTagManager = _require.initializeAndTrackGoogleTagManager,
  initializeAndTrackFacebookPixel = _require.initializeAndTrackFacebookPixel,
  initializeAndTrackTikTokPixel = _require.initializeAndTrackTikTokPixel,
  initializeAndTrackHotjar = _require.initializeAndTrackHotjar,
  initializeChatwoot = _require.initializeChatwoot,
  initializeLinkedin = _require.initializeLinkedin;
var _require2 = __webpack_require__(/*! ./helper */ "./node_modules/gatsby-plugin-gdpr-cookies/helper.js"),
  isEnvironmentValid = _require2.isEnvironmentValid;
exports.initializeAndTrack = function (location) {
  var options = window.gatsbyPluginGDPRCookiesOptions;
  if (isEnvironmentValid(options.environments)) {
    if (location === undefined || location === null) {
      console.error('Please provide a reach router location to the initializeAndTrack function.');
    } else {
      initializeAndTrackGoogleAnalytics(options.googleAnalytics, location);
      initializeAndTrackGoogleTagManager(options.googleTagManager, location);
      initializeAndTrackFacebookPixel(options.facebookPixel);
      initializeAndTrackTikTokPixel(options.tikTokPixel);
      initializeAndTrackHotjar(options.hotjar);
      initializeChatwoot(options.chatwoot);
      initializeLinkedin(options.linkedin);
    }
  }
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-gdpr-cookies/services/chatwoot.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-gdpr-cookies/services/chatwoot.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ../helper */ "./node_modules/gatsby-plugin-gdpr-cookies/helper.js"),
  validChatwootConfig = _require.validChatwootConfig,
  getCookie = _require.getCookie;
exports.addChatwoot = function (options) {
  return new Promise(function (resolve, reject) {
    if (window.gatsbyPluginGDPRCookiesChatwootAdded) return resolve(true);
    /* eslint-disable */

    !function (d, t) {
      var BASE_URL = options.baseUrl;
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: options.websiteToken,
          baseUrl: BASE_URL
        });
      };
    }(document, "script");
    /* eslint-enable */

    window.gatsbyPluginGDPRCookiesChatwootAdded = true;
    resolve(true);
  });
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-gdpr-cookies/services/facebook.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-gdpr-cookies/services/facebook.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ../helper */ "./node_modules/gatsby-plugin-gdpr-cookies/helper.js"),
  validFbPixelId = _require.validFbPixelId,
  getCookie = _require.getCookie;
exports.addFacebookPixel = function () {
  return new Promise(function (resolve, reject) {
    if (window.gatsbyPluginGDPRCookiesFacebookPixelAdded) return resolve(true);
    /* eslint-disable */

    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */

    window.gatsbyPluginGDPRCookiesFacebookPixelAdded = true;
    resolve(true);
  });
};
exports.initializeFacebookPixel = function (options) {
  if (!window.gatsbyPluginGDPRCookiesFacebookPixelInitialized && getCookie(options.cookieName) === "true" && validFbPixelId(options)) {
    window.fbq("init", options.pixelId);
    window.gatsbyPluginGDPRCookiesFacebookPixelInitialized = true;
  }
};
exports.trackFacebookPixel = function (options) {
  if (getCookie(options.cookieName) === "true" && validFbPixelId(options) && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-gdpr-cookies/services/google-analytics.js":
/*!******************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-gdpr-cookies/services/google-analytics.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ../helper */ "./node_modules/gatsby-plugin-gdpr-cookies/helper.js"),
  validGATrackingId = _require.validGATrackingId,
  getCookie = _require.getCookie;
exports.addGoogleAnalytics = function (_ref) {
  var trackingId = _ref.trackingId;
  return new Promise(function (resolve, reject) {
    if (window.gatsbyPluginGDPRCookiesGoogleAnalyticsAdded) return resolve(true);
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = function () {
      window.gatsbyPluginGDPRCookiesGoogleAnalyticsAdded = true;
      resolve(true);
    };
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + trackingId;
    head.appendChild(script);
  });
};
exports.initializeGoogleAnalytics = function (options) {
  if (!window.gatsbyPluginGDPRCookiesGoogleAnalyticsInitialized && getCookie(options.cookieName) === "true" && validGATrackingId(options)) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    var gaAnonymize = options.anonymize;
    var gaAllowAdFeatures = options.allowAdFeatures;
    gaAnonymize = gaAnonymize !== undefined ? gaAnonymize : true;
    gaAllowAdFeatures = gaAllowAdFeatures !== undefined ? gaAllowAdFeatures : true;
    window.gtag('config', options.trackingId, {
      'anonymize_ip': gaAnonymize,
      'allow_google_signals': gaAllowAdFeatures
    });
    window.gatsbyPluginGDPRCookiesGoogleAnalyticsInitialized = true;
  }
};
exports.trackGoogleAnalytics = function (options, location) {
  if (getCookie(options.cookieName) === "true" && validGATrackingId(options) && typeof window.gtag === "function") {
    var pagePath = location ? location.pathname + location.search + location.hash : undefined;
    window.gtag("event", "page_view", {
      page_path: pagePath
    });
  }
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-gdpr-cookies/services/google-tag-manager.js":
/*!********************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-gdpr-cookies/services/google-tag-manager.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ../helper */ "./node_modules/gatsby-plugin-gdpr-cookies/helper.js"),
  validGTMTrackingId = _require.validGTMTrackingId,
  getCookie = _require.getCookie;
exports.addGoogleTagManager = function (_ref, environmentParamStr) {
  var trackingId = _ref.trackingId,
    dataLayerName = _ref.dataLayerName;
  return new Promise(function (resolve, reject) {
    if (window.gatsbyPluginGDPRCookiesGoogleTagManagerAdded) return resolve(true);
    /* eslint-disable */

    !function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js"
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl + environmentParamStr;
      f.parentNode.insertBefore(j, f);
    }(window, document, "script", dataLayerName, trackingId);
    /* eslint-enable */

    var iframe = document.createElement("iframe");
    iframe.key = "gatsby-plugin-gdpr-cookies-google-tagmanager-iframe";
    iframe.src = "https://www.googletagmanager.com/ns.html?id=" + trackingId + environmentParamStr;
    iframe.height = 0;
    iframe.width = 0;
    iframe.style = "display: none; visibility: hidden";
    document.body.insertBefore(iframe, document.body.firstChild);
    window.gatsbyPluginGDPRCookiesGoogleTagManagerAdded = true;
    resolve(true);
  });
};
exports.initializeGoogleTagManager = function (options) {
  // console.log(`initing tag manager`)
  if (!window.gatsbyPluginGDPRCookiesGoogleTagManagerInitialized && getCookie(options.cookieName) === "true" && validGTMTrackingId(options)) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    var gaAnonymize = options.anonymize;
    var gaAllowAdFeatures = options.allowAdFeatures;
    gaAnonymize = gaAnonymize !== undefined ? gaAnonymize : true;
    gaAllowAdFeatures = gaAllowAdFeatures !== undefined ? gaAllowAdFeatures : true;
    window.gtag("config", options.trackingId, {
      anonymize_ip: gaAnonymize,
      allow_google_signals: gaAllowAdFeatures
    });
  }
};
exports.trackGoogleTagManager = function (options, location) {
  // console.log(`tracking tag manager`)
  if (getCookie(options.cookieName) === "true" && validGTMTrackingId(options) && typeof window.gtag === "function") {
    var pagePath = location ? location.pathname + location.search + location.hash : undefined;
    window.gtag("event", "page_view", {
      page_path: pagePath
    });
  }
  setTimeout(function () {
    var data = options.dataLayerName ? window[options.dataLayerName] : window.dataLayer;
    if (typeof data === "object") {
      var eventName = options.routeChangeEvent || "gatsbyRouteChange";
      data.push({
        event: eventName
      });
    }
  }, 50);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-gdpr-cookies/services/hotjar.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-gdpr-cookies/services/hotjar.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ../helper */ "./node_modules/gatsby-plugin-gdpr-cookies/helper.js"),
  validHotjarId = _require.validHotjarId,
  getCookie = _require.getCookie;
exports.addHotjar = function (options) {
  return new Promise(function (resolve, reject) {
    if (window.gatsbyPluginGDPRCookiesHotjarAdded) return resolve(true);
    /* eslint-disable */

    !function (h, o, t, j, a, r) {
      h.hj = h.hj || function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
      h._hjSettings = {
        hjid: options.hjid,
        hjsv: options.hjsv
      };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    }(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    /* eslint-enable */

    window.gatsbyPluginGDPRCookiesHotjarAdded = true;
    resolve(true);
  });
};
exports.initializeHotjar = function (options) {
  if (!window.gatsbyPluginGDPRCookiesHotjarInitialized && getCookie(options.cookieName) === "true" && validHotjarId(options)) {
    window.gatsbyPluginGDPRCookiesHotjarInitialized = true;
  }
};
exports.trackHotjar = function (options) {// this is supposed to so nothing
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-gdpr-cookies/services/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-plugin-gdpr-cookies/services/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ../helper */ "./node_modules/gatsby-plugin-gdpr-cookies/helper.js"),
  validGATrackingId = _require.validGATrackingId,
  validGTMTrackingId = _require.validGTMTrackingId,
  validFbPixelId = _require.validFbPixelId,
  validTikTokPixelId = _require.validTikTokPixelId,
  validHotjarId = _require.validHotjarId,
  validChatwootConfig = _require.validChatwootConfig,
  validLinkedinTrackingId = _require.validLinkedinTrackingId,
  getCookie = _require.getCookie;
var _require2 = __webpack_require__(/*! ./google-analytics */ "./node_modules/gatsby-plugin-gdpr-cookies/services/google-analytics.js"),
  addGoogleAnalytics = _require2.addGoogleAnalytics,
  initializeGoogleAnalytics = _require2.initializeGoogleAnalytics,
  trackGoogleAnalytics = _require2.trackGoogleAnalytics;
var _require3 = __webpack_require__(/*! ./google-tag-manager */ "./node_modules/gatsby-plugin-gdpr-cookies/services/google-tag-manager.js"),
  addGoogleTagManager = _require3.addGoogleTagManager,
  initializeGoogleTagManager = _require3.initializeGoogleTagManager,
  trackGoogleTagManager = _require3.trackGoogleTagManager;
var _require4 = __webpack_require__(/*! ./facebook */ "./node_modules/gatsby-plugin-gdpr-cookies/services/facebook.js"),
  addFacebookPixel = _require4.addFacebookPixel,
  initializeFacebookPixel = _require4.initializeFacebookPixel,
  trackFacebookPixel = _require4.trackFacebookPixel;
var _require5 = __webpack_require__(/*! ./tiktok */ "./node_modules/gatsby-plugin-gdpr-cookies/services/tiktok.js"),
  addTikTokPixel = _require5.addTikTokPixel,
  initializeTikTokPixel = _require5.initializeTikTokPixel,
  trackTikTokPixel = _require5.trackTikTokPixel;
var _require6 = __webpack_require__(/*! ./hotjar */ "./node_modules/gatsby-plugin-gdpr-cookies/services/hotjar.js"),
  addHotjar = _require6.addHotjar,
  initializeHotjar = _require6.initializeHotjar,
  trackHotjar = _require6.trackHotjar;
var _require7 = __webpack_require__(/*! ./chatwoot */ "./node_modules/gatsby-plugin-gdpr-cookies/services/chatwoot.js"),
  addChatwoot = _require7.addChatwoot;
var _require8 = __webpack_require__(/*! ./linkedin */ "./node_modules/gatsby-plugin-gdpr-cookies/services/linkedin.js"),
  addLinkedin = _require8.addLinkedin,
  initializeLinkedin = _require8.initializeLinkedin;
exports.initializeAndTrackGoogleAnalytics = function (options, location) {
  if (getCookie(options.cookieName) === "true" && validGATrackingId(options)) {
    addGoogleAnalytics(options).then(function (status) {
      if (status) {
        initializeGoogleAnalytics(options);
        trackGoogleAnalytics(options, location);
      }
    });
  }
};
exports.initializeAndTrackGoogleTagManager = function (options, location) {
  if (getCookie(options.cookieName) === "true" && validGTMTrackingId(options)) {
    var environmentParamStr = "";
    if (options.gtmAuth && options.gtmPreview) {
      environmentParamStr = "&gtm_auth=" + options.gtmAuth + "&gtm_preview=" + options.gtmPreview + "&gtm_cookies_win=x";
    }
    addGoogleTagManager(options, environmentParamStr).then(function (status) {
      if (status) {
        initializeGoogleTagManager(options);
        trackGoogleTagManager(options, location);
      }
    });
  }
};
exports.initializeAndTrackFacebookPixel = function (options) {
  if (getCookie(options.cookieName) === "true" && validFbPixelId(options)) {
    addFacebookPixel().then(function (status) {
      if (status) {
        initializeFacebookPixel(options);
        trackFacebookPixel(options);
      }
    });
  }
};
exports.initializeAndTrackTikTokPixel = function (options) {
  if (getCookie(options.cookieName) === "true" && validTikTokPixelId(options)) {
    addTikTokPixel().then(function (status) {
      if (status) {
        initializeTikTokPixel(options);
        trackTikTokPixel(options);
      }
    });
  }
};
exports.initializeAndTrackHotjar = function (options) {
  if (getCookie(options.cookieName) === "true" && validHotjarId(options)) {
    addHotjar(options).then(function (status) {
      if (status) {
        initializeHotjar(options);
        trackHotjar(options);
      }
    });
  }
};
exports.initializeLinkedin = function (options) {
  if (getCookie(options.cookieName) === "true" && validLinkedinTrackingId(options)) {
    addLinkedin(options).then(function (status) {
      if (status) {
        initializeLinkedin(options);
      }
    });
  }
};
exports.initializeChatwoot = function (options) {
  if (getCookie(options.cookieName) === "true" && validChatwootConfig(options)) {
    addChatwoot(options).then(function (status) {
      if (status) {
        console.info('Chat is added and running');
      }
    });
  }
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-gdpr-cookies/services/linkedin.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-gdpr-cookies/services/linkedin.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ../helper */ "./node_modules/gatsby-plugin-gdpr-cookies/helper.js"),
  validLinkedinTrackingId = _require.validLinkedinTrackingId,
  getCookie = _require.getCookie;
exports.addLinkedin = function (options) {
  return new Promise(function (resolve, reject) {
    if (window.gatsbyPluginGDPRCookiesLinkedinAdded) return resolve(true);
    /* eslint-disable */
    // LINKED IN SPECIFIC CODE HERE

    _linkedin_partner_id = options.trackingId;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    /* eslint-enable */

    window.gatsbyPluginGDPRCookiesLinkedinAdded = true;
    resolve(true);
  });
};
exports.initializeLinkedin = function (options) {
  if (!window.gatsbyPluginGDPRCookiesLinkedinInitialized && getCookie(options.cookieName) === "true" && validLinkedinTrackingId(options)) {
    // (function(){
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s); // })();

    window.gatsbyPluginGDPRCookiesLinkedinInitialized = true;
  }
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-gdpr-cookies/services/tiktok.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-gdpr-cookies/services/tiktok.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ../helper */ "./node_modules/gatsby-plugin-gdpr-cookies/helper.js"),
  validTikTokPixelId = _require.validTikTokPixelId,
  getCookie = _require.getCookie;
exports.addTikTokPixel = function () {
  return new Promise(function (resolve, reject) {
    if (window.gatsbyPluginGDPRCookiesTikTokPixelAdded) return resolve(true);
    /* eslint-disable */

    !function (w, d, t) {
      w.TiktokAnalyticsObject = t;
      var ttq = w[t] = w[t] || [];
      ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], ttq.setAndDefer = function (t, e) {
        t[e] = function () {
          t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
        };
      };
      for (var i = 0; i < ttq.methods.length; i++) {
        ttq.setAndDefer(ttq, ttq.methods[i]);
      }
      ttq.instance = function (t) {
        for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) {
          ttq.setAndDefer(e, ttq.methods[n]);
        }
        return e;
      }, ttq.load = function (e, n) {
        var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
        ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date(), ttq._o = ttq._o || {}, ttq._o[e] = n || {};
        n = document.createElement("script");
        n.type = "text/javascript", n.async = !0, n.src = i + "?sdkid=" + e + "&lib=" + t;
        e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(n, e);
      };
    }(window, document, 'ttq');
    /* eslint-enable */

    window.gatsbyPluginGDPRCookiesTikTokPixelAdded = true;
    resolve(true);
  });
};
exports.initializeTikTokPixel = function (options) {
  if (!window.gatsbyPluginGDPRCookiesTikTokPixelInitialized && getCookie(options.cookieName) === "true" && validTikTokPixelId(options)) {
    window.ttq.load(options.pixelId);
    window.gatsbyPluginGDPRCookiesTikTokPixelInitialized = true;
  }
};
exports.trackTikTokPixel = function (options) {
  if (getCookie(options.cookieName) === "true" && validTikTokPixelId(options) && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
    window.ttq.page();
  }
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GatsbyImage: () => (/* binding */ X),
/* harmony export */   MainImage: () => (/* binding */ D),
/* harmony export */   Placeholder: () => (/* binding */ C),
/* harmony export */   StaticImage: () => (/* binding */ Z),
/* harmony export */   generateImageData: () => (/* binding */ b),
/* harmony export */   getImage: () => (/* binding */ I),
/* harmony export */   getImageData: () => (/* binding */ R),
/* harmony export */   getLowResolutionImageURL: () => (/* binding */ y),
/* harmony export */   getSrc: () => (/* binding */ W),
/* harmony export */   getSrcSet: () => (/* binding */ j),
/* harmony export */   withArtDirection: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function n() {
  return n = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
  }, n.apply(this, arguments);
}
function o(e, t) {
  if (null == e) return {};
  var a,
    i,
    r = {},
    n = Object.keys(e);
  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);
  return r;
}
var s = [.25, .5, 1, 2],
  l = [750, 1080, 1366, 1920],
  u = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
  d = 800,
  c = 800,
  h = 4 / 3,
  g = function (e) {
    return console.warn(e);
  },
  p = function (e, t) {
    return e - t;
  },
  m = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";
      case "fixed":
        return e + "px";
      case "fullWidth":
        return "100vw";
      default:
        return;
    }
  },
  f = function (e) {
    return e.map(function (e) {
      return e.src + " " + e.width + "w";
    }).join(",\n");
  };
function v(e) {
  var t = e.lastIndexOf(".");
  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}
function w(e) {
  var t = e.layout,
    i = void 0 === t ? "constrained" : t,
    r = e.width,
    o = e.height,
    s = e.sourceMetadata,
    l = e.breakpoints,
    u = e.aspectRatio,
    d = e.formats,
    g = void 0 === d ? ["auto", "webp"] : d;
  return g = g.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: g,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !u && (u = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (u || h))) : (r || (r = o && u ? o * u : s.width ? s.width : o ? Math.round(o / h) : c), u && !o ? o = Math.round(r / u) : u || (u = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: u,
    layout: i,
    formats: g
  }));
}
function y(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = w(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}
function b(e) {
  var t,
    a = (e = w(e)).pluginName,
    i = e.sourceMetadata,
    r = e.generateImageSource,
    o = e.layout,
    u = e.fit,
    d = e.options,
    h = e.width,
    p = e.height,
    y = e.filename,
    b = e.reporter,
    S = void 0 === b ? {
      warn: g
    } : b,
    N = e.backgroundColor,
    x = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = v(y)) : i = {
    width: h,
    height: p,
    format: (null == (t = i) ? void 0 : t.format) || v(y) || "auto"
  };
  var I = new Set(e.formats);
  (0 === I.size || I.has("auto") || I.has("")) && (I.delete("auto"), I.delete(""), I.add(i.format)), I.has("jpg") && I.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), I.delete("jpg" === i.format ? "png" : "jpg"));
  var W = function (e) {
      var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        u = void 0 === o ? {
          warn: g
        } : o,
        d = e.breakpoints,
        h = void 0 === d ? l : d,
        p = Object.entries({
          width: e.width,
          height: e.height
        }).filter(function (e) {
          var t = e[1];
          return "number" == typeof t && t < 1;
        });
      if (p.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + p.map(function (e) {
        return e.join(": ");
      }).join(", "));
      return "fixed" === i ? function (e) {
        var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          u = e.reporter,
          d = void 0 === u ? {
            warn: g
          } : u,
          h = a.width / a.height,
          p = k(void 0 === l ? s : l);
        if (i && r) {
          var m = M(a, {
            width: i,
            height: r,
            fit: o
          });
          i = m.width, r = m.height, h = m.aspectRatio;
        }
        i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : c;
        var f = i;
        if (a.width < i || a.height < r) {
          var v = a.width < i ? "width" : "height";
          d.warn("\nThe requested " + v + ' "' + ("width" === v ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + v + " of " + a[v] + "px. If possible, replace the current image with a larger one."), "width" === v ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
        }
        return {
          sizes: p.filter(function (e) {
            return e >= 1;
          }).map(function (e) {
            return Math.round(e * i);
          }).filter(function (e) {
            return e <= a.width;
          }),
          aspectRatio: h,
          presentationWidth: f,
          presentationHeight: Math.round(f / h),
          unscaledWidth: i
        };
      }(e) : "constrained" === i ? E(e) : "fullWidth" === i ? E(n({
        breakpoints: h
      }, e)) : (u.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
        sizes: [r.width],
        presentationWidth: r.width,
        presentationHeight: r.height,
        aspectRatio: r.width / r.height,
        unscaledWidth: r.width
      });
    }(n({}, e, {
      sourceMetadata: i
    })),
    j = {
      sources: []
    },
    R = e.sizes;
  R || (R = m(W.presentationWidth, o)), I.forEach(function (e) {
    var t = W.sizes.map(function (t) {
      var i = r(y, t, Math.round(t / W.aspectRatio), e, u, d);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);
    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === W.unscaledWidth;
      }) || t[0];
      i && (j.fallback = {
        src: i.src,
        srcSet: f(t),
        sizes: R
      });
    } else {
      var n;
      null == (n = j.sources) || n.push({
        srcSet: f(t),
        sizes: R,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: j,
    layout: o,
    backgroundColor: N
  };
  switch (x && (_.placeholder = {
    fallback: x
  }), o) {
    case "fixed":
      _.width = W.presentationWidth, _.height = W.presentationHeight;
      break;
    case "fullWidth":
      _.width = 1, _.height = 1 / W.aspectRatio;
      break;
    case "constrained":
      _.width = e.width || W.presentationWidth || 1, _.height = (_.width || 1) / W.aspectRatio;
  }
  return _;
}
var k = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};
function E(e) {
  var t,
    a = e.sourceMetadata,
    i = e.width,
    r = e.height,
    n = e.fit,
    o = void 0 === n ? "cover" : n,
    l = e.outputPixelDensities,
    u = e.breakpoints,
    c = e.layout,
    h = a.width / a.height,
    g = k(void 0 === l ? s : l);
  if (i && r) {
    var m = M(a, {
      width: i,
      height: r,
      fit: o
    });
    i = m.width, r = m.height, h = m.aspectRatio;
  }
  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(d, a.width)) / h), i || (i = r * h);
  var f = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == u ? void 0 : u.length) > 0 ? (t = u.filter(function (e) {
    return e <= a.width;
  })).length < u.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== c || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: h,
    presentationWidth: f,
    presentationHeight: Math.round(f / h),
    unscaledWidth: i
  };
}
function M(e, t) {
  var a = e.width / e.height,
    i = t.width,
    r = t.height;
  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;
    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
        o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;
    case "outside":
      var s = t.width ? t.width : 0,
        l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;
    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }
  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}
var S = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
  N = ["images", "placeholder"];
function x() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}
var I = function (e) {
    var t;
    return function (e) {
      var t, a;
      return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
    }(e) ? e : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImageData);
    }(e) ? e.gatsbyImageData : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImage);
    }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
  },
  W = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
  },
  j = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
  };
function R(e) {
  var t,
    a = e.baseUrl,
    i = e.urlBuilder,
    r = e.sourceWidth,
    s = e.sourceHeight,
    l = e.pluginName,
    d = void 0 === l ? "getImageData" : l,
    c = e.formats,
    h = void 0 === c ? ["auto"] : c,
    g = e.breakpoints,
    p = e.options,
    m = o(e, S);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = u), b(n({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}
function _(e, t) {
  var a,
    i,
    r,
    s = e.images,
    l = e.placeholder,
    u = n({}, o(e, N), {
      images: n({}, s, {
        sources: []
      }),
      placeholder: l && n({}, l, {
        sources: []
      })
    });
  return t.forEach(function (t) {
    var a,
      i = t.media,
      r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = u.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), u.placeholder && u.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = u.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = u.placeholder) || (r = i.sources).push.apply(r, l.sources)), u;
}
var A,
  O = ["src", "srcSet", "loading", "alt", "shouldLoad"],
  T = ["fallback", "sources", "shouldLoad"],
  z = function (t) {
    var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      u = t.shouldLoad,
      d = o(t, O);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, d, {
      decoding: "async",
      loading: r,
      src: u ? a : void 0,
      "data-src": u ? void 0 : a,
      srcSet: u ? i : void 0,
      "data-srcset": u ? void 0 : i,
      alt: l
    }));
  },
  L = function (t) {
    var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      u = o(t, T),
      d = u.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({}, u, a, {
        sizes: d,
        shouldLoad: l
      }));
    return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
      var a = t.media,
        i = t.srcSet,
        r = t.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
        key: a + "-" + r + "-" + i,
        type: r,
        media: a,
        srcSet: l ? i : void 0,
        "data-srcset": l ? void 0 : i,
        sizes: d
      });
    }), c) : c;
  };
z.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, L.displayName = "Picture", L.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};
var q = ["fallback"],
  C = function (t) {
    var a = t.fallback,
      i = o(t, q);
    return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, i, {
      fallback: {
        src: a
      },
      "aria-hidden": !0,
      alt: ""
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
  };
C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (A = L.propTypes) ? void 0 : A.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var D = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t, {
    shouldLoad: !0
  }))));
};
D.displayName = "MainImage", D.propTypes = L.propTypes;
var P = ["children"],
  H = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "module",
      dangerouslySetInnerHTML: {
        __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
      }
    });
  },
  F = function (t) {
    var a = t.layout,
      i = t.width,
      r = t.height;
    return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "aria-hidden": !0,
      style: {
        paddingTop: r / i * 100 + "%"
      }
    }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxWidth: i,
        display: "block"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: "",
      role: "presentation",
      "aria-hidden": "true",
      src: "data:image/svg+xml;charset=utf-8,%3Csvg%20height='" + r + "'%20width='" + i + "'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",
      style: {
        maxWidth: "100%",
        display: "block",
        position: "static"
      }
    })) : null;
  },
  B = function (a) {
    var i = a.children,
      r = o(a, P);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, null));
  },
  G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
  V = ["style", "className"],
  U = function (e) {
    return e.replace(/\n/g, "");
  },
  X = function (t) {
    var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      u = t.image,
      d = t.loading,
      c = void 0 === d ? "lazy" : d,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, G);
    if (!u) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
    s && (r = s), g = n({
      objectFit: m,
      objectPosition: f,
      backgroundColor: p
    }, g);
    var w = u.width,
      y = u.height,
      b = u.layout,
      k = u.images,
      E = u.placeholder,
      M = u.backgroundColor,
      S = function (e, t, a) {
        var i = {},
          r = "gatsby-image-wrapper";
        return x() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (x() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
          className: r,
          "data-gatsby-image-wrapper": "",
          style: i
        };
      }(w, y, b),
      N = S.style,
      I = S.className,
      W = o(S, V),
      j = {
        fallback: void 0,
        sources: []
      };
    return k.fallback && (j.fallback = n({}, k.fallback, {
      srcSet: k.fallback.srcSet ? U(k.fallback.srcSet) : void 0
    })), k.sources && (j.sources = k.sources.map(function (e) {
      return n({}, e, {
        srcSet: U(e.srcSet)
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
      style: n({}, N, l, {
        backgroundColor: p
      }),
      className: I + (r ? " " + r : "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(B, {
      layout: b,
      width: w,
      height: y
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, n({}, function (e, t, a, i, r, o, s, l) {
      var u = {};
      o && (u.backgroundColor = o, "fixed" === a ? (u.width = i, u.height = r, u.backgroundColor = o, u.position = "relative") : ("constrained" === a || "fullWidth" === a) && (u.position = "absolute", u.top = 0, u.left = 0, u.bottom = 0, u.right = 0)), s && (u.objectFit = s), l && (u.objectPosition = l);
      var d = n({}, e, {
        "aria-hidden": !0,
        "data-placeholder-image": "",
        style: n({
          opacity: 1,
          transition: "opacity 500ms linear"
        }, u)
      });
      return x() || (d.style = {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
      }), d;
    }(E, 0, b, w, y, M, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, n({
      "data-gatsby-image-ssr": "",
      className: h
    }, v, function (e, t, a, i, r) {
      return void 0 === r && (r = {}), x() || (r = n({
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        transform: "translateZ(0)",
        transition: "opacity 250ms linear",
        width: "100%",
        willChange: "opacity"
      }, r)), n({}, a, {
        loading: i,
        shouldLoad: e,
        "data-main-image": "",
        style: n({}, r, {
          opacity: 0
        })
      });
    }("eager" === c, 0, j, c, g)))));
  },
  Y = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"],
  Z = function (t) {
    return function (a) {
      var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, Y);
      return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
        image: r
      }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
    };
  }(X),
  J = function (e, t) {
    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
  },
  K = new Set(["fixed", "fullWidth", "constrained"]),
  Q = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    alt: function (e, t, a) {
      return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
    },
    width: J,
    height: J,
    sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    layout: function (e) {
      if (void 0 !== e.layout && !K.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
    }
  };
Z.displayName = "StaticImage", Z.propTypes = Q;


/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Animation/index.tsx":
/*!****************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Animation/index.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* binding */ Animation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useCastedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useCastedRef */ "./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useCastedRef.tsx");
/* harmony import */ var _hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useOnScreen */ "./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useOnScreen.tsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Animation/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);




function Animation(props) {
  var _props$type, _props$timing, _props$duration, _props$delay, _props$iterationCount, _props$fillMode;
  const ref = (0,_hooks_useCastedRef__WEBPACK_IMPORTED_MODULE_1__.useCastedRef)();
  const onScreen = (0,_hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_2__.useOnScreen)(ref);

  // Set defaults
  const type = (_props$type = props.type) !== null && _props$type !== void 0 ? _props$type : 'fadeIn';
  const timing = (_props$timing = props.timing) !== null && _props$timing !== void 0 ? _props$timing : 'ease-out';
  const duration = (_props$duration = props.duration) !== null && _props$duration !== void 0 ? _props$duration : 200;
  const delay = (_props$delay = props.delay) !== null && _props$delay !== void 0 ? _props$delay : 0;
  const count = (_props$iterationCount = props.iterationCount) !== null && _props$iterationCount !== void 0 ? _props$iterationCount : 1;
  const fillMode = (_props$fillMode = props.fillMode) !== null && _props$fillMode !== void 0 ? _props$fillMode : 'backwards';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: ref,
    className: props.className,
    onAnimationEnd: props.onAnimationEnd,
    style: onScreen ? {
      ...props.style,
      animationName: `${type}`,
      animationTimingFunction: `${timing}`,
      animationDuration: `${duration}ms`,
      animationDelay: `${delay}ms`,
      animationIterationCount: `${count}`,
      animationFillMode: `${fillMode}`
    } : {
      ...props.style,
      opacity: 0
    }
  }, props.children);
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/ArticleCard/index.tsx":
/*!******************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/ArticleCard/index.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticleCard: () => (/* binding */ ArticleCard),
/* harmony export */   ArticleCardSkeleton: () => (/* binding */ ArticleCardSkeleton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var tiny_skeleton_loader_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-skeleton-loader-react */ "./node_modules/tiny-skeleton-loader-react/dist/index.es.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ "./node_modules/gatsby-theme-portfolio-minimal/src/context/index.tsx");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/ArticleCard/style.module.css");






function ArticleCard(props) {
  const {
    globalState
  } = (0,_context__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)();
  const darkModeEnabled = globalState.theme === _context__WEBPACK_IMPORTED_MODULE_3__.Theme.Dark;

  // Needed to differentiate between external and internal links (whether or not we use Gatsby Link)
  const absoluteUrl = props.data.link.indexOf('://') > 0 || props.data.link.indexOf('//') === 0;
  const articleCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__.Card,
    style: darkModeEnabled ? {
      border: '0.125rem solid var(--primary-color)'
    } : undefined
  }, props.showBanner && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__.Banner
  }, props.data.image && props.data.image.src && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.GatsbyImage, {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__.ImageWrapper,
    imgClassName: _style_module_css__WEBPACK_IMPORTED_MODULE_4__.Image,
    objectFit: props.data.image.objectFit || 'cover',
    image: props.data.image.src.childImageSharp.gatsbyImageData,
    alt: props.data.image.alt || props.data.title
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__.DescriptionWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__.Category
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("u", null, props.data.category)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__.Title
  }, props.data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__.Details
  }, formatDate(props.data.publishedAt), props.data.readingTime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__.ReadingTime
  }, props.data.readingTime))));
  return absoluteUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: props.data.link,
    target: "_blank",
    rel: "noopener noreferrer",
    title: props.data.title
  }, articleCard) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: props.data.link,
    title: props.data.title
  }, articleCard);
}
function ArticleCardSkeleton() {
  const {
    globalState
  } = (0,_context__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)();
  const darkModeEnabled = globalState.theme === _context__WEBPACK_IMPORTED_MODULE_3__.Theme.Dark;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__.Card,
    style: darkModeEnabled ? {
      border: '0.125rem solid var(--primary-color)'
    } : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__.DescriptionWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(tiny_skeleton_loader_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      height: '1.5rem',
      marginBottom: '.5rem',
      background: 'var(--tertiary-color)'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(tiny_skeleton_loader_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      height: '4rem',
      background: 'var(--tertiary-color)'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(tiny_skeleton_loader_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      height: '.75rem',
      width: '50%',
      marginTop: '.5rem',
      background: 'var(--tertiary-color)'
    }
  })));
}
function formatDate(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Button/index.tsx":
/*!*************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Button/index.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   ButtonType: () => (/* binding */ ButtonType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.css */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Button/style.module.css");



let ButtonType = /*#__PURE__*/function (ButtonType) {
  ButtonType["BUTTON"] = "button";
  ButtonType["SUBMIT"] = "submit";
  ButtonType["LINK"] = "link";
  return ButtonType;
}({});
function Button(props) {
  if (props.type === ButtonType.LINK) {
    if (!props.url) {
      throw new Error(`Button should be a ${props.type} but no URL is given!`);
    } else {
      if (props.externalLink) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          id: props.id,
          className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__.Button,
          href: props.url,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "External Link"
        }, props.label);
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
          id: props.id,
          to: props.url,
          className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__.Button
        }, props.label);
      }
    }
  } else if (props.type === ButtonType.BUTTON || props.type === ButtonType.SUBMIT) {
    if (!props.onClickHandler) {
      throw new Error(`Button should be a ${props.type} but no onClickHandler is given!`);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      id: props.id,
      className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__.Button,
      type: props.type,
      onClick: props.onClickHandler
    }, props.label);
  } else {
    throw new Error(`Unknown button type specified.`);
  }
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/CookieBar/index.tsx":
/*!****************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/CookieBar/index.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CookieBar: () => (/* binding */ CookieBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie-consent */ "./node_modules/react-cookie-consent/build/index.js");
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookie_consent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_plugin_gdpr_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-gdpr-cookies */ "./node_modules/gatsby-plugin-gdpr-cookies/index.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Animation */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Animation/index.tsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/CookieBar/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.module.css */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/CookieBar/style.module.css");





 // Uses the class names from the original package

function CookieBar() {
  const location = (0,_reach_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Animation__WEBPACK_IMPORTED_MODULE_4__.Animation, {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_6__.CookieBar,
    type: "fadeUp",
    delay: 1000
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_cookie_consent__WEBPACK_IMPORTED_MODULE_1___default()), {
    cookieName: "gatsby-gdpr-google-analytics",
    buttonId: "confirm",
    buttonText: "Accept",
    declineButtonId: "decline",
    declineButtonText: "Decline",
    enableDeclineButton: true,
    disableStyles: true,
    onAccept: () => (0,gatsby_plugin_gdpr_cookies__WEBPACK_IMPORTED_MODULE_2__.initializeAndTrack)(location)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "This website uses cookies \uD83C\uDF6A ")));
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Footer/index.tsx":
/*!*************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Footer/index.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logo */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Logo/index.tsx");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Link */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Link/index.tsx");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ "./node_modules/gatsby-theme-portfolio-minimal/src/context/index.tsx");
/* harmony import */ var _hooks_useSiteConfiguration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useSiteConfiguration */ "./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useSiteConfiguration.tsx");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.css */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Footer/style.module.css");






function Footer() {
  const {
    globalState
  } = (0,_context__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)();
  const siteConfiguration = (0,_hooks_useSiteConfiguration__WEBPACK_IMPORTED_MODULE_4__.useSiteConfiguration)();
  const darkModeEnabled = globalState.theme === _context__WEBPACK_IMPORTED_MODULE_3__.Theme.Dark;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__.Footer,
    style: {
      background: darkModeEnabled ? 'var(--background-color)' : 'var(--primary-color)',
      borderTop: darkModeEnabled ? '3px solid var(--box-shadow-hover-color)' : undefined
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__.ContentWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Link__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/",
    "aria-label": "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Logo__WEBPACK_IMPORTED_MODULE_1__.Logo, {
    fontSize: "1.5rem",
    color: darkModeEnabled ? 'var(--primary-color)' : 'var(--background-color)',
    theme: _context__WEBPACK_IMPORTED_MODULE_3__.Theme.Dark
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__.Links
  }, siteConfiguration.navigation.footer.map((linkObject, key) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Link__WEBPACK_IMPORTED_MODULE_2__.Link, {
      key: key,
      to: linkObject.url,
      "aria-label": linkObject.label,
      style: {
        color: darkModeEnabled ? 'var(--primary-color)' : 'var(--background-color)'
      }
    }, linkObject.label);
  }))));
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Header/index.tsx":
/*!*************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Header/index.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logo */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Logo/index.tsx");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Link */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Link/index.tsx");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Animation */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Animation/index.tsx");
/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useMediaQuery */ "./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useMediaQuery.tsx");
/* harmony import */ var _hooks_useSiteConfiguration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useSiteConfiguration */ "./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useSiteConfiguration.tsx");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.module.css */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Header/style.module.css");








function Header() {
  var _siteConfiguration$na, _siteConfiguration$na2;
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const siteConfiguration = (0,_hooks_useSiteConfiguration__WEBPACK_IMPORTED_MODULE_6__.useSiteConfiguration)();
  const isDesktopBreakpoint = (0,_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)('(min-width: 992px)');
  const navigationItems = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, siteConfiguration.navigation.header.map((linkObject, key) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Link__WEBPACK_IMPORTED_MODULE_3__.Link, {
      key: key,
      to: linkObject.url,
      className: _style_module_css__WEBPACK_IMPORTED_MODULE_7__.NavLink,
      onClick: !isDesktopBreakpoint ? () => setOpen(!open) : undefined
    }, linkObject.label);
  }), (_siteConfiguration$na = siteConfiguration.navigation.ctaButton) !== null && _siteConfiguration$na !== void 0 && _siteConfiguration$na.url && (_siteConfiguration$na2 = siteConfiguration.navigation.ctaButton) !== null && _siteConfiguration$na2 !== void 0 && _siteConfiguration$na2.label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Link__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: siteConfiguration.navigation.ctaButton.url,
    target: siteConfiguration.navigation.ctaButton.openNewTab ? '_blank' : undefined,
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_7__.CtaButton,
    onClick: !isDesktopBreakpoint ? () => setOpen(!open) : undefined
  }, siteConfiguration.navigation.ctaButton.label) : null);
  const sideNavigationBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_7__.Burger,
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: open ? {
      transform: 'rotate(45deg)'
    } : undefined
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: open ? {
      transform: 'translateX(20px)',
      opacity: 0
    } : undefined
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: open ? {
      transform: 'rotate(-45deg)'
    } : undefined
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_7__.SideBarWrapper,
    style: open ? {
      transform: 'translateX(0)',
      visibility: 'visible'
    } : undefined,
    "aria-hidden": !open,
    tabIndex: open ? 1 : -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_7__.SideNavigationBar
  }, navigationItems)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_7__.SideBarBackdrop,
    style: open ? {
      display: 'block'
    } : undefined
  }));
  const topNavigationBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_7__.TopNavigationBar
  }, navigationItems);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_7__.Header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
    bodyAttributes: {
      class: open ? _style_module_css__WEBPACK_IMPORTED_MODULE_7__.Blurred : undefined
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Animation__WEBPACK_IMPORTED_MODULE_4__.Animation, {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_7__.ContentWrapper,
    type: "fadeDown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Link__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/",
    "aria-label": "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Logo__WEBPACK_IMPORTED_MODULE_2__.Logo, {
    fontSize: "2rem",
    color: "var(--primary-color"
  })), isDesktopBreakpoint ? topNavigationBar : sideNavigationBar));
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Layout/index.tsx":
/*!*************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Layout/index.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Layout: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fontsource/roboto/400.css */ "./node_modules/@fontsource/roboto/400.css");
/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fontsource/roboto/700.css */ "./node_modules/@fontsource/roboto/700.css");
/* harmony import */ var _fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globalStyles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globalStyles/global.css */ "./node_modules/gatsby-theme-portfolio-minimal/src/globalStyles/global.css");
/* harmony import */ var _globalStyles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_globalStyles_global_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globalStyles_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globalStyles/theme.css */ "./node_modules/gatsby-theme-portfolio-minimal/src/globalStyles/theme.css");
/* harmony import */ var _globalStyles_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_globalStyles_theme_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reach/router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context */ "./node_modules/gatsby-theme-portfolio-minimal/src/context/index.tsx");
/* harmony import */ var _SplashScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SplashScreen */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/SplashScreen/index.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Footer */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Footer/index.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Header */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Header/index.tsx");
/* harmony import */ var _CookieBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../CookieBar */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/CookieBar/index.tsx");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style.module.css */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Layout/style.module.css");













function Layout(props) {
  const location = (0,_reach_router__WEBPACK_IMPORTED_MODULE_6__.useLocation)();
  const {
    globalState
  } = (0,_context__WEBPACK_IMPORTED_MODULE_7__.useGlobalState)();
  const {
    0: isInternalNavigation,
    1: setIsInternalNavigation
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const showSplashScreen = !isInternalNavigation && props.useSplashScreenAnimation && !globalState.splashScreenDone;
  const darkModeEnabled = globalState.theme === _context__WEBPACK_IMPORTED_MODULE_7__.Theme.Dark;
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(() => {
    const referrer = location.state && location.state.referrer !== null;
    setIsInternalNavigation(!!referrer);
  }, []);
  const splashScreenView = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_5__.Helmet, {
    bodyAttributes: {
      'data-theme': _context__WEBPACK_IMPORTED_MODULE_7__.Theme.Light
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_SplashScreen__WEBPACK_IMPORTED_MODULE_8__.SplashScreen, null));
  const layoutView = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_5__.Helmet, {
    bodyAttributes: {
      'data-theme': darkModeEnabled ? _context__WEBPACK_IMPORTED_MODULE_7__.Theme.Dark : _context__WEBPACK_IMPORTED_MODULE_7__.Theme.Light
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_12__.Layout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_10__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("main", null, props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_9__.Footer, null), props.useCookieBar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_CookieBar__WEBPACK_IMPORTED_MODULE_11__.CookieBar, null)));
  return showSplashScreen ? splashScreenView : layoutView;
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Link/index.tsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Link/index.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Link: () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _utils_isExternalURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/isExternalURL */ "./node_modules/gatsby-theme-portfolio-minimal/src/utils/isExternalURL.ts");




// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Link({
  to,
  children,
  ref,
  ...rest
}) {
  if (!(0,_utils_isExternalURL__WEBPACK_IMPORTED_MODULE_2__.isExternalURL)(to) && rest.target !== '_blank') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, Object.assign({
      to: to
    }, rest), children);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", Object.assign({}, rest, {
      href: to,
      rel: "noopener noreferrer"
    }), children);
  }
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Logo/index.tsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Logo/index.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logo: () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context */ "./node_modules/gatsby-theme-portfolio-minimal/src/context/index.tsx");
/* harmony import */ var _hooks_useSiteConfiguration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useSiteConfiguration */ "./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useSiteConfiguration.tsx");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Logo/style.module.css");





function Logo(props) {
  var _props$theme;
  const {
    globalState
  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__.useGlobalState)();
  const {
    logo
  } = (0,_hooks_useSiteConfiguration__WEBPACK_IMPORTED_MODULE_2__.useSiteConfiguration)();
  const fontSize = props.fontSize || '2rem';
  const color = props.color || 'var(--primary-color)';
  const Logo = getLogoContent(logo.image, logo.text);
  const LogoDark = getLogoContent(logo.imageDark, logo.text);
  const theme = (_props$theme = props.theme) !== null && _props$theme !== void 0 ? _props$theme : globalState.theme;
  const ThemeSpecificLogo = theme === _context__WEBPACK_IMPORTED_MODULE_1__.Theme.Dark ? LogoDark || Logo : Logo;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__.Logo,
    "aria-roledescription": "logo",
    style: {
      fontSize,
      color
    }
  }, ThemeSpecificLogo || logo.text);
}
const getLogoContent = (image, fallback) => {
  var _image$svg, _image$svg2, _image$childImageShar;
  const hasImage = !!(image !== null && image !== void 0 && image.childImageSharp) || !!(image !== null && image !== void 0 && image.publicURL) || !!(image !== null && image !== void 0 && (_image$svg = image.svg) !== null && _image$svg !== void 0 && _image$svg.originalContent);
  const isSvg = (image === null || image === void 0 ? void 0 : image.extension) === 'svg';
  if (hasImage && isSvg && image !== null && image !== void 0 && (_image$svg2 = image.svg) !== null && _image$svg2 !== void 0 && _image$svg2.originalContent) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "logo-svg-wrapper",
      dangerouslySetInnerHTML: {
        __html: image === null || image === void 0 ? void 0 : image.svg.originalContent
      }
    });
  }
  if (hasImage && isSvg && image !== null && image !== void 0 && image.publicURL) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: image === null || image === void 0 ? void 0 : image.publicURL,
      alt: fallback
    });
  }
  if (hasImage && !isSvg && image !== null && image !== void 0 && (_image$childImageShar = image.childImageSharp) !== null && _image$childImageShar !== void 0 && _image$childImageShar.gatsbyImageData) {
    var _image$childImageShar2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.GatsbyImage, {
      image: image === null || image === void 0 ? void 0 : (_image$childImageShar2 = image.childImageSharp) === null || _image$childImageShar2 === void 0 ? void 0 : _image$childImageShar2.gatsbyImageData,
      alt: fallback,
      objectFit: "contain"
    });
  }
  return undefined;
};

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Page/index.tsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Page/index.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Page: () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context */ "./node_modules/gatsby-theme-portfolio-minimal/src/context/index.tsx");
/* harmony import */ var _hooks_useSiteConfiguration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useSiteConfiguration */ "./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useSiteConfiguration.tsx");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Layout/index.tsx");




function Page(props) {
  const siteConfiguration = (0,_hooks_useSiteConfiguration__WEBPACK_IMPORTED_MODULE_2__.useSiteConfiguration)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context__WEBPACK_IMPORTED_MODULE_1__.GlobalStateProvider, {
    defaultTheme: siteConfiguration.featureToggles.useDarkModeAsDefault ? _context__WEBPACK_IMPORTED_MODULE_1__.Theme.Dark : _context__WEBPACK_IMPORTED_MODULE_1__.Theme.Light,
    useDarkModeBasedOnUsersPreference: siteConfiguration.featureToggles.useDarkModeBasedOnUsersPreference,
    useSplashScreenAnimation: props.useSplashScreenAnimation || false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_3__.Layout, {
    useSplashScreenAnimation: props.useSplashScreenAnimation || false,
    useCookieBar: siteConfiguration.featureToggles.useCookieBar
  }, props.children));
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Section/index.tsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Section/index.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Section: () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.css */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Section/style.module.css");


function Section(props) {
  let classList;
  if (props.additionalClasses) {
    classList = props.additionalClasses.concat(_style_module_css__WEBPACK_IMPORTED_MODULE_1__.ContentWrapper).join(' ');
  } else {
    classList = _style_module_css__WEBPACK_IMPORTED_MODULE_1__.ContentWrapper;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: props.anchor,
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_1__.Section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classList
  }, props.heading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_1__.Heading
  }, props.heading), props.children));
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Seo/index.tsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Seo/index.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Seo: () => (/* binding */ Seo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
/* harmony import */ var _hooks_useSiteMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useSiteMetadata */ "./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useSiteMetadata.tsx");




function Seo(props) {
  const location = (0,_reach_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  const siteMetadata = {
    ...(0,_hooks_useSiteMetadata__WEBPACK_IMPORTED_MODULE_3__.useSiteMetadata)(),
    ...props
  };
  const thumbnailUrl = siteMetadata.thumbnail ? (siteMetadata.siteUrl + siteMetadata.thumbnail.childImageSharp.original.src).replace(/([^:]\/)\/+/g, '$1') : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
    title: siteMetadata.title,
    titleTemplate: props.useTitleTemplate ? siteMetadata.titleTemplate : undefined,
    htmlAttributes: {
      lang: siteMetadata.language
    }
  }, props.noIndex && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "robots",
    content: "noindex"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: siteMetadata.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:title",
    content: siteMetadata.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:site_name",
    content: siteMetadata.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:url",
    content: siteMetadata.siteUrl + location.pathname
  }), thumbnailUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:image",
    content: thumbnailUrl
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:description",
    content: siteMetadata.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "twitter:card",
    content: "summary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "twitter:creator",
    content: siteMetadata.author
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "twitter:title",
    content: siteMetadata.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "twitter:description",
    content: siteMetadata.description
  }));
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Slider/index.tsx":
/*!*************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Slider/index.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Slider: () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.css */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Slider/style.module.css");


function Slider(props) {
  let classList;
  if (props.additionalClasses) {
    classList = props.additionalClasses.concat(_style_module_css__WEBPACK_IMPORTED_MODULE_1__.SlideContainer).join(' ');
  } else {
    classList = _style_module_css__WEBPACK_IMPORTED_MODULE_1__.SlideContainer;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classList,
    style: props.style
  }, props.children);
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/SplashScreen/index.tsx":
/*!*******************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/SplashScreen/index.tsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplashScreen: () => (/* binding */ SplashScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ "./node_modules/gatsby-theme-portfolio-minimal/src/context/index.tsx");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logo */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Logo/index.tsx");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Animation */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Animation/index.tsx");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.css */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/SplashScreen/style.module.css");






function SplashScreen() {
  const [shouldUnmount, setShouldUnmount] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const {
    dispatch
  } = (0,_context__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Animation__WEBPACK_IMPORTED_MODULE_4__.Animation, {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__.SplashScreen,
    type: shouldUnmount === false ? 'fadeIn' : 'fadeOut',
    duration: 250,
    fillMode: "forwards",
    onAnimationEnd: () => {
      if (shouldUnmount) dispatch({
        type: _context__WEBPACK_IMPORTED_MODULE_2__.ActionType.SetSplashScreenDone,
        value: true
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
    bodyAttributes: {
      class: 'fixed'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__.LogoWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Animation__WEBPACK_IMPORTED_MODULE_4__.Animation, {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_5__.Backdrop,
    type: "reduceHeight",
    delay: 800,
    fillMode: "forwards",
    onAnimationEnd: () => {
      // Wait 500ms and start unmounting the splash screen
      setTimeout(() => {
        setShouldUnmount(true);
      }, 500);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Logo__WEBPACK_IMPORTED_MODULE_3__.Logo, {
    fontSize: "3rem",
    color: "var(--background-color)",
    theme: _context__WEBPACK_IMPORTED_MODULE_2__.Theme.Dark
  })));
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/context/index.tsx":
/*!***************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/context/index.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionType: () => (/* binding */ ActionType),
/* harmony export */   GlobalStateProvider: () => (/* binding */ GlobalStateProvider),
/* harmony export */   Theme: () => (/* binding */ Theme),
/* harmony export */   useGlobalState: () => (/* binding */ useGlobalState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useMediaQuery */ "./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useMediaQuery.tsx");


let Theme = /*#__PURE__*/function (Theme) {
  Theme["Light"] = "lightTheme";
  Theme["Dark"] = "darkTheme";
  return Theme;
}({});
let ActionType = /*#__PURE__*/function (ActionType) {
  ActionType["SetTheme"] = "SET_THEME";
  ActionType["SetSplashScreenDone"] = "SET_SPLASH_SCREEN_DONE";
  return ActionType;
}({});
const GlobalStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(undefined);
function GlobalStateProvider(props) {
  const [globalState, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(globalStateReducer, {
    theme: initializeTheme(props.defaultTheme, props.useDarkModeBasedOnUsersPreference),
    // If useSplashScreenAnimation=false, we skip the animation by setting the initial value to true
    splashScreenDone: props.useSplashScreenAnimation ? false : true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GlobalStateContext.Provider, {
    value: {
      globalState,
      dispatch
    }
  }, props.children);
}
function useGlobalState() {
  const context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
}
function globalStateReducer(state, action) {
  switch (action.type) {
    case ActionType.SetTheme:
      {
        return {
          ...state,
          theme: action.value
        };
      }
    case ActionType.SetSplashScreenDone:
      {
        return {
          ...state,
          splashScreenDone: action.value
        };
      }
    default:
      {
        throw new Error(`Unhandled action type`);
      }
  }
}
function initializeTheme(defaultTheme, useDarkMode) {
  const darkModeEnabled = (0,_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)('(prefers-color-scheme: dark)', isMatch => {
    const updatedTheme = isMatch ? Theme.Dark : Theme.Light;
    document.body.setAttribute('data-theme', updatedTheme);
  });
  let initialTheme = defaultTheme;
  if (useDarkMode && darkModeEnabled) {
    initialTheme = Theme.Dark;
  }
  return initialTheme;
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useCastedRef.tsx":
/*!********************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useCastedRef.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCastedRef: () => (/* binding */ useCastedRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useCastedRef() {
  return react__WEBPACK_IMPORTED_MODULE_0___default().useRef();
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useMediaQuery.tsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useMediaQuery.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMediaQuery: () => (/* binding */ useMediaQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMediaQuery(query, callback) {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') {
    return false;
  }
  const mediaQuery = window.matchMedia(query);
  const [match, setMatch] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(mediaQuery.matches);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    function handleMatch() {
      setMatch(mediaQuery.matches);
      callback === null || callback === void 0 ? void 0 : callback(mediaQuery.matches);
    }
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMatch);
      return () => mediaQuery.removeEventListener('change', handleMatch);
    } else {
      // backwards compatibility
      // https://betterprogramming.pub/using-window-matchmedia-in-react-8116eada2588
      mediaQuery.addListener(handleMatch);
      return () => mediaQuery.removeListener(handleMatch);
    }
  }, []);
  return match;
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useOnScreen.tsx":
/*!*******************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useOnScreen.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOnScreen: () => (/* binding */ useOnScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// https://usehooks.com/useOnScreen/

function useOnScreen(ref, threshold = 0.05) {
  const {
    0: isIntersecting,
    1: setIntersecting
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold
    });
    if (element && element instanceof Element) observer.observe(element);
    return () => {
      if (element && element instanceof Element) observer.unobserve(element);
    };
  }, [ref, threshold]);
  return isIntersecting;
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useSiteConfiguration.tsx":
/*!****************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useSiteConfiguration.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   query: () => (/* binding */ query),
/* harmony export */   useSiteConfiguration: () => (/* binding */ useSiteConfiguration)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_948380417_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../public/page-data/sq/d/948380417.json */ "./public/page-data/sq/d/948380417.json");

function useSiteConfiguration() {
  const data = _public_page_data_sq_d_948380417_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return data.allSettingsJson.settings[0].siteConfiguration;
}
const query = "948380417";

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useSiteMetadata.tsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/hooks/useSiteMetadata.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   query: () => (/* binding */ query),
/* harmony export */   useSiteMetadata: () => (/* binding */ useSiteMetadata)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3262260831_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../public/page-data/sq/d/3262260831.json */ "./public/page-data/sq/d/3262260831.json");

function useSiteMetadata() {
  const data = _public_page_data_sq_d_3262260831_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return data.allSettingsJson.settings[0].siteMetadata;
}
const query = "3262260831";

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/templates/ArticleListing/index.tsx?export=default":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/templates/ArticleListing/index.tsx?export=default ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArticleListingTemplate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Page */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Page/index.tsx");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Section */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Section/index.tsx");
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Seo */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Seo/index.tsx");
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Slider */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Slider/index.tsx");
/* harmony import */ var _components_ArticleCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ArticleCard */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/ArticleCard/index.tsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Button */ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Button/index.tsx");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.module.css */ "./node_modules/gatsby-theme-portfolio-minimal/src/templates/ArticleListing/style.module.css");
/* harmony import */ var _utils_pluralize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/pluralize */ "./node_modules/gatsby-theme-portfolio-minimal/src/utils/pluralize.ts");









function ArticleListingTemplate(props) {
  var _pluralize;
  const ARTICLES_PER_PAGE = 9;
  const articles = props.pageContext.articles;
  const [filterOptions, setFilterOptions] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(extractFilterOptions(articles));
  const [shownArticlesNumber, setShownArticlesNumber] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(ARTICLES_PER_PAGE);
  function handleFilterOptionClick(optionLabel) {
    const updatedFilterOptions = [...filterOptions];
    const selectedOptionIndex = updatedFilterOptions.map(o => o.label).indexOf(optionLabel);
    updatedFilterOptions[selectedOptionIndex].selected = !updatedFilterOptions[selectedOptionIndex].selected;
    setFilterOptions(updatedFilterOptions);
  }
  function handleLoadMoreButtonClick(articlesNumber, selectedArticlesNumber) {
    const incrementedArticleNumber = shownArticlesNumber + 3;
    if (selectedArticlesNumber && selectedArticlesNumber >= incrementedArticleNumber) {
      setShownArticlesNumber(incrementedArticleNumber);
    } else if (!selectedArticlesNumber && articlesNumber >= incrementedArticleNumber) {
      setShownArticlesNumber(incrementedArticleNumber);
    }
  }

  // Check if at least one filter option is selected. If so, create an array of all article ids that
  // are selected based on the current filter option selection. We use this later on to easily check
  // which articles to show.
  let selectedArticleIds = [];
  const filterSelected = filterOptions.map(o => o.selected).indexOf(true) !== -1;
  if (filterSelected) {
    selectedArticleIds = filterOptions.filter(option => option.selected) // Filter only for selected options
    .map(option => option.relatedArticleIds) // Create an array of article ids arrays
    .flat(1) // Flatten the array to a string[]
    .filter((id, index, arr) => arr.indexOf(id) === index); // Remove duplicate article ids
  }

  const entities = (_pluralize = (0,_utils_pluralize__WEBPACK_IMPORTED_MODULE_8__.pluralize)(props.pageContext.entityName)) !== null && _pluralize !== void 0 ? _pluralize : 'Articles';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_3__.Seo, {
    title: `All ${entities}`,
    useTitleTemplate: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Page__WEBPACK_IMPORTED_MODULE_1__.Page, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Section__WEBPACK_IMPORTED_MODULE_2__.Section, {
    anchor: "articleListing",
    heading: entities
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_7__.Filter
  }, "Select categories to filter ", entities.toLocaleLowerCase(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Slider__WEBPACK_IMPORTED_MODULE_4__.Slider, {
    additionalClasses: [_style_module_css__WEBPACK_IMPORTED_MODULE_7__.Options]
  }, filterOptions.map((option, key) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: key,
      role: "button",
      onClick: () => handleFilterOptionClick(option.label),
      className: [_style_module_css__WEBPACK_IMPORTED_MODULE_7__.Option, option.selected === true ? _style_module_css__WEBPACK_IMPORTED_MODULE_7__.Selected : null].join(' ')
    }, option.label, " (", option.relatedArticleIds.length, ")");
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_7__.Listing
  }, articles.filter(article => !filterSelected || selectedArticleIds.includes(article.id)).slice(0, shownArticlesNumber).map((article, key) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ArticleCard__WEBPACK_IMPORTED_MODULE_5__.ArticleCard, {
      key: key,
      showBanner: true,
      data: {
        image: article.banner,
        title: article.title,
        category: article.categories.join(' / '),
        publishedAt: new Date(article.date.replace(/-/g, '/')),
        link: article.slug,
        readingTime: article.readingTime.text
      }
    });
  })), filterSelected && selectedArticleIds.length > shownArticlesNumber || !filterSelected && articles.length > shownArticlesNumber ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _style_module_css__WEBPACK_IMPORTED_MODULE_7__.LoadMore
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_6__.Button, {
    type: _components_Button__WEBPACK_IMPORTED_MODULE_6__.ButtonType.BUTTON,
    label: "Load More",
    onClickHandler: () => handleLoadMoreButtonClick(articles.length, filterSelected ? selectedArticleIds.length : undefined)
  })) : null)));
}

// Helper function to calculate a sorted array of filter options based on the given articles
// We use the helper function before we initialize the state so that it can happen on the server.
function extractFilterOptions(articles) {
  const filterOptions = [];
  const categoryList = [];
  articles.forEach(article => {
    article.categories.forEach(category => {
      if (!categoryList.includes(category)) {
        filterOptions.push({
          label: category,
          selected: false,
          relatedArticleIds: [article.id]
        });
        categoryList.push(category);
      } else {
        const optionIndex = filterOptions.map(o => o.label).indexOf(category);
        filterOptions[optionIndex].relatedArticleIds.push(article.id);
      }
    });
  });
  return filterOptions.sort((a, b) => a.relatedArticleIds.length > b.relatedArticleIds.length ? -1 : 1);
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/utils/isExternalURL.ts":
/*!********************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/utils/isExternalURL.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isExternalURL: () => (/* binding */ isExternalURL)
/* harmony export */ });
function isExternalURL(url) {
  if (typeof window === 'undefined') return false;
  return new URL(url, window.location.href).origin !== location.origin;
}

/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/utils/pluralize.ts":
/*!****************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/utils/pluralize.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pluralize: () => (/* binding */ pluralize)
/* harmony export */ });
/**
 * Returns the plural of an English word.
 *
 * @export
 * @param {string} word
 * @param {number} [amount]
 * @returns {string}
 */
function pluralize(word, amount) {
  if (!word) return undefined;
  if (amount !== undefined && amount === 1) {
    return word;
  }
  const plural = {
    '(quiz)$': '$1zes',
    '^(ox)$': '$1en',
    '([m|l])ouse$': '$1ice',
    '(matr|vert|ind)ix|ex$': '$1ices',
    '(x|ch|ss|sh)$': '$1es',
    '([^aeiouy]|qu)y$': '$1ies',
    '(hive)$': '$1s',
    '(?:([^f])fe|([lr])f)$': '$1$2ves',
    '(shea|lea|loa|thie)f$': '$1ves',
    sis$: 'ses',
    '([ti])um$': '$1a',
    '(tomat|potat|ech|her|vet)o$': '$1oes',
    '(bu)s$': '$1ses',
    '(alias)$': '$1es',
    '(octop)us$': '$1i',
    '(ax|test)is$': '$1es',
    '(us)$': '$1es',
    '([^s]+)$': '$1s'
  };
  const irregular = {
    move: 'moves',
    foot: 'feet',
    goose: 'geese',
    sex: 'sexes',
    child: 'children',
    man: 'men',
    tooth: 'teeth',
    person: 'people'
  };
  const uncountable = ['sheep', 'fish', 'deer', 'moose', 'series', 'species', 'money', 'rice', 'information', 'equipment', 'bison', 'cod', 'offspring', 'pike', 'salmon', 'shrimp', 'swine', 'trout', 'aircraft', 'hovercraft', 'spacecraft', 'sugar', 'tuna', 'you', 'wood'];
  // save some time in the case that singular and plural are the same
  if (uncountable.indexOf(word.toLowerCase()) >= 0) {
    return word;
  }
  // check for irregular forms
  for (const w in irregular) {
    const pattern = new RegExp(`${w}$`, 'i');
    const replace = irregular[w];
    if (pattern.test(word)) {
      return word.replace(pattern, replace);
    }
  }
  // check for matches using regular expressions
  for (const reg in plural) {
    const pattern = new RegExp(reg, 'i');
    if (pattern.test(word)) {
      return word.replace(pattern, plural[reg]);
    }
  }
  return word;
}

/***/ }),

/***/ "./node_modules/@fontsource/roboto/400.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/roboto/400.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/roboto/700.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/roboto/700.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/Animation/style.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/Animation/style.css ***!
  \****************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/components/CookieBar/style.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/components/CookieBar/style.css ***!
  \****************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/globalStyles/global.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/globalStyles/global.css ***!
  \*********************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/gatsby-theme-portfolio-minimal/src/globalStyles/theme.css":
/*!********************************************************************************!*\
  !*** ./node_modules/gatsby-theme-portfolio-minimal/src/globalStyles/theme.css ***!
  \********************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-cookie-consent/build/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-cookie-consent/build/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! For license information please see index.js.LICENSE.txt */
!(function () {
  var e = {
      808: function (e, t, n) {
        var o, r, i;
        void 0 ===
          (r =
            "function" ==
            typeof (o = i =
              function () {
                function e() {
                  for (var e = 0, t = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n) t[o] = n[o];
                  }
                  return t;
                }
                function t(e) {
                  return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                }
                return (function n(o) {
                  function r() {}
                  function i(t, n, i) {
                    if ("undefined" != typeof document) {
                      "number" == typeof (i = e({ path: "/" }, r.defaults, i)).expires &&
                        (i.expires = new Date(1 * new Date() + 864e5 * i.expires)),
                        (i.expires = i.expires ? i.expires.toUTCString() : "");
                      try {
                        var c = JSON.stringify(n);
                        /^[\{\[]/.test(c) && (n = c);
                      } catch (e) {}
                      (n = o.write
                        ? o.write(n, t)
                        : encodeURIComponent(String(n)).replace(
                            /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                            decodeURIComponent
                          )),
                        (t = encodeURIComponent(String(t))
                          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                          .replace(/[\(\)]/g, escape));
                      var l = "";
                      for (var a in i)
                        i[a] && ((l += "; " + a), !0 !== i[a] && (l += "=" + i[a].split(";")[0]));
                      return (document.cookie = t + "=" + n + l);
                    }
                  }
                  function c(e, n) {
                    if ("undefined" != typeof document) {
                      for (
                        var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0;
                        c < i.length;
                        c++
                      ) {
                        var l = i[c].split("="),
                          a = l.slice(1).join("=");
                        n || '"' !== a.charAt(0) || (a = a.slice(1, -1));
                        try {
                          var s = t(l[0]);
                          if (((a = (o.read || o)(a, s) || t(a)), n))
                            try {
                              a = JSON.parse(a);
                            } catch (e) {}
                          if (((r[s] = a), e === s)) break;
                        } catch (e) {}
                      }
                      return e ? r[e] : r;
                    }
                  }
                  return (
                    (r.set = i),
                    (r.get = function (e) {
                      return c(e, !1);
                    }),
                    (r.getJSON = function (e) {
                      return c(e, !0);
                    }),
                    (r.remove = function (t, n) {
                      i(t, "", e(n, { expires: -1 }));
                    }),
                    (r.defaults = {}),
                    (r.withConverter = n),
                    r
                  );
                })(function () {});
              })
              ? o.call(t, n, t, e)
              : o) || (e.exports = r),
          (e.exports = i());
      },
      703: function (e, t, n) {
        "use strict";
        var o = n(414);
        function r() {}
        function i() {}
        (i.resetWarningCache = r),
          (e.exports = function () {
            function e(e, t, n, r, i, c) {
              if (c !== o) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: i,
              resetWarningCache: r,
            };
            return (n.PropTypes = n), n;
          });
      },
      697: function (e, t, n) {
        e.exports = n(703)();
      },
      414: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var i = (t[o] = { exports: {} });
    return e[o](i, i.exports, n), i.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var o in t)
        n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var o = {};
  !(function () {
    "use strict";
    n.r(o),
      n.d(o, {
        Cookies: function () {
          return l();
        },
        OPTIONS: function () {
          return m;
        },
        SAME_SITE_OPTIONS: function () {
          return g;
        },
        VISIBLE_OPTIONS: function () {
          return S;
        },
        default: function () {
          return B;
        },
        getCookieConsentValue: function () {
          return C;
        },
        resetCookieConsentValue: function () {
          return k;
        },
      });
    const e = __webpack_require__(/*! react */ "react");
    var t = n.n(e),
      r = n(697),
      i = n.n(r),
      c = n(808),
      l = n.n(c);
    function a(e) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var s = ["children"];
    function u() {
      return (u =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }).apply(this, arguments);
    }
    function p(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function f(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? p(Object(n), !0).forEach(function (t) {
              h(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : p(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function d(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    function b(e, t) {
      return (b =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function y(e, t) {
      if (t && ("object" === a(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError("Derived constructors may only return object or undefined");
      return v(e);
    }
    function v(e) {
      if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function O(e) {
      return (O = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function h(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var m = { TOP: "top", BOTTOM: "bottom", NONE: "none" },
      g = { STRICT: "strict", LAX: "lax", NONE: "none" },
      S = { HIDDEN: "hidden", SHOW: "show", BY_COOKIE_VALUE: "byCookieValue" },
      C = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
          t = l().get(e);
        return void 0 === t && (t = l().get(x(e))), t;
      },
      k = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w;
        l().remove(e);
      },
      x = function (e) {
        return "".concat(e, "-legacy");
      },
      w = "CookieConsent",
      j = function (e) {
        var t = e.condition,
          n = e.wrapper,
          o = e.children;
        return t ? n(o) : o;
      },
      T = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && b(e, t);
        })(a, e);
        var n,
          o,
          r,
          i,
          c =
            ((r = a),
            (i = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = O(r);
              if (i) {
                var n = O(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return y(this, e);
            });
        function a(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, a),
            h(v((t = c.call(this, e))), "handleScroll", function () {
              var e = t.props.acceptOnScrollPercentage,
                n = document.documentElement,
                o = document.body,
                r = "scrollTop",
                i = "scrollHeight";
              ((n[r] || o[r]) / ((n[i] || o[i]) - n.clientHeight)) * 100 > e && t.accept(!0);
            }),
            h(v(t), "removeScrollListener", function () {
              t.props.acceptOnScroll && window.removeEventListener("scroll", t.handleScroll);
            }),
            (t.state = {
              visible: !1,
              style: {
                alignItems: "baseline",
                background: "#353535",
                color: "white",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                left: "0",
                position: "fixed",
                width: "100%",
                zIndex: "999",
              },
              buttonStyle: {
                background: "#ffd42d",
                border: "0",
                borderRadius: "0px",
                boxShadow: "none",
                color: "black",
                cursor: "pointer",
                flex: "0 0 auto",
                padding: "5px 10px",
                margin: "15px",
              },
              declineButtonStyle: {
                background: "#c12a2a",
                border: "0",
                borderRadius: "0px",
                boxShadow: "none",
                color: "#e5e5e5",
                cursor: "pointer",
                flex: "0 0 auto",
                padding: "5px 10px",
                margin: "15px",
              },
              contentStyle: { flex: "1 0 300px", margin: "15px" },
              overlayStyle: {
                position: "fixed",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                zIndex: "999",
                backgroundColor: "rgba(0,0,0,0.3)",
              },
            }),
            t
          );
        }
        return (
          (n = a),
          (o = [
            {
              key: "componentDidMount",
              value: function () {
                var e = this.props.debug;
                (void 0 === this.getCookieValue() || e) &&
                  (this.setState({ visible: !0 }),
                  this.props.acceptOnScroll &&
                    window.addEventListener("scroll", this.handleScroll, { passive: !0 }));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.removeScrollListener();
              },
            },
            {
              key: "accept",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                  t = this.props,
                  n = t.cookieName,
                  o = t.cookieValue,
                  r = t.hideOnAccept,
                  i = t.onAccept;
                this.setCookie(n, o),
                  i(null != e && e),
                  r && (this.setState({ visible: !1 }), this.removeScrollListener());
              },
            },
            {
              key: "decline",
              value: function () {
                var e = this.props,
                  t = e.cookieName,
                  n = e.declineCookieValue,
                  o = e.hideOnDecline,
                  r = e.onDecline;
                e.setDeclineCookie && this.setCookie(t, n),
                  r(),
                  o && this.setState({ visible: !1 });
              },
            },
            {
              key: "setCookie",
              value: function (e, t) {
                var n = this.props,
                  o = n.extraCookieOptions,
                  r = n.expires,
                  i = n.sameSite,
                  c = this.props.cookieSecurity;
                void 0 === c && (c = !location || "https:" === location.protocol);
                var a = f(f({ expires: r }, o), {}, { sameSite: i, secure: c });
                i === g.NONE && l().set(x(e), t, a), l().set(e, t, a);
              },
            },
            {
              key: "getCookieValue",
              value: function () {
                var e = this.props.cookieName;
                return C(e);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                switch (this.props.visible) {
                  case S.HIDDEN:
                    return null;
                  case S.BY_COOKIE_VALUE:
                    if (!this.state.visible) return null;
                }
                var n = this.props,
                  o = n.location,
                  r = n.style,
                  i = n.buttonStyle,
                  c = n.declineButtonStyle,
                  l = n.contentStyle,
                  a = n.disableStyles,
                  s = n.buttonText,
                  p = n.declineButtonText,
                  d = n.containerClasses,
                  b = n.contentClasses,
                  y = n.buttonClasses,
                  v = n.buttonWrapperClasses,
                  O = n.declineButtonClasses,
                  h = n.buttonId,
                  g = n.declineButtonId,
                  C = n.disableButtonStyles,
                  k = n.enableDeclineButton,
                  x = n.flipButtons,
                  w = n.ButtonComponent,
                  T = n.overlay,
                  B = n.overlayClasses,
                  E = n.overlayStyle,
                  P = n.ariaAcceptLabel,
                  D = n.ariaDeclineLabel,
                  I = {},
                  _ = {},
                  N = {},
                  A = {},
                  L = {};
                switch (
                  (a
                    ? ((I = u({}, r)),
                      (_ = u({}, i)),
                      (N = u({}, c)),
                      (A = u({}, l)),
                      (L = u({}, E)))
                    : ((I = u({}, f(f({}, this.state.style), r))),
                      (A = u({}, f(f({}, this.state.contentStyle), l))),
                      (L = u({}, f(f({}, this.state.overlayStyle), E))),
                      C
                        ? ((_ = u({}, i)), (N = u({}, c)))
                        : ((_ = u({}, f(f({}, this.state.buttonStyle), i))),
                          (N = u({}, f(f({}, this.state.declineButtonStyle), c))))),
                  o)
                ) {
                  case m.TOP:
                    I.top = "0";
                    break;
                  case m.BOTTOM:
                    I.bottom = "0";
                }
                var R = [];
                return (
                  k &&
                    R.push(
                      t().createElement(
                        w,
                        {
                          key: "declineButton",
                          style: N,
                          className: O,
                          id: g,
                          "aria-label": D,
                          onClick: function () {
                            e.decline();
                          },
                        },
                        p
                      )
                    ),
                  R.push(
                    t().createElement(
                      w,
                      {
                        key: "acceptButton",
                        style: _,
                        className: y,
                        id: h,
                        "aria-label": P,
                        onClick: function () {
                          e.accept();
                        },
                      },
                      s
                    )
                  ),
                  x && R.reverse(),
                  t().createElement(
                    j,
                    {
                      condition: T,
                      wrapper: function (e) {
                        return t().createElement("div", { style: L, className: B }, e);
                      },
                    },
                    t().createElement(
                      "div",
                      { className: "".concat(d), style: I },
                      t().createElement("div", { style: A, className: b }, this.props.children),
                      t().createElement(
                        "div",
                        { className: "".concat(v) },
                        R.map(function (e) {
                          return e;
                        })
                      )
                    )
                  )
                );
              },
            },
          ]) && d(n.prototype, o),
          a
        );
      })(e.Component);
    (T.propTypes = {
      location: i().oneOf(
        Object.keys(m).map(function (e) {
          return m[e];
        })
      ),
      visible: i().oneOf(
        Object.keys(S).map(function (e) {
          return S[e];
        })
      ),
      sameSite: i().oneOf(
        Object.keys(g).map(function (e) {
          return g[e];
        })
      ),
      style: i().object,
      buttonStyle: i().object,
      declineButtonStyle: i().object,
      contentStyle: i().object,
      children: i().any,
      disableStyles: i().bool,
      hideOnAccept: i().bool,
      hideOnDecline: i().bool,
      onAccept: i().func,
      onDecline: i().func,
      buttonText: i().oneOfType([i().string, i().func, i().element]),
      declineButtonText: i().oneOfType([i().string, i().func, i().element]),
      cookieName: i().string,
      cookieValue: i().oneOfType([i().string, i().bool, i().number]),
      declineCookieValue: i().oneOfType([i().string, i().bool, i().number]),
      setDeclineCookie: i().bool,
      debug: i().bool,
      expires: i().number,
      containerClasses: i().string,
      contentClasses: i().string,
      buttonClasses: i().string,
      buttonWrapperClasses: i().string,
      declineButtonClasses: i().string,
      buttonId: i().string,
      declineButtonId: i().string,
      extraCookieOptions: i().object,
      disableButtonStyles: i().bool,
      enableDeclineButton: i().bool,
      flipButtons: i().bool,
      ButtonComponent: i().elementType,
      cookieSecurity: i().bool,
      overlay: i().bool,
      overlayClasses: i().string,
      overlayStyle: i().object,
      ariaAcceptLabel: i().string,
      ariaDeclineLabel: i().string,
      acceptOnScroll: i().bool,
      acceptOnScrollPercentage: i().number,
    }),
      (T.defaultProps = {
        disableStyles: !1,
        hideOnAccept: !0,
        hideOnDecline: !0,
        location: m.BOTTOM,
        visible: S.BY_COOKIE_VALUE,
        onAccept: function () {},
        onDecline: function () {},
        cookieName: w,
        cookieValue: !0,
        declineCookieValue: !1,
        setDeclineCookie: !0,
        buttonText: "I understand",
        declineButtonText: "I decline",
        debug: !1,
        expires: 365,
        containerClasses: "CookieConsent",
        contentClasses: "",
        buttonClasses: "",
        buttonWrapperClasses: "",
        declineButtonClasses: "",
        buttonId: "rcc-confirm-button",
        declineButtonId: "rcc-decline-button",
        extraCookieOptions: {},
        disableButtonStyles: !1,
        enableDeclineButton: !1,
        flipButtons: !1,
        sameSite: g.LAX,
        ButtonComponent: function (e) {
          var n = e.children,
            o = (function (e, t) {
              if (null == e) return {};
              var n,
                o,
                r = (function (e, t) {
                  if (null == e) return {};
                  var n,
                    o,
                    r = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (n = i[o]),
                    t.indexOf(n) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
              }
              return r;
            })(e, s);
          return t().createElement("button", o, n);
        },
        overlay: !1,
        overlayClasses: "",
        ariaAcceptLabel: "Accept cookies",
        ariaDeclineLabel: "Decline cookies",
        acceptOnScroll: !1,
        acceptOnScrollPercentage: 25,
      });
    const B = T;
  })(),
    (module.exports = o);
})();


/***/ }),

/***/ "./node_modules/tiny-skeleton-loader-react/dist/index.es.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-skeleton-loader-react/dist/index.es.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SkeletonLoader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:\"\";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}";
var css = {"skeleton":"styles_skeleton__tyzRD","skeleton-progress":"styles_skeleton-progress__aezri"};
styleInject(css_248z);

function SkeletonLoader(_a) {
    var _b = _a.width, width = _b === void 0 ? "100%" : _b, _c = _a.height, height = _c === void 0 ? "1em" : _c, _d = _a.background, background = _d === void 0 ? "#E9ECEF" : _d, _e = _a.radius, radius = _e === void 0 ? "4px" : _e, _f = _a.circle, circle = _f === void 0 ? false : _f, _g = _a.block, block = _g === void 0 ? true : _g, _h = _a.style, style = _h === void 0 ? {} : _h, _j = _a.as, Tag = _j === void 0 ? "div" : _j;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tag, { className: css.skeleton, style: __assign({ width: width, height: height, background: background, borderRadius: circle ? "50%" : radius, display: block ? "block" : "inline-block" }, style) }, "\u200C"));
}


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./public/page-data/sq/d/3262260831.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3262260831.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"allSettingsJson":{"settings":[{"siteMetadata":{"author":"Konstantin Münster","avatar":{"childImageSharp":{"gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADv0lEQVR42o1V7W9TZRQvRv6CffCrJr6EDpa1t2/bMhZT/aLGyAebKi7r+nZvX0BlJoJZMgKECYKZYtfe29uWlm2YjbkgCWaKCUZeFBMI4NAY5IMD7brQFdbZlbbPz5yns3tFfJJfc3qfc373POc553c1mlWr57F/rYAxWeezxNoCTaqdwG1jsm4t37XWup6eqoMohE2SSR5w6yIZR32IOTaEwVEfYm5dOEN75MMpqzHrVpHRj1eQ13sNcq9XHy25tCr85hjr7RiD2n2Gqd3fsg8dY/BbYoz2yIf7CvL6pRy11dbW87hoUAYDQgoevVz5/ND5cm56DpUKw4P5MgfZ9+7+jdG+i2XREK349SlQDMUuVmGhDqJJ6fULKQRbYqUbP9wGrbMjEzjgPIkd1hQH2WeHJ/jeb5f/xA5rshQQjoFil3JpvMZIk2RQi25dBD9f+IPl781j31uj2Pr0J1Q3uBrDHGTTsz32EeRzBVwav8k66/vhM8aKxFHLMtCUSLo2qBjo/b5Mb9/35ii2PvMpfOYoRKMMr1AF2fSs/dkj2P36MPa3j8HZECpvMx+DZFCTVTJrss6rV9IBSxy56Tn29cA12J/sg98SrRGthGRU4NzUj86N/fSfSQYVoqCmeUtJzUqrRydj++Y4suk8+/1qGoHmGJwN/TxwJZlHH4G7MQyPLsLhbgwzj16my4FkUlo1ol6xBcwJdGhDlV2vDGF2poBb16fWJKVAOvLbbYka3nk+AZ9ZrfgMcYhGxabxW2I21yYFhz1fVrpfO46uF5LI5+Zx6/ryTAntzx2BsusMv+XifAmFuQcoFkoId41XOrUytrUctWmCm+OtHdoQDnlPITuVZ++/NIj3XkyBbnpppj6TAmdDGB+8OoTU3u8g7/wGXyWuEDfb3/4Fr2ewOd667FIykzlG2T2MVDIpcDWE4dCGsOWJj3A6fhl307PMZ4yBc1gX5pzaxl0fw/DHF3jbZKfyoHrWSK8tkgaaVX70vW+c4Ec/fvBcmUaROGp9SE0pCmrRZ4ril0u3GTnOLJB2EWmummmwJQb7U33YYz+B+9kCJi5OMhoGGopaYy8bPX0S71qPln796Q5/+2y2gO4tixd188pfGE9d5Xs3fpzkY0qzv2r0auJgUgb9uhQkk8rFYfrOfU662zaCnS8PYiYzx8Vh6MC5skcnVzjZSnF4mHxRTUm+DrpO4rB4inVoP2PUd8HmBJcvUXiEfK0psPpIxqENMddGGX5THO7GyP8W2P/8BEhm2e4xyHafQX7kJ+AfnMkMtrN5aJwAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/05712cc0881a7e09b19bf39b77fdd28a/90cd3/gatsby.png","srcSet":"/static/05712cc0881a7e09b19bf39b77fdd28a/d06fd/gatsby.png 25w,\\n/static/05712cc0881a7e09b19bf39b77fdd28a/5861f/gatsby.png 50w,\\n/static/05712cc0881a7e09b19bf39b77fdd28a/90cd3/gatsby.png 100w,\\n/static/05712cc0881a7e09b19bf39b77fdd28a/614dc/gatsby.png 200w","sizes":"(min-width: 100px) 100px, 100vw"},"sources":[{"srcSet":"/static/05712cc0881a7e09b19bf39b77fdd28a/78997/gatsby.webp 25w,\\n/static/05712cc0881a7e09b19bf39b77fdd28a/9afd2/gatsby.webp 50w,\\n/static/05712cc0881a7e09b19bf39b77fdd28a/e64f1/gatsby.webp 100w,\\n/static/05712cc0881a7e09b19bf39b77fdd28a/8b00d/gatsby.webp 200w","type":"image/webp","sizes":"(min-width: 100px) 100px, 100vw"}]},"width":100,"height":100}}},"bio":"This biography will be used in the footer area of an article and can contain some more details about the author.","description":"Web development assignment for Zluri","language":"en","siteUrl":"https://gatsby-starter-portfolio-minimal-theme.netlify.app/","thumbnail":null,"title":"Web development assignment for Zluri","social":{"behance":"https://behance.com","github":"https://github.com/konstantinmuenster","medium":"https://konstantinmuenster.medium.com","linkedin":"https://www.linkedin.com/in/konstantin-muenster/","mail":"mailto:mail@konstantin.digital","twitter":null,"mastodon":null,"hashnode":null,"devto":null,"instagram":null,"youtube":null,"twitch":null,"gitlab":null,"stackoverflow":null,"buymeacoffee":null,"discord":null,"dribble":null,"goodreads":null,"patreon":null,"reddit":null,"untappd":null,"facebook":null},"titleTemplate":"%s · Portfolio Minimal"}}]}}}');

/***/ }),

/***/ "./public/page-data/sq/d/948380417.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/948380417.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"allSettingsJson":{"settings":[{"siteConfiguration":{"featureToggles":{"useCookieBar":false,"useDarkModeAsDefault":false,"useDarkModeBasedOnUsersPreference":true},"logo":{"text":"WD Internship","image":null,"imageDark":null},"navigation":{"ctaButton":{"label":"Resume","openNewTab":true,"url":"/resume.pdf"},"footer":[{"label":"Privacy","url":"/privacy"},{"label":"Imprint","url":"/imprint"}],"header":[{"label":"About","url":"/#about"},{"label":"Blog","url":"/blog"},{"label":"Features","url":"/#features"},{"label":"Github","url":"/#github"}]}}}]}}}');

/***/ })

};
;
//# sourceMappingURL=component---node-modules-gatsby-theme-portfolio-minimal-src-templates-article-listing-index-tsx.js.map