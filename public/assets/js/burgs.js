// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
console.log(newDevoured)
    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgs/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurg = {
      name: $("#bg").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgs", {
      type: "POST",
      data: newBurg
    }).then(
      function () {
        console.log("created new burg");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


});