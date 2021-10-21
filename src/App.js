import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from './components/MainComponents';
import Store from './redux/Store';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
