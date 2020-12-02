import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Wheather from './Components/Wheather/Wheather'
import News from './Components/News/News'
import Navbar from './Components/Navbar/Navbar'
import CreateNotes from './Components/CreateNotes/CreateNotes'
import Article from './Components/Article/Article'
import AboutMe from './Components/AboutMe/AboutMe'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import Footer from './Components/Footer/Footer'
import { NewsProvider, WeatherProvider, NotesProvider } from './Components/ContextApi/ContextApi'
import './App.css';


function App() {
  return (
    <div className="app">
      <NotesProvider>
        <WeatherProvider>
          <NewsProvider>
            <Router>
              <Switch>
                <Route path="/" exact>
                  <Navbar />
                  <CreateNotes />
                  <Footer />
                </Route>
                <Route path="/wheather" exact>
                  <Navbar />
                  <Wheather />
                  <Footer />
                </Route>
                <Route path="/news" exact>
                  <Navbar />
                  <News />
                  <Footer />
                </Route>
                <Route path='/:id/:title' exact>
                  <Navbar />
                  <Article />
                  <Footer />
                </Route>
                <Route path='/about-me' exact>
                  <Navbar />
                  <AboutMe />
                  <Footer />
                </Route>
                <Route path='/privacy-policy' exact>
                  <Navbar />
                  <PrivacyPolicy />
                  <Footer />
                </Route>
                <Redirect to='/'></Redirect>
              </Switch>
            </Router>
          </NewsProvider>
        </WeatherProvider>
      </NotesProvider>
    </div>
  );
}

export default App;
