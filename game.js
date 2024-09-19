$(document).ready(function() {
    var wordCount = 0;
    var charCount = 0;
    var prompt = "";
    var char = '';
    var charElem = null;
    var wordElem = null;
    var index = 0;
    var wordIndex = 0;
    var backspace = 0;
    var firstKey = false;
    var errors = 0;
    $("#score").hide();

    function createSpansWithUniqueIds(text) {
        // Clear the div before adding new spans

        $('#text').empty();
        let wordIndex = 0;
        let word = null;
        let newWord = true;
        // Loop through each character in the string
        for (let i = 0; i < text.length; i++) {
            if(newWord){
                word = $('<span></span>').attr('id', 'word-' + wordIndex);
                wordIndex++;
                newWord = false;
            }
            // Create a new span element
            let span = $('<span></span>')
                .text(text[i])                          // Set the text of the span
                .attr('id', 'char-' + i);              // Set a unique ID for each span
            
            
            if(text[i] === ' '){
                $('#text').append(word);
                $('#text').append(span);
                newWord = true;

            }else{
                word.append(span); 
            }    
           
        }
    }
    function getRandomEntry() {
        $.getJSON('prompts.json', function(data) {
            // Check if data is an array and not empty
            if (Array.isArray(data) && data.length > 0) {
                // Get a random index
                var randomIndex = Math.floor(Math.random() * data.length);
                // Get the random entry
                var randomEntry = data[randomIndex];
                // Display the result
                wordCount = randomEntry.wordcount;
                charCount = randomEntry.charcount;
                prompt = randomEntry.text;
                char = prompt[0];
                createSpansWithUniqueIds(randomEntry.text);
                charElem = $("#char-0");
                wordElem = $("#word-0");
                charElem.addClass("cursor");
                wordElem.addClass("underline");
                
            } 
        }).fail(function() {
            $('#text').html('<p>Error loading JSON data.</p>');
        });
    }
    getRandomEntry();

    $("#charInput").on("keypress", function(event) {
        let charInput = $("#charInput");

        
        
        //right key pressed
        if(event.key === char && backspace === 0){
   
            if(event.key === ' '){
                charElem.addClass("goodInputSpace");
            }else{
                charElem.addClass("goodInput");
            }
            
            if(index < charCount){
                index++;
                let stringId = "char-" + index;

                //removing cursor old char
                charElem.removeClass("cursor");

                //new char
                charElem = $("#"+stringId);
                char = charElem.text();

                //adding cursor to new char
                charElem.addClass("cursor");
                
                

                
            } 
        }else if(event.key !== "Shift" && event.key !== "Backspace"){
            charInput.addClass("error");
            backspace++;
            errors++;
        }
        if(event.key === ' ' && backspace === 0){
            wordIndex++;
            
            //removing underline from old word
            wordElem.removeClass("underline");
            wordElem = $("#word-"+ wordIndex);
            //adding underline to new word
            wordElem.addClass("underline");
            charInput.val("");
            
        }
 
        

    });
    // Detect Backspace key press
    $(document).on('keydown', function(event) {
        let charInput = $("#charInput");
        if(event.key === "Backspace" && backspace > 0){
            backspace--;
            if(backspace === 0){
                charInput.removeClass("error");
            }

        }else if(event.key === "Backspace" && index > 0){
            index--;
            let stringId = "char-" + index;

            
            //removing cursor old char
            charElem.removeClass("cursor");

            

            //new char
            charElem = $("#"+stringId);
            //removing color
            if(charElem.text() === ' '){
                charElem.removeClass("goodInputSpace");
            }else{
                charElem.removeClass("goodInput");
            }
            char = charElem.text();

            //adding cursor to new char
            charElem.addClass("cursor");
        }
    });

    function calculateTypingSpeed(words, time){
        return words/(time/60);
    };
    function calculateAccuracy(words, errors){
        return Math.round(100 - ((errors / words) * 100));
    };

    function timer(){
        var sec = 60;
        var timer = setInterval(function(){
        document.getElementById('timer').innerHTML= sec.toString();
        sec--;
        if (sec < 0) {
            let wpm = calculateTypingSpeed(wordIndex+1, 60).toString();
            let acc = calculateAccuracy(index+1, errors).toString();
            $("#wpm").html(wpm);
            $("#acc").html(acc + "<span>%</span>");
            $("#score").show();
            $("#game").hide();
            clearInterval(timer);
        }else if(index === charCount){
            let wpm = calculateTypingSpeed(wordIndex+1, 60 - sec).toString();
            let acc = calculateAccuracy(index+1, errors).toString();
            $("#wpm").html(wpm);
            $("#acc").html(acc + "<span>%</span>");
            $("#game").hide();
            $("#score").show();
            clearInterval(timer);
        }
    }, 1000);

    };

    $('#charInput').on('keydown', function(event) {
        if (!firstKey) {
            firstKey = true;
            timer();
        }
    });
    $("#btn").on('click', function(){
        location.reload(); // Reloads the current page
    });


});