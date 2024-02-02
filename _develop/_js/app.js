const container = document.querySelector('.container'),
    wrapper = document.querySelector('.wrapper')
;

const soundsLoad = new Sounds();

/* Develop */
function introDev() {
    const introDevLoad = new Intro();
    introDevLoad.introStart();

    const clickLoadGame = document.getElementById('clickLoadGame'),
        clickAuthors = document.getElementById('clickAboutAuthors'),
        clickAbout = document.getElementById('clickAboutLibrary'),
        wrapperTop = document.querySelector('.wrapper__top'),
        wrapperTitle = document.querySelector('.wrapper__title'),
        wrapperBottom = document.querySelector('.wrapper__bottom'),
        wrapperCenter = document.querySelector('.wrapper__center'),
        wrapperBack = document.querySelector('.wrapper__intro'),
        backgroundMusicID = document.getElementById('backgroundMusicID'),
        choiceCatLoad = new ChoiceCategory()
    ;

    clickLoadGame.addEventListener('click', () => {
        // soundsLoad.rightAnswer('assets/games/magicFeather/sounds/cp_progressClear.ogg');

        // Music Background
        // if (backgroundMusicID === null) {
        //     soundsLoad.backgroundMusicLoad('assets/games/magicFeather/sounds/mf_ambient.ogg');
        //     localStorage.setItem('backgroundMusic', JSON.stringify(1));
        // } else if (backgroundMusicID.paused || localStorage.getItem('backgroundMusic') === '0') {
        //     backgroundMusicID.pause();
        //     localStorage.setItem('backgroundMusic', JSON.stringify(0));
        // }

        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.className = 'wrapper';
                wrapper.removeChild(wrapperTop);
                wrapper.removeChild(wrapperCenter);
                wrapper.removeChild(wrapperBottom);
                wrapper.removeChild(wrapperBack);
                wrapper.appendChild(container);
                introDevLoad.dialogStart();
            }
        });
        tl
            .to(wrapperTop, {
                duration: 0.4,
                autoAlpha: 0,
                y: '-3%'
            })
            .to(wrapperCenter, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                y: '-3%'
            })
            .to(wrapperBottom, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                y: '5%'
            })
            .to(wrapperBack, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                // scale: 0.98
            })
        ;
    });

    clickAuthors.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.className = 'wrapper';
                wrapper.removeChild(wrapperTop);
                // wrapper.removeChild(wrapperTitle);
                wrapper.removeChild(wrapperBottom);
                wrapper.removeChild(wrapperBack);
                wrapper.appendChild(container);
                authorsStart();
            }
        });
        tl
            .to(wrapperTop, {
                duration: 0.4,
                autoAlpha: 0,
                y: '-3%'
            })
            // .to(wrapperTitle, {
            //     duration: 0.7,
            //     delay: -0.5,
            //     autoAlpha: 0,
            //     y: '5%'
            // })
            .to(wrapperBottom, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                y: '5%'
            })
            .to(wrapperBack, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                scale: 0.98
            })
        ;
    });

    clickAbout.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.className = 'wrapper';
                wrapper.removeChild(wrapperTop);
                // wrapper.removeChild(wrapperTitle);
                wrapper.removeChild(wrapperBottom);
                wrapper.removeChild(wrapperBack);
                wrapper.appendChild(container);
                aboutStart();
            }
        });
        tl
            .to(wrapperTop, {
                duration: 0.4,
                autoAlpha: 0,
                y: '-3%'
            })
    //         .to(wrapperTitle, {
    //             duration: 0.7,
    //             delay: -0.5,
    //             autoAlpha: 0,
    //             y: '5%'
    //         })
            .to(wrapperBottom, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                y: '5%'
            })
            .to(wrapperBack, {
                duration: 0.7,
                delay: -0.5,
                autoAlpha: 0,
                scale: 0.98
            })
        ;
    });
}

function dialogDev() {
    const dialogDevLoad = new Intro();
    dialogDevLoad.dialogStart();
}

/* Запускаем категории */


function init() {
    introDev();
    // dialogDev();
    // categoryDev();
    // citizenCategoryDev();
    // chicheroneCategory();
    // authorsStart();
}

init();