
$(document).ready(function () {

    document.querySelectorAll(".experience-box").forEach(el => el.style.opacity = "0");
    document.querySelectorAll("#about-me-picture-box").forEach(el => el.style.opacity = "0");
    document.querySelectorAll("#about-me-description").forEach(el => el.style.opacity = "0");

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#navbar").offset().top > 200) {
            $("#navbar").addClass("navbar-collapse");
        } else {
            $("#navbar").removeClass("navbar-collapse");
        }
    };

    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);



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
    var textWrapper = document.querySelector('.experience .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.contact .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.about .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.awards .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    var contactHeader = anime.timeline({ loop: false, autoplay: false })
        .add({
            targets: '.contact .letter',
            scale: [0.3, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: (el, i) => 70 * (i + 1),
        }).add({
            targets: '.contact .line',
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
            offset: '-=875',
            delay: (el, i, l) => 80 * (l - i)
        });

    var experienceHeader = anime.timeline({ loop: false, autoplay: false })
        .add({
            targets: '.experience .letter',
            scale: [0.3, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: (el, i) => 70 * (i + 1),
        }).add({
            targets: '.experience .line',
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
            offset: '-=875',
            delay: (el, i, l) => 80 * (l - i)
        });

    var aboutmeHeader = anime.timeline({ loop: false, autoplay: false })
        .add({
            targets: '.about .letter',
            scale: [0.3, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: (el, i) => 70 * (i + 1),
        }).add({
            targets: '.about .line',
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
            offset: '-=875',
            delay: (el, i, l) => 80 * (l - i)
        });

    var awardsHeader = anime.timeline({ loop: false, autoplay: false })
        .add({
            targets: '.awards .letter',
            scale: [0.3, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: (el, i) => 70 * (i + 1),
        }).add({
            targets: '.awards .line',
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
        element: document.getElementById('experience-div'),
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
        element: document.getElementById('contact-div'),
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


    var IntroWP = new Waypoint({
        element: document.getElementById('about-me-div'),
        offset: '80%',
        handler: function (direction) {
            if (direction === 'up') {
                document.getElementById('nav-about').classList.remove('active');
                document.getElementById('nav-awards').classList.remove('active');
                document.getElementById('nav-experience').classList.remove('active');
                document.getElementById('nav-contact').classList.remove('active');
            }
        }
    })

    var AboutUpWP = new Waypoint({
        element: document.getElementById('about-me-div'),
        offset: 0,
        handler: function (direction) {
            if (direction === 'down') {
                document.getElementById('nav-about').classList.add('active');
                document.getElementById('nav-awards').classList.remove('active');
                document.getElementById('nav-experience').classList.remove('active');
                document.getElementById('nav-contact').classList.remove('active');

            }
        }
    })

    var AboutDownWP = new Waypoint({
        element: document.getElementById('about-me-div'),
        offset: 'bottom-in-view',
        handler: function (direction) {
            if (direction === 'up') {
                document.getElementById('nav-about').classList.add('active');
                document.getElementById('nav-awards').classList.remove('active');
                document.getElementById('nav-experience').classList.remove('active');
                document.getElementById('nav-contact').classList.remove('active');
            }
        }
    })

    var AwardsUpWP = new Waypoint({
        element: document.getElementById('awards-div'),
        offset: 0,
        handler: function (direction) {
            if (direction === 'down') {
                document.getElementById('nav-about').classList.remove('active');
                document.getElementById('nav-awards').classList.add('active');
                document.getElementById('nav-experience').classList.remove('active');
                document.getElementById('nav-contact').classList.remove('active');

            }
        }
    })

    var AwardsDownWP = new Waypoint({
        element: document.getElementById('awards-div'),
        offset: 'bottom-in-view',
        handler: function (direction) {
            if (direction === 'up') {
                document.getElementById('nav-about').classList.remove('active');
                document.getElementById('nav-awards').classList.add('active');
                document.getElementById('nav-experience').classList.remove('active');
                document.getElementById('nav-contact').classList.remove('active');
            }
        }
    })

    var ExperienceUpWP = new Waypoint({
        element: document.getElementById('experience-div'),
        offset: 0,
        handler: function (direction) {
            if (direction === 'down') {
                document.getElementById('nav-about').classList.remove('active');
                document.getElementById('nav-awards').classList.remove('active');
                document.getElementById('nav-experience').classList.add('active');
                document.getElementById('nav-contact').classList.remove('active');

            }
        }
    })

    var ExperienceDownWP = new Waypoint({
        element: document.getElementById('experience-div'),
        offset: 'bottom-in-view',
        handler: function (direction) {
            if (direction === 'up') {
                document.getElementById('nav-about').classList.remove('active');
                document.getElementById('nav-awards').classList.remove('active');
                document.getElementById('nav-experience').classList.add('active');
                document.getElementById('nav-contact').classList.remove('active');
            }
        }
    })


    var ContactUpWP = new Waypoint({
        element: document.getElementById('contact-div'),
        offset: 0,
        handler: function (direction) {
            if (direction === 'down') {
                document.getElementById('nav-about').classList.remove('active');
                document.getElementById('nav-awards').classList.remove('active');
                document.getElementById('nav-experience').classList.remove('active');
                document.getElementById('nav-contact').classList.add('active');

            }
        }
    })

    var ContactDownWP = new Waypoint({
        element: document.getElementById('contact-div'),
        offset: 'bottom-in-view',
        handler: function (direction) {
            if (direction === 'up') {
                document.getElementById('nav-about').classList.remove('active');
                document.getElementById('nav-awards').classList.remove('active');
                document.getElementById('nav-experience').classList.remove('active');
                document.getElementById('nav-contact').classList.add('active');
            }
        }
    })


    setInputFilter(document.getElementById("contactPhone"), function (value) {
        return /^\d*\.?\d*$/.test(value); 
    });

    setInputFilter(document.getElementById("contactName"), function (value) {
        return /^[A-Za-z]+$/.test(value); 
    });


});





function scrollAnimation() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


function scrollToTop() {
    $('html,body').animate({ scrollTop: 0 }, 1000);
    return false;
}

function scrollToAbout() {
    $('html').animate({ scrollTop: $('#about-me-div').offset().top + 50 }, 500);
    return false;
}

function scrollToAwards() {
    $('html,body').animate({ scrollTop: $('#awards-div').offset().top + 50 }, 500);
    return false;
}

function scrollToExperience() {
    $('html,body').animate({ scrollTop: $('#experience-div').offset().top + 50 }, 500);
    return false;
}

function scrollToContact() {
    $('html,body').animate({ scrollTop: $('#contact-div').offset().top + 50 }, 500);
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


// Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}


// When the user scrolls the page, execute functions
window.onscroll = function () { scrollAnimation(); };



