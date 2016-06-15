# caniuse.js. Detect new browser features if it's supported 

Often we are looking new html5 or js features at [caniuse.js](http://caniuse.com/) to 
determine if i can use this feature or not for my production code.

caniuse.js -> It will detect everything in browser side. It can tell us if I can 
play mp3 music, use server sent events, or use drag and drop. 
supports or not new HTML5 or JS features, returns true || false. You can check may things, type it in your browser console 
```javascript
caniuse.audio();
caniuse.ogg();
caniuse.mp3();
caniuse.wav();
caniuse.canvasTextApi();
caniuse.datalist();
caniuse.formConstraintValidation();
caniuse.iframeSandBox();
caniuse.iframeSrcDoc();
caniuse.inputTypeTel();
caniuse.inputTypeTime();
caniuse.inputTypeDateTime();
caniuse.inputDateTimeLocal();
caniuse.inputTypeMonth();
caniuse.crossDocumentMessaging();
caniuse.dragAndDrop();
caniuse.fileApi();
caniuse.geolocation();
caniuse.history();
caniuse.localStorage();
caniuse.microdata();
caniuse.offlineWebApplication();
caniuse.serverSentEvents();
caniuse.sessionStorage();
caniuse.svg();
caniuse.svgInTextHtml();
caniuse.undo();
caniuse.indexDB();

//// & .etc ... 
``` 

#### Installing 
With bower
```bash
bower install caniuse --save
```




