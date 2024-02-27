// Первый вопрос в библиотеке
function questionCat_1_0() {
    const
        questionLoad = new Question(),
        arrowBackLoad = new ArrowsAll()
    ;
    // questionLoad.questionWrapperBack('dialog');
    questionLoad.questionBlock();
    questionLoad.questionBlockText(
        'Микроволновка с&nbsp;искусственным интеллектом',
        'печь с пирожками',
        'печь Бабы Яги',
        'печь Емели');

    const
        wrapperBottom = document.createElement('div'),
        containerAbout = document.querySelector('.container__wrapper_about'),
        introAboutBack = document.querySelector('.wrapper-back'),
        wrapperTopAbout = document.querySelector('.wrapper__top')
    ;

    arrowBackLoad.arrowNextHidden();
    arrowBackLoad.arrowBack();

    const
        arrowBackClick = document.getElementById('arrowBack'),
        arrowNextClick = document.getElementById('arrowNext'),
        wrapperBottomLeft = document.querySelector('.wrapper__bottom_part--left'),
        wrapperBottomRight = document.querySelector('.wrapper__bottom_part--right')
    ;

    // wrapperBottomLeft.appendChild(arrowBackClick);
    wrapperBottomLeft.appendChild(arrowBackClick);
    arrowBackClick.id = 'questionBack_1';

    const
        questionBack_1 = document.getElementById('questionBack_1'),
        containerQuest = document.querySelector('.container-quest'),
        containerDialog = document.querySelector('.container--dialog'),
        containerBlockLeft = document.getElementById('containerBlockLeft'),
        containerBlockRight = document.getElementById('containerBlockRight'),
        containerVovka = document.getElementById('containerVovka'),
        containerNestor = document.getElementById('containerNestor'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        categoryQuestBack = document.createElement('div'),
        containerInsideLeft = document.getElementById('containerInsideLeft'),
        containerInsideRight = document.getElementById('containerInsideRight')
    ;

    questionLoad.answerBlock(2, 'Верно!');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        answerLi = document.querySelectorAll('ul.question__block_list > li'),
        answerLiRight = document.querySelectorAll('ul.question__block_list > li > a')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            answerLi.forEach((el, idx) => {
                wrapperBottomRight.appendChild(arrowNextClick);
                arrowNextClick.className = 'wrapper__service_arrow wrapper__service_arrow--next';
                arrowNextClick.id = 'questionNext_1';
                const questionNext_1 = document.getElementById('questionNext_1');
                questionNext_1.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            wrapperBottomRight.removeChild(questionNext_1);
                            container.removeChild(containerVovka);
                            container.removeChild(containerNestor);
                            container.className = 'container';
                            wrapper.removeChild(introAboutBack);
                            categoryQuestBack.className = 'wrapper__category wrapper__category--first';
                            wrapper.appendChild(categoryQuestBack);
                            containerBlockLeft.removeChild(containerInsideLeft);
                            containerBlockRight.removeChild(containerInsideRight);
                            questionCat_1_1();
                        }
                    });
                    tl
                        // .to(wrapperTopAbout, {
                        //     duration: 0.4,
                        //     autoAlpha: 0,
                        //     y: '-3%'
                        // })
                        .to([
                            containerVovka,
                            containerNestor,
                            introAboutBack,
                            containerInsideRight,
                            containerInsideLeft], {
                            autoAlpha: 0,
                            delay: '-0.1'
                        })
                    ;
                });
            });
        });
    }

    // questionBack_1.addEventListener('click', () => {
    //     let tl = gsap.timeline({
    //         onComplete: () => {
    //             wrapper.removeChild(wrapperBottomAll);
    //             container.className = 'container';
    //             container.removeChild(containerVovka);
    //             container.removeChild(containerNestor);
    //             wrapper.removeChild(containerQuest);
    //             wrapper.removeChild(introAboutBack);
    //             wrapper.className = 'wrapper';
    //             introDev();
    //         }
    //     });
    //     tl
    //         .to([containerVovka,
    //             containerNestor,
    //             containerQuest,
    //             questionBack_1,
    //             questionNext_1], {
    //             autoAlpha: 0,
    //             delay: '-0.1'
    //         })
    //         .to(categoryQuestBack, {
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
    questionLoad.questionBlockText(
        '«Бедный думает: «Все люди станут разгавливаться, а у меня ни куска нету! Пойду хоть воды принесу - ужо вместо щей похлебаю». Взял ведерко, пошел к … и только закинул в воду - вдруг попалась ему в ведерко большущая щука». Куда держал путь бедняк?',
        'к пруду',
        'к колодцу',
        'к синему морю');

    const questionBack_2 = document.getElementById('questionBack_2'),
        containerQuest = document.querySelector('.container-quest'),
        wrapperBottomAll = document.querySelector('.wrapper__bottom'),
        wrapperCategory = document.querySelector('.wrapper__category')
    ;

    questionLoad.answerBlock(1, 'Верно!');

}
