export default class PuppyView {
  constructor(currentPup, el) {
    this.currentPup = currentPup;
    this.el = el;

    this.element = document.createElement('div');
    this.element.classList.add('puppy-list__item');
    this.element.innerHTML = `<div class="container puppy-list">
      <div class="puppy-card">
        <figure class="pic-frame">
          <img class="puppy" src="" alt="">
        </figure>
        <div class="card-info">
          <ul class="form-list">
            <li class="form-list__item form-list__name">
              <p class="card-info__title"></p>
              <input class="card-input" type="text">
            </li>
            <li class="form-list__item form-list__age">
              <p class="card-info__title age"></p>
              <input class="card-input" type="text">
            </li>
            <li class="form-list__item form-list__photourl">
              <p class="card-info__title photourl"></p>
              <input class="card-input" type="text">
            </li>
            <li class="form-list__item form-list__profile">
              <p class="card-info__title profile"></p>
              <input class="card-input" type="text">
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
    console.log(this.element);

    this.element.querySelector('.card-info__title').innerHTML = this.currentPup.name;
    this.element.querySelector('.age').innerHTML = this.currentPup.age;
    this.element.querySelector('.photourl').innerHTML = this.currentPup.photoUrl;
    this.element.querySelector('.puppy').src = this.currentPup.photoUrl;
    this.element.querySelector('.profile').innerText = this.currentPup.profile;
  }

}
