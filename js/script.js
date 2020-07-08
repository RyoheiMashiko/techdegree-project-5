//Change option of lightbox 

lightbox.option({
  showImageNumberLabel: false,
  wrapAround: true,
  disableScrolling: true
});

//Add function of serch filter
document.getElementById("search").addEventListener("keyup", inputValue);

function inputValue() {
  let keyWord = document.getElementById("search").value.toUpperCase();
  
  let i;
  for(i = 0; i < 12; i++) {
      let caption = document.getElementsByTagName("a")[i].getAttribute("data-title").toUpperCase(); 
      let match = caption.includes(keyWord);
      console.log(match);
      if( !match )  {
        document.getElementsByTagName("a")[i].style.display = 'none';
      } else {
        document.getElementsByTagName("a")[i].style.display = 'block';
      }
    }
  }

