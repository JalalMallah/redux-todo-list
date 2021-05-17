import { Provider } from 'react-redux';
import store from 'redux/store';

import 'styles/global.scss';

function App() {
  return (
    <Provider store={store}>
      <h1>The best Redux boilerplate! 💪🔥</h1>
    </Provider>
  );
}

export default App;
