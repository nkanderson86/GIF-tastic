
// initial array of topics 
animalArr = [
    "Gettin Jiggy With It",
    "James Brown",
    "Michael Jackson",
    "Prince",
    "Morris Day",
    "Rick James",
    "Boogie",
    "Thriller",
];

// Create function to render buttons 
makeButtons = function () {
    for (var i = 0; i < animalArr.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("animal-btn btn btn-secondary m-2 text-uppercase");
        newButton.attr("animal-name", animalArr[i]);
        newButton.text(animalArr[i]);
        $(".buttonsContainer").append(newButton);
    }
}

// on click event for adding new animals to the list
$("#new-button").on("click", function (event) {
    $(".animal-btn").remove();
    event.preventDefault();
    var addAnimal = $("#new-animal").val();
    animalArr.push(addAnimal);
    console.log(animalArr);
    $("#new-animal").val("");
    makeButtons();
    // add line here to reset input box after new animal is submitted
    // add if statement to prevent duplicate entries
})

// function to hit GIPHY API and return image along with certain attributes
fetchGIF = function () {
    console.log("working");
    // Create ajax call to search for button's topic on click
    var animal = $(this).attr("animal-name");
    var queryURL = `https://api.giphy.com/v1/gifs/search?q=${animal}&api_key=5NdVZLtsxDvp2KFVFvh1jLs3rmrGwfqL&limit=10`;

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            var results = response.data

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>").addClass("justify-content-between m-3");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating).addClass("text-uppercase");
                var animalGIF = $("<img>");
                animalGIF.attr("src", results[i].images.fixed_height_still.url)
                animalGIF.attr("data-still", results[i].images.fixed_height_still.url);
                animalGIF.attr("data-animate", results[i].images.fixed_height.url);
                animalGIF.attr("data-state", "still");
                animalGIF.addClass('animal-image');

                // Append GIFs to newly created div
                gifDiv.append(animalGIF);
                gifDiv.append(p);


                // Prepend GIFs to container 
                $("#gifs-container").prepend(gifDiv);
            }
        })
}

// function to toggle between animated and still images
animateGIF = function () {
    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
};

// on click listener for all animal buttons to call GIPHY
$(document).on("click", ".animal-btn", fetchGIF);

// on click listener to toggle between animated and still 
$(document).on("click", ".animal-image", animateGIF)

// call function to make buttons on page load
$(document).ready(function () {
    makeButtons();
})