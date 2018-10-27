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
        console.log(button);

    })

    // function postGIF(){
    //     var gifRow = $("<tr>");
    //     var gifInRow = $("<td>").html(data.embed_url);
    //     console.log(gifInRow, gifRow)
    // }

    $(".Topics").on("click", function (event) {
        var TVshow = $(this).attr("data-name")
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=apple&limit=25&offset=0&rating=PG-13&lang=en&api_key=OC8I7C9cUz4LD70kPD7K0G7c4yCqhUYH"
        console.log(queryURL)
        $.ajax({
                URL: queryURL,
                // method: 'GET'

            })
            .then(function (response) {
               console.log(response)

            })
    })
  

    

    // function printbtn() {
    //     for (var i = 0; i < topics.length; i++) {
    //         var topicDiv = $("<div>")
    //         var button = $("<button>");
    //         console.log(topics[i])

    //     }
    // }
    //  printbtn()



    //we need a varible to hold all of the tags that well turn into buttons

    //add a on click event so we can call ajax to pull posts with tags and append them to the page

    //create a input section to add words to the variable for our tags and append the button to the page so we may use it

    //make sure to add rating so we dont include any explict gifs
})