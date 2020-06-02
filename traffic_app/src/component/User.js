import React from 'react'


const User = ({onRouteChange}) => {

        return (
            <div>
                                <div className="content-wrapper" >
                <section className="content">
            <div className="box">
  <div className="box-header">
    <h3 className="box-title">User Data Table</h3>
  </div>
  {/* /.box-header */}
  <div className="box-body">
    <div id="example1_wrapper" className="dataTables_wrapper form-inline dt-bootstrap"><div className="row"><div className="col-sm-6"><div className="dataTables_length" id="example1_length"><label>Show <select name="example1_length" aria-controls="example1" className="form-control input-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-6"><div id="example1_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control input-sm"  aria-controls="example1" /></label></div></div></div><div className="row"><div className="col-sm-12"><table id="example1" className="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
            <thead>
              <tr role="row">
                <th className="sorting_asc" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending" style={{width: '79.4px'}}>ID NO.</th>
                <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-label="Browser: activate to sort column ascending" style={{width: '101.8px'}}>Name</th>
                <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-label="Platform(s): activate to sort column ascending" style={{width: '88.2px'}}>Work Position</th>
                <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-label="Engine version: activate to sort column ascending" style={{width: '65.8px'}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr role="row" className="odd">
                <td className="sorting_1">001</td>
                <td>John Drew</td>
                <td>traffic Offcer</td>
                <td>
                 <div>
                   <a><i className="fa fa-fw fa-pencil-square"></i></a>
                   <a><i className="fa fa-fw fa-remove"></i></a>
                 </div>
                </td>
              </tr>
     
              <tr role="row" className="odd">
                <td className="sorting_1">002</td>
                <td>Micheal Rode</td>
                <td>traffic Offcer</td>
                <td>
                 <div>
                   <a><i className="fa fa-fw fa-pencil-square"></i></a>
                   <a><i className="fa fa-fw fa-remove"></i></a>
                 </div>
                </td>
              </tr>
              <tr role="row" className="odd">
                <td className="sorting_1">003</td>
                <td>James Sou</td>
                <td>Admin</td>
                <td>
                 <div>
                   <a><i className="fa fa-fw fa-pencil-square"></i></a>
                   <a><i className="fa fa-fw fa-remove"></i></a>
                 </div>
                </td>
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
export default User;