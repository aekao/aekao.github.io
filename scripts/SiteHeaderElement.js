const templateString = `
<style>

header {
  background-color: var(--canvas-primary);
  color: var(--color-secondary);
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  box-sizing: border-box;
}
svg {
  max-width: 200px;
}
h1 {
  color: var(--color-primary);
  margin: 0;
}
h1 a {
  display: block;
  color: inherit;
  text-decoration: none;
}
#mini-bio {
  margin: 0;
  max-width:500px;
}
nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
nav a {
  display: block;
  font-family: var(--heading-font-family);
  color: var(--color-primary);
  text-decoration: none;
}

@media (max-width: 999px) {
  header.minimal-style  {
    flex-direction: row;
    align-items: center;
    padding: 24px 32px;
  }
  .minimal-style h1 {
    flex-grow: 1;
  }
  .minimal-style svg {
    max-width: 100px;
  }
  .minimal-style #mini-bio {
    display:none;
  }
  .minimal-style nav {
    flex-direction: row;
  }
}

@media (min-width: 1000px) {
  header {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 500px;
  }
}

</style>

<div id="sentinel"></div>
<header id="site-header">
  <h1 aria-label="Tara Tai">
    <a href="index-new.html" style="line-height:0;">
      <svg viewBox="0 0 247 109" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M71.5995 0.0999966C72.1275 0.0999966 72.5835 0.291997 72.9675 0.675998C73.3515 1.06 73.5435 1.516 73.5435 2.044V13.636C73.5435 14.164 73.3515 14.62 72.9675 15.004C72.5835 15.388 72.1275 15.58 71.5995 15.58H56.1195V48.556C56.1195 49.084 55.9275 49.54 55.5435 49.924C55.1595 50.308 54.7035 50.5 54.1755 50.5H39.3435C38.8155 50.5 38.3595 50.308 37.9755 49.924C37.5915 49.54 37.3995 49.084 37.3995 48.556V15.58H21.9195C21.3915 15.58 20.9355 15.388 20.5515 15.004C20.1675 14.62 19.9755 14.164 19.9755 13.636V2.044C19.9755 1.516 20.1675 1.06 20.5515 0.675998C20.9355 0.291997 21.3915 0.0999966 21.9195 0.0999966H71.5995ZM88.2033 48.052C87.5793 49.684 86.4993 50.5 84.9633 50.5H71.3553C70.9233 50.5 70.5393 50.356 70.2033 50.068C69.9153 49.732 69.7713 49.348 69.7713 48.916L69.8433 48.484L85.5393 2.476C85.7313 1.852 86.0913 1.3 86.6193 0.819996C87.1473 0.339996 87.8673 0.0999966 88.7793 0.0999966H108.795C109.707 0.0999966 110.427 0.339996 110.955 0.819996C111.483 1.3 111.843 1.852 112.035 2.476L127.731 48.484L127.803 48.916C127.803 49.348 127.635 49.732 127.299 50.068C127.011 50.356 126.651 50.5 126.219 50.5H112.611C111.075 50.5 109.995 49.684 109.371 48.052L107.571 43.012H90.0033L88.2033 48.052ZM98.7873 13.996L93.6753 28.972H103.899L98.7873 13.996ZM184.727 48.268C184.823 48.46 184.871 48.676 184.871 48.916C184.871 49.348 184.703 49.732 184.367 50.068C184.079 50.356 183.719 50.5 183.287 50.5H166.943C166.271 50.5 165.647 50.332 165.071 49.996C164.543 49.66 164.159 49.228 163.919 48.7L157.583 34.444H151.535V48.556C151.535 49.084 151.343 49.54 150.959 49.924C150.575 50.308 150.119 50.5 149.591 50.5H134.039C133.511 50.5 133.055 50.308 132.671 49.924C132.287 49.54 132.095 49.084 132.095 48.556V2.044C132.095 1.516 132.287 1.06 132.671 0.675998C133.055 0.291997 133.511 0.0999966 134.039 0.0999966H162.047C166.367 0.0999966 170.135 0.795998 173.351 2.188C176.615 3.58 179.111 5.596 180.839 8.236C182.567 10.876 183.431 13.972 183.431 17.524C183.431 24.052 180.911 28.78 175.871 31.708L184.727 48.268ZM160.535 21.124C161.591 21.124 162.407 20.788 162.983 20.116C163.559 19.396 163.847 18.508 163.847 17.452C163.847 16.396 163.559 15.484 162.983 14.716C162.455 13.9 161.639 13.492 160.535 13.492H151.535V21.124H160.535ZM206.947 48.052C206.323 49.684 205.243 50.5 203.707 50.5H190.099C189.667 50.5 189.283 50.356 188.947 50.068C188.659 49.732 188.515 49.348 188.515 48.916L188.587 48.484L204.283 2.476C204.475 1.852 204.835 1.3 205.363 0.819996C205.891 0.339996 206.611 0.0999966 207.523 0.0999966H227.539C228.451 0.0999966 229.171 0.339996 229.699 0.819996C230.227 1.3 230.587 1.852 230.779 2.476L246.475 48.484L246.547 48.916C246.547 49.348 246.379 49.732 246.043 50.068C245.755 50.356 245.395 50.5 244.963 50.5H231.355C229.819 50.5 228.739 49.684 228.115 48.052L226.315 43.012H208.747L206.947 48.052ZM217.531 13.996L212.419 28.972H222.643L217.531 13.996ZM52.44 58.1C52.968 58.1 53.424 58.292 53.808 58.676C54.192 59.06 54.384 59.516 54.384 60.044V71.636C54.384 72.164 54.192 72.62 53.808 73.004C53.424 73.388 52.968 73.58 52.44 73.58H36.96V106.556C36.96 107.084 36.768 107.54 36.384 107.924C36 108.308 35.544 108.5 35.016 108.5H20.184C19.656 108.5 19.2 108.308 18.816 107.924C18.432 107.54 18.24 107.084 18.24 106.556V73.58H2.76C2.232 73.58 1.776 73.388 1.392 73.004C1.008 72.62 0.816 72.164 0.816 71.636V60.044C0.816 59.516 1.008 59.06 1.392 58.676C1.776 58.292 2.232 58.1 2.76 58.1H52.44ZM69.0439 106.052C68.4199 107.684 67.3399 108.5 65.8039 108.5H52.1959C51.7639 108.5 51.3799 108.356 51.0439 108.068C50.7559 107.732 50.6119 107.348 50.6119 106.916L50.6839 106.484L66.3799 60.476C66.5719 59.852 66.9319 59.3 67.4599 58.82C67.9879 58.34 68.7079 58.1 69.6199 58.1H89.6359C90.5479 58.1 91.2679 58.34 91.7959 58.82C92.3239 59.3 92.6839 59.852 92.8759 60.476L108.572 106.484L108.644 106.916C108.644 107.348 108.476 107.732 108.14 108.068C107.852 108.356 107.492 108.5 107.06 108.5H93.4519C91.9159 108.5 90.8359 107.684 90.2119 106.052L88.4119 101.012H70.8439L69.0439 106.052ZM79.6279 71.996L74.5159 86.972H84.7399L79.6279 71.996ZM146.776 93.74H159.808C160.336 93.74 160.792 93.932 161.176 94.316C161.56 94.7 161.752 95.156 161.752 95.684V106.556C161.752 107.084 161.56 107.54 161.176 107.924C160.792 108.308 160.336 108.5 159.808 108.5H114.16C113.632 108.5 113.176 108.308 112.792 107.924C112.408 107.54 112.216 107.084 112.216 106.556V95.684C112.216 95.156 112.408 94.7 112.792 94.316C113.176 93.932 113.632 93.74 114.16 93.74H127.336V72.86H114.16C113.632 72.86 113.176 72.668 112.792 72.284C112.408 71.9 112.216 71.444 112.216 70.916V60.044C112.216 59.516 112.408 59.06 112.792 58.676C113.176 58.292 113.632 58.1 114.16 58.1H159.808C160.336 58.1 160.792 58.292 161.176 58.676C161.56 59.06 161.752 59.516 161.752 60.044V70.916C161.752 71.444 161.56 71.9 161.176 72.284C160.792 72.668 160.336 72.86 159.808 72.86H146.776V93.74Z" fill="currentColor"/>
      </svg>    
    </a>
  </h1>
  <p id="mini-bio">Tara Tai is an Asian American writer living in Boston, where they spend most of their time playing TTRPGs and romancing video game NPCs. She holds degrees from Harvard University and Harvard Business School. 'Single Player' is her debut novel.</p>
  <nav aria-label="Main navigation">
    <a href="single-player.html">Book</a>
    <a href="bio.html">Bio</a>
    <a href="contact.html">Contact</a>
  </nav>
</header>
`;

class SiteHeader extends HTMLElement {
  static get observedAttributes() {
    return ['minimal'];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const template = document.createElement('template');

    template.innerHTML = templateString;
    shadow.appendChild(template.content.cloneNode(true));

    // Adding event listener for the menu toggle
    const menuButton = shadow.getElementById('main-menu-button');
    const navigation = shadow.getElementById('site-nav');
    
    // menuButton.addEventListener('click', () => {
    //   const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    //   menuButton.setAttribute('aria-expanded', !expanded);
    //   navigation.classList.toggle('active');
    // });

    // Observe when the header is "stuck" at the top
    this.headerElement = shadow.getElementById('site-header');
    const handleIntersection = (entries) => {
      console.log('handled')
      entries.forEach(entry => {
          if (!entry.isIntersecting) {
            headerElement.classList.add('is-pinned');
          } else {
            headerElement.classList.remove('is-pinned');
          }
      });
    }
    
    // Set up the observer
    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(shadow.getElementById('sentinel'));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'minimal') {
      this.applyMinimalStyle(newValue);
    }
  }

  applyMinimalStyle(value) {
    if (value !== null) {
      this.headerElement.classList.add('minimal-style');
    } else {
      this.headerElement.classList.remove('minimal-style');
    }
  }

}

customElements.define('site-header', SiteHeader);
