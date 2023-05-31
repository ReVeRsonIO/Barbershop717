const mainModal = document.querySelector('.modals__main-modal');
const chooseBarberModal = document.querySelector('.modals__choose-barber');
const button = document.querySelector('.modals__button');

function openOverlay(){
    document.querySelector('.modals').style.display = 'block'
}
function closeOverlay(){
    document.querySelector('.modals').style.display = 'none'
}
button.addEventListener('click', () => {
mainModal.style.display = 'none';
chooseBarberModal.style.display = 'block';
});