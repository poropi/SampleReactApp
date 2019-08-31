import * as React from 'react';
import './App.css';
import SigninContainer from './containers/signinContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SigninContainer/>
      </div>
    );  
  }
}

export default App;
