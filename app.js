let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('nav-links');

window.onscroll=() =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector("nav-links[href *=" + id + "]").classList.add ('active');
            });

        };
    });
};


let button =document.querySelector(".arrow"),
    links=document.querySelector(".nav-links");

button.addEventListener("click",()=>{
        links.classList.toggle("display");
    });
