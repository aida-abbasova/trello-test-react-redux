import store from './store/index';
import { Provider } from 'react-redux';
import BoardTrello from './pages/BoardTrello/BoardTrello';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/BoardTrello/Home';


function App() {
  return (
    <Provider store={store}>
      <Router>
         <Route path="/" exact component={Home} />
         <Route path="/:boardId" component={BoardTrello} />
      </Router>
    </Provider>
  );
}

export default App;
