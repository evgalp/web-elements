class Modal {
  constructor(modalName) {
    this.showBtn = document.querySelector(`[data-for-modal=\'${modalName}\']`)
    this.modalWrapper = document.querySelector(`[data-modal=\'${modalName}\']`);
    this.closeBtn = document.querySelector(`[data-modal=\'${modalName}\']`).children[0].children[0].children[1];

    this.showBtn.addEventListener('click', this.showModal.bind(this));
    this.closeBtn.addEventListener('click', this.hideModal.bind(this));
  }

  showModal() {
    console.log(this.modalWrapper);
    this.modalWrapper.classList.add('ui-modal-wrappper--active-modal');
  }

  hideModal() {
    console.log(this.modalWrapper);
    this.modalWrapper.classList.remove('ui-modal-wrappper--active-modal');
  }

}

const m1 = new Modal('modal-1');
const m2 = new Modal('modal-2');
