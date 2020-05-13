import React from 'react'

const Login = ({onRouteChange}) => {

        return (
            <div >
                    <div className="login-box">
                   
                    {/* /.login-logo */}
                    <div className="login-box-body" style={{  background:'#3A9EDA', 'border-radius': '29px'}}>
                    <div className="login-logo" style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        <img alt='Mati' src='/image/mati.png'  style={{height:'200px',width:'200px'}} />
                        <a href="../../index2.html" style={{color:'White'}}><b>City of Mati Traffic </b>Management System</a>
                    </div>
                  
                        <form action="../../index2.html" method="post">
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="Username" />
                            <span className="fa fa-fw fa-user form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password" />
                            <span className="fa fa-fw fa-unlock-alt form-control-feedback" />
                        </div>
                        <div className="row" style={{    display: 'flex','flex-direction':'column', alignItems: 'center'}}>
                            <div className="col-xs-8">
                            </div>
                            {/* /.col */}
                            <div className="col-xs-4" >
                            <button onClick = {() => onRouteChange('DashBoard')} className="btn btn-block btn-info btn-lg" >Sign In</button>
                            </div>
                            {/* /.col */}
                        </div>
                        </form>
                
            
                    </div>
                    {/* /.login-box-body */}
                    </div>


            </div>
        )
    
}
export default Login;