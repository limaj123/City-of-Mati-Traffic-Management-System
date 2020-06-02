import React, { Component } from 'react'

export default class Login extends Component {
    state = {
       userName:'',
       passWord:'',
       id: 'false',
      }
      onChangeUsername = (event) => {
        this.setState({userName : event.target.value})
    console.log(this.state.userName)
      }
      onChangePassword = (event) => {
        this.setState({passWord : event.target.value})
    console.log(this.state.passWord)
      }
      UserLogin(){
          if(this.state.userName==='admin'&& this.state.passWord === 'admin'){
            this.props.onRouteChange('DashBoard')
          }else{
            this.setState({id : 'true'})

          }
      }
    render() {
        return (
            <div>
                  
    {
            <div className="login-box">

                {/* /.login-logo */}
                <div className="login-box-body" style={{ background: '#3A9EDA', borderRadius: '29px' }}>
                    <div className="login-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img alt='Mati' src='/image/mati.png' style={{ height: '200px', width: '200px' }} />
                        <a href="../../index2.html" style={{ color: 'White' }}><b>City of Mati Traffic </b>Management System</a>
                    </div>

                    <div className="form-group has-feedback" style={{textAlign:'center'}}>
                           {
                               this.state.id === 'true' ?  <h4 style={{color:'red'}}>Wrong Passwor or Username</h4> : null
                           }
                        </div>
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" id={this.state.id} placeholder="Username" onChange={this.onChangeUsername} />
                            <span className="fa fa-fw fa-user form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password" id={this.state.id} onChange={this.onChangePassword} />
                            <span className="fa fa-fw fa-unlock-alt form-control-feedback" />
                        </div>
                        <div className="row" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="col-xs-8">
                            </div>
                            {/* /.col */}
                            <div className="col-xs-4" >
                                <button onClick={() => this.UserLogin()} className="btn btn-block btn-info btn-lg" >Sign In</button>
                            </div>
                            {/* /.col */}
                        </div>
                 


                </div>
                {/* /.login-box-body */}
            </div>

}
        </div>
        
   
        )
    }
}
