const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('.close-button');

function openModal() {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", false);
}

openModalButton.addEventListener('click', openModal)

function closeModal () {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", ture);
}

closeModalButton.addEventListener('click',closeModal)

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }//close modal when user clicks outside of the .modal-content
});

window.addEventListener('keydown', function(event) {
    if (event.key === "Escape"){
        closeModal();
    }
})