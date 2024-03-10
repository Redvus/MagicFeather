class Settings {

    settingsBlock() {
        const
            settingsBack = document.createElement('div'),
            settingsBlock = document.createElement('div')
        ;
        settingsBack.className = 'wrapper__lightbox';
        settingsBlock.className = 'wrapper__lightbox_block';
        // settingsBlock.innerHTML = `
        //     <a href="javascript:void(0);" class="wrapper__lightbox_close" id="settingsCloseButton"></a>
        //     <p id="settingsText">Весь игровой процесс будет сброшен и вы начнете игру с начала</p>
        //     <a href="javascript:void(0);" class="wrapper__lightbox_button" id="clearProgressButton">Сбросить прогресс</a>
        //     <a href="javascript:void(0);" class="wrapper__lightbox_button" id="turnOfSoundButton">Выключить музыку</a>
        // `;
        settingsBlock.innerHTML = `
            <a href="javascript:void(0);" class="wrapper__lightbox_close" id="settingsCloseButton"></a>
            <a href="javascript:void(0);" class="wrapper__lightbox_button" id="turnOfSoundButton">Выключить музыку</a>
        `;
        settingsBack.appendChild(settingsBlock);
        wrapper.appendChild(settingsBack);

        function settingsBlockAnim() {
            let tl = gsap.timeline();
            const
                settingsBack = document.querySelector('.wrapper__lightbox'),
                settingsBlock = document.querySelector('.wrapper__lightbox_block')
            ;
            tl
                .from(settingsBack, {
                    duration: 0.3,
                    autoAlpha: 0
                })
                .from(settingsBlock, {
                    duration: 0.3,
                    delay: '-0.07',
                    y: '-5%',
                    autoAlpha: 0
                })
            ;
        }
        settingsBlockAnim();
    }

    finalBlock() {
        let
            progressCat = localStorage.getItem('progressCat');

        const
            settingsBack = document.createElement('div'),
            settingsBlock = document.createElement('div'),
            settingsTextWrong = document.createElement('div'),
            settingsTextWright = document.createElement('div'),
            settingsButtonBack = document.createElement('div')
        ;
        settingsBack.className = 'wrapper__lightbox';
        settingsBlock.className = 'wrapper__lightbox_block wrapper__lightbox_block--final';
        settingsButtonBack.innerHTML = `
            <a href="javascript:void(0);" class="wrapper__lightbox_button" id="finalButton">Вернуться к началу</a>
        `;
        settingsTextWrong.innerHTML = `
            <p>Вы молодец, но можно лучше, попробуйте еще раз, все получится!</p>
        `;
        settingsTextWright.innerHTML = `
            <p>Вы отлично справились, поздравляем!</p>
        `;

        settingsBack.appendChild(settingsBlock);
        if (progressCat > 0) {
            settingsBlock.appendChild(settingsTextWrong);
        } else if(progressCat === 0) {
            settingsBlock.appendChild(settingsTextWright);
        }
        settingsBlock.appendChild(settingsButtonBack);
        wrapper.appendChild(settingsBack);

        function finalBlockAnim() {
            let tl = gsap.timeline();
            const
                settingsBack = document.querySelector('.wrapper__lightbox'),
                settingsBlock = document.querySelector('.wrapper__lightbox_block--final')
            ;
            tl
                .from(settingsBack, {
                    duration: 0.3,
                    autoAlpha: 0
                })
                .from(settingsBlock, {
                    duration: 0.3,
                    delay: '-0.07',
                    y: '-5%',
                    autoAlpha: 0
                })
            ;
        }
        finalBlockAnim();
    }
}