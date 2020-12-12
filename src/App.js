import store from './store/index';
import { Provider } from 'react-redux';
import BoardTrello from './pages/BoardTrello/BoardTrello';


function App() {
  return (
    <Provider store={store}>
        <BoardTrello />
    </Provider>
  );
}

export default App;
