const mainModal = document.querySelector('.modals__main-modal');
const modalWrapper = document.querySelector('.modal-wrapper');
const chooseBarberModal = document.querySelector('.modals__choose-barber');



document.querySelectorAll('.subscribe-button').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelector('.modals').style.display = 'block'
    })
})

document.querySelector('.modals__icon').addEventListener('click', ()=>{
    document.querySelector('.modals').style.display = 'none'
})
