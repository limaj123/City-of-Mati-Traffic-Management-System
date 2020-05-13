import React from 'react'

const Violator = ({onRouteChange}) => {

        return (
            <div > 
                <div className="content-wrapper" >
                <section className="content" style={{   display:'flex', 'flex-direction': 'column',alignItems:'center'}}>
                <a class="btn btn-block btn-info btn-lg" style={{    width: '15%', 'margin-bottom': '10px'}}>
                <i class="fa fa-user-plus"></i> Add Violator
              </a>

            <div className="box">
  <div className="box-header">
    <h3 className="box-title">Data Table With Full Features</h3>
  </div>
  {/* /.box-header */}
  
  <div className="box-body">
    <div id="example1_wrapper" className="dataTables_wrapper form-inline dt-bootstrap"><div className="row"><div className="col-sm-6"><div className="dataTables_length" id="example1_length"><label>Show <select name="example1_length" aria-controls="example1" className="form-control input-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-6"><div id="example1_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control input-sm" placeholder aria-controls="example1" /></label></div></div></div><div className="row"><div className="col-sm-12"><table id="example1" className="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
            <thead>
              <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending" style={{width: '79.4px'}}> TCT No.</th>
   
              <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1}  style={{width: '101.8px'}}>Name</th>
              <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1}  style={{width: '88.2px'}}>Address</th>
              <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} style={{width: '65.8px'}}>Plate No.</th>
              <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} style={{width: 42}}>Make of Vehicle</th>
              <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1}  style={{width: '101.8px'}}>Type of Vehicle</th>
              <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1}  style={{width: '88.2px'}}>Registered Owner</th>
              <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} style={{width: '65.8px'}}>Address</th>
              <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} style={{width: 42}}>Violation(s)</th>
              <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1}  style={{width: '101.8px'}}>Violator Officer</th>
              <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1}  style={{width: '101.8px'}}>Action</th></tr>
            </thead>
            <tbody>
                <tr role="row" className="even">
                <td className="sorting_1">O001</td>
                <td>Chaz  Panossian</td>
                <td>Mati City</td>
                <td>FE433T</td>
                <td>Toyota</td>
                <td>4 wheels</td>
                <td>Chaz  Panossian</td>
                <td>Mati City</td>
                <td>No Helmet, No Lisence</td>
                <td>James Dou</td>
                <td>  <a><i class="fa fa-fw fa-pencil-square"></i></a>
                   <a><i class="fa fa-fw fa-remove"></i></a></td>
              </tr>
              <tr role="row" className="even">
                <td className="sorting_1">O002</td>
                <td>Roland Talor</td>
                <td>Mati City</td>
                <td>WD23DS</td>
                <td>Honda</td>
                <td>MotorCycle</td>
                <td>Roland Talor</td>
                <td>Mati City</td>
                <td>No Helmet, No Lisence</td>
                <td>James Dou</td>
                <td>  <a><i class="fa fa-fw fa-pencil-square"></i></a>
                   <a><i class="fa fa-fw fa-remove"></i></a></td>
              </tr>
              </tbody>
          </table></div></div><div className="row"><div className="col-sm-5"><div className="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div className="col-sm-7"><div className="dataTables_paginate paging_simple_numbers" id="example1_paginate"><ul className="pagination"><li className="paginate_button previous disabled" id="example1_previous"><a href="#" aria-controls="example1" data-dt-idx={0} tabIndex={0}>Previous</a></li><li className="paginate_button active"><a href="#" aria-controls="example1" data-dt-idx={1} tabIndex={0}>1</a></li><li className="paginate_button "><a href="#" aria-controls="example1" data-dt-idx={2} tabIndex={0}>2</a></li><li className="paginate_button "><a href="#" aria-controls="example1" data-dt-idx={3} tabIndex={0}>3</a></li><li className="paginate_button "><a href="#" aria-controls="example1" data-dt-idx={4} tabIndex={0}>4</a></li><li className="paginate_button "><a href="#" aria-controls="example1" data-dt-idx={5} tabIndex={0}>5</a></li><li className="paginate_button "><a href="#" aria-controls="example1" data-dt-idx={6} tabIndex={0}>6</a></li><li className="paginate_button next" id="example1_next"><a href="#" aria-controls="example1" data-dt-idx={7} tabIndex={0}>Next</a></li></ul></div></div></div></div>
  </div>
  {/* /.box-body */}
</div>





</section>

                </div>

            


            </div>
        )
    
}
export default Violator;
