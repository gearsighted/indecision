class Counter extends React.Component {
		constructor (props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.resetAll = this.resetAll.bind(this);
		this.state = {
			count: 0
		}	
	};
	componentDidMount(){
		const stringCount = localStorage.getItem('count');
		const count = parseInt(stringCount, 10);
		if(!isNaN(count)){
			this.setState(() => ({ count }))
		}
		
	}
	componentDidUpdate(prevProps, prevState){
		if(prevState.count !== this.state.count){
		localStorage.setItem('count', this.state.count)
		} 
	}

	handleAddOne(){
		this.setState((prevState) => {
			return {
				count : prevState.count + 1
			}
		})
	}
	handleMinusOne(){
		this.setState((prevState) => {
			return {
				count : prevState.count - 1
			}
		})
	}
	resetAll(){
		this.setState((prevState) => {
			return {
				count : 0
			}
		})
	}
	render(){
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.resetAll}>reset</button>
			</div>
		)
	}
}

ReactDOM.render(<Counter/>, document.getElementById('app'))

// create 3 methods: handleAddOne, handleMinusOne, resetAll
// use alert when button gets clicked 
// onClick for all 3 buttons
// bind constructor

// let count = 0;

// const addOne = () => {
// 	count ++;
// 	renderCounterApp();
// }

// const minusOne = () => {
// 	count --;
// 	renderCounterApp();
// }

// const resetAll = () => {
// 	count = 0;
// 	renderCounterApp();
// }


// const renderCounterApp = () => {
// const templateTwo = (
// 	<div>
// 		<h1>Count: {count}</h1>
// 		<button onClick={addOne}>+1</button>
// 		<button onClick={minusOne}>-1</button>
// 		<button onClick={resetAll}>reset</button>

// 	</div>
// );
// ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();