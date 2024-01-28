class MiniBio extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const template = document.createElement('template');

    template.innerHTML = `
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
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('mini-bio', MiniBio);


class SocialRow extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const template = document.createElement('template');

    template.innerHTML = `
      <style>
        ul {
          display: flex;
          gap: .75rem;
          list-style: none;
          padding: 0;
          justify-content: center;
        }
        a, img {
          display: block;
        }
      </style>
      <ul>
        <li><a class="social" href="#"><img src="assets/twitter.svg" alt="Twitter"></a></li>
        <li><a class="social" href="#"><img src="assets/instagram.svg" alt="Instagram"></a></li>
        <li><a class="social" href="#"><img src="assets/facebook.svg" alt="Facebook"></a></li>
        <li><a class="social" href="#"><img src="assets/tiktok.svg" alt="TikTok"></a></li>
      </ul>
    `;
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('social-row', SocialRow);


class FooterNav extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const template = document.createElement('template');

    template.innerHTML = `
      <style>
        nav {
          font-size: var(--font-size-md);
        }
        a {
          display: block;
          padding: var(--space-sm);
          text-decoration: none;
          text-align: center;
          color: inherit;
        }
        
        a:visited,
        a:hover {
          background-color: var(--subdued-bg);
          color: inherit;
          border-radius: var(--radius);
        }
      
      </style>
      <nav aria-label="Footer navigation">
        <a href="index-new.html">Home</a>
        <a href="single-player.html">Book</a>
        <a href="bio.html">Bio</a>
        <a href="contact.html">Contact</a>
      </nav>
    `;
    shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const ariaLabel = this.getAttribute('aria-label');
    const nav = this.shadowRoot.querySelector('nav');
    if (ariaLabel && nav) {
        nav.setAttribute('aria-label', ariaLabel);
    }
  }
}

customElements.define('footer-nav', FooterNav);
