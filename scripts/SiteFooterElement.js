const templateString = `
<style>
#site-footer {
  padding: 0 var(--space-xxl);
  max-width: var(--body-max-width);
  margin: 0 auto;
  box-sizing: border-box;
}

#site-footer:before {
  content: '';
  display: block;
  margin: 2rem 0;
  border: 0;
  border-top: solid 1px var(--subdued-bg);
}

#footer-bio {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
}

#footer-bio, #footer-nav, #social-row {
  margin-bottom: 3rem;
}

#footer-bio .portrait {
  width: 25%;
  flex-shrink: 0;
}

#footer-bio .portrait img {
  width: 100%;
  border-radius: var(--radius);
}

#footer-bio .bio {
  align-self: center;
}
#footer-bio .bio p {
  margin: 0;
}
#footer-bio .bio p.attribution {
  margin: var(--space-sm) 0 0;
}


.social {
  display: inline-block;
  width: 1.5rem;
}

#social-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .75rem;
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

.attribution, address {
  color: var(--subdued-color);
  font-size: 0.75rem;
  font-style: normal;
}
</style>

<footer id="site-footer">
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

  <nav id="footer-nav" aria-label="Footer navigation">
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
  
  <p class="attribution" style="text-align: center;">Website by: Adam Butterworth</p>
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
