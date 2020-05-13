import React from 'react'

const Login = ({onRouteChange}) => {

        return (
            <div style = {{ background:'red'}}>
                    <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html"><b>City of Mati Traffic </b>Management System</a>
                    </div>
                    {/* /.login-logo */}
                    <div className="login-box-body" style={{ background:'#d2d6de'}}>
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form action="../../index2.html" method="post">
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="Username" />
                            <span className="fa fa-fw fa-user form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password" />
                            <span className="fa fa-fw fa-unlock-alt form-control-feedback" />
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                         
                            </div>
                            {/* /.col */}
                            <div className="col-xs-4" style={{    display: 'flex', alignItems: 'center'}}>
                            <button onClick = {() => onRouteChange('DashBoard')} className="btn btn-primary btn-block btn-flat">Sign In</button>
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