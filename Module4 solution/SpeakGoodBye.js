(function(window){
    var speakword="GoodBye ";
    var speakgoodbye=function(name){
        console.log(speakword +name );
    }
    window.speakgoodbye=speakgoodbye;
})(window);