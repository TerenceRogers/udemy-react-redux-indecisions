'use strict';

var app = {
  title: 'Visibility Toggle',
  visible: false
};

var onDetailsVisibleButtonClick = function onDetailsVisibleButtonClick() {
  app.visible = !app.visible;
  render();
};

var getDetails = function getDetails() {
  if (app.visible) {
    return React.createElement(
      'p',
      null,
      'Hey. These are some details you can now see!'
    );
  } else {
    return undefined;
  }
};

var appRoot = document.getElementById('app');
var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: onDetailsVisibleButtonClick },
      app.visible ? 'Hide details' : 'Show details'
    ),
    getDetails()
  );

  ReactDOM.render(template, appRoot);
};

render();
