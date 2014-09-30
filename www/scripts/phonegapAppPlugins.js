/*
	phonegapAppPlugins.js

	A wrapper class for PhoneGap Build plugins. The goal is to abstract all plugin code into 
	one centralized place while also performing all sanity checks so that your PhoneGap App will run smoothly 
	in a compiled app or locally in the browser.
	It calls equivalent browser methods if plugins are not available or worst case, does nothing 
	because it's unnecessary (i.e. when testing the app locally in the browser, you do not want to run 
	Google Analytics).

	NOTE: Not all plugin methods have been implemented, but can easily be added.  
	Remove already implemented plugins if not needed.

	Source from: https://github.com/dotNetkow/phonegap-build-app-plugins
*/

// PhoneGap uses window.plugins, so use the next obvious namespace.
window.appPlugins = window.appPlugins || {};

/* 
	Encapsulates Core "org.apache.cordova.dialogs" plugin.
	Specifically, the navigator.notification namespace.
	https://build.phonegap.com/plugins/622
 */
(function(ns) {
	
	// alertCallback = optional
	ns.alert = function(message, alertCallback) {
		if (typeof alertCallback === 'undefined') {
			alertCallback = function() { };
		}

		if (navigator.notification !== undefined) {
			navigator.notification.alert(message, alertCallback);
		}
		else {
			alert(message);
			alertCallback();
		}
	};
}(window.appPlugins.dialog = window.appPlugins.dialog || {}));

/*
	Encapsulates Core "org.apache.cordova.network-information" plugin.
	Specifically, the navigator.connection namespace.
	https://build.phonegap.com/plugins/626
*/
(function(ns) {
	ns.isOnline = function() {
		if (navigator.connection === undefined) { return true; }
	
		if (navigator.connection.type == Connection.NONE) {
			return false;
		}
		else { return true;	}
	}
}(window.appPlugins.networkInfo = window.appPlugins.networkInfo || {}));

/*
	Encapsulates 3rd party Google Analytics plugin.
	Specifically, window.plugins.gaPlugin namespace.
	
*/
(function(ns) {
	var gaPlugin;

	// NOTE: must be called within PhoneGap "onDeviceReady" method
	ns.init = function(analyticsCode) {
		if (window.plugins !== undefined && window.plugins.gaPlugin !== undefined) {
			gaPlugin = window.plugins.gaPlugin;
			gaPlugin.init(successHandler, errorHandler, analyticsCode, 10);		
		}
		else {
			console.log("NOTE: Google Analytics plugin not found.");
		}
	};

	ns.exit = function() {
		if (typeof gaPlugin != 'undefined') {
			gaPlugin.exit(function() {}, function() {});
		}
	};

	ns.trackEvent = function(category, eventAction, eventLabel, eventValue) {
		if (typeof gaPlugin != 'undefined') {
			gaPlugin.trackEvent(successHandler, errorHandler, category, eventAction, 
				eventLabel, eventValue);
		}
	};

	ns.trackButtonClick = function(eventLabel, eventValue) {
		appPlugins.ga.trackEvent("Button", "Click", eventLabel, eventValue);
	}

	function successHandler(success) {
		console.log("GA success: " + success);
	}

	function errorHandler(error) {
		console.log("GA failure: " + error);
	}
}(window.appPlugins.ga = window.appPlugins.ga || {}));