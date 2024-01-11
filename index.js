$(document).ready(function() {
    const folder = "https://people.cs.vt.edu/~hadiamjad/images"; // Update with the path to your image folder
    const rotationInterval = 3000; // Time in milliseconds

    $.ajax({
        url: folder,
        success: function (data) {
            console.log(data);
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                    $("#imageCanvas").append("<div class='image-item' style='background-image: url("+ folder + val +")'></div>");
                } 
            });

            let items = $("#imageCanvas .image-item");
            let currentItemIndex = 0;

            items.hide();
            items.eq(currentItemIndex).show();

            setInterval(function() {
                items.eq(currentItemIndex).fadeOut();
                currentItemIndex = (currentItemIndex + 1) % items.length;
                items.eq(currentItemIndex).fadeIn();
            }, rotationInterval);
        }
    });
});
