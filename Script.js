// when the user click the viewed btns it will strikethroug
var viewBtns = document.querySelectorAll("#movie-list .viewed");

Array.from(viewBtns).forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const li = e.target.parentElement;
    li.classList.toggle("strikethrough"); // Toggle the 'strikethrough' class
  });
});

// when the user click the deleteBtns it will delet the element
var deleteBtns = document.querySelectorAll("#movie-list .delete");

Array.from(deleteBtns).forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  });
});

// add element

var addBtn = document.getElementById("btns");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const newLi = document.createElement("li");
  const movieName = document.getElementById("fevoriteMovieNameInput").value;

  //   some validation

  if (movieName.trim() === "") {
    document.getElementById("errorMessage").textContent =
      "Movie name can not be empty";
    return;
  } else {
    document.getElementById("errorMessage").textContent = "";
  }

  //name span created
  const nameSpan = document.createElement("span");
  nameSpan.classList.add("name");
  nameSpan.textContent = movieName;
  newLi.appendChild(nameSpan);

  //viewd span created

  const viewedSpan = document.createElement("span");
  viewedSpan.classList.add("viewed");
  viewedSpan.textContent = "Viewed";
  newLi.appendChild(viewedSpan);

  //   delete buton created

  const deleteSpan = document.createElement("span");
  deleteSpan.classList.add("delete");
  deleteSpan.textContent = "Delete";
  newLi.appendChild(deleteSpan);

  // Append the new list item to the list

  const movieList = document
    .getElementById("movie-list")
    .getElementsByTagName("ul")[0];
  movieList.appendChild(newLi);

  //   delet the new added element

  deleteSpan.addEventListener("click", function (e) {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  });

  //   strikethrough
  viewedSpan.addEventListener("click", function (e) {
    const li = e.target.parentElement;
    li.classList.toggle("strikethrough");
  });
});
