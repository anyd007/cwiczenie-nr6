const currentDay = document.querySelector('.current-days')
const funFact = document.querySelector('.fun-facts')

const facts = [
	'Krokodyl nie potrafi wystawić języka.',
	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
	'Goryle śpią nawet czternaście godzin dziennie.',
	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.'
]
const dateN = new Date()
const dayN = dateN.getDay()

let weekday = dateN.toLocaleString("pl", { weekday: "long" })
	currentDay.textContent = weekday

const seeFunny = () =>{
const funny = Math.floor(Math.random() *(facts.length -1));
funFact.textContent = facts[funny];
}
seeFunny();



