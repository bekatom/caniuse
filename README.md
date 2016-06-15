# caniuse.js. Detect new browser features if it's supported 

Often we are looking new html5 or js features at [caniuse.js](http://caniuse.com/) to 
determine if i can use this feature or not for my production code.

caniuse.js -> It will detect everything in browser side. It can tell us if I am able to 
play mp3 music, use canvas with text api, or use web audio api. 
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
caniuse.inputTypeWeek();

//// & .etc ... 
``` 

#### Installing 
With bower
```bash
bower install caniuse --save
```




