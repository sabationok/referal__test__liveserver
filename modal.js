(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        openModalBtnHero: document.querySelector("[data-modal-open-hero]"),
        openModalBtnOfferings: document.querySelector("[data-modal-open-offerings]"),

        closeModalBtn: document.querySelector("[data-modal-close]"),

        modal: document.querySelector("[data-modal]"),
        body: document.querySelector("[data-body]"), // це утилітка яка забороняє прокрутку контенту поза бекдропом при відкритому модальному вікні
        modalNameInput: document.getElementById("modal-name"), // це <input id="modal-name"> для першого поля input в формі модалки в HTML
        modalForm: document.getElementById("modal-form"), // це <form id="modal-form"> для форми модалки в HTML
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtn.addEventListener("click", toggleModalOpen); // виклик функції вікриття модалки
    refs.openModalBtnHero.addEventListener("click", toggleModalOpen);
    refs.openModalBtnOfferings.addEventListener("click", toggleModalOpen);
    
    refs.closeModalBtn.addEventListener("click", toggleModalClose); // виклик функції закриття модалки
    refs.closeModalBtnHero.addEventListener("click", toggleModalCloseHero);
    refs.closeModalBtnOfferings.addEventListener("click", toggleModalCloseOfferings);

    function toggleModalOpen() {
        refs.modal.classList.toggle("is-hidden");
        refs.body.classList.toggle("is-overflow"); // забороняємо прокрутку контенту поза бекдропом
        refs.modalNameInput.focus(); // передача фокусу полю <input id="modal-name"> першого поля input в формі модалки в HTML 
    }

    function toggleModalClose() {
        refs.modal.classList.toggle("is-hidden");
        refs.body.classList.toggle("is-overflow"); // відключаємо заборону прокрутки контенту поза бекдропом
        refs.modalForm.reset(); // очищення форми <form id="modal-form"> модалки від заповнених даних при закритті модалки
        refs.openModalBtn.focus(); // передача фокусу кнопці замовлення в HTML при закритті модалки
    }
})();