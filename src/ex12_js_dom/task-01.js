const slidechange = () => {
    let position = 1;
    const arrphoto = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

    const setphoto = (odlphoto, photo, slideclass) => {
        let left = position - 1;
        let right = position + 1;

        if (left < 0) { left = arrphoto.length - 1; }

        if (right > arrphoto.length - 1) { right = 0; }

        document.getElementById('mainphoto').innerHTML = '';

        if (typeof odlphoto === 'number') {
            document.getElementById('mainphoto').innerHTML = `<img class="classFlex mainphoto ${slideclass}reverse" id="mainphoto" src="${arrphoto[odlphoto]}" alt="${arrphoto[odlphoto]}">`;
        }

        const slide = () => {
            document.getElementById('mainphoto').innerHTML = `<img class="classFlex mainphoto ${slideclass}" id="mainphoto" src="${arrphoto[photo]}" alt="${arrphoto[photo]}">`;
        };

        setTimeout(slide, 400);

        document.getElementById('photoleft').src = arrphoto[left];
        document.getElementById('photoleft').alt = arrphoto[left];

        document.getElementById('photocenter').src = arrphoto[photo];
        document.getElementById('photocenter').alt = arrphoto[photo];

        document.getElementById('photoright').src = arrphoto[right];
        document.getElementById('photoright').alt = arrphoto[right];
    };

    const left = () => {
        const odlposition = position;
        position -= 1;

        if (position < 0) position = arrphoto.length - 1;

        setphoto(odlposition, position, 'slideleft');
    };

    const right = () => {
        const odlposition = position;
        position += 1;

        if (position > arrphoto.length - 1) position = 0;

        setphoto(odlposition, position, 'slideright');
    };

    return {
        setphoto,
        left,
        right,
    };
};

const slider = slidechange();

window.onload = () => {
    document.getElementById('photoleft').onclick = slider.left;
    document.getElementById('photoright').onclick = slider.right;
    document.getElementById('ourButtonleft').onclick = slider.left;
    document.getElementById('ourButtonright').onclick = slider.right;
    document.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowLeft') {
            slider.left();
        } else if (event.code === 'ArrowRight') {
            slider.right();
        }
    });
    slider.setphoto(null, 1, 'slidedown');
};