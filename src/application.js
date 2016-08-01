import PuppyView from 'puppy-view';
import CreateFormView from 'create-form';

export default class ApplicationView {
  constructor(element) {
    this.element = element;
    this.listElement = element.querySelector('.puppy-list');
    this.data = [];

    this.formView = new CreateFormView(this.element, this);

    this.start();
  }

  render() {
    this.listElement.innerHTML = '';

    this.data.forEach((puppy) => {
      const newPuppy = new PuppyView(puppy, this);
      this.listElement.appendChild(newPuppy.element);
      newPuppy.render();
    });
  }

  start() {
    return fetch('http://tiny-tn.herokuapp.com/collections/cd-puppy')
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        this.render();
      });
  }
}
