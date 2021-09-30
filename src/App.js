import Navbar from './Navbar.js';
import Home from './Home.js'
import About from './About.js';
import Projects from './Projects.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className='main'>
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>

          <Route exact path = '/about'>
            <About />
          </Route>

        <Route exact path = '/projects'>
          <Projects />
        </Route>
      </Switch>
    </div>

    </BrowserRouter>
  );
}
export default App;
