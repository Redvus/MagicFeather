class Intro {

    introStart() {
        const introBlockTop = document.createElement('div'),
            introBlockCenter = document.createElement('div')
        ;
        introBlockTop.className = 'wrapper__top';
        introBlockTop.innerHTML = `
            <picture class="wrapper__top_title">
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
                .to(wrapperBottom, {
                    duration: 0.4,
                    delay: '-0.4',
                    autoAlpha: 1
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
        dialogBlockBack.className = 'wrapper__dialog';
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
            let tl = gsap.timeline();
            tl
                .to(wrapperDialogBack, {
                    duration: 0.6,
                    autoAlpha: 1
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
    }
}