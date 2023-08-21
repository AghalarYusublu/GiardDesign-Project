// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    // nav links click event
    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}

const intSearch = document.querySelector('#inpt_search');
const navSearch = document.querySelector('.search');

// intSearch.addEventListener('focus', function() {
//     navSearch.classList.add('active');
// });

// intSearch.addEventListener('blur', function() {
//     if (navSearch.val().length == 0)
//         navSearch.classList.remove('active');
// });

const loadMoreBtn = document.querySelector("#loadMoreBtn");
let projectImgs = document.querySelector(".project-imgs");
let imgs = document.querySelectorAll(".project-imgs figure img");

const projectImgArr = [
    "images/Photo 2.png",
    "images/Photo 3.png",
    "images/Photo 4.png",
    "images/Photo 5.png",
    "images/Photo 6.png",
    "images/Photo 7.png",
    "images/Photo 8.png",
    "images/Photo 9.png",
    "images/Photo 10.png",
    "images/Photo 11.png",
]

loadMoreBtn.addEventListener("click", function() {


    projectImgArr.forEach(img => {
        let data = `
        <figure>
            <img src="${img}" alt="" data-bs-toggle="modal" data-bs-target="#exampleModal" />
        </figure>
        `
        projectImgs.innerHTML += data;
    })

})

const modalImg = document.querySelector(".modal-body img");

imgs.forEach(img => {
    img.addEventListener("click", function() {
        modalImg.src = this.src;
    })
})