import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(o => o !== option)
    }));
  };
  handlePick = () => {
    const randomNum = Math.random();
    const randomIndex = Math.floor(randomNum * this.state.options.length);
    const option = this.state.options[randomIndex];
    this.setState(() => ({ selectedOption: option }));
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      // Do nothing with this error
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.options.length !== prevState.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  render() {
    const title = "Indecision"
    const subTitle = "Put your life in the hands of a computer"

    return (
      <div>
        <Header subTitle={subTitle}/>
        <div className="container">
          <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options 
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
              handleAddOption={this.handleAddOption}
            />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
          />
        </div>
      </div>
    );
  };
};

export default IndecisionApp;