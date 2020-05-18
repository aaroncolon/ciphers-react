import React from "react";
import { hot } from 'react-hot-loader/root';

import DecoderForm from './redux/components/DecoderForm';
import Results from './redux/components/Results';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="site-container">
          <h1 className="title--site">Cipher</h1>
          <DecoderForm />
          <Results />
        </div>
      </>
    );
  }
}

export default hot(App);
