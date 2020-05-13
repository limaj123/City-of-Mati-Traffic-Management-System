import React, { Component } from 'react'
import Menu from './component/Menu'
import Header from './component/Header'
import Footer from './component/Footer'
import Main from './component/Main'
import Violator from './component/Violator'
import Logs from './component/Logs'
import User from './component/User'
import Login from './component/Login'





export default class App extends Component {
 constructor(){
   super();
   this.state = {
     route: 'signin',
   }
 }
 onRouteChange = (route) => {
  this.setState({route: route});
}

  render() {
   
    return (
  


      <div>
           
        
          
          <div>
            {
          this.state.route === 'signin' ?
          <Login onRouteChange={this.onRouteChange}/> :
          <div>
            <Header/>
        <Menu onRouteChange={this.onRouteChange}/>
        
    {         this.state.route === 'DashBoard' ? 
                <Main/> :
              (  this.state.route === 'Violator' ? 
                <Violator /> : this.state.route === 'Logs' ? 
                <Logs /> : <User />)

        }
        <Footer/>
          </div>
            }
          </div>

      </div> 
    )
      
    }
  }