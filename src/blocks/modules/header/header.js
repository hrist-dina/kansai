
export default class Header {
	constructor(selector = ".js-header") {
		this.selector = selector;
		this.selectorOpen = `${selector}-menu-open`;
		this.init();
	}

	init() {
		const openMenu = document.querySelector(this.selectorOpen);
		if (!openMenu) return;
		openMenu.addEventListener("click", () => {
			document.querySelector(this.selector).classList.toggle("active");
			document.querySelector("body").classList.toggle("o-hidden");
		});
	}
}