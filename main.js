const questions = [
	{
		question: "Верно ли утверждение, что люди с сахарным диабетом должны придерживаться специальной диеты?",
		answers: ["Да ", "Нет"],
		correct: 1,
	},
	{
		question: "У многих пожилых людей заболевание может протекать бессимптомно?",
		answers: ["Да ", "Нет"],
		correct: 1,
	},
	{
		question: "Нормальный уровень глюкозы крови натощак (ммоль/л) составляет:",
		answers: [
			"0,5 - 3,3",
			"3,3 - 5,7",
			"5,7 - 9,1",
			"9,1 - 12,5",
			"12,5 - 15,5"
		],
		correct: 2,
	},
	{
		question: "Что нужно сделать в первую очередь, если больного диабетом появляются признаки гипогликемии (пониженного сахара): слабость, бледность, потеря равновесия и тд?",
		answers: ["Вызвать скорую помощь ",
				    "Дать больному стакан воды",
					"Дать больному какой-нибудь из его противодиабетических препаратов ",
					"Дать больному быстроусвояемые углеводы (например, стакан сока или сладкую конфету)",
					"Положить больного в горизонтальное положение"
				],
		correct: 4,
	},
	{
		question: "Что из нижеперечисленного НЕ является дополнительным фактором риска развития диабета?",
		answers: ["Избыточный вес",
					"Принадлежность к монголоидной расе",
					"Повышенный уровень холестерина",
					"Принадлежность к европеоидной расе",
					"Возраст старше 45 лет"],
		correct: 5,
	},
	{
		question: "Если пациент неукоснительно следует предписаниям врача: правильно питается, не курит, не пренебрегает физической нагрузкой, – значит ли это, что он может поддерживать сахар на приемлемом уровне без применения специальных таблеток и инсулина?",
		answers: ["Да", "Нет"],
		correct: 1,
	},
	{
		question: "Гипогликемия- это",
		answers: ["это пониженный уровень сахара в крови ",
					"это повышенный уровень сахара в крови ",
					"сахар в норме"],
		correct: 1,
	},
	{
		question: "Гипергликемия - это",
		answers: ["сахар в норме",
					 "это повышенный уровень сахара в крови",
					  "это пониженный уровень сахара в крови"],
		correct: 2,
	},
	{
		question: "Диабет - это",
		answers: ["это, когда поджелудочная железа вырабатывает достаточно инсулина и организм эффективно использует вырабатываемый инсулин",
					 "это хроническое заболевание, которое возникает либо в случаях, когда поджелудочная железа не вырабатывает достаточное количество инсулина, либо когда организм не может Эффективно использовать вырабатываемый инсулин.",
					  "ничего неправильно из выше написанного"],
		correct: 2,
	},
	{
		question: "Инсулин - это",
		answers: ["его не вырабатывает поджелудочная железа",
					 "все ответы правильные",
					  "это белковое вещество, относящиеся к классу гормонов, который вырабатывает поджелудочная железа все время для контроля уровня сахара (глюкозы) в вашей крови"],
		correct: 3,
	},
	{
		question: "Сколько всего симптом сахарного диабета?",
		answers: ["много", "3", "10", "мало", "7"],
		correct: 5,
	},
	{
		question: "Сколько можно в день хлебных единиц человеку, который болеет сахарным диабетом?",
		answers: ["без ограничения ",
				  "30-35 ХЕ",
				  "3-5 ХЕ",
				  "18-25 ХЕ"],
		correct: 4,
	},
	{
		question: "Какой промежуток времени должен быть при замере сахара?",
		answers: ["24 часа",
				  "2-3 часа",
				  "можно не измерять"],
		correct: 2,
	},
];

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');





let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer

function clearPage(){
	headerContainer.innerHTML = '';
	listContainer.innerHTML = '';
}

function showQuestion(){
	console.log('showQuestion')

	const headerTemplate = `<h2 class="title">%title%</h2>`;
	const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
	headerContainer.innerHTML = title;

	// var questions
	for ([index, answerText] of questions[questionIndex]['answers'].entries()) {
        index++
		const questionTemplate =
			`<li>
				<label>
					<input value="%number%" type="radio" class="answer" name="answer" />
					<span>%answer%</span>
				</label>
			</li>`;

		const answerHTML = questionTemplate
				.replace('%answer%', answerText)
				.replace('%number%', index)

		listContainer.innerHTML += answerHTML;
	}




}

function checkAnswer(){
	console.log('chekAnswer started!');


	const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

	if (!checkedRadio){
		submitBtn.blur();
		return
	}

	const userAnswer = parseInt(checkedRadio.value)

	console.log(userAnswer, questions[questionIndex]['correct']);
	if (userAnswer === questions[questionIndex]['correct']) {
		score++;
		console.log('score = ', score);
	}


	if (questionIndex !== questions.length - 1){
		questionIndex++;
		clearPage();
		showQuestion();
		return;
	} else {
		clearPage();
		showResults();

	}


}

function showResults() {
	console.log('showResult started!');


	const resultsTemplate = `
		<h2 class="title">%title%</h2>
		<h3 class="summary">%message%</h3>
		<p class="result">%result%</p>
	`;

	let message, title;


	if(score === questions.length) {
		title = 'Поздравляем! 🎉🎉🎉';
		message = 'Вы ответели верно на все вопросы! 😎👍';
	} else if ((score * 100) / questions.length >= 50) {
		title = 'Не плохой результат! 🙃';
		message = 'Вы дали более половины правильных ответов! 👍';
	} else {
		title = 'Стоит постараться 😑';
		message = 'Пока у вас меньше половины правильных ответов';
	}

	let result = `${score} из ${questions.length}`;

	const finalMessage = resultsTemplate
							.replace('%title%', title)
							.replace('%message%', message)
							.replace('%result%', result)
	
	headerContainer.innerHTML = finalMessage;


	submitBtn.blur();
	submitBtn.innerText = 'Начать заново';
	submitBtn.onclick = () => history.go();



}