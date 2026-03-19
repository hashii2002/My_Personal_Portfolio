var typed= new Typed(".text",{
    strings: ["Undergraduate Student" , "Frontend Developer" , "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})

//=========================  menu open view handdle ===============================

const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

let navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active');
        
        menuIcon.querySelector('i').classList.remove('fa-xmark');
        menuIcon.querySelector('i').classList.add('fa-bars');
    };
});

// ========================== My Skills Section Animation ===============================
const skillsSection = document.querySelector(".my-skills");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillsSection.classList.add("animate");
        } else {
            skillsSection.classList.remove("animate"); 
        }
    });
}, {
    threshold: 0.3
});

observer.observe(skillsSection);

// ======================== Dark Mode and Light Mode apply =======================

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        toggleBtn.classList.remove("fa-moon");
        toggleBtn.classList.add("fa-sun");
    } else {
        toggleBtn.classList.remove("fa-sun");
        toggleBtn.classList.add("fa-moon");
    }
});
