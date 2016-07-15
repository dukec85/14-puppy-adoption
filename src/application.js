export default class ApplicationView {
  constructor (htmlApp) {
    this.htmlApp = htmlApp;
    this.data = [];
  }
  render() {
    this.htmlApp.innerHTML = '';


  }
}
