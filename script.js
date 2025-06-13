function googleSearch() {
  var text = document.getElementById("search").value;
  var url = 'http://www.google.com/search?q=' + text;

  window.open(url, "_blank")
  document.getElementById("search").value = null
}

let search = document.getElementById('search')
search.addEventListener('keypress', (event) => {
  if (event.key == "Enter") {
    googleSearch()
  }
})


console.log("Tanmay")