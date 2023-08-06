const select = document.querySelector('.order__select'),
    placeholder = document.querySelector('.order__placeholder'),
    menu = document.querySelector('.order__menu'),
    items = document.querySelectorAll('.order__item'),
    range = document.querySelector('.order__rangebar'),
    value = document.querySelector('.order__counter'),
    burger = document.querySelector('.header__burger');

placeholder.addEventListener('click', (e) => {
    select.classList.toggle("order__select--open");
});

window.addEventListener('click', (e) => {
    if (!e.target.closest('.order__select')) {
        select.classList.remove("order__select--open");
    };
});

items.forEach(item => {
    item.addEventListener('click', (e) => {
        const text = e.target.textContent;
        placeholder.textContent = text;
        select.classList.remove("order__select--open");
    });
});

range.addEventListener("input", (e)=> {
    value.innerText = `${e.target.value}%`;
});

burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger--active');
})
