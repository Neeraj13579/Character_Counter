const textArea = document.getElementById("textarea");
const totalChar = document.getElementById("total-char");
const remainChar = document.getElementById("remaining-char");
const warningMsg = document.getElementById("warning-msg");

const maxLength = textArea.getAttribute("maxlength");

// Function to update the counter and styles
function updateCounter() {
    const currentLength = textArea.value.length;
    totalChar.innerText = currentLength;
    remainChar.innerText = maxLength - currentLength;

    if (currentLength >= maxLength) {
        remainChar.style.color = "red";
        textArea.style.border = "2px solid red";
        warningMsg.style.display = "block"; // Show warning message
    } else {
        remainChar.style.color = "black";
        textArea.style.border = "2px solid grey";
        warningMsg.style.display = "none"; // Hide warning message
    }
}

// Event listener for input
textArea.addEventListener("input", updateCounter);

// Initial counter update
updateCounter();
