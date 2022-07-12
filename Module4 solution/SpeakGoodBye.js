(function(window){
    var speakword="GoodBye ";
    var speakgoodbye=(name) => {
        console.log(speakword + name);
    }
    window.speakgoodbye=speakgoodbye;
})(window);