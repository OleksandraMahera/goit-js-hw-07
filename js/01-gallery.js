import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryList: document.querySelector('.gallery'),
};

function makingGalleryMarkUp(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `<li class="gallery_item">
                 <a class="gallery_link" href="${original}">
                     <img
                     class="gallery_image"
                     src="${preview}"
                     data-source="${original}"
                     alt="${description}"
                     />
                 </a>
                </li>`;
    }).join(' ');
};

refs.galleryList.innerHTML = makingGalleryMarkUp(galleryItems);

refs.galleryList.addEventListener('click', onImageClick);

function onImageClick(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    };

    const instance = basicLightbox.create(`<img
    src="${event.target.dataset.source}"
    alt="${event.target.alt}" >`);
    instance.show();

    // Вихід з модального вікна з "Escape"
    if (instance.show() === treu) {
        document.addEventListener('keydown', onModalCloseByEscape);
    } else {
        document.removeEventListener('keydown', onModalCloseByEscape);
    };

    function onModalCloseByEscape(event) {
        if (event.code === "Escape") {
            instance.close();
        }
    }

};

const link = document.querySelectorAll('.gallery_link');

// Заборона переходити за посиланням клікаючи на картинку, яка обернута в тег <a>
link.forEach(A => { A.setAttribute('onClick', 'return false;'); });

console.log(galleryItems);



