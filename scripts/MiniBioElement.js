const templateString = `
<style>
#footer-bio {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
}

.portrait {
  width: 25%;
  flex-shrink: 0;
}

img {
  width: 100%;
  display: block;
  border-radius: var(--radius);
}

.bio {
  align-self: center;
}
p {
  margin: 0;
}

nav {
  display: block;
}

nav > a {
  display: block;
  padding: var(--space-sm);
  text-decoration: none;
  text-align: center;
  color: inherit;
}

nav > a:visited,
nav > a:hover {
  background-color: var(--subdued-bg);
  color: inherit;
  border-radius: var(--radius);
}

.attribution {
  color: var(--subdued-color);
  font-size: 0.75rem;
  font-style: normal;
  margin: var(--space-sm) 0 0;
}
</style>

<div id="footer-bio" class="flex">
  <div class="portrait">
    <img src="assets/tara-180w.jpg" 
    srcset="assets/tara-180w.jpg 180w, assets/tara-360w.jpg image-360w"
    sizes="(max-width: 500px) 480px, 360px"
    alt="A casual portrait of Tara Tai wearing a black t-shirt and smiling">
  </div>
  <div class="bio">
    <p>Tara Tai is an Asian American writer living in Boston, where they spend most of their time playing TTRPGs and romancing video game NPCs. She holds degrees from Harvard University and Harvard Business School. 'Single Player' is her debut novel.</p>
    <p class="attribution">Photo by: Nicole Loeb</p>
  </div>
</div>
`;

class MiniBio extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const template = document.createElement('template');

    template.innerHTML = templateString;
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('mini-bio', MiniBio);
