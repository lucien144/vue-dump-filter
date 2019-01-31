const VueDump = {};

VueDump.install = (Vue, options = { production: false }) => {
	const dump = value => {
		if (typeof console !== 'object' || options.production) {
			return;
		}

		if (typeof value === 'object') {
			if (Object.prototype.hasOwnProperty.call(value, '__ob__')) {
				console.log(Object.assign({}, value));
				return;
			}
		}

		console.log(value);
	};

	Vue.filter('dump', value => {
		dump(value);
	});

	Vue.prototype.$dump = dump.bind(console);
};

if (typeof exports === 'object') {
	module.exports = VueDump;
} else if (typeof define === 'function' && define.amd) { // eslint-disable-line no-undef
	define([], () => { // eslint-disable-line no-undef
		return VueDump;
	});
} else if (typeof window === 'object' && window.Vue) { // eslint-disable-line no-undef
	window.VueDump = VueDump; // eslint-disable-line no-undef
}
