const templateString = `
<style>
    #site-header {
        padding: 0 var(--space-xxl);
        position: sticky;
        top: -1px; /* https://css-tricks.com/how-to-detect-when-a-sticky-element-gets-pinned/  */
        background-color: var(--primary-bg);
    }
    #site-header.is-pinned {
        box-shadow: 0 1px 0 rgba(0,0,0,.1);
    }

    #site-header .row {
        display: flex;
        justify-content: space-between;
        height: 4rem;
        align-items: center;
    }

    .logotype {
        font-family: var(--heading-font-family);
        font-size: 1.125rem;
        text-transform: uppercase;
        color: var(--primary-color) !important;
        text-decoration: none;
        letter-spacing: -0.035rem;
    }

    #site-nav {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        display: none;
        background: white;
    }

    #site-nav.active {
        display: block;
    }

    #main-menu-button {
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


</style>

<header id="site-header">
    <div class="row">
        <a class="logotype" href="index.html">Tara Tai</a>
        <button id="main-menu-button" aria-label="Menu" aria-controls="navigation" aria-expanded="false">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                <rect class="line top" x="3" y="6" width="15" height="2"/>
                <rect class="line middle" x="3" y="11" width="18" height="2"/>
                <rect class="line bottom" x="3" y="16" width="13" height="2"/>
            </svg>
        </button>
    </div>
    <nav id="site-nav" aria-label="Main navigation">
        <a href="single-player.html">Book</a>
        <a href="bio.html">Bio</a>
        <a href="contact.html">Contact</a>
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

        // Adding event listener for the menu toggle
        const menuButton = shadow.getElementById('main-menu-button');
        const navigation = shadow.getElementById('site-nav');
        
        menuButton.addEventListener('click', () => {
            const expanded = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', !expanded);
            navigation.classList.toggle('active');
        });

        // Add an observer to know when the element is "stuck" (see: https://css-tricks.com/how-to-detect-when-a-sticky-element-gets-pinned/)
        const el = shadow.getElementById("site-header");
        const observer = new IntersectionObserver(
            ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
            { threshold: [1] }
        );
        observer.observe(el);
    }
}

customElements.define('site-header', SiteHeader);
