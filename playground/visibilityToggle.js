
class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visible : false
        }
    };
    handleVisibility(){
        this.setState((prevState) => {
            return {
                visible : !prevState.visible
            }
        })
    };
    render(){
        return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleVisibility}>
              {this.state.visible ? 'Hide Details' : 'Show Details'}
            </button>
            <br></br>
            {this.state.visible && (
                <div>
                    <p>Here's some text</p>
                </div>
            )}
	    </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'))

// const appRoot = document.getElementById('app');

// let visibility = false;

// const toggle = () => {
//     visibility = !visibility
//     renderVisible();
// }

// const renderVisible = () => {
// const template = (
// 	<div>
// 		<h1>Visibility Toggle</h1>
//         <button onClick={toggle}>
//             {visibility ? 'Hide Details' : 'Show Details'}
//         </button>
//         <br></br>
//         {visibility && (
//             <div>
//                 <p>Here's some text</p>
//             </div>
//         )}
// 	</div>
// );
// ReactDOM.render(template, appRoot);
// }

// renderVisible();