import React, { Component } from 'react';
//import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import CreateQuiz from './components/CreateQuiz'
import './App.css';
import Quizpage from './components/Quizpage';
import CatsForm from './components/CatsForm';

class App extends Component {
  render() {
    return (
    <Router>
     <Switch> {/* wrapper for your router, given alias from BrowserRouter */}
        <div className="App">
          {/* <Navbar />
            <Login /> */}
            <Route exact path="/" component={Quizpage} /> 
            <Route exact path="/login" component={Login} />
            <Route exact path="/create" component={CreateQuiz}/>
            <Route exact path="/catsForm" component={CatsForm}/>  
            {/*  
            <IndexRoute component={Navbar}/>
            <Route path="/create" component={CreateQuiz}/> 
            <Route path="*" component={NotFound} />
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={MyForm} />  
            <Route exact path="/post/:id" component={SinglePost} />
            <Route exact path="/posts" component={Posts} />  
            <Route exact path="/author/:id" component={Author} /> 
            <Route  render={() => (<h1 className= 'display-2 text-center'> 404 Not Found</h1>)}
            */}
        </div>
      </Switch>
    </Router>
    );
  }
}

export default App;
