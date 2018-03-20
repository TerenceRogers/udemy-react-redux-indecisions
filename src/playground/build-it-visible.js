class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    
    this.title = "Visibility Toggle";
    this.state = {
      visible: false,
    }
  }
  handleToggleVisibility() {
    this.setState((state, props) => {
      return {
        visible: !state.visible,
      }
    });
  }
  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visible ? 'Hide Details' : 'Show Details'}
        </button>
        {
          this.state.visible && <p>Hey. These are some details you can now see!</p>
        }
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const app = {
//   title: 'Visibility Toggle',
//   visible: false,
// }

// const onDetailsVisibleButtonClick = () => {
//   app.visible = !app.visible;
//   render();
// };

// const getDetails = () => {
//   if (app.visible) {
//     return <p>Hey. These are some details you can now see!</p>;
//   } else {
//     return undefined;
//   }
// };

// const appRoot = document.getElementById('app');
// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={onDetailsVisibleButtonClick}>
//         {app.visible ? 'Hide details' : 'Show details'}
//       </button>
//       {getDetails()}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();