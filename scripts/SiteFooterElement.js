const templateString = `
<style>
footer {
  padding: 0 var(--space-xxl);
  max-width: var(--body-max-width);
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
}

footer > * {
  margin: 0;
}

.social {
  display: block;
  width: 1.5rem;
}

#social-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .75rem;
}

#social-row img {
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
  text-align: center;
}
</style>

<footer>
  <slot></slot>

  <nav aria-label="Footer navigation">
    <a href="index.html">Home</a>
    <a href="single-player.html">Book</a>
    <a href="bio.html">Bio</a>
    <a href="contact.html">Contact</a>
  </nav>

  <div id="social-row">
    <a class="social" href="#"><img src="assets/twitter.svg" alt="Twitter"></a>
    <a class="social" href="#"><img src="assets/instagram.svg" alt="Instagram"></a>
    <a class="social" href="#"><img src="assets/facebook.svg" alt="Facebook"></a>
    <a class="social" href="#"><img src="assets/tiktok.svg" alt="TikTok"></a>
  </div>
  
  <p class="attribution">Website by Adam Butterworth</p>
</footer>
`;

class SiteFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const template = document.createElement('template');

    template.innerHTML = templateString;
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('site-footer', SiteFooter);
