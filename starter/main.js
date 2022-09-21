

// alert("i have been coding since 12")

// basic ES5 function declaration
// function (){}

var myname = "Dj RM"
function popsomething() {
    alert( myname + " i have been coding since 12")
}

// console.log shows things typed in the console
// console.log(myname)
// understanding the DOM
// console.log(document)

// document.querySelector(".ourpagebody").style.background = "blue"

// var ourbody = document.querySelector(".ourpagebody")
// ourbody.style.background = "black"

// changing the harmburger
var hamburger = document.querySelector(".hamburger-container")
console.log(hamburger)

var mobilelinkscontainer = document.querySelector('.mobile-links-container')

function addandremove() {
    hamburger.classList.toggle("showburger")
    mobilelinkscontainer.classList.toggle('showmobilelinks')
}