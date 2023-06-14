import React from 'react';
import header from './components/header';
import Menu from './components/Menu';
import PlayerContainer from './components/PlayerContainer';
import localStore from './utils/localStore';

import './App.css';

function App() {
  const [playState, setPlayState] = React.useState(localStore.getState());

  return (
    <div className="App">
      <PlayerContainer
        playState={playState}
        saveLocalState={localStore.savePlace}
        setPlayState={setPlayState}>
      </PlayerContainer>
      <Menu
        playState={playState}
        saveLocalState={localStore.savePlace}
        setPlayState={setPlayState}
      >
      </Menu>
    </div>
  );
}

export default App;
