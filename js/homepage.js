class TypeIt {
    constructor(text, container, speed) {
        this.text = text;
        this.container = container;
        this.speed = speed;
        this.current = 0;
    }

    run() {
        const cont = document.querySelector(this.container);
        cont.append(this.text[this.current]);
        this.current++;

        if (this.current < this.text.length) {
            window.setTimeout(() => {
                this.run();
            }, this.speed);

        }
    }
}

var circle1 = anime({
    targets: ['.circle-1'],
    translateY: -18,
    translateX: 44,
    direction: 'alternate',
    loop: true,
    elasticity: 400,
    easing: 'easeInOutElastic',
    duration: 2000,
});

var circle2 = anime({
    targets: ['.circle-2'],
    translateY: 24,
    direction: 'alternate',
    loop: true,
    elasticity: 400,
    easing: 'easeInOutElastic',
    duration: 2000,
});

var circle3 = anime({
    targets: ['.circle-3'],
    translateY: -19,
    direction: 'alternate',
    loop: true,
    elasticity: 400,
    easing: 'easeInOutElastic',
    duration: 2000,
});

var circle4 = anime({
    targets: ['.circle-4'],
    translateY: 24,
    translateX: -44,
    loop: true,
    direction: 'alternate',
    elasticity: 400,
    easing: 'easeInOutElastic',
    duration: 2000,
});


function removeLoader() {
    $("#loader-wrapper").fadeOut(500, function () {
        // fadeOut complete. Remove the loading div
        $("#loader-wrapper").remove(); //makes page more lightweight 
    });
}


$(window).ready(removeLoader);

// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(removeLoader, 20 * 1000);


$(document).ready(function () {

    document.querySelectorAll(".experience-box").forEach(el => el.style.opacity = "0");

    if ($(window).scrollTop() === 0) {

        document.getElementById("btt-button").style.visibility = "hidden";
    }


    const demoText = new TypeIt('Hi! This is Jun Kang.', '.typeText .content', 100);
    demoText.run();

    var cursor = true;
    var speed = 550;

    setTimeout(function () {
        setInterval(() => {
            if (cursor) {
                document.getElementById('cursor').style.opacity = 0;
                cursor = false;
            } else {
                document.getElementById('cursor').style.opacity = 1;
                cursor = true;
            }
        }, speed);
    }, 2500);

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml1 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml2 .letters');
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

    var experienceContent = anime({
        targets: '.experience-box',
        easing: "easeOutExpo",
        opacity: 1,
        duration: 5000,
        autoplay: false,
        delay: anime.stagger(450) // increase delay by 450ms for each elements.
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




});






function scrollAnimation() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


function scrollToTop() {
    var y1 = window.scrollY;
    y1 = y1 - 10000;
    window.scrollTo(0, y1);
    if (y1 > 0) {
        t1 = setTimeout("scrollToTop()", 100);
    }
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



