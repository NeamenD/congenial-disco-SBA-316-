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
