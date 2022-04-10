document.addEventListener("mousemove",parallax);

function parallax(e){
    document.querySelector("object").forEach(function(move)
    {
            var moving_value =move.getAttribute("data-value");
            var x = (e.clientX * moving_value);
            var y = (e.clientY * moving_value);

            move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";

    }
    );

    


}