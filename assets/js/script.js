$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("YmX3y45LU3JEYdQPg");

        emailjs.sendForm('service_q55v8sn', 'template_oy2stpe', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',   
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Sanny Garin";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Data Analytics", "Data Science" ,"Data Warehousing", "Data Engineering" ],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

async function fetchDataLang(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills_lang.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

async function fetchDatadb(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skillsdb.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

async function fetchDatabigdata(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skillsbigdata.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

async function fetchDatabi(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skillsbi.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}



function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>` 
    });
    skillsContainer.innerHTML = skillHTML;
}

function showSkillsLang(skills_lang) {
    let skillsContainer = document.getElementById("skillsContainerLang");
    let skillHTML = "";
    skills_lang.forEach(skill_lang => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill_lang.icon} alt="skill" />
                <span>${skill_lang.name}</span>
              </div>
            </div>` 
    });
    skillsContainer.innerHTML = skillHTML;
}

function showSkillsdb(skills_db) {
    let skillsContainer = document.getElementById("skillsContainerdb");
    let skillHTML = "";
    skills_db.forEach(skill_db => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill_db.icon} alt="skill" />
                <span>${skill_db.name}</span>
              </div>
            </div>` 
    });
    skillsContainer.innerHTML = skillHTML;
}

function showSkillsbigdata(skills_bigdata) {
    let skillsContainer = document.getElementById("skillsContainerbigdata");
    let skillHTML = "";
    skills_bigdata.forEach(skill_bigdata => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill_bigdata.icon} alt="skill" />
                <span>${skill_bigdata.name}</span>
              </div>
            </div>` 
    });
    skillsContainer.innerHTML = skillHTML;
}

function showSkillsbi(skillsbi) {
    let skillsContainer = document.getElementById("skillsContainerbi");
    let skillHTML = "";
    skillsbi.forEach(skillbi => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skillbi.icon} alt="skill" />
                <span>${skillbi.name}</span>
              </div>
            </div>` 
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="./assets/images/projects/${project.image}.${project.type}" alt="project">
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchDataLang().then(data => {
    showSkillsLang(data);
});

fetchDatadb().then(data => {
    showSkillsdb(data);
});

fetchDatabigdata().then(data => {
    showSkillsbigdata(data);
});

fetchDatabi().then(data => {
    showSkillsbi(data);
});



fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
function loader() {
    document.querySelector('.loader-container').style.display = 'none';
}
function fadeOut() {
    setInterval(loader, 500);
}
window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// // Start of Tawk.to Live Chat
// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
// })();
// // End of Tawk.to Live Chat


// <!--Start of Tawk.to Script-->
//<script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/6731aa444304e3196ae00061/1icd027f2';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
//</script>
//<!--End of Tawk.to Script-->


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
