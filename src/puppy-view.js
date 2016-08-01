export default class PuppyView {
  constructor(currentPup, el) {
    this.currentPup = currentPup;
    this.el = el;

    this.element = document.createElement('div');
    this.element.classList.add('puppy-list__item');
    this.element.innerHTML = `
      <div class="puppy-card">
        <figure class="pic-frame">
          <img class="puppy" src="http://placecera.com/200/300" alt="">
        </figure>
        <div class="card-info">
          <ul class="form-list">
            <li class="form-list__item">
              <label>Name</label>
              <input type="text" class="name"/>
            </li>
            <li class="form-list__item">
              <label>Age</label>
              <input type="text" class="age" />
            </li>
            <li class="form-list__item">
              <label>Profile URL</label>
              <input type="text" class="photourl" />
            </li>
            <li class="form-list__item">
              <label>Profile</label>
              <input type="text" class="profile"/>
            </li>
          </ul>
          <div class="button-container">
            <button class="button">Delete</button>
            <button class="button">Update</button>
          </div>
        </div>
      </div>`;
  }
  render() {
    this.element.querySelector('.name').value = this.currentPup.name;
    this.element.querySelector('.age').value = this.currentPup.age;
    this.element.querySelector('.photourl').value = this.currentPup.photoUrl;
    this.element.querySelector('.profile').value = this.currentPup.profile;
    this.element.querySelector('.puppy').src = this.currentPup.photoUrl;
  }

  remove() {
    this.element.querySelector('.btn-dlt').addEventListener('click', (ev) => {
      ev.preventDefault();

}


// fetch(`http://tiny-tn.herokuapp.com/collections/cd-puppy`, {
//     method: 'post',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(puppyData)
//   }).then((res) => res.json())
//   .then((data) => {
