export default class Field  {
	constructor(selector = ".js-tab") {
		this.selector = selector;
		this.classNav = `${selector}-nav`;
		this.classContent = `${selector}-content`;
		this.init();
	}

	init() {
		document.querySelectorAll(this.selector)
			.forEach((elem) => {
				this.initEvents(elem);
			});
	}

	initEvents(elem) {
		const navElemList = elem.querySelectorAll(this.classNav);
		const contentElemList = [...elem.querySelector(this.classContent).children];

		navElemList.forEach(item => {
			item.addEventListener("click", e => {
				const nav = e.target.closest(this.classNav);
				navElemList.forEach(i => i.classList.remove("active"));
				nav.classList.add("active");
				const type = nav.dataset["tab"];
				contentElemList.forEach(content => {
					if (content.dataset["tabContent"] === type) {
						content.classList.add("active");
					} else {
						content.classList.remove("active");
					}
				});
			});
		});
	}
}