import PuppyView from 'puppy-view';
import CreateFormView from 'create-form';

export default class ApplicationView {
  constructor(element) {
    this.element = element;
    this.data = [];
  }
  render() {
    const list = this.element.querySelector('.puppy-list');
    list.innerHTML = '';

    this.data.forEach((puppy) => {
      const newPuppy = new PuppyView(puppy, this);
      list.appendChild(newPuppy.element);
      newPuppy.render();
    });
  }
  start() {
    return fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        this.render();
      });
  }
}
