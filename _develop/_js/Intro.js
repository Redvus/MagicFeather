class Intro {

    introStart() {
        const introBlockTop = document.createElement('div'),
            introBlockCenter = document.createElement('div')
        ;
        introBlockTop.className = 'wrapper__top';
        introBlockTop.innerHTML = `
            <picture class="wrapper__top_title wrapper__top_title--front">
                <img src="assets/games/magicFeather/images/mf_titleStart.png" alt="Название игры. Волшебное перо">
            </picture>
        `;
        introBlockCenter.className = 'wrapper__center';
        introBlockCenter.innerHTML = `
            <picture class="wrapper__center_image" id="introFeather">
                <img src="assets/games/magicFeather/images/mf_featherStart.png" alt="Волшебное перо">
            </picture>
        `;
        wrapper.removeChild(container);
        wrapper.appendChild(introBlockTop);
        wrapper.appendChild(introBlockCenter);

        const introBlockBack = document.createElement('div');
        introBlockBack.className = 'wrapper__intro';
        wrapper.appendChild(introBlockBack);

        // Кнопки
        const introBlockButtons = document.createElement('div');
        introBlockButtons.className = 'wrapper__bottom';
        introBlockButtons.innerHTML = `
            <ul class="wrapper__bottom_menu">
                <li><a href="javascript:void(0);" id="clickAboutLibrary">О библиотеке</a></li>
                <li><a href="javascript:void(0);" id="clickAboutAuthors">Авторы</a></li>
                <li><a href="javascript:void(0);" id="clickLoadGame">Начать игру</a></li>
            </ul>
        `;
        wrapper.appendChild(introBlockButtons);

        const wrapperTop = document.querySelector('.wrapper__top'),
            wrapperTitle = document.querySelector('.wrapper__title'),
            wrapperBottom = document.querySelector('.wrapper__bottom'),
            wrapperBack = document.querySelector('.wrapper__intro'),
            wrapperCenter = document.querySelector('.wrapper__center')
        ;

        function introAnim() {
            let tl = gsap.timeline();
            tl
                .to(wrapperBack, {
                    duration: 0.6,
                    autoAlpha: 1
                })
                .to(wrapperTop, {
                    duration: 0.4,
                    delay: '-0.4',
                    y: '2%',
                    autoAlpha: 1
                })
                .from(wrapperBottom, {
                    duration: 0.4,
                    delay: '-0.4',
                    autoAlpha: 0
                })
                .to(wrapperCenter, {
                    duration: 1,
                    delay: '-0.4',
                    y: '5%',
                    autoAlpha: 1
                })
            ;
        }
        introAnim();
    }

    dialogStart() {
        const dialogBlockVovka = document.createElement('picture'),
            dialogBlockNestor = document.createElement('picture')
        ;

        container.className += ' container--dialog';
        dialogBlockVovka.id = 'containerVovka';
        dialogBlockVovka.innerHTML = `
            <img src="assets/games/magicFeather/images/mf_vovka.png" alt="Диалог в библиотеке. Вовка">
        `;
        dialogBlockNestor.id = 'containerNestor';
        dialogBlockNestor.innerHTML = `
            <img src="assets/games/magicFeather/images/mf_nestor.png" alt="Диалог в библиотеке. Нестор">
        `;
        // wrapper.appendChild(container);
        container.appendChild(dialogBlockVovka);
        container.appendChild(dialogBlockNestor);

        const dialogBlockBack = document.createElement('div');
        dialogBlockBack.className = 'wrapper-back wrapper__dialog';
        wrapper.appendChild(dialogBlockBack);

        // Кнопки
        // const introBlockButtons = document.createElement('div');
        // introBlockButtons.className = 'wrapper__bottom';
        // introBlockButtons.innerHTML = `
        //     <ul class="wrapper__bottom_menu">
        //         <li><a href="javascript:void(0);" id="clickAboutLibrary">О библиотеке</a></li>
        //         <li><a href="javascript:void(0);" id="clickAboutAuthors">Авторы</a></li>
        //         <li><a href="javascript:void(0);" id="clickLoadGame">Начать игру</a></li>
        //     </ul>
        // `;
        // wrapper.appendChild(introBlockButtons);

        const containerVovka = document.getElementById('containerVovka'),
            containerNestor = document.getElementById('containerNestor'),
            wrapperDialogBack = document.querySelector('.wrapper__dialog')
        ;

        function dialogAnim() {
            let tl = gsap.timeline({
                onComplete: () => {
                    dialogBaloonLoad();
                }
            });
            tl
                .from(wrapperDialogBack, {
                    duration: 0.6,
                    autoAlpha: 0
                })
                .to(containerNestor, {
                    duration: 0.4,
                    delay: '-0.4',
                    autoAlpha: 1
                })
                .to(containerVovka, {
                    duration: 0.4,
                    delay: '-0.2',
                    x: '5%',
                    autoAlpha: 1
                })
            ;
        }
        dialogAnim();

        function dialogBaloonLoad() {
            const dialogBaloon_1 = document.createElement('picture'),
                dialogBaloon_2 = document.createElement('picture'),
                dialogBaloon_3 = document.createElement('picture'),
                dialogBaloon_4 = document.createElement('picture'),
                dialogBaloon_5 = document.createElement('picture'),
                dialogBaloon_6 = document.createElement('picture')
            ;

            dialogBaloon_1.id = 'dialogBaloon_1';
            dialogBaloon_2.id = 'dialogBaloon_2';
            dialogBaloon_3.id = 'dialogBaloon_3';
            dialogBaloon_4.id = 'dialogBaloon_4';
            dialogBaloon_5.id = 'dialogBaloon_5';
            dialogBaloon_6.id = 'dialogBaloon_6';

            dialogBaloon_1.innerHTML = `
                <img src="assets/games/magicFeather/images/mf_dialogBaloon_1.png" alt="Диалог в библиотеке. Вопрос первый">
            `;
                dialogBaloon_2.innerHTML = `
                <img src="assets/games/magicFeather/images/mf_dialogBaloon_2.png" alt="Диалог в библиотеке. Вопрос второй">
            `;
                dialogBaloon_3.innerHTML = `
                <img src="assets/games/magicFeather/images/mf_dialogBaloon_3.png" alt="Диалог в библиотеке. Вопрос третий">
            `;
                dialogBaloon_4.innerHTML = `
                <img src="assets/games/magicFeather/images/mf_dialogBaloon_4.png" alt="Диалог в библиотеке. Вопрос четвертый">
            `;
                dialogBaloon_5.innerHTML = `
                <img src="assets/games/magicFeather/images/mf_dialogBaloon_5.png" alt="Диалог в библиотеке. Вопрос пятый">
            `;
                dialogBaloon_6.innerHTML = `
                <img src="assets/games/magicFeather/images/mf_dialogBaloon_6.png" alt="Диалог в библиотеке. Вопрос шестой">
            `;

             container.appendChild(dialogBaloon_1);
             container.appendChild(dialogBaloon_2);
             container.appendChild(dialogBaloon_3);
             container.appendChild(dialogBaloon_4);
             container.appendChild(dialogBaloon_5);
             container.appendChild(dialogBaloon_6);


             const baloon_1 = document.getElementById('dialogBaloon_1'),
                 baloon_2 = document.getElementById('dialogBaloon_2'),
                 baloon_3 = document.getElementById('dialogBaloon_3'),
                 baloon_4 = document.getElementById('dialogBaloon_4'),
                 baloon_5 = document.getElementById('dialogBaloon_5'),
                 baloon_6 = document.getElementById('dialogBaloon_6'),
                 arrowNext = document.getElementById('arrowNext'),
                 timeShort = 0.1, // 0.3
                 timeLong = 0.1, // 1.5
                 timePauseShort = 0.1, // 0.3
                 timePauseLong = 0.1 // 1
             ;

            function dialogBaloonAinm() {
                let tlBaloon = gsap.timeline({
                    onComplete: () => {
                        setTimeout(() => {
                            container.removeChild(baloon_1);
                            container.removeChild(baloon_2);
                            container.removeChild(baloon_3);
                            container.removeChild(baloon_4);
                            container.removeChild(baloon_5);
                            container.removeChild(baloon_6);
                        }, 300);
                        gsap.to(arrowNext, {
                            autoAlpha: 1
                        })
                    }
                });

                tlBaloon
                    .from(baloon_1, {
                        duration: timeShort,
                        autoAlpha: 0
                    })
                    .to(baloon_1, {
                        duration: timeShort,
                        delay: timePauseLong,
                        autoAlpha: 0
                    })
                    .from(baloon_2, {
                        duration: timeShort,
                        delay: timePauseShort,
                        autoAlpha: 0
                    })
                    .to(baloon_2, {
                        duration: timeShort,
                        delay: timePauseLong,
                        autoAlpha: 0
                    })
                    .from(baloon_3, {
                        duration: timeShort,
                        delay: timePauseShort,
                        autoAlpha: 0
                    })
                    .to(baloon_3, {
                        duration: timeShort,
                        delay: timeLong,
                        autoAlpha: 0
                    })
                    .from(baloon_4, {
                        duration: timeShort,
                        delay: timePauseShort,
                        autoAlpha: 0
                    })
                    .to(baloon_4, {
                        duration: timeShort,
                        delay: timeLong,
                        autoAlpha: 0
                    })
                    .from(baloon_5, {
                        duration: timeShort,
                        delay: timePauseShort,
                        autoAlpha: 0
                    })
                    .to(baloon_5, {
                        duration: timeShort,
                        delay: timePauseLong,
                        autoAlpha: 0
                    })
                    .from(baloon_6, {
                        duration: timeShort,
                        delay: timePauseShort,
                        autoAlpha: 0
                    })
                    .to(baloon_6, {
                        duration: timeShort,
                        delay: timeLong,
                        autoAlpha: 0
                    })
                ;
                return true;
            }
            dialogBaloonAinm();

        }
    }

    categoryLibrary() {
        const dialogBlockVovka = document.createElement('picture'),
            dialogBlockNestor = document.createElement('picture')
        ;

        container.className += ' container--dialog';
        dialogBlockVovka.id = 'containerVovkaCenter';
        dialogBlockVovka.innerHTML = `
            <img src="assets/games/magicFeather/images/mf_vovka.png" alt="Диалог в библиотеке. Вовка">
        `;
        dialogBlockNestor.id = 'containerNestor';
        dialogBlockNestor.innerHTML = `
            <img src="assets/games/magicFeather/images/mf_nestor.png" alt="Диалог в библиотеке. Нестор">
        `;
        // wrapper.appendChild(container);
        container.appendChild(dialogBlockVovka);
        container.appendChild(dialogBlockNestor);

        const dialogBlockBack = document.createElement('div');
        dialogBlockBack.className = 'wrapper-back wrapper__dialog';
        wrapper.appendChild(dialogBlockBack);

        const containerVovka = document.getElementById('containerVovkaCenter'),
            containerNestor = document.getElementById('containerNestor'),
            wrapperDialogBack = document.querySelector('.wrapper__dialog')
        ;

        function dialogAnim() {
            let tl = gsap.timeline({
                onComplete: () => {

                }
            });
            tl
                .from(wrapperDialogBack, {
                    duration: 0.6,
                    autoAlpha: 0
                })
                .to(containerNestor, {
                    duration: 0.4,
                    delay: '-0.4',
                    autoAlpha: 1
                })
                .to(containerVovka, {
                    duration: 0.4,
                    delay: '-0.2',
                    autoAlpha: 1
                })
            ;
        }
        dialogAnim();
    }
}