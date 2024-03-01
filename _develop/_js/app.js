const container = document.querySelector('.container'),
    wrapper = document.querySelector('.wrapper')
;

const soundsLoad = new Sounds();

/* Intro */
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
        introFeather = document.getElementById('introFeather'),
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
                writerStart();
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
                wrapper.removeChild(wrapperCenter);
                authorsStart();
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
                autoAlpha: 0
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

    clickAbout.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.className = 'wrapper';
                wrapper.removeChild(wrapperTop);
                // wrapper.removeChild(wrapperTitle);
                wrapper.removeChild(wrapperBottom);
                wrapper.removeChild(wrapperBack);
                wrapper.appendChild(container);
                wrapper.removeChild(wrapperCenter);
                aboutStart();
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
                autoAlpha: 0
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
}

/* Authors */
function authorsStart() {
    const authorsLoad = new About(),
        arrowBackLoad = new ArrowsAll()
    ;

    authorsLoad.aboutAuthors('Сценарист',
        'Инна Ямщикова',
        'Художники',
        'Елена Расторгуева',
        'Анастасия Полякова',
        'Программист',
        'Александр Суворов');

    const containerAbout = document.querySelector('.container__wrapper_about'),
        introAboutBack = document.querySelector('.wrapper__service'),
        wrapperTopAbout = document.querySelector('.wrapper__top'),
        wrapperBottom = document.createElement('div')
    ;

    wrapperBottom.className = 'wrapper__bottom';
    wrapper.appendChild(wrapperBottom);

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    wrapperBottom.appendChild(arrowBackClick);

    arrowBackClick.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(wrapperBottom);
                container.removeChild(containerAbout);
                wrapper.removeChild(introAboutBack);
                wrapper.removeChild(wrapperTopAbout);
                wrapper.className = 'wrapper';
                introDev();
            }
        });
        tl
            .to(wrapperTopAbout, {
                duration: 0.4,
                autoAlpha: 0,
                y: '-3%'
            })
            .to([containerAbout, arrowBackClick], {
                autoAlpha: 0,
                delay: '-0.1'
            })
            .to(introAboutBack, {
                autoAlpha: 0,
                delay: '-0.1',
                // scale: 0.98
            })
        ;
    });
}

/* About */
function aboutStart() {
    const aboutLoad = new About(),
        arrowBackLoad = new ArrowsAll()
    ;

    aboutLoad.aboutLibrary('МБУК г.о. Самара «Самарская муниципальная информационно-библиотечная система» была создана в декабре 1986 года. На сегодняшний день в ее составе&nbsp;– Центральная городская библиотека имени Н.К. Крупской и 35 библиотек-филиалов, нашими читателями являются жители всех 9 районов города. Библиотеки системы&nbsp;– это информационные, образовательные центры, место культурного отдыха и общения. СМИБС находится в центре мировых событий, активно участвует в общероссийских акциях и в жизни города.', 'В библиотеках системы можно получить информацию и литературу по любой теме, доступ к электронным базам данных, воспользоваться услугами Интернет-залов, Центрами общественного доступа, побывать на презентациях выставок и творческих встречах, а также воспользоваться дополнительными сервисными услугами:<ul><li>ксерокопированием</li><li>сканированием</li><li>ламинированием</li><li>документов</li><li>распечаткой информации</li><li>на принтере</li><li>записью на электронные</li><li>носители</li></ul>');

    const containerAbout = document.querySelector('.container__wrapper_about'),
        introAboutBack = document.querySelector('.wrapper__dialog'),
        wrapperTopAbout = document.querySelector('.wrapper__top'),
        wrapperBottom = document.createElement('div')
    ;

    wrapperBottom.className = 'wrapper__bottom';
    wrapper.appendChild(wrapperBottom);

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    wrapperBottom.appendChild(arrowBackClick);

    arrowBackClick.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(wrapperBottom);
                container.removeChild(containerAbout);
                wrapper.removeChild(introAboutBack);
                wrapper.removeChild(wrapperTopAbout);
                wrapper.className = 'wrapper';
                introDev();
            }
        });
        tl
            .to(wrapperTopAbout, {
                duration: 0.4,
                autoAlpha: 0,
                y: '-3%'
            })
            .to([containerAbout, arrowBackClick], {
                autoAlpha: 0,
                delay: '-0.1'
            })
            .to(introAboutBack, {
                autoAlpha: 0,
                delay: '-0.1',
                // scale: 0.98
            })
        ;
    });
}

/* Writer */
function writerStart() {
    const writerLoad = new About(),
        arrowBackLoad = new ArrowsAll()
    ;

    writerLoad.aboutWriter('Сказки Александра Николаевича Афанасьева – бесценный памятник народного творчества, который он в неприкосновенности сберёг и передал потомкам. В этих сказках отразились все переживания, чаяния, и мечты народа, наш русский культурный код, воплощённый в конкретных образах и сюжетах. Приглашаем вас вспомнить любимые сказки детства в нашей игре «Волшебное перо».');

    const
        containerAbout = document.querySelector('.container__wrapper_about'),
        introAboutBack = document.querySelector('.wrapper__service'),
        wrapperTopAbout = document.querySelector('.wrapper__top'),
        wrapperBottom = document.createElement('div')
    ;

    wrapperBottom.className = 'wrapper__bottom';
    wrapper.appendChild(wrapperBottom);
    wrapperBottom.innerHTML = `
        <div class="wrapper__bottom_part wrapper__bottom_part--left"></div>
        <div class="wrapper__bottom_part wrapper__bottom_part--center"></div>
        <div class="wrapper__bottom_part wrapper__bottom_part--right"></div>
    `;

    arrowBackLoad.arrowBack();
    arrowBackLoad.clearStorage();
    arrowBackLoad.arrowNext();

    const
        arrowBackClick = document.getElementById('arrowBack'),
        arrowNextClick = document.getElementById('arrowNext'),
        settingsClick = document.getElementById('settingsClick'),
        wrapperBottomLeft = document.querySelector('.wrapper__bottom_part--left'),
        wrapperBottomCenter = document.querySelector('.wrapper__bottom_part--center'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right')
    ;

    wrapperBottomLeft.appendChild(arrowBackClick);
    wrapperBottomCenter.appendChild(settingsClick);
    wrapperBottomRight.appendChild(arrowNextClick);

    arrowBackClick.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(wrapperBottom);
                wrapper.removeChild(container);
                wrapper.removeChild(introAboutBack);
                wrapper.removeChild(wrapperTopAbout);
                wrapper.className = 'wrapper';
                introDev();
            }
        });
        tl
            .to(wrapperTopAbout, {
                duration: 0.4,
                autoAlpha: 0,
                y: '-3%'
            })
            .to([
                containerAbout,
                arrowBackClick,
                settingsClick,
                arrowNextClick], {
                autoAlpha: 0,
                delay: '-0.1'
            })
            .to(introAboutBack, {
                autoAlpha: 0,
                delay: '-0.1',
                // scale: 0.98
            })
        ;
    });

    arrowNextClick.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(wrapperBottom);
                container.removeChild(containerAbout);
                wrapper.removeChild(introAboutBack);
                wrapper.removeChild(wrapperTopAbout);
                wrapper.className = 'wrapper';
                container.className = 'container';
                dialogDev();
            }
        });
        tl
            .to(wrapperTopAbout, {
                duration: 0.4,
                autoAlpha: 0,
                y: '-3%'
            })
            .to([
                containerAbout,
                arrowBackClick,
                settingsClick,
                arrowNextClick], {
                autoAlpha: 0,
                delay: '-0.1'
            })
            .to(introAboutBack, {
                autoAlpha: 0,
                delay: '-0.1',
                // scale: 0.98
            })
        ;
    });
}

/* Dialog */
function dialogDev() {
    const dialogDevLoad = new Intro(),
        arrowBackLoad = new ArrowsAll(),
        timePause = 1000 // 11000
    ;

    dialogDevLoad.dialogStart();

    const
        introAboutBack = document.querySelector('.wrapper__back'),
        containerVovka = document.getElementById('containerVovka'),
        containerNestor = document.getElementById('containerNestor'),
        wrapperBottom = document.createElement('div'),
        wrapperTopAbout = document.querySelector('.wrapper__top')
    ;

    wrapperBottom.className = 'wrapper__bottom';
    setTimeout(() => {
        wrapper.appendChild(wrapperBottom);
        wrapperBottom.innerHTML = `
            <div class="wrapper__bottom_part wrapper__bottom_part--left"></div>
            <div class="wrapper__bottom_part wrapper__bottom_part--center"></div>
            <div class="wrapper__bottom_part wrapper__bottom_part--right"></div>
        `;

        arrowBackLoad.arrowBack();
        arrowBackLoad.clearStorage();
        arrowBackLoad.arrowNext();

        const
            arrowBackClick = document.getElementById('arrowBack'),
            arrowNextClick = document.getElementById('arrowNext'),
            settingsClick = document.getElementById('settingsClick'),
            wrapperBottomLeft = document.querySelector('.wrapper__bottom_part--left'),
            wrapperBottomCenter = document.querySelector('.wrapper__bottom_part--center'),
            wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right'),
            containerBlockLeft = document.getElementById('containerBlockLeft'),
            containerBlockRight = document.getElementById('containerBlockRight'),
            containerQuest = document.querySelector('.container-quest')
        ;

        wrapperBottomLeft.appendChild(arrowBackClick);
        wrapperBottomCenter.appendChild(settingsClick);
        wrapperBottomRight.appendChild(arrowNextClick);

        arrowBackClick.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    wrapper.removeChild(wrapperBottom);
                    wrapper.removeChild(wrapperTopAbout);
                    if (document.querySelector('.container-quest')) {
                        wrapper.removeChild(document.querySelector('.container-quest'));
                    }
                    if (document.querySelector('.container__person')) {
                        container.removeChild(document.querySelector('.container__person'));
                    }
                    // wrapper.removeChild(container);
                    // container.className = 'container';
                    // container.removeChild(containerNestor);
                    // container.removeChild(containerVovka);
                    wrapper.removeChild(introAboutBack);
                    wrapper.className = 'wrapper';
                    introDev();
                }
            });
            tl
                .to([
                    containerVovka,
                    containerNestor,
                    arrowBackClick,
                    arrowNextClick,
                    settingsClick,
                    document.querySelector('.container-quest'),
                    document.querySelector('.container__person')], {
                    autoAlpha: 0,
                    delay: '-0.1'
                })
                .to(introAboutBack, {
                    autoAlpha: 0,
                    delay: '-0.1',
                    // scale: 0.98
                })
            ;
        });

        arrowNextClick.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    wrapperBottomCenter.removeChild(settingsClick);
                    wrapperBottomRight.removeChild(arrowNextClick);
                    // wrapperBottomLeft.removeChild(arrowBackClick);
                    questionCat_5_0();
                }
            });
            tl
                .to([
                    arrowNextClick,
                    settingsClick], {
                    autoAlpha: 0,
                    delay: '-0.1'
                })
                .to(containerVovka, {
                    duration: 1,
                    left: '40%'
                })
            ;
        });
    }, timePause);
}

function init() {
    // introDev();
    // authorsStart();
    // aboutStart();
    // writerStart();
    dialogDev();
    // questionCat_1_0();
    // catLibraryDev();
    // catQuestDev_1();
}

init();