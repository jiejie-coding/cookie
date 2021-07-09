
let input = document.getElementById('input');
let btn = document.getElementById('confirm');

btn.addEventListener('click', () => {
	window.chrome.cookies.getAll({ url: input.value },
			cookies => {
				window.chrome.tabs.query({ active: true, currentWindow: true },
					tabs => {
						let url = tabs[0].url;
						cookies.forEach(item => {
							window.chrome.cookies.set({
									url,
									name: item.name,
									value: item.value,
									path: '/',
								});
						});
						console.log('种cookie成功');
					}
				);
			}
		);
})


