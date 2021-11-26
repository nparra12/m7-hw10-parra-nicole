// acquire references to page elements
var nameSpan = document.querySelector('span')
//var nameEl = document.getElementById('username')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

var cookies = document.cookie.split(';')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE

//retrieve name
cookieStore.get('username')
  .then(function(cookieObj){
    if (cookieObj){
      nameSpan.textContent = cookieObj.value
    }
  })
//retrieve note
var noteContent = localStorage.getItem('notes')

if(noteContent){
  textarea.textContent = noteContent
}
nameSpan.onblur = function(){
  document.cookie = 'username' + textContent + ';'
}


formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
 
  // save textarea's content to localstorage
  // YOUR CODE HERE
  var text = textarea.value
  console.log({text})
  localStorage.setItem('notes',text)

  // triggers thumbs up animation - left off here
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  textarea=''
  // Clear localstorage's content
  localStorage.clear()
  // YOUR CODE HERE
 

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp