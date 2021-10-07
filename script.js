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
const date = new Date();
const day = date.getDay();
switch(day){
	case 1:
		currentDay.textContent = 'poniedziałek'
		break;
	case 2:
		currentDay.textContent = 'wtorek'
		break;
	case 3:
		currentDay.textContent = 'środa'
		break;
	case 4:
		currentDay.textContent = 'czwartek'
		break;
	case 5:
		currentDay.textContent = 'piątek'
		break;	
	case 6:
	currentDay.textContent = 'sobota'
	break;	
	default:
		currentDay.textContent = 'niedziela'

}


