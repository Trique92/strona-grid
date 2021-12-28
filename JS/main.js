const navMobile = document.querySelector('nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	navBtn.classList.toogle('is-active');
	navBtn.classList.toogle('nav-mobile--active');
};

navBtn.addEventListener('click', handleNav);

const handleCurretYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurretYear();
