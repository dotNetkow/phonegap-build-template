PhoneGap Build Template
---

A generic template that provides all the scaffolding for PhoneGap Build apps. Note that PhoneGap Build is constantly improving, so always consult the [official documentation](https://build.phonegap.com) at  in case of any questions or errors in the code here.

This template app uses Kendo UI Mobile. As mentioned by Telerik in other sample GitHub projects:
"Please visit http://www.kendoui.com/download to get a trial version of Kendo UI Mobile. 
This bootstrap application uses CDN versions which are not meant for production use and will violate the 
terms of use if used in a production application."

## Why use this?
* You can zip up the folder and upload it to PhoneGap Build without unnecessary bloat being added to the compiled app.
* Should you decide to move away from the PG Build service and wish to compile the app manually using a specific platform SDK, you're all set - PhoneGap/Cordova files are always placed into a "www" folder.
* It will automatically be ready for use with the PhoneGap Developer App, a great tool that allows you to debug your app locally on a real device.  Each time you save a file from within this folder, the files get reloaded on the test device.  This is a lot faster than uploading to PhoneGap Build, waiting for the app to build, then reloading it!

## Make a Copy of the Template for Your App
Create a new repository in your Git provider, such as "my-new-app".

Starting in your root source code directory, make a bare clone of the PhoneGap Build Template repo:

```
git clone --bare https://github.com/dotNetkow/phonegap-build-template
```

Navigate into the newly created phonegap-build-template folder and mirror-push it to the new repo "my-new-app":

```
cd phonegap-build-template
git push --mirror https://github.com/yourUsername/my-new-app.git
```

Remove the temporary local copy

```
cd ..
rm -rf phonegap-build-template
```

Begin writing your app!

## Organization
This project is organized in a clean, easy to follow directory structure. Additionally, it's ready for use with the [PhoneGap Developer App](http://app.phonegap.com) - develop locally then test on your mobile devices without the need for PhoneGap Build, app store certificates, etc. For more details, please [see post here](http://netkow.com/post/97489515860/open-source-phonegap-build-template-available) on my blog.

### .cordova folder
PhoneGap App configuration files.  This can be ignored if you don’t intend to use the PhoneGap Developer App.

### \tests folder
All JavaScript unit tests.

### \certs folder
All the app platform keystores and certificates that are used to digitally sign your app.

### \www folder
All code files for the app itself.

1. index.html: The a single HTML page representing your app.
2. config.xml: The one file that PhoneGap Build uses for configuration when creating your app.  Included in this are the platforms to build for, deployment preferences, icon/splash screen image references, permissions required (Internet access, location awareness, etc.), and plugins used.
3. icon.png: You can create many icons for each device resolution, but there must always be an icon in the root of the app code directory at 512x512 pixels.
4. splash.png: Similar to icon.png, if you use splash screens in your app a root image must reside in the main directory.
5. \icons folder: This contains all icon sets, neatly arranged into separate folders for each platform (\android, \ios, and on).
6. \splash folder: Exactly like the icons folder, but for splash screens.
7. \img folder: This contains all static images used in the app, from loading gifs to other custom pics.
8. \styles folder: This contains all CSS files.
9. \scripts folder: All JavaScript code libraries.
	* controller.js: Main app controller responsible for UI interaction, data storage, etc.
	* phoneAppPlugins.js: PhoneGap plugin helper code. [Borrowed from here.](https://github.com/dotNetkow/phonegap-build-app-plugins)
	* dataRepository.js: Encapsulates any data source/API for dependency injection purposes.
	* viewModel.js: If using MVVM, place your view model here.
	* Any other JS file/library.