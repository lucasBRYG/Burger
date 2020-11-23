$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            name: $("#burger").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $(".devourButton").on("click", function(event) {

        let id = $(this).attr("data-id");

        let devoured = {
            devoured: !JSON.parse($(this).attr("data-devour"))
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
        }).then(function() {
            console.log("changed devoured to", devoured);
            location.reload();
        });
    });
});