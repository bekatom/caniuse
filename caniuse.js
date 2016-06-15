(function(window){

function CanIUse(){


    this._createElement = function(el){
      return document.createElement(el);
    };

    this._createAudio = function(){
      return document.createElement('audio');
    }

    this._createInput = function(){
      return document.createElement('input');
    }

    this.browserTest = function(){
        console.log("browser test");
    };

    this.audio = function(){
      return !!this._createAudio().canPlayType;
    }

    this.ogg = function(){
        var ogg = this._createAudio();
        return !!(ogg.canPlayType && ogg.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));
    };

    this.mp3 = function(){
        var mp3 =  this._createAudio();
        return !!(mp3.canPlayType && mp3.canPlayType('audio/mpeg;').replace(/no/, ''));
    };

    this.wav = function(){
      var wav = this._createAudio();
      return !!(wav.canPlayType && wav.canPlayType('audio/wav; codecs="1"').replace(/no/, ''));
    };

    this.acc = function(){
      var a = this._createAudio()
      return !!(a.canPlayType && a.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, ''));
    };

    this.canvas = function(){
      return !!this._createElement('canvas').getContext;
    };

    this.canvasTextApi  = function(){
      var c = this._createElement('canvas');
      return c.getContext && typeof c.getContext('2d').fillText == 'function';
    };

    this.command = function(){
      return 'type' in this._createElement('command')
    };

    this.datalist = function(){
      return 'options' in this._createElement('datalist')
    };

    this.datails = function(){
      return 'open' in this._createElement('details');
    };

    this.formConstraintValidation = function(){
      return 'noValidate' in this._createElement('form')
    };

    this.iframeSandBox = function(){
      return 'sandbox' in this._createElement('iframe')
    };

    this.iframeSrcDoc = function(){
      return 'srcdoc' in this._createElement('iframe')
    };

    this.inputAutoFocus = function(){
      return 'autofocus' in this._createInput();
    };

    this.inputPlaceholder = function(){
      return 'placeholder' in this._createInput();
    };

    this.textareaPlaceholder = function(){
      return 'placeholder' in this._createElement('textarea')
    };

    this.inputTypeColor = function(){
      var i = this._createInput();
      i.setAttribute('type', 'color');
      return i.type !== 'text';
    };

    this.inputTypeEmail = function(){
      var i = this._createInput();
      i.setAttribute('type', 'email');
      return i.type !== 'text';
    };

    this.inputTypeNumber = function(){
      var i = this._createInput();
      i.setAttribute('type', 'number');
      return i.type !== 'text';
    };

    this.inputTypeRange = function(){
      var i = this._createInput();
      i.setAttribute('type', 'range');
      return i.type !== 'text';
    };

    this.inputTypeSearch = function(){
      var i = this._createInput();
      i.setAttribute('type', 'search');
      return i.type !== 'text';
    };

    this.inputTypeTel = function(){
      var i = this._createInput();
      i.setAttribute('type', 'tel');
      return i.type !== 'text';
    };

    this.inputTypeUrl = function(){
      var i = this._createInput();
      i.setAttribute('type', 'url');
      return i.type !== 'text';
    };

    this.inputTypeDate = function(){
      var i = this._createInput();
      i.setAttribute('type', 'date');
      return i.type !== 'text';
    };

    this.inputTypeTime = function(){
      var i = this._createInput();
      i.setAttribute('type', 'time');
      return i.type !== 'text';
    };

    this.inputTypeDateTime = function(){
      var i = this._createInput();
      i.setAttribute('type', 'datetime');
      return i.type !== 'text';
    };


    this.inputDateTimeLocal = function(){
      var i = this._createInput();
      i.setAttribute('type', 'datetime-local');
      return i.type !== 'text';
    };

    this.inputTypeMonth = function(){
      var i  = this._createElement();
      i.setAttribute('type', 'month');
      return i.type !== 'text';
    };

    this.inputTypeWeek = function(){
      var i = this._createElement();
      i.setAttribute('type', 'week');
      return i.type !== 'text';
    };


}

var caniuse =  new CanIUse();
window.caniuse = caniuse;


})(window);
