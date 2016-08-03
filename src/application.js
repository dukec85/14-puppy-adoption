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

//  start() {
//    return fetch('http://tiny-tn.herokuapp.com/collections/cd-puppy')
//      .then((res) => res.json())
//      .then((data) => {
//        this.data = data;
//        this.render(data);
//      });
//  }

  render() {
    this.listElement.innerHTML = '';

    this.data.forEach((puppy) => {
      const newPuppy = new PuppyView(puppy, this);
      this.listElement.appendChild(newPuppy.element);
      newPuppy.render();
    });
  }

  addPuppyData(puppy) {
    this.data = [puppy, ...this.data];
    this.render();
  }

  removePuppyData(puppy) {
    this.data = this.data.filter((x) => x !== puppy);
    this.render();
  }

}
