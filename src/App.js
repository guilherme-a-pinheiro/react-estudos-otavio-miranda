import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
    state = {
      name: 'Guilherme Alves',
      counter: 0
    };


  handlePClick = () => {
    this.setState({ name: 'Júnior' });
    console.log('p clicado');
  }

  handleAClick = (e) => {
    e.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { name, counter } = this.state;

    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p onClick={this.handlePClick}>
                {name} {counter}
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                onClick={this.handleAClick}
              >
                Learn React
              </a>
            </header>
          </div>
        );
  }
}


export default App;
