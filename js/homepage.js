
$(document).ready(function () {

    document.querySelectorAll(".experience-box").forEach(el => el.style.opacity = "0");
    document.querySelectorAll("#about-me-picture-box").forEach(el => el.style.opacity = "0");
    document.querySelectorAll("#about-me-description").forEach(el => el.style.opacity = "0");

    if ($(window).scrollTop() === 0) {

        document.getElementById("btt-button").style.visibility = "hidden";
    }

    new TypeIt(".typeText .content", {
        speed: 100
    })
        .type("Hi! This is Jun Kang.")
        .pause(1200)
        .delete(9, { speed: 200 })
        .type("my resume.")
        .pause(1200)
        .delete(7, { speed: 200 })
        .type("portfolio.")
        .pause(1200)
        .delete(13, { speed: 200 })
        .type("Jun Kang.")
        .go();





    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml1 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml2 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml3 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml4 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    var contactHeader = anime.timeline({ loop: false, autoplay: false })
        .add({
            targets: '.ml2 .letter',
            scale: [0.3, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: (el, i) => 70 * (i + 1),
        }).add({
            targets: '.ml2 .line',
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
            offset: '-=875',
            delay: (el, i, l) => 80 * (l - i)
        });

    var experienceHeader = anime.timeline({ loop: false, autoplay: false })
        .add({
            targets: '.ml1 .letter',
            scale: [0.3, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: (el, i) => 70 * (i + 1),
        }).add({
            targets: '.ml1 .line',
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
            offset: '-=875',
            delay: (el, i, l) => 80 * (l - i)
        });

    var aboutmeHeader = anime.timeline({ loop: false, autoplay: false })
        .add({
            targets: '.ml3 .letter',
            scale: [0.3, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: (el, i) => 70 * (i + 1),
        }).add({
            targets: '.ml3 .line',
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
            offset: '-=875',
            delay: (el, i, l) => 80 * (l - i)
        });

    var awardsHeader = anime.timeline({ loop: false, autoplay: false })
        .add({
            targets: '.ml4 .letter',
            scale: [0.3, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: (el, i) => 70 * (i + 1),
        }).add({
            targets: '.ml4 .line',
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
            offset: '-=875',
            delay: (el, i, l) => 80 * (l - i)
        });

    var experienceContent = anime({
        targets: '.experience-box',
        easing: "easeOutExpo",
        opacity: 1,
        duration: 5000,
        autoplay: false,
        delay: anime.stagger(450) // increase delay by 450ms for each elements.
    });

    var aboutMePicture = anime({
        targets: '#about-me-picture-box',
        easing: "easeOutExpo",
        opacity: 1,
        duration: 5000,
        autoplay: false,
    });

    var aboutMeDescription = anime({
        targets: '#about-me-description',
        easing: "easeOutExpo",
        opacity: 1,
        duration: 5000,
        autoplay: false,
    });


    var experienceHeaderWP = new Waypoint({
        element: document.getElementById('info-div'),
        handler: function () {
            experienceHeader.play();
            experienceHeaderWP.destroy();
        },
        offset: 500
    });


    var experienceContentWP = new Waypoint({
        element: document.getElementById('experience-diagram'),
        handler: function () {
            experienceContent.play();
            experienceContentWP.destroy();
        },
        offset: 500
    });

    var contactHeaderWP = new Waypoint({
        element: document.getElementById('third-div'),
        handler: function () {
            contactHeader.play();
            contactHeaderWP.destroy();
        },
        offset: 500
    });

    var aboutmeHeaderWP = new Waypoint({
        element: document.getElementById('about-me-div'),
        handler: function () {
            aboutmeHeader.play();
            aboutmeHeaderWP.destroy();
        },
        offset: 500
    });

    var awardsHeaderWP = new Waypoint({
        element: document.getElementById('awards-div'),
        handler: function () {
            awardsHeader.play();
            awardsHeaderWP.destroy();
        },
        offset: 500
    });

    var aboutMePictureWP = new Waypoint({
        element: document.getElementById('about-me-picture-box'),
        handler: function () {
            aboutMePicture.play();
            aboutMePictureWP.destroy();
        },
        offset: 500
    });

    var aboutMeDescriptionWP = new Waypoint({
        element: document.getElementById('about-me-description'),
        handler: function () {
            aboutMeDescription.play();
            aboutMeDescriptionWP.destroy();
        },
        offset: 500
    });





});





function scrollAnimation() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


function scrollToTop() {
    $('html,body').animate({ scrollTop: 0 }, 200);
    return false; 
}

function scrollToBottom() {
    $('html,body').animate({ scrollTop: $('#copyright').offset().top }, 200);
    return false;
}
    




$(document).scroll(function () {
    if ($(window).scrollTop() === 0) {
        document.getElementById("btt-button").style.visibility = "hidden";
    }
    else {
        document.getElementById("btt-button").style.visibility = "visible";
    }
});


// When the user scrolls the page, execute functions
window.onscroll = function () { scrollAnimation(); };



