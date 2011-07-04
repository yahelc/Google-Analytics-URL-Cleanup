/*
* Instructions: Place *after* the Google Analytics Snippet, so this _gaq.push executes after the _gaq.push(["_trackPageview"]); call.
*/
_gaq.push(function() {
	if (window.history && history.replaceState && location.search.match(/utm_/)) {
		var query = {};
		location.search.replace(/([^?=&]+)(=([^&]*))?/g, function($0, $1, $2, $3) {
			if (! ($1).match(/^utm_/)) {
				query[$1] = $3;
			}
		});
		var newstate = (function(val) {
			var s = [];
			for (var key in val) {
				if (val.hasOwnProperty(key)) {
					s.push(key + "=" + val[key]);
				}
			}
			return location.pathname + ((s.length) ? "?" + s.join("&") : "");
		} (query));
			if (document.cookie.indexOf("__utmz=") != -1) {
				history.replaceState({},
				"", newstate);
			}
	}
});
