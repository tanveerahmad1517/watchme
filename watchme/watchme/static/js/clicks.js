// This simple code lets me track all of your click data
var clicks = [0, 0, 0];

$("#click-card").hide();
var hiding_clicks = $("#click-card").is(":hidden")

function clicked (event) {
    clicks[event.button]++;

    if (clicks[0] >= 10 && hiding_clicks) {
        $("#click-card").show();

        clicks_str = "";

        clicks_str += "Left-clicks: " + clicks[0] + "<br>";
        clicks_str += "Middle-clicks: " + clicks[1] + "<br>";
        clicks_str += "Right-clicks: " + clicks[2];
        
        $("#clicks-text").html(clicks_str);
    }
}

document.addEventListener('mousedown', clicked);
