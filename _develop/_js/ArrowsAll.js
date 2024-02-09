class ArrowsAll {

    arrowBack() {
        const containerArrowBack = document.createElement('a');
        containerArrowBack.className = 'wrapper__service_arrow';
        containerArrowBack.id = 'arrowBack';
        containerArrowBack.innerHTML = `
            <img src="assets/games/magicFeather/images/mf_buttonBack.png" alt="Стрелка назад">
        `;
        wrapper.appendChild(containerArrowBack);

        const arrowBackLoad = document.getElementById('arrowBack');

        function arrowBackAnim() {
            let arrowAnim = gsap.from(arrowBackLoad, {
                duration: 1,
                delay: 1,
                autoAlpha: 0
            });
        }
        arrowBackAnim();
    }

    clearStorage() {
        const containerClear = document.createElement('a');
        containerClear.className = 'wrapper__service_clear';
        containerClear.id = 'settingsClick';
        containerClear.innerHTML = `
            <img src="assets/games/magicFeather/images/mf_buttonSettings.png" alt="Настройки">
        `;
        wrapper.appendChild(containerClear);

        const settingsClickLoad = document.getElementById('settingsClick');

        function settingsClickAnim() {
            let settingsClickGsap = gsap.from(settingsClickLoad, {
                duration: 1,
                delay: 1,
                autoAlpha: 0
            });
        }
        settingsClickAnim();
    }

    arrowNext() {
        const containerClear = document.createElement('a');
        containerClear.className = 'wrapper__service_next';
        containerClear.id = 'answerNext';
        containerClear.innerHTML = `
            <img src="assets/games/magicFeather/images/mf_buttonBack.png" alt="Следующий вопрос">
        `;
        wrapper.appendChild(containerClear);
    }
}