// ----- Modules -----------
import { Route, NavLink, Switch } from "react-router-dom";
import { HiMenu, HiX } from 'react-icons/hi';
// import store from 'redux/store.js';

import { Component } from "react";

// ----- Components --------
import HomeView from "views/HomeView";
import AboutView from "views/AboutView";
import NotFound from "views/NotFound";
import AboutCardView from "views/AboutCardView";
import SideBar from "components/SideBar/SideBar";
import Counter from "components/Counter/Counter";





class App extends Component {

  state = {
    isVisible: false,
  }

  handleVisible = () => {
    this.setState(prev => ({isVisible: !this.state.isVisible}))
  }
  render(){
    return (
        <div className="App">
          <Counter/>
          <SideBar isVisible={this.state.isVisible}/>
          <nav>
            <NavLink exact to='/' className="NavLink" activeClassName="NavLink--active" >Home</NavLink>
            <NavLink to='/about' className="NavLink" activeClassName="NavLink--active" >About</NavLink>
          </nav>

          <button 
          type="button" 
          className="SideBar--open"
          onClick={this.handleVisible}
          >
            {this.state.isVisible ? <HiX/> : <HiMenu/>}
          </button>
    
          <div>
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/about/:aboutId" component={AboutCardView}/>
              <Route exact path="/about" component={AboutView} />
              <Route component={NotFound}/>
            </Switch>
            
          </div>
        </div>
      );
  }
  
}

export default App;
