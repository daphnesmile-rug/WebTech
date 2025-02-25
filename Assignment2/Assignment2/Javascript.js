document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll("img");

    images.forEach(img => {
        let resetButton = document.createElement("button");
        resetButton.innerText = "Reset";
        resetButton.style.display = "block";
        resetButton.style.marginTop = "5px";
        img.parentNode.appendChild(resetButton);

        // Function which enlarges image size while keeping button accessible
        function enlargeImg() {
            img.style.transform = "scale(1.5)";
            img.style.transition = "transform 0.25s ease";
            img.style.position = "relative";
            img.style.zIndex = "10";
            resetButton.style.position = "relative";
            resetButton.style.zIndex = "20";
        }

        // Function resets image size
        function resetImg() {
            img.style.transform = "scale(1)";
            img.style.transition = "transform 0.25s ease";
            img.style.position = "static";
            resetButton.style.position = "static";
        }

        // Assign event listeners
        img.addEventListener("click", enlargeImg);
        resetButton.addEventListener("click", resetImg);
    });
});

// Source: https://www.geeksforgeeks.org/how-to-make-the-images-bigger-when-clicked/