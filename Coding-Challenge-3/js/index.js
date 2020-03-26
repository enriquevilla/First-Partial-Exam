function submitEvent() {
    document.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector(".userName");
        const comment = document.querySelector("#userComment");
        const commentSection = document.querySelector(".seccionComments");
        if (input.value !== "" && comment.value !== "") {
            let newComment = document.createElement("div");
            newComment.innerHTML += `
                <span id="nameP">
                    ${input.value}
                    <button class="deleteButton">
                        Delete
                    </button>
                </span>
                <p id="commentsTitle">
                    ${comment.value}
                </p>
            `;
            commentSection.appendChild(newComment);
            input.value = "";
            comment.value = "";
        }
    });
    document.addEventListener("click", (event) => {
        if (event.target.matches(".deleteButton")) {
            event.target.parentNode.parentNode.remove();
        }
    });
}

function init() {
    submitEvent();
}

init();