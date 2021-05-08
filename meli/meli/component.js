class OCard extends HTMLElement {
  constructor() {
    super();

    this.heading = "";
    this.subheading = "";
    this.image = "";
  }

  connectedCallback() {
    this.heading = this.getAttribute("heading");
    this.subheading = this.getAttribute("subheading");
    this.image = this.getAttribute("image");

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card mb-3" style="max-height:32em">
      <div class="row g-0">
        <div class="col-md-8">
          <img class="card-img-top d-block" src=${this.image}>
        </div>
      <div class="col-md-4">
      <div class="card-body">
      <h5 class="card-title">${this.heading}</h5>
      <p class="card-text">${this.subheading}</p>
        <a href="#" class="btn btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        </a>
      </div>
      </div>
      </div>
      </div>`;
  }
}

customElements.define("o-card", OCard);
