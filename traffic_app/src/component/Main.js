import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import Violator from './Violator';

export default class Main extends Component {
    constructor(props){
    super(props);

    this.state = {
        data: {
            labels:["1","2","3","4","5"],
            datasets:[
                {
                    label: "Violation this Month",
                    backgroundColor: "rgba(255,0,255,0.75)",
                    data: [4,5,1,10,32,2,12]
                },
                {
                    label: "Violation last Month",
                    backgroundColor: "rgba(0,255,0,0.75)",
                    data: [14,15,21,0,12,4,2]
                }
            ]
        }
    }
    }
    render() {
        return (
            <div>
     <div className="content-wrapper" >
  <section className="content">
    <div className="row">
      <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="info-box">
          <span className="info-box-icon bg-aqua"><i className="ion ion-ios-gear-outline" /></span>
          <div className="info-box-content">
            <span className="info-box-text">Unpaid Violator</span>
            <span className="info-box-number">90<small>%</small></span>
          </div>
          {/* /.info-box-content */}
        </div>
        {/* /.info-box */}
      </div>
      {/* /.col */}
    
      {/* /.col */}
      {/* fix for small devices only */}
      <div className="clearfix visible-sm-block" />
      <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="info-box">
          <span className="info-box-icon bg-green"><i className="ion ion-ios-cart-outline" /></span>
          <div className="info-box-content">
            <span className="info-box-text">Paid Violator</span>
            <span className="info-box-number">760</span>
          </div>
          {/* /.info-box-content */}
        </div>
        {/* /.info-box */}
      </div>
      {/* /.col */}
      <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="info-box">
          <span className="info-box-icon bg-yellow"><i className="ion ion-ios-people-outline" /></span>
          <div className="info-box-content">
            <span className="info-box-text">New Violator</span>
            <span className="info-box-number">2,000</span>
          </div>
          {/* /.info-box-content */}
        </div>
        {/* /.info-box */}
      </div>
      {/* /.col */}
    </div>


    <div className="box">
  <div className="box-header with-border">
    <h3 className="box-title">Monthly Report</h3>
    <div className="box-tools pull-right">
      <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
      </button>
      <div className="btn-group">
        <button type="button" className="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
          <i className="fa fa-wrench" /></button>
        <ul className="dropdown-menu" role="menu">
          <li><a href="fake_url">Action</a></li>
          <li><a href="fake_url">Another action</a></li>
          <li><a href="fake_url">Something else here</a></li>
          <li className="divider" />
          <li><a href="fake_url">Separated link</a></li>
        </ul>
      </div>
      <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
    </div>
  </div>
  {/* /.box-header */}
  <div className="box-body">
    <div className="row">
      <div className="col-md-8">
        <p className="text-center">
          <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
        </p>
        <div className="chart">
          {/* Sales Chart Canvas */}
          <div className="chart-container" >
              <Line 
              options={{
                  responsive:true
              }}
              data={this.state.data}
              />
          </div>
        </div>
        {/* /.chart-responsive */}
      </div>
      {/* /.col */}
      <div className="col-md-4">
        <p className="text-center">
          <strong>Goal Completion</strong>
        </p>
        <div className="progress-group">
          <span className="progress-text">Add Violator</span>
          <span className="progress-number"><b>160</b>/200</span>
          <div className="progress sm">
            <div className="progress-bar progress-bar-aqua" style={{width: '80%'}} />
          </div>
        </div>
        {/* /.progress-group */}
        <div className="progress-group">
          <span className="progress-text">Paid Violator</span>
          <span className="progress-number"><b>310</b>/400</span>
          <div className="progress sm">
            <div className="progress-bar progress-bar-red" style={{width: '80%'}} />
          </div>
        </div>
        {/* /.progress-group */}
        <div className="progress-group">
          <span className="progress-text">Unpaid Violator</span>
          <span className="progress-number"><b>480</b>/800</span>
          <div className="progress sm">
            <div className="progress-bar progress-bar-green" style={{width: '80%'}} />
          </div>
        </div>
        {/* /.progress-group */}
        <div className="progress-group">
          <span className="progress-text">User Confirmation</span>
          <span className="progress-number"><b>250</b>/500</span>
          <div className="progress sm">
            <div className="progress-bar progress-bar-yellow" style={{width: '80%'}} />
          </div>
        </div>
        {/* /.progress-group */}
      </div>
      {/* /.col */}
    </div>
    {/* /.row */}
  </div>
  {/* ./box-body */}
  <div className="box-footer">
    <div className="row">
      <div className="col-sm-3 col-xs-6">
        <div className="description-block border-right">
          <span className="description-percentage text-green"><i className="fa fa-caret-up" /> 17%</span>
          <h5 className="description-header">$35,210.43</h5>
          <span className="description-text">TOTAL REVENUE</span>
        </div>
        {/* /.description-block */}
      </div>
      {/* /.col */}
      <div className="col-sm-3 col-xs-6">
        <div className="description-block border-right">
          <span className="description-percentage text-yellow"><i className="fa fa-caret-left" /> 0%</span>
          <h5 className="description-header">$10,390.90</h5>
          <span className="description-text">TOTAL COST</span>
        </div>
        {/* /.description-block */}
      </div>
      {/* /.col */}
      <div className="col-sm-3 col-xs-6">
        <div className="description-block border-right">
          <span className="description-percentage text-green"><i className="fa fa-caret-up" /> 20%</span>
          <h5 className="description-header">$24,813.53</h5>
          <span className="description-text">TOTAL PROFIT</span>
        </div>
        {/* /.description-block */}
      </div>
      {/* /.col */}
      <div className="col-sm-3 col-xs-6">
        <div className="description-block">
          <span className="description-percentage text-red"><i className="fa fa-caret-down" /> 18%</span>
          <h5 className="description-header">1200</h5>
          <span className="description-text">GOAL COMPLETIONS</span>
        </div>
        {/* /.description-block */}
      </div>
    </div>
    {/* /.row */}
  </div>
  {/* /.box-footer */}
</div>

<div className="box">
  <div className="box-header">
    <h3 className="box-title">Data Logs</h3>
  </div>
  {/* /.box-header */}
  <div className="box-body">
    <div id="example1_wrapper" className="dataTables_wrapper form-inline dt-bootstrap"><div className="row"><div className="col-sm-6"><div className="dataTables_length" id="example1_length"><label>Show <select name="example1_length" aria-controls="example1" className="form-control input-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-6"><div id="example1_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control input-sm" placeholder aria-controls="example1" /></label></div></div></div><div className="row"><div className="col-sm-12"><table id="example1" className="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
            <thead>
              <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-sort="ascending" style={{width: '79.4px'}}>ID no.</th>
              <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} style={{width: '101.8px'}}>Name</th>
              <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} style={{width: '88.2px'}}>Date / Time</th>
              <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1}  style={{width: '65.8px'}}>Work Type</th>
              <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1}  style={{width: 42}}>Action</th></tr>
            </thead>
            <tbody>
              <tr role="row" className="even">
                <td className="sorting_1">001</td>
                <td >James South</td>
                <td>02/02/2020-12:00 pm</td>
                <td>Add User</td>    
                <td><a>
                <i class="fa fa-fw fa-info-circle"></i></a></td>
              </tr>
              <tr role="row" className="odd">
                <td className="sorting_1">002</td>
                <td >William Smith</td>
                <td>15/03/2020-1:00 pm</td>
                <td>Update User</td>    
                <td><a>
                <i class="fa fa-fw fa-info-circle"></i></a></td>
              </tr>
              <tr role="row" className="odd">
                <td className="sorting_1">002</td>
                <td >Rick Dou</td>
                <td>20/03/2020-3:00 pm</td>
                <td>Payment Update</td>    
                <td><a>
                <i class="fa fa-fw fa-info-circle"></i></a></td>
              </tr>
              </tbody>

          </table></div></div>
          <div className="row"><div className="col-sm-5"><div className="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div className="col-sm-7"><div className="dataTables_paginate paging_simple_numbers" id="example1_paginate"><ul className="pagination"><li className="paginate_button previous disabled" id="example1_previous"><a href="#" aria-controls="example1" data-dt-idx={0} tabIndex={0}>Previous</a></li><li className="paginate_button active"><a href="#" aria-controls="example1" data-dt-idx={1} tabIndex={0}>1</a></li><li className="paginate_button "><a href="#" aria-controls="example1" data-dt-idx={2} tabIndex={0}>2</a></li><li className="paginate_button "><a href="#" aria-controls="example1" data-dt-idx={3} tabIndex={0}>3</a></li><li className="paginate_button "><a href="#" aria-controls="example1" data-dt-idx={4} tabIndex={0}>4</a></li><li className="paginate_button "><a href="#" aria-controls="example1" data-dt-idx={5} tabIndex={0}>5</a></li><li className="paginate_button "><a href="#" aria-controls="example1" data-dt-idx={6} tabIndex={0}>6</a></li><li className="paginate_button next" id="example1_next"><a href="#" aria-controls="example1" data-dt-idx={7} tabIndex={0}>Next</a></li></ul></div></div></div></div>
  </div>
  {/* /.box-body */}
</div>
  </section>

</div>
                
            </div>
        )
    }
}
