
// initial array of topics 
animalArr = [
    "kittens",
    "puppies",
    "pandas",
    "otters",
    "turtles",
    "lizards",
];

// Create function to render buttons 
makeButtons = function () {
    for (var i = 0; i < animalArr.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("animal-btn btn btn-secondary btn-sm m-2");
        newButton.attr("animal-name", animalArr[i]);
        newButton.text(animalArr[i]);
        $(".buttonsContainer").append(newButton);
    }
}
// call function to make buttons on page load
$(document).ready(function () {
    makeButtons();
});

$("#new-button").on("click", function (event) {
    $(".animal-btn").remove();
    event.preventDefault();
    var addAnimal = $("#new-animal").val();
    animalArr.push(addAnimal);
    console.log(animalArr);
    $("#new-animal").empty();
    makeButtons();
    // add line here to reset input box after new animal is submitted
    // add if statement to prevent duplicate entries
})


$("btn").on("click", function () {
    console.log("Working!")
    // In this case, the "this" keyword refers to the button that was clicked
    // var animal = $(this).attr("animal-name");

    // // Constructing a URL to search Giphy for the name of the person who said the quote
    // var queryURL = `https://api.giphy.com/v1/gifs/search?q=${animal}&api_key=5NdVZLtsxDvp2KFVFvh1jLs3rmrGwfqL&limit=10`;

    // // Performing our AJAX GET request
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // })
    //     // After the data comes back from the API
    //     .then(function (response) {
    //         // Storing an array of results in the results variable
    //         var results = response.data;

    //         // Looping over every result item
    //         for (var i = 0; i < results.length; i++) {

    //             // Only taking action if the photo has an appropriate rating
    //             if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
    //                 // Creating a div for the gif
    //                 var gifDiv = $("<div>");

    //                 // Storing the result item's rating
    //                 var rating = results[i].rating;

    //                 // Creating a paragraph tag with the result item's rating
    //                 var p = $("<p>").text("Rating: " + rating);

    //                 // Creating an image tag
    //                 var animalImage = $("<img>");

    //                 // Giving the image tag an src attribute of a proprty pulled off the
    //                 // result item
    //                 personImage.attr("src", results[i].images.fixed_height.url);

    //                 // Appending the paragraph and personImage we created to the "gifDiv" div we created
    //                 gifDiv.append(p);
    //                 gifDiv.append(animalImage);

    //                 // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
    //                 $("#gifs-container").prepend(gifDiv);
    //             }
    //         }
    //     });
});


// Create ajax call to search for button's topic on click 

// Create function to add input to array and render buttons again 

// 
