import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';
import { SignUpModal } from './components';


const App = () => {

  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => setUseDarkTheme(!useDarkTheme)}
      >
        Toggle Theme
    </button>
      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => setShowModal(!showModal)}
      >
        Toggle Modal
    </button>
      <div
        style={{
          background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
          width: "100cw",
          height: "100ch",
          display: "flex",
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <SignUpModal showModal={showModal} setShowModal={setShowModal}/>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}


ReactDom.render(<App />, document.querySelector('#root'));