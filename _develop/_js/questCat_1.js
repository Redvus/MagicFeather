// Первый вопрос в библиотеке
function questionLibraryFirst() {
    const questionLoad = new Question(),
        arrowBackLoad = new ArrowsAll()
    ;
    // questionLoad.questionWrapperBack('dialog');
    questionLoad.questionBlock();
    questionLoad.questionBlockText(
        'Микроволновка с&nbsp;искусственным интеллектом',
        'печь с пирожками',
        'печь Бабы Яги',
        'печь Емели');

    const wrapperBottom = document.createElement('div'),
        containerAbout = document.querySelector('.container__wrapper_about'),
        introAboutBack = document.querySelector('.wrapper__dialog'),
        wrapperTopAbout = document.querySelector('.wrapper__top')
    ;

    arrowBackLoad.arrowNext();
    arrowBackLoad.arrowBack();

    const arrowBackClick = document.getElementById('arrowBack'),
        arrowNextClick = document.getElementById('arrowNext'),
        wrapperBottomLeft = document.querySelector('.wrapper__bottom_part--left'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right')
    ;

    // wrapperBottomLeft.appendChild(arrowBackClick);
    wrapperBottomRight.appendChild(arrowNextClick);
    arrowNextClick.id = 'questionNext_2';
    wrapperBottomLeft.appendChild(arrowBackClick);
    arrowBackClick.id = 'questionBack_2';

    const questionBack_2 = document.getElementById('questionBack_2'),
        questionNext_2 = document.getElementById('questionNext_2'),
        containerQuest = document.querySelector('.container-quest'),
        containerBlockLeft = document.getElementById('containerBlockLeft'),
        containerBlockRight = document.getElementById('containerBlockRight'),
        containerVovka = document.getElementById('containerVovka'),
        containerNestor = document.getElementById('containerNestor'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom')
    ;

    questionBack_2.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(wrapperBottomAll);
                container.className = 'container';
                container.removeChild(containerVovka);
                container.removeChild(containerNestor);
                wrapper.removeChild(containerQuest);
                wrapper.removeChild(introAboutBack);
                wrapper.className = 'wrapper';
                introDev();
            }
        });
        tl
            .to([containerVovka,
                containerNestor,
                containerQuest,
                questionBack_2,
                questionNext_2], {
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

    // Второй вопрос
    // arrowNextClick.addEventListener('click', () => {
    //     let tl = gsap.timeline({
    //         onComplete: () => {
    //             // wrapper.removeChild(wrapperBottom);
    //             container.removeChild(containerAbout);
    //             wrapper.removeChild(introAboutBack);
    //             wrapper.removeChild(wrapperTopAbout);
    //             wrapper.className = 'wrapper';
    //             container.className = 'container';
    //             introDev();
    //         }
    //     });
    //     tl
    //         .to(wrapperTopAbout, {
    //             duration: 0.4,
    //             autoAlpha: 0,
    //             y: '-3%'
    //         })
    //         .to([containerAbout, arrowBackClick, arrowNextClick], {
    //             autoAlpha: 0,
    //             delay: '-0.1'
    //         })
    //         .to(introAboutBack, {
    //             autoAlpha: 0,
    //             delay: '-0.1',
    //             // scale: 0.98
    //         })
    //     ;
    // });
}

// По щучьему велению
function questionCat_1_1() {
    const questionLoad = new Question(),
        arrowBackLoad = new ArrowsAll()
    ;
    // questionLoad.questionWrapperBack('dialog');
    questionLoad.questionBlock();
    questionLoad.questionBlockText(
        'Микроволновка с&nbsp;искусственным интеллектом',
        'печь с пирожками',
        'печь Бабы Яги',
        'печь Емели');

    const wrapperBottom = document.createElement('div'),
        containerAbout = document.querySelector('.container__wrapper_about'),
        introAboutBack = document.querySelector('.wrapper__dialog'),
        wrapperTopAbout = document.querySelector('.wrapper__top')
    ;

    arrowBackLoad.arrowNext();
    arrowBackLoad.arrowBack();

    const arrowBackClick = document.getElementById('arrowBack'),
        arrowNextClick = document.getElementById('arrowNext'),
        wrapperBottomLeft = document.querySelector('.wrapper__bottom_part--left'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right')
    ;

    // wrapperBottomLeft.appendChild(arrowBackClick);
    wrapperBottomRight.appendChild(arrowNextClick);
    arrowNextClick.id = 'questionNext_2';
    wrapperBottomLeft.appendChild(arrowBackClick);
    arrowBackClick.id = 'questionBack_2';

    const questionBack_2 = document.getElementById('questionBack_2'),
        questionNext_2 = document.getElementById('questionNext_2'),
        containerQuest = document.querySelector('.container-quest'),
        containerBlockLeft = document.getElementById('containerBlockLeft'),
        containerBlockRight = document.getElementById('containerBlockRight'),
        containerVovka = document.getElementById('containerVovka'),
        containerNestor = document.getElementById('containerNestor'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom')
    ;

    questionBack_2.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapper.removeChild(wrapperBottomAll);
                container.className = 'container';
                container.removeChild(containerVovka);
                container.removeChild(containerNestor);
                wrapper.removeChild(containerQuest);
                wrapper.removeChild(introAboutBack);
                wrapper.className = 'wrapper';
                introDev();
            }
        });
        tl
            .to([containerVovka,
                containerNestor,
                containerQuest,
                questionBack_2,
                questionNext_2], {
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

    // Второй вопрос
    // arrowNextClick.addEventListener('click', () => {
    //     let tl = gsap.timeline({
    //         onComplete: () => {
    //             // wrapper.removeChild(wrapperBottom);
    //             container.removeChild(containerAbout);
    //             wrapper.removeChild(introAboutBack);
    //             wrapper.removeChild(wrapperTopAbout);
    //             wrapper.className = 'wrapper';
    //             container.className = 'container';
    //             introDev();
    //         }
    //     });
    //     tl
    //         .to(wrapperTopAbout, {
    //             duration: 0.4,
    //             autoAlpha: 0,
    //             y: '-3%'
    //         })
    //         .to([containerAbout, arrowBackClick, arrowNextClick], {
    //             autoAlpha: 0,
    //             delay: '-0.1'
    //         })
    //         .to(introAboutBack, {
    //             autoAlpha: 0,
    //             delay: '-0.1',
    //             // scale: 0.98
    //         })
    //     ;
    // });
}
