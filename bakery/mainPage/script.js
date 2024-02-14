//! ham menu
const navbar = document.querySelector(".navbar");

const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
                !e.composedPath().includes(menuBtn) &&
                !e.composedPath().includes(navbar)
        ){
            navbar.classList.remove("active");
        }
    });
});


//!slide product
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
evt.preventDefault();
scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehaviour = "auto";
});

nextBtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft -= 900;
});




//!test
function validation(){
    var email = 'selin@gmail.com';
    var email = document.getElementById('email').value;
    if((email ==email)) {
        swal("Thank you for subscribing to our newsletter!")
    }
    else{
        sweetAlert("Ooopss...", "Please enter the correct email")
    }
}
