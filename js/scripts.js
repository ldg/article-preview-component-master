let shareContainer = document.getElementById('share-container'),
	shareLinks = shareContainer.querySelector('.share-links'),
	closeShare = document.getElementById('close-share');

function mobileMenu() {
	shareContainer.addEventListener('click', (event) => {
		shareLinks.classList.toggle('active');

		if (event.target === closeShare) {
			shareLinks.classList.remove('active');
		}
	});
}

mobileMenu();
