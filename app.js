console.log('Some text');
console.log('Some text 2');

window.addEventListener('DOMContentLoaded', () => {
	const timer = setTimeout(() => {
		console.log('setTimeout');
		clearTimeout(timer);
	}, 5000);
});

console.log('some text 3');

