lightbox.option({
  showImageNumberLabel: false,
  wrapAround: true,
  disableScrolling: true
})

document.getElementById("search").addEventListener("keydown", inputValue);

function inputValue() {
  let keyWord = document.getElementById("search").value.toUpperCase();
  
  let i;
  for(i = 0; i < 12; i++) {
      let caption = document.getElementsByTagName("a")[i].getAttribute("data-title").toUpperCase(); 
      let n = caption.includes(keyWord);
      console.log(n);
      if( n !== true ) {
        document.getElementsByTagName("a")[i].style.display = 'none';
      } else {
        document.getElementsByTagName("a")[i].style.visibility = 'visible';
      }
    }
  }

