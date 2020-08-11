export default class Field  {
	constructor(selector = ".js-field") {
		this.selector = selector;
		this.init();
	}

	init() {
		this.fieldInput = `${this.selector}-input`;
		document.querySelectorAll(this.selector)
			.forEach((elem) => {
				const fieldInput = elem.querySelector(this.fieldInput);
				this.initEvents(fieldInput);
			});
	}

	initEvents(elem) {
		const val = elem.value;
		if (val && val.length) {
			elem
				.closest(this.selector)
				.classList.add("active");
		}

		elem.addEventListener("focus", e => {
			const fieldInput = e.target;
			fieldInput.closest(this.selector).classList.add("active");
		});

		elem.addEventListener("blur", e => {
			const fieldInput = e.target;
			const val = fieldInput.value;
			if (!val) {
				fieldInput.closest(this.selector).classList.remove("active");
			}
		});
	}
}