const pictureInnerContainer = document.querySelector('.picture-inner-container');

const arrayImages = ['galery1_1', 'galery2_1', 'galery3_1', 'galery4_1', 'galery5_1', 'galery6_1', 'galery7_1', 'galery8_1', 'galery9_1', 'galery10_1', 'galery11_1', 'galery12_1', 'galery13_1', 'galery14_1', 'galery15_1'];

function shuffle(arrayImages) {
    arrayImages.sort(() => Math.random() - 0.5);
}

const shuffledArray = shuffle(arrayImages);

function createGallery() {
    arrayImages.map(item => {
        const img = document.createElement('img');
        img.classList.add('gallery-img');
        img.src = `assets/img/art_gallery/${item}.jpg`;
        img.alt = `${item}`;
        pictureInnerContainer.append(img);
    })
}

createGallery();