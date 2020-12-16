import { store, persistor } from './store/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import BoardTrello from './pages/BoardTrello/BoardTrello';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/BoardTrello/Home';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/:boardId" component={BoardTrello} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
