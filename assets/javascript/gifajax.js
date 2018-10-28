$(document).ready(function () {

    function callOtherDomain() {
        if (invocation) {
            invocation.open('GET', url, true);
            invocation.onreadystatechange = handler;
            invocation.send();
        }
    }
    callOtherDomain()
    var invocation = new XMLHttpRequest();

    var url = "https://api.giphy.com/v1/gifs/search";



    var topics = ["Super Natural", "Adventure Time", "Lost", "The Walking Dead", "Breaking Bad", "Rick and Morty"]
    var apiKey = "OC8I7C9cUz4LD70kPD7K0G7c4yCqhUYH";
    topics.forEach(function (element) {
        var button = $("<button>");
        button.addClass("Topics");
        button.attr("data-name", element)
        button.text(element);
        $("#Topics").prepend(button);


    })

    $("#submit").on("click", function () {
        $("#Topics").empty();
        var newTopic = $("#tagField").val();
        topics.push(newTopic);
        topics.forEach(function (element) {
            var button = $("<button>");
            button.addClass("Topics");
            button.attr("data-name", element)
            button.text(element);
            $("#Topics").prepend(button);


        })

        console.log(topics)
    })

    function postGIF(response) {
        $("#gifHolder").empty();
        response.data.forEach(function (index) {
            var gifRow = $("<div>");
            var gifInRow = $("<img>").attr("src", index.images.original_still.url).addClass("gif");
            gifInRow.attr("data-state", "still");
            gifInRow.attr("data-animate", index.images.original.url);
            gifInRow.attr("data-still", index.images.original_still.url);
            var rating = $("<div>").text(index.rating);
            gifRow.append(gifInRow, rating);
            $("#gifHolder").append(gifRow);
            console.log(index.content_url);
        })
    }



    $("#Topics").on("click", ".Topics", function (event) {
        console.log("hi")
        var TVshow = $(this).attr("data-name");
        var apiKeyWord = TVshow.split(" ").join("+")
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + apiKeyWord + "&limit=10&offset=0&rating=PG-13&lang=en&api_key=OC8I7C9cUz4LD70kPD7K0G7c4yCqhUYH"
        console.log(event)
        $.ajax({
                url: queryURL,
                method: 'GET'

            })
            .then(function (response) {
                console.log(response);
                postGIF(response);
            })
    })

    $("#gifHolder").on("click", ".gif", function () {
        console.log("hi")
        var state = $(this).attr("data-state");

        if (state === "still") {
            var animateData = $(this).attr("data-animate")
            $(this).attr("src", animateData);
            $(this).attr("data-state", "animate");
        } else {
            var stillData = $(this).attr("data-still")
            $(this).attr("src", stillData);
            $(this).attr("data-state", "still");
        }
    });


    //we need a varible to hold all of the tags that well turn into buttons

    //add a on click event so we can call ajax to pull posts with tags and append them to the page

    //create a input section to add words to the variable for our tags and append the button to the page so we may use it

    //make sure to add rating so we dont include any explict gifs
})