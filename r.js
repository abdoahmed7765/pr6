let form = document.querySelector(".search");
let input = document.querySelector("#text_search")
let div = document.querySelectorAll(".x");
let bar = document.querySelector(".bar");
let side = document.querySelector(".aside");
let bb = 0;
let present1 = document.querySelector(".Targets .state .persent");
let present2 = document.querySelector(".Targets .state:nth-child(2) .persent");
let present3 = document.querySelector(".Targets .state:nth-child(3) .persent");
let span1 = document.querySelector(".Targets .state .persent span");
let span2 = document.querySelector(".Targets .state:nth-child(2) .persent span");
let span3 = document.querySelector(".Targets .state:nth-child(3) .persent span");
let c = document.querySelector(".n");
c.innerHTML = bb;
document.onscroll = () => {
    if (scrollY >= "700.5454711914062") {
        present1.style.animation = "w 1s forwards";
        present2.style.animation = "w 1s 0.5s forwards";
        present3.style.animation = "w 1s 1s forwards";
        span1.style.animation = "w95 1s 0.5s forwards";
        span2.style.animation = "w70 1s 1s forwards";
        span3.style.animation = "w55 1.5s 0.5s forwards";
        
    }
}
form.addEventListener("submit",(e) => {
    e.preventDefault();
})
input.onkeyup = () => {
    div.forEach((d) => {
        if (d !== div["0"]) {
            d.id = d.firstElementChild.firstElementChild.innerHTML;
        }
        if (!d.id.toLowerCase().includes(input.value.toLowerCase())) {
            d.style.display = "none";
            div["0"].style.display = "block";            
        } else {
            d.style.display = "block";
        }
    });
};
bar.onclick = () => {
    side.classList.toggle("sidex");
    if (bar.classList.contains("fa-times")) {
        bar.classList.replace("fa-times","fa-bars");
    } else {
        bar.classList.replace("fa-bars","fa-times");
    }
};
const countryName = new Intl.DisplayNames([navigator.language], { type: 'region' });
