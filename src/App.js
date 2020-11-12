import './App.css';

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";


function App() {
  return (
    <div className="App">
        <Layout>
          <p>Test</p>
          <BurgerBuilder></BurgerBuilder>
        </Layout>
    </div>
  );
}

export default App;
