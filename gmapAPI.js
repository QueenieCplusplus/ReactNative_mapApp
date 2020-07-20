/*Overview

To use the Maps JavaScript API you must have an API key. The API key is a unique identifier that is used to authenticate requests associated with your project for usage and billing purposes.

Get the API key

You must have at least one API key associated with your project.

To get an API key:

Go to the Google Cloud Platform Console.
Click the project drop-down and select or create the project for which you want to add an API key.
Click the menu button  and select APIs & Services > Credentials.
On the Credentials page, click Create credentials > API key. 
The API key created dialog displays your newly created API key.
Click Close. 
The new API key is listed on the Credentials page under API keys. 
(Remember to restrict the API key before using it in production.)
Add the API key to your request

You must include an API key with every Maps JavaScript API request. In the following example, replace YOUR_API_KEY with your API key.

  <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
  type="text/javascript"></script>

Restrict the API key

We strongly recommend that you restrict your API key. Restrictions provide added security and help ensure only authorized requests are made with your API key. There are two restrictions. You should set both:

Application restriction: Limits usage of the API key to either websites (HTTP referrers), web servers (IP addresses), or mobile apps (Android apps or iOS apps). You can select only one restriction from this category, based on the platform of the API or SDK (see GMP APIs by Platform).
Note: If you need to call web, web service, and/or mobile APIs from the same (client-side) app, create and restrict multiple keys.
API restriction: Limits usage of the API key to one or more APIs or SDKs. Requests to an API or SDK associated with the API key will be processed. Requests to an API or SDK not associated with the API key will fail. (The API or SDK must be enabled and must support the application restriction.)
To restrict an API key:

Go to the Google Cloud Platform Console.
Click the project drop-down and select the project that contains the API key you want to secure.
Click the menu button  and select APIs & Services > Credentials.
On the Credentials page, click the name of the API key that you want to secure.
On the Restrict and rename API key page, set the restrictions:
Application restrictions
Select HTTP referrers (web sites).
Add the referrers.
API restrictions
Select Restrict key.
Click Select APIs and select Maps JavaScript API. 
(If the Maps JavaScript API is not listed, you need to enable it.)
If your project uses Places Library, also select Places API. Similarly, if your project uses other services in the JavaScript API (Directions Service, Distance Matrix Service, Elevation Service, and/or Geocoding Service), you must also enable and select the corresponding API in this list.
Click SAVE.
Note: file:// referers need a special representation to be added to the key restriction. The "file://" part should be replaced with "__file_url__" before being added to the key restriction. For example, "file:///path/to/" should be formatted as "__file_url__//path/to/*". After enabling file:// referers, it is recommended you regularly check your usage, to make sure it matches your expectations.

Premium Plan Customers and Migrated Customers

Premium Plan customers and customers who have migrated from the Premium Plan to the Google Maps Platform pay-as-you-go pricing model have the option to use an API key or a client ID to authenticate requests. For more information see Get API Keys Overview in the Premium Plan documentation.*/
