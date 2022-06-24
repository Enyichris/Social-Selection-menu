const menuEL = document.querySelector(".menu");
const socialListEl = document.querySelector(".social-list");
const liEls = document.querySelectorAll(".social-list li");
const menuTextEl = document.querySelector(".menu p")
 


menuEL.addEventListener("click", () => {
    socialListEl.classList.toggle("hide");
    menuEL.classList.toggle("rotate");
})


liEls.forEach(liEl =>{
    liEl.addEventListener("click", () => {
        menuTextEl.innerHTML = liEl.innerHTML
        socialListEl.classList.add("hide");
        menuEL.classList.toggle("rotate");
    })
})
