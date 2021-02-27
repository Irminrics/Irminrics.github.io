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

    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        document.getElementById("mobile-block").style.visibility = "visible";
    }

    window.mobileAndTabletcheck = function () {
        var check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        if (check == true) {
            document.getElementById("mobile-block").style.visibility = "visible";
        }
    };

    const demoText = new TypeIt('Hello! This is Jun Kang.', '.typeText .content', 100);
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



