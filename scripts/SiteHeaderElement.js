const templateString = `
<style>

#sentinel {
  position: absolute;
  top: 0;
  height: 1px;
}

header {
  position: sticky;
  top: 0;
  z-index: 100;
  transition: box-shadow .25s ease;
}

header.is-pinned {
  background-color: var(--primary-bg);
  --drop-shadow: 0 1px 10px rgba(0,0,0,.1);
  box-shadow: var(--drop-shadow);
}

.row {
  display: flex;
  justify-content: space-between;
  height: 4rem;
  align-items: center;
  padding: 0 var(--space-xxl);
  margin: 0 auto;
}

.logotype {
  font-family: var(--serif-font-family);
  font-size: 1.125rem;
  text-transform: uppercase;
  color: var(--primary-color) !important;
  text-decoration: none;
  letter-spacing: -0.035rem;
}

#main-menu-button {
  display:none;
  background: none;
  border: 0;
  padding: 0;
  overflow: hidden;
}

#main-menu-button .line {
  fill: #000;
  transition: transform 0.4s ease, width 0.4s ease, opacity 0.4s ease;
}

#main-menu-button .line.top { transform-origin: center; }
#main-menu-button .line.middle { transform-origin: center; }
#main-menu-button .line.bottom { transform-origin: center; }

#main-menu-button[aria-expanded="true"] .line.top {
  transform: rotate(45deg) translateY(5px);
  width: 18px;
}

#main-menu-button[aria-expanded="true"] .line.bottom {
  transform: rotate(-45deg) translateY(-5px);
  width: 18px;
}

#main-menu-button[aria-expanded="true"] .line.middle {
  opacity: 0;
}

nav {
  display: flex;
  padding: var(--space-md) 0;
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

@media (max-width: 700px) {
  #main-menu-button {
    display: block;
  }

  nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: none;
    background: white;
  }
  
  nav.active {
    display: block;
    box-shadow: 0 1px 0 rgba(0,0,0,.1);
  }
}

</style>

<div id="sentinel"></div>
<header id="site-header">
  <div class="row">
    <a class="logotype" href="index-new.html">Tara Tai</a>
    <button id="main-menu-button" aria-label="Menu" aria-controls="navigation" aria-expanded="false">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
        <rect class="line top" x="3" y="6" width="15" height="2"/>
        <rect class="line middle" x="3" y="11" width="18" height="2"/>
        <rect class="line bottom" x="3" y="16" width="13" height="2"/>
      </svg>
    </button>
    <nav id="site-nav" aria-label="Main navigation">
      <a href="single-player.html">Book</a>
      <a href="bio.html">Bio</a>
      <a href="contact.html">Contact</a>
    </nav>
  </div>
</header>
`;

class SiteHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const template = document.createElement('template');

    template.innerHTML = templateString;
    shadow.appendChild(template.content.cloneNode(true));

    // Adding event listener for the menu toggle
    const menuButton = shadow.getElementById('main-menu-button');
    const navigation = shadow.getElementById('site-nav');
    
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', !expanded);
      navigation.classList.toggle('active');
    });

    // Observe when the header is "stuck" at the top
    const headerElement = shadow.getElementById('site-header');
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
}

customElements.define('site-header', SiteHeader);
