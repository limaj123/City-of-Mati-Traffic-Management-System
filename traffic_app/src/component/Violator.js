import React,{Component} from 'react';
import Modal from './Modal';
import moment from 'moment';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import '../index.css';
class Violator extends Component {

  state = {
    list: this.returnList(),
    addModal:false,
    modalDo:'',
    currentIndex: -1,
    searchField:'',
    viewData:'',
  }

  onSearchChange = (event) => {
    this.setState({searchField : event.target.value})

  }
  onViewChange = (event) => {
    this.setState({viewData : event.target.value})    
  }
  returnList() {
    if(localStorage.getItem('transtactions') == null)
      localStorage.setItem('transtactions',JSON.stringify([]))
      return JSON.parse(localStorage.getItem('transtactions'))
  }
  setModal = (data) =>{
  if(data === true)  {
    this.setState({ addModal: data });
  }else{
    this.setState({ addModal: data });
    this.setState({currentIndex:-1})
  }

  }
  onAddOrEdit = (data) => {
 
    var list = this.returnList()
    if(this.state.currentIndex == -1)
    list.push(data)
    else
    list[this.state.currentIndex] = data
    localStorage.setItem('transtactions',JSON.stringify(list))
    this.setState({list})
    this.setState({list,currentIndex:-1})
  }
  handleEdit = index => {
    this.setModal(true)
    this.setState({
      currentIndex: index
    })
  }
  addUpdate = (data,index) => {
    this.handleEdit(index)
    this.setModal(true)
    this.setState({
      modalDo: data
    })
  console.log(this.state.modalDo);
  }
  paymentUpdate = (payment,index) => {
    this.handleEdit(index)
    this.setModal(true)
    this.setState({
      modalDo: payment
    })

  }
  generatePDF = () => {
    var doc = new jsPDF('l', 'pt', 'a2');

    autoTable(doc, { html: '#example1' })      

    
    doc.save('file.pdf')
  }   
  

render() {
  const Viewfiltered = this.state.list.filter(list =>{
    return list.Payment.includes(this.state.viewData);
  })
  const filtered = Viewfiltered.filter(list =>{
    return list.DriversName.toLowerCase().includes(this.state.searchField.toLowerCase());
  })
  return (
    <div >
      <div className="content-wrapper" >
        <section className="content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <div style={{display:'flex', width:'100%',justifyContent:'space-around'}}>
         <a className="btn btn-block btn-info btn-lg" onClick={() => this.setModal(true)} style={{ maxWidth: '15%', marginBottom: '10px' }}>
            <i className="fa fa-user-plus"></i> Add Violator
              </a>
              <a className="btn btn-block btn-info btn-lg" onClick={this.generatePDF} style={{ maxWidth: '15%', marginBottom: '10px' }}>
            <i className="fa fa-fw fa-print"></i> Download as PDF
              </a>
              <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-block btn-info btn-lg btn-size"
                    table="example1"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
         </div>

          <div className="box" >
            <div className="box-header">
              <h3 className="box-title">Violator Data table</h3>
            </div>
            {/* /.box-header */}

            <div className="box-body" style={{overflow:'auto', height:'600px'}}>
              <div id="example1_wrapper" className="dataTables_wrapper form-inline dt-bootstrap"><div className="row"><div className="col-sm-6">
                <div className="dataTables_length" id="example1_length"><label>Show <select name="example1_length" aria-controls="example1" className="form-control input-sm"  value={this.state.onViewChange} onChange={this.onViewChange}><option value={''}>all</option><option value={'Paid'}>Paid</option><option value={'Unpaid'}>Unpaid</option></select> entries</label></div></div><div className="col-sm-6">
                <div ><label>Search:<input type="search" className="form-control input-sm"  aria-controls="example1" onChange={this.onSearchChange} /></label></div></div></div><div className="row"><div className="col-sm-12">
               
               
                <table id="example1" className="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info" style={{tableLayout:'fixed'}}>
                
                <thead>
    
                  <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending" style={{ width: '79.4px' }}> TCT No.</th>

                    <th  className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} >Name</th>
                    <th  className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} >Driver's Address</th>  
                    <th  className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} >Plate No.</th>
                    <th  className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} >Make of Vehicle</th>
                    <th  className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} >Type of Vehicle</th>
                    <th  className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} >Registered Owner</th>
                    <th  className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} >Owner's Address</th>
                    <th  className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} >Violation(s)</th>
                    <th  className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} >Traffic Officer</th>
                    <th  className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} > Date/ Time of Apprehetion</th>
                    <th  className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} > Place of Apprehension</th>
                    <th  className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} > Payment</th>
                    <th  className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} >Action</th></tr>
                </thead>
                <tbody>
                 {
                    filtered.map((item, index) => {
                      return <tr role="row" className="even">
                        <td className="sorting_1">{item.TCTNo}</td>
                        <td>{item.DriversName}</td>
                        <td>{item.AddressDrivers}</td>
                        <td>{item.PlateNo}</td>
                        <td>{item.MakeofVehicle}</td>
                        <td>{item.TypeofVehicle}</td>
                        <td>{item.RegisteredOwner}</td>
                        <td>{item.AddressOwner}</td>
                        <td style={{ width: '150px', overflow:'auto' }}>{item.Violation}</td>
                        <td>{item.ViolatorOfficer}</td>
                        <td>{moment(item.startDate).format('MMMM d, yyyy')}</td>
                        <td>{item.PlaceofApprehension}</td>
                        <td>{item.Payment}</td>
                        <td style={{ display: 'flex' }}>  <a onClick={() => this.addUpdate('addupdate',index)}><i className="fa fa-fw fa-pencil-square"></i></a><a onClick={() => this.paymentUpdate('payment',index)}><i className="fa fa-fw fa-money"></i></a></td>
                      </tr>
                    
                    })  
                    	  
                  }
                </tbody>
              </table>
              
              
              </div></div></div>
            </div>
            {/* /.box-body */}
          </div>








        </section>

      </div>
      {
        this.state.addModal === true ? <Modal modalDo={this.state.modalDo} list= {this.state.list} currentIndex={this.state.currentIndex} setModal={this.setModal} onAddOrEdit = {this.onAddOrEdit}/> : null
      }




    </div>
  )
}
 

}
export default Violator;
