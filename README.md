# ReactNative_mapApp
call Google Map API in Web platform

# Bug Issued and Discussion

 https://github.com/expo/expo/issues/8921
 
 # Solution Provided
 
 Automatic Updates
 
By default, Expo apps check for an updated bundle every time the app is launched. 

Previously, all Expo Android apps loaded updates in the background, while iOS apps defaulted to updating synchronously during launch. Starting in SDK 26, Expo developers can configure apps to automatically load updates synchronously (with a specific timeout) or asynchronously (with 0 timeout). 

This behavior will be respected across standalone/detached apps on both platforms, as well as the iOS and Android Expo Clients.

Synchronously updating on startup gives you a nice guarantee: your users will always be using the newest version of your app. But this comes at a cost: app startup time will be significantly slower on poor network connections and when downloading new updates.

For consumer apps, we strongly suggest "setting updates".
fallbackToCacheTimeout to 0 in app.json in order to always download updates in the background. 
This ensures the quickest possible launch for users, though sometimes requiring a second launch in order to run the latest version. For convenience, we’ve set this as the default in new project templates starting in SDK 26.

ref doc: https://blog.expo.io/overhauling-the-expo-updates-api-5b99b4dd96df

