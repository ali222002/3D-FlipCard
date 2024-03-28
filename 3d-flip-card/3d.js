document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.card__inner');

    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            card.classList.toggle('is-flipped');
        });
    });
});
