import React from 'react'

const Menu = ({ onRouteChange }) => {

        return (
            <div>
 <aside className="main-sidebar" style={{position: 'fixed'}}>
  {/* sidebar: style can be found in sidebar.less */}
  <section className="sidebar">
    {/* Sidebar user panel */}
    <div className="user-panel">
      <div className="pull-left image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
      </div>
      <div className="pull-left info">
        <p>Atty. Al Aquino</p>
        <a href="fake_url"><i className="fa fa-circle text-success" /> Online</a>
      </div>
    </div>
    {/* search form */}
``
    <ul className="sidebar-menu" data-widget="tree">
      <li className="header">MAIN NAVIGATION</li>
  
      <li className="treeview">

        <ul className="treeview-menu">
          <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o" /> Top Navigation</a></li>
          <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o" /> Boxed</a></li>
          <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o" /> Fixed</a></li>
          <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o" /> Collapsed Sidebar</a></li>
        </ul>
      </li>
      <li>
        <a 
        onClick = {() => onRouteChange('DashBoard')}>
          <i className="fa fa-dashboard" /> <span>DashBoard</span>
          <span className="pull-right-container">
        
          </span>
        </a>
      </li>
      <li>
        <a onClick = {() => onRouteChange('Violator')}>
          <i className="glyphicon glyphicon-th-list" /> <span>Violator List</span>
          <span className="pull-right-container">
            
          </span>
        </a>
      </li>
      <li>
        <a onClick = {() => onRouteChange('Users')}>
          <i className="glyphicon glyphicon-user" /> <span>Users</span>
          <span className="pull-right-container">
          </span>
        </a>
      </li>
      <li>
        <a onClick = {() => onRouteChange('Logs')}>
          <i className="glyphicon glyphicon-copy" /> <span>Logs</span>
          <span className="pull-right-container">
        
          </span>
        </a>
      </li>
    </ul>
  </section>
  {/* /.sidebar */}
</aside>

            </div>
        )
    }

export default Menu;