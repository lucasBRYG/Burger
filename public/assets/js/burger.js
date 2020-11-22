// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour").on("click", function (event) {
        let id = $(this).data("id");
        let newDevour = $(this).data("newDevour");

        let newDevourState = {
            eaten: newDevour
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to", newDevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newBurger = {
            name: $("#burger").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".devourButton").on("click", function(event) {


        //testing out to find what syntax i can use to change the devoured property
        console.log("butts");

        // console.log(this.attr("id")); did not work

        // console.log(event.target.attr("data-id")); did not work

        // console.log($(event).target.attr(("data-id"))); did not work

        console.log($(this).attr("data-id"));

        // console.log(event.target.attr("data-devour")); did not work

        // console.log($(event).target.attr("data-devour")); did not work

        console.log($(this).attr("data-devour"));


        // let condition = true;

        // $.ajax("/api/burgers")
    });
});