export default class CreateFormView {
  constructor(el) {
    this.el = el;
    this.add();
   }

    add() {

    this.el.querySelector('.dropdown-sub-container').addEventListener('submit', (ev) => {
      ev.preventDefault();

      const puppyData = {
        name: this.el.querySelector('.dropdown-name').value,
        age: this.el.querySelector('.dropdown-age').value,
        photoUrl: this.el.querySelector('.dropdown-photoUrl').value,
        profile: this.el.querySelector('.dropdown-profile').value,
      };

      fetch('http://tiny-tn.herokuapp.com/collections/cd-puppies', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(puppyData),
      }).then((res) => res.json())
      .then((data) => {
        this.el.querySelector('.dropdown-name').value = '';
        this.el.querySelector('.dropdown-age').value = '';
        this.el.querySelector('.dropdown-photoUrl').value = '';
        this.el.querySelector('.dropdown-profile').value = '';

        this.application.addPuppyData(data);
      });
    });
  }

}
