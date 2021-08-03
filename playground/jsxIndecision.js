const appRoot = document.getElementById('app');

const numbers = [99, 530, 1000];

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
}

const onFormSubmit = (event) => {
	event.preventDefault();
	const option = event.target.elements.option.value;
	if(option){
		app.options.push(option);
		event.target.elements.option.value = '';
		renderSubmissions();
	}
}

const removeAll = () => {
	app.options = [];
	renderSubmissions();
}

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
}

const renderSubmissions = () => {
const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
		<button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
		<button onClick={removeAll}>Remove All</button>
		<ol>
		{
			app.options.map((option) => {
				return <li key={option}>{option}</li>
			})
		}
		</ol>
		<form onSubmit = {onFormSubmit}>
			<input type="text" name="option"/>
			<button>Submit</button>
		</form>
	</div>
);
ReactDOM.render(template, appRoot);
}

renderSubmissions();