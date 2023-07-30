    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    // write text on canvas for sticker
    function sticker(){        
        // variables for top, middle, bottom text inputs
        var top = document.getElementById("top-line").value;
        var mid = document.getElementById("mid-line").value;
        var bot = document.getElementById("bot-line").value;
        
        // variable to get selected option index
        var fontSizeIndex = document.getElementById("font-size").selectedIndex;
        // variable for font size
        var fontSize = document.getElementsByClassName("font-size")[fontSizeIndex].value;
        
        // variable to get selected option index
        var fontColorIndex = document.getElementById("font-color").selectedIndex;
        // variable for font color
        var fontColor = document.getElementsByClassName("font-color")[fontColorIndex].value;

        // variable to get selected option index
        var busColorIndex = document.getElementById("bus-color").selectedIndex;
        // variable for bus color
        var busColor = document.getElementsByClassName("bus-color")[busColorIndex].value;

        // set the value of image src to value of selected bus color
        document.getElementById("campervan-image").src = busColor;

        // font color from font color variable
        context.fillStyle = fontColor;
        // font size from font size variable and font
        context.font = fontSize + " roboto";
        // fill the text inputs on canvas
        context.fillText(top, 185, 115);
        context.fillText(mid, 185, 140);
        context.fillText(bot, 185, 165);

        // clear the canvas so it doesn't overlap
        context.clearRect(0, 0, canvas.width, canvas.height);

        // redraw the canvas
        context.fillText(top, 185, 115);
        context.fillText(mid, 185, 140);
        context.fillText(bot, 185, 165);
    }

    // function for calculating price and size
    function calculate() {
        var top = document.getElementById("top-line").value;
        var mid = document.getElementById("mid-line").value;
        var bot = document.getElementById("bot-line").value;

        var fontSizeIndex = document.getElementById("font-size").selectedIndex;
        var fontSize = document.getElementsByClassName("font-size")[fontSizeIndex].innerHTML;

        // conditional statement for the number of lines used
        var number_of_lines;
        if  (top.length > 0 && bot.length > 0){
            number_of_lines = 3;
        } else if ((top.length > 0 && mid.length > 0) || (bot.length > 0 && mid.length > 0)) {
            number_of_lines = 2;
        } else if (top.length > 0 || mid.length > 0 || bot.length > 0){
            number_of_lines = 1;
        } else {
            number_of_lines = 0;
        }

        // conditional statement for line height and character width
        var line_height, character_width;
        if (fontSize == "small"){
            line_height = 20;
            character_width = 10;
        } else if (fontSize == "medium"){
            line_height = 30;
            character_width = 15;
        } else if (fontSize == "large"){
            line_height = 40;
            character_width = 20;
        }

        // conditonal statement to work out line with most characters
        var length_of_longest_line;
        if (top.length >= mid.length && top.length >= bot.length) {
            length_of_longest_line = top.length;
        } else if (mid.length >= top.length && mid.length >= bot.length) {
            length_of_longest_line = mid.length;
        } else {
            length_of_longest_line = bot.length;
        }
        
        // formula for height
        var height = number_of_lines * line_height;
        // formula for width
        var width = length_of_longest_line * character_width;
        // formula for cost
        var cost = height * width * 0.01;

        // variables for alert message
        var alertSizeMsg = "Size: " + width + "cm x " + height + "cm";
        var alertCostMsg = "Cost: £" + cost.toFixed(2);

        // conditional alerts for value and size
        if (cost > 0){
            alert(alertSizeMsg + "\r\n" + alertCostMsg);
        } else {
            alert("Please enter text to get a quote.");
        }

    }