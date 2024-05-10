// JavaScript for accordion functionality
document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll(".heading");
    headings.forEach(heading => {
        heading.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
});

// JavaScript for button click events
clicker1.addEventListener("click", () => {
    document.getElementById("text").textContent ="First button clicked";
});

clicker2.addEventListener("click", () => {
    document.getElementById("text").textContent ="Second button clicked";
});

clicker3.addEventListener("click", () => {
    document.getElementById("text").textContent ="Third button clicked";
});

// JavaScript function to validate if input field is empty
function isEmpty() {
    const text = document.getElementById('anyText').value;
    const error = document.getElementById('errorText');
    if (text.trim() === "") {
        error.style.display = 'block';
        return false;
    } else {
        error.style.display = 'none';
        return true;
    }
}
