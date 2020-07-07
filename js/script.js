lightbox.option({
  showImageNumberLabel: false,
  wrapAround: true,
  disableScrolling: true
})

document.getElementById("search").addEventListener("keyup", inputValue);

function inputValue() {
  let keyWord = document.getElementById("search").value.toUpperCase();
  console.log(keyWord);
}
  let caption = document.getElementsByTagName("a")[0].getAttribute("data-title");
  console.log(caption);




  // console.log(inputText);
// const myHeading = document.querySelector("h1");
// myHeading.textContent = inputText;