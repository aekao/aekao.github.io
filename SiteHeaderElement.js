const templateString = `
<style>
header {
  background-color: var(--canvas-primary);
  color: var(--color-secondary);
  padding: 80px 32px;
  box-sizing: border-box;
  color: var(--color-primary);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 200;
  font-size: 14px;
}
#container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
}
svg {
  display: block;
}
h1, p {
  margin: 0;
}
h1 {
  text-transform: uppercase;
  font-family: var(--heading-font-family);
  font-weight: 400;
  font-size: 60px;
  line-height: .9;
  margin: 0 -.05em;
}
#pinned-header h1 {
  font-size: 24px;
}
h1 a {
  display: block;
  color: inherit;
  text-decoration: none;
}
h1 > a > span {
  display: block;
}
span.letter-t {
  letter-spacing: -0.08em;
}
p {
  max-width: 50em;
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
@media (min-width: 550px) {
  header {
    padding: 80px;
  }
  nav {
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
    z-index: 200;
  }
  nav {
    flex-direction: column;
  }
}

#pinned-header {
  background-color: var(--canvas-primary);
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: none;
}
#pinned-header.is-pinned {
  display: flex;
}
#pinned-header svg {
  width: 80px;
}
#pinned-header p {
  display: none;
}
#pinned-header nav {
  flex-direction: row;
}
</style>

<header id="site-header">
  <div id="container">
    <h1>
      <a href="#top">
        <span>
          <span class="letter-t">T</span>ara
        </span>
        <span>
          <span class="letter-t">T</span>ai
        </span>
      </a>
    </h1>
    <p><!--Tara Tai is an Asian American writer living in Boston, where they spend most of their time playing TTRPGs and romancing video game NPCs. She holds degrees from Harvard University and Harvard Business School. 'Single Player' is her debut novel.--></p>
    <nav aria-label="Main navigation">
      <a href="#single-player">Book</a>
      <a href="#bio">Bio</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
  <div id="sentinel"></div>
</header>
<header id="pinned-header">
  <h1>
    <a href="#top">
      <span>
        <span class="letter-t">T</span>ara
      </span>
      <span>
        <span class="letter-t">T</span>ai
      </span>
    </a>
  </h1>
  <nav aria-label="Main navigation">
    <a href="#single-player">Book</a>
    <a href="#bio">Bio</a>
    <a href="#contact">Contact</a>
  </nav>
</header>
`;

class SiteHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const template = document.createElement('template');

    template.innerHTML = templateString;
    shadow.appendChild(template.content.cloneNode(true));

    // Observe when the header is "stuck" at the top
    this.headerElement = shadow.getElementById('pinned-header');
    const handleIntersection = (entries) => {
      console.log('handled')
      entries.forEach(entry => {
          if (!entry.isIntersecting) {
            this.headerElement.classList.add('is-pinned');
          } else {
            this.headerElement.classList.remove('is-pinned');
          }
      });
    }
    
    // Set up the observer
    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(shadow.getElementById('sentinel'));
  }
}

customElements.define('site-header', SiteHeader);
