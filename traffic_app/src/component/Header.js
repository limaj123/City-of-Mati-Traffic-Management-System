import React from 'react'

const Header = ({onRouteChange}) => {
        return (
            <div>
<header className="main-header" style={{backgroundColor: '#337AB7'}}>
  {/* Logo */}
  <a href="index2.html" className="logo" style={{position:'fixed',backgroundColor: '#337AB7'}}>
    {/* mini logo for sidebar mini 50x50 pixels */}
    <span className="logo-mini" style={{fontSize:'10px'}}>CMTMS</span>
    {/* logo for regular state and mobile devices */}
    <span className="logo-lg"style={{fontSize:'15px'}}> Mati City Traffic Management System</span>
  </a>
  {/* Header Navbar: style can be found in header.less */}
  <nav className="navbar navbar-static-top">
    {/* Sidebar toggle button*/}
    <a href="fake_url" className="sidebar-toggle" data-toggle="push-menu" role="button">
      <span className="sr-only">Toggle navigation</span>
    </a>
    {/* Navbar Right Menu */}
    <div className="navbar-custom-menu">
      <ul className="nav navbar-nav">
     <li className="dropdown tasks-menu">
       <ul className="dropdown-menu">
            <li className="header">You have 9 tasks</li>
            <li>
              {/* inner menu: contains the actual data */}
              <ul className="menu">
                <li>{/* Task item */}
                  <a href="fake_url">
                    <h3>
                      Design some buttons
                      <small className="pull-right">20%</small>
                    </h3>
                    <div className="progress xs">
                      <div className="progress-bar progress-bar-aqua" style={{width: '20%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                        <span className="sr-only">20% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>
                {/* end task item */}
                <li>{/* Task item */}
                  <a href="fake_url">
                    <h3>
                      Create a nice theme
                      <small className="pull-right">40%</small>
                    </h3>
                    <div className="progress xs">
                      <div className="progress-bar progress-bar-green" style={{width: '40%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                        <span className="sr-only">40% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>
                {/* end task item */}
                <li>{/* Task item */}
                  <a href="fake_url">
                    <h3>
                      Some task I need to do
                      <small className="pull-right">60%</small>
                    </h3>
                    <div className="progress xs">
                      <div className="progress-bar progress-bar-red" style={{width: '60%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>
                {/* end task item */}
                <li>{/* Task item */}
                  <a href="fake_url">
                    <h3>
                      Make beautiful transitions
                      <small className="pull-right">80%</small>
                    </h3>
                    <div className="progress xs">
                      <div className="progress-bar progress-bar-yellow" style={{width: '80%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                        <span className="sr-only">80% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>
                {/* end task item */}
              </ul>
            </li>
            <li className="footer">
              <a href="fake_url">View all tasks</a>
            </li>
          </ul>
        </li>
        {/* User Account: style can be found in dropdown.less */}
        <li className="dropdown user user-menu">
          <a href="fake_url" className="dropdown-toggle" data-toggle="dropdown">
            <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User" />
            <span className="hidden-xs">Atty. Al Aquino</span>
          </a>
          <ul className="dropdown-menu">
            {/* User image */}
            <li className="user-header">
              <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
              <p>
                    Atty. Al Aquino
       
              </p>
            </li>
            {/* Menu Body */}
            <li className="user-body">
             {/* /.row */}
            </li>
            {/* Menu Footer*/}
            <li className="user-footer">
              <div className="pull-left">
                <a href="fake_url" className="btn btn-default btn-flat">Profile</a>
              </div>
              <div className="pull-right">
                <a href="fake_url" className="btn btn-default btn-flat">Sign out</a>
              </div>
            </li>
          </ul>
        </li>
        {/* Control Sidebar Toggle Button */}
        <li>
          <a href="fake_url" data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
        </li>
      </ul>
    </div>
  </nav>
</header>

            </div>
      
      );
    
}
export default Header;