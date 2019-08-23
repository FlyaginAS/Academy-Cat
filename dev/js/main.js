'use strict';
let photoBefore = document.querySelector('.before-after__photo-before');
let photoAfter = document.querySelector('.before-after__photo-after');
let buttonBefore = document.querySelector('.before-after__button--before');
let buttonAfter = document.querySelector('.before-after__button--after');
// console.log(photoAfter);
buttonBefore.addEventListener('click', function (evt) {
    photoAfter.classList.add('hidden');
    photoBefore.classList.remove('hidden');
});
buttonAfter.addEventListener('click', function (evt) {
    photoBefore.classList.add('hidden');
    photoAfter.classList.remove('hidden');
});