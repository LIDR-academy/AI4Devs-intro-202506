
document.addEventListener("DOMContentLoaded", function () {
    // Create input field
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter a string";
    document.body.appendChild(input);

    // Create container for animation
    const animationContainer = document.createElement("div");
    animationContainer.style.marginTop = "10px";
    document.body.appendChild(animationContainer);

    // Create reverse button
    const reverseButton = document.createElement("button");
    reverseButton.textContent = "Reverse String";
    reverseButton.style.display = "none";
    reverseButton.style.marginTop = "10px";
    document.body.appendChild(reverseButton);

    // Create result section
    const resultSection = document.createElement("div");
    resultSection.style.marginTop = "10px";
    document.body.appendChild(resultSection);

    let animationInterval;

    input.addEventListener("input", function () {
        const str = input.value;
        clearInterval(animationInterval);
        animationContainer.textContent = "";
        resultSection.textContent = "";

        if (str.length >= 3) {
            reverseButton.style.display = "inline-block";
            let reversed = "";
            let index = str.length - 1;

            animationInterval = setInterval(() => {
                if (index >= 0) {
                    reversed += str[index];
                    animationContainer.textContent = reversed;
                    index--;
                } else {
                    clearInterval(animationInterval);
                }
            }, 100);
        } else {
            reverseButton.style.display = "none";
        }
    });

    reverseButton.addEventListener("click", function () {
        const reversed = input.value.split("").reverse().join("");
        resultSection.innerHTML = `<strong>Your reversed string is:</strong> <b>${reversed}</b>`;
    });
});
