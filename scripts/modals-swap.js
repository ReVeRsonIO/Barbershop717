const body = document.querySelector('body');

//Открытие модального контейнера с блокировкой скролла
document.querySelectorAll('.subscribe-button').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelector('.modals').style.display = 'block';

        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
    })
})
//Закрытие модального контейнера с разблокировкой скролла
document.querySelector('.close-modal-btn').addEventListener('click', ()=>{
    document.querySelector('.modals').style.display = 'none';
    
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0'));
})


//Открытие доп.модальных окон
document.querySelectorAll('.modals__button').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelector('.modals__main-modal').style.display = 'none';
        document.querySelector(`.modals__choose-${item.getAttribute("data-modal-name")}`).style.display = 'block';
    })
})
//Возвращение к главной модалке
document.querySelectorAll('.back-modal-btn').forEach(item => {
    item.addEventListener('click', event => {
        item.closest('div').style.display = 'none'
        document.querySelector('.modals__main-modal').style.display = 'block';
    })
})


const element = document.querySelector('.element');


