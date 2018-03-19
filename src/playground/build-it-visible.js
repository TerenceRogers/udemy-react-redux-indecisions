const app = {
  title: 'Visibility Toggle',
  visible: false,
}

const onDetailsVisibleButtonClick = () => {
  app.visible = !app.visible;
  render();
};

const getDetails = () => {
  if (app.visible) {
    return <p>Hey. These are some details you can now see!</p>;
  } else {
    return undefined;
  }
};

const appRoot = document.getElementById('app');
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onDetailsVisibleButtonClick}>
        {app.visible ? 'Hide details' : 'Show details'}
      </button>
      {getDetails()}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();