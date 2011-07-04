Google-Analytics-URL-Cleanup utilizes the HTML5 History API, where available, to clean up Google Analytics tagging parameters once Google Analytics is done using them.

So, what starts out as:

`http://example.com/index.php?important_value=15&utm_source=foo&utm_medium=bar&utm_campaign=july2011push&vital_parameter=kept&utm_content=ps`

becomes:

`http://example.com/index.php?important_value=15&vital_parameter=kept`

Once Google Analytics runs, these tracking URLs are not helpful, and merely act as blight.

Instructions:

Include after the Google Analytics snippet. That's it. 

Utilizes `history.replaceState()`, so, there's no back button funny business. The URL is just...clean. 