/////////////////////////////////////////////////////////////
// Mobile Navigation

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.heading');

btnNavEl.addEventListener('click', function() {
    headerEl.classList.toggle('nav-open');
});

/////////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll(".smooth-scroll");


allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = link.getAttribute('href');

        //scroll to top
        if (href === "#") window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        //Scroll to other links
        if (href !== "#" && href.startsWith('#')) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });

        }

        //close mobile navigation
        if (link.classList.contains('main-nav-link'))
            headerEl.classList.toggle('nav-open');
    });
});

/////////////////////////////////////////////////////////////
// Sticky navigation

const sectionHomeEl = document.querySelector(".section-home");
const obs = new IntersectionObserver(function(entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
        document.body.classList.add('sticky');
    }
    if (ent.isIntersecting) {
        document.body.classList.remove('sticky');
    }
}, {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
});
obs.observe(sectionHomeEl);