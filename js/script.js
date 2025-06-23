
const submet = document.querySelector('#comment_btn');

submet.addEventListener('click', () => {
  const commentBox = document.querySelector('#comment_box');

  const commentPlace = document.querySelector('#comment_place');

  const commentBoxValue = commentBox.value.trim(); 

  const formError = document.querySelector("#formError");


  if (commentBoxValue === "") {
    formError.textContent = "Comment are required.";
    return;
  }

  commentBox.value = ''; // Clear textarea

  const makePtag = document.createElement('p');

  makePtag.innerText = commentBoxValue;

  commentPlace.appendChild(makePtag);
});
// ============================================


// const commentForm = document.getElementById("commentForm");
//   const commentList = document.getElementById("commentList");
//   const formError = document.getElementById("formError");

//   commentForm.addEventListener("submit", function(event) {
//     event.preventDefault(); // Stop form from submitting

//     const username = document.getElementById("username").value.trim();
//     const commentText = document.getElementById("commentText").value.trim();

//     formError.textContent = "";

//     if (!username || !commentText) {
//       formError.textContent = "Both name and comment are required.";
//       return;
//     }

//     const commentBox = document.createElement("div");
//     commentBox.classList.add("comment-box");

//     commentBox.innerHTML = `
//       <h4>${username}</h4>
//       <p>${commentText}</p>
//     `;

//     commentList.prepend(commentBox); // Add newest comment on top

//     // Clear form
//     commentForm.reset();
//   });

