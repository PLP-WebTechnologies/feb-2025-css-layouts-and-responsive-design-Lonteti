document.addEventListener("DOMContentLoaded", function() {
    // Function to change text content dynamically
    function changeText() {
        document.getElementById("description").textContent = "The text has been changed dynamically!";
    }

    // Function to modify CSS styles dynamically
    function changeStyle() {
        let heading = document.getElementById("main-heading");
        heading.style.color = "blue";
        heading.style.fontSize = "2em";
    }

    // Function to add or remove an element when a button is clicked
    function toggleElement() {
        let contentBox = document.getElementById("content-box");
        if (contentBox) {
            contentBox.remove();
        } else {
            let newDiv = document.createElement("div");
            newDiv.id = "content-box";
            newDiv.className = "content";
            newDiv.textContent = "This is a dynamically added content box.";
            document.body.appendChild(newDiv);
        }
    }

    // Assign functions to global scope
    window.changeText = changeText;
    window.changeStyle = changeStyle;
    window.toggleElement = toggleElement;
});