const slides = document.querySelectorAll('.slide')

for (const slide of slides)
{
	slide.addEventListener('click', () => {
		slide.classList.contains('active') ? 
		slide.classList.remove('active') :
		onActive(slide)
	})
}

function onActive(slide)
{
	clearActiveClasses()
	slide.classList.add('active')
}

function clearActiveClasses(){
	slides.forEach((slide) => {
			slide.classList.remove('active')
	})
}
