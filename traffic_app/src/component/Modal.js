import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

class Modal extends Component {
    state = {
        ...this.returnStateOBject()
    }
    returnStateOBject() {
        if (this.props.currentIndex == -1)
            return {
                TCTNo: '',
                DriversName: '',
                AddressDrivers: '',
                MakeofVehicle: '',
                TypeofVehicle: '',
                PlateNo: '',
                RegisteredOwner: '',
                AddressOwner: '',
                ViolatorOfficer: '',
                Violation: '',
                Overspeeding: false,
                NoOvertaking: false,
                NOleftTurn: false,
                FailuretoYieldofRightofWay: false,
                DiagonalParking: false,
                ImproperUsedofHornSignImproperUsedofHornSign: false,
                NoAccessories: false,
                UnregisterVihicle: false,
                DelinqueteSuspendedInvalidRegistration: false,
                FailuretocarryDL: false,
                NoDL: false,
                NOParkingZone: false,
                NoLodaingUnloading: false,
                NOFareMatrixTaripa: false,
                NoRegistration: false,
                NoExpiredMTOP: false,
                FailuretocarryMTOP: false,
                NoBodyNumber: false,
                NoMTOPSticker: false,
                ONEngineWhileRefueling: false,
                SmokingWhileRefueling: false,
                PlaceofApprehension: '',
                Payment: 'Unpaid',
                apprehensionCount: 0,
                Remarks: '',
                startDate: new Date(),
            }
        else {
            console.log(this.props.list[this.props.currentIndex])
            return this.props.list[this.props.currentIndex]

        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length)
            this.setState({ ...this.returnStateOBject() })
    }

    checkboxChange = e => {


        if (e.target.checked === true) {

            this.setState({

                Violation: e.target.name + ',' + this.state.Violation,

            })


        } else {
            this.setState({

                Violation: this.state.Violation.replace(e.target.name + ',', ""),
            })


        }
        this.setState({
            [e.target.name]: e.target.checked,
            apprehensionCount: (this.state.Violation.split(",").length)
        })
        console.log(this.state.apprehensionCount)
        console.log(this.state.Violation)

    }
    hanleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.Payment);
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }
    
    paymentChange = (event) =>
    this.setState({Payment: event.target.value});

    handleChange = date => {
        this.setState({
            startDate: date
        });
        console.log(this.state.startDate);
    };

    render() {


        return (
            <div>

                {

                    this.props.modalDo === 'payment' ?
                        <div className="modal fade in" id="modal-default" style={{ display: 'block', paddingRight: 16 }}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <form autoComplete='off' onSubmit={this.handleSubmit}>
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.props.setModal(false)} >
                                            <span aria-hidden="true">×</span></button>
                                        <h4 className="modal-title">Payment</h4>
                                    </div>
                                    <div className="modal-body">

                                        
                                        <div>
                                            <p>Violations : {this.state.Violation}</p>
                                            <p>Count:{this.state.apprehensionCount}</p>
                                            <p>totoal Payment: ₱ {this.state.apprehensionCount * 50}</p>'
                                    <select className="form-control" value={this.state.Payment} onChange={this.paymentChange}>
                                                <option value='Unpaid'> Unpaid</option>
                                                <option value='Paid'> Paid</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary" >Save changes</button>
                                    </div>
                                    </form>
                                </div>
                                {/* /.modal-content */}
                            </div>
                        </div>
                        :



                        <div className="modal fade in" id="modal-default" style={{ display: 'block', paddingRight: 16 }}>


                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" onClick={() => this.props.setModal(false)} className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span></button>
                                        <h4 className="modal-title">Violator    </h4>
                                    </div>
                                    <div className="modal-body">

                                        <form autoComplete='off' onSubmit={this.handleSubmit}>
                                            <div className="box-body" style={{ padding: '0', overflow: 'break-word' }}>
                                                <div className="form-group" style={{ display: 'flex', flexDirection: 'row', marginBottom: '0' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: '5px' }}>
                                                        <label htmlFor="">TCT No.</label>
                                                        <input className="form-control" name='TCTNo' value={this.state.TCTNo} onChange={this.hanleInputChange} required placeholder="" />
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: '5px' }}>
                                                        <label htmlFor="">Driver's Name</label>
                                                        <input className="form-control" name='DriversName' value={this.state.DriversName} onChange={this.hanleInputChange} required placeholder="" />
                                                    </div>

                                                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: '5px' }}>
                                                        <label htmlFor="">Driver's Address</label>
                                                        <input className="form-control" name='AddressDrivers' value={this.state.AddressDrivers} onChange={this.hanleInputChange} required placeholder="" />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-body" style={{ padding: '0' }}>
                                                <div className="form-group" style={{ display: 'flex', flexDirection: 'row', marginBottom: '0' }}>

                                                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: '5px' }}>
                                                        <label htmlFor="">Make of Vehicle</label>
                                                        <input className="form-control" name='MakeofVehicle' value={this.state.MakeofVehicle} onChange={this.hanleInputChange} required placeholder="" />
                                                    </div>

                                                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: '5px' }}>
                                                        <label htmlFor="">Type of Vehicle</label>
                                                        <input className="form-control" name='TypeofVehicle' value={this.state.TypeofVehicle} onChange={this.hanleInputChange} required placeholder="" />

                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: '5px' }}>
                                                        <label htmlFor="">Plate No.</label>
                                                        <input className="form-control" name='PlateNo' value={this.state.PlateNo} onChange={this.hanleInputChange} required placeholder="" />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-body" style={{ padding: '0' }}>
                                                <div className="form-group" style={{ display: 'flex', flexDirection: 'row', marginBottom: '0' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: '5px' }}>
                                                        <label htmlFor="">Registered Owner</label>
                                                        <input className="form-control" name='RegisteredOwner' value={this.state.RegisteredOwner} onChange={this.hanleInputChange} required placeholder="" />
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: '5px' }}>
                                                        <label htmlFor=""> Owner's Address </label>
                                                        <input className="form-control" name='AddressOwner' value={this.state.AddressOwner} onChange={this.hanleInputChange} required placeholder="" />
                                                    </div>

                                                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: '5px' }}>
                                                        <label htmlFor="">Violator Officer</label>
                                                        <input className="form-control" name='ViolatorOfficer' value={this.state.ViolatorOfficer} onChange={this.hanleInputChange} required placeholder="" />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-body" style={{ padding: '0' }}>
                                                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', marginBottom: '0' }}>
                                                    <label htmlFor="">Violation(s)</label>
                                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                                        <div>

                                                        </div>
                                                        <div style={{ width: '158px', overflowWrap: 'break-word' }}>
                                                            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '5px', justifyContent: 'space-evenly' }}>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='Overspeeding' checked={this.state.Overspeeding} onChange={this.checkboxChange} value={this.state.Overspeeding} />
                                      Overspeeding
                                        </label>
                                                                </div>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='NoOvertaking' checked={this.state.NoOvertaking} onChange={this.checkboxChange} value={this.state.NoOvertaking} />

                                          No Overtaking

                                        </label>
                                                                </div>

                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='NOleftTurn' checked={this.state.NOleftTurn} onChange={this.checkboxChange} value={this.state.NOleftTurn} />
                                      NO left Turn
                                        </label>
                                                                </div>

                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='FailuretoYieldofRightofWay' checked={this.state.FailuretoYieldofRightofWay} onChange={this.checkboxChange} value={this.state.FailuretoYieldofRightofWay} />
                                      Failure to Yield of Right of Way
                                        </label>

                                                                </div>

                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='DiagonalParking' checked={this.state.DiagonalParking} onChange={this.checkboxChange} value={this.state.DiagonalParking} />
                                      Diagonal Parking
                                        </label>

                                                                </div>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='ImproperUsedofHornSignImproperUsedofHornSign' checked={this.state.ImproperUsedofHornSignImproperUsedofHornSign} onChange={this.checkboxChange} value={this.state.ImproperUsedofHornSignImproperUsedofHornSign} />
                                      Improper Used of Horn/SignImproper Used of Horn/Sign
                                        </label>
                                                                </div>

                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='NoAccessories' checked={this.state.NoAccessories} onChange={this.checkboxChange} value={this.state.NoAccessories} />
                                      No Accessories
                                        </label>
                                                                </div>

                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='UnregisterVihicle' checked={this.state.UnregisterVihicle} onChange={this.checkboxChange} value={this.state.UnregisterVihicle} />
                                      Unregister Vihicle
                                        </label>
                                                                </div>


                                                            </div>

                                                        </div>

                                                        <div style={{ width: '158px', overflowWrap: 'break-word' }}>
                                                            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '5px', justifyContent: 'space-evenly' }}>


                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='DelinqueteSuspendedInvalidRegistration' checked={this.state.DelinqueteSuspendedInvalidRegistration} onChange={this.checkboxChange} value={this.state.DelinqueteSuspendedInvalidRegistration} />
                                      Delinquete/Suspended/Invalid Registration
                                        </label>

                                                                </div>

                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='FailuretocarryDL' checked={this.state.FailuretocarryDL} onChange={this.checkboxChange} value={this.state.FailuretocarryDL} />
                                      Failure to carry DL
                                        </label>

                                                                </div>

                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='NoDL' checked={this.state.NoDL} onChange={this.checkboxChange} value={this.state.NoDL} />
                                      No DL
                                        </label>
                                                                </div>


                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='NOParkingZone' checked={this.state.NOParkingZone} onChange={this.checkboxChange} value={this.state.NOParkingZone} />
                                      NO Parking Zone
                                        </label>
                                                                </div>


                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='NoLodaingUnloading' checked={this.state.NoLodaingUnloading} onChange={this.checkboxChange} value={this.state.NoLodaingUnloading} />
                                      No Lodaing/Unloading
                                        </label>
                                                                </div>

                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='NOFareMatrixTaripa' checked={this.state.NOFareMatrixTaripa} onChange={this.checkboxChange} value={this.state.NOFareMatrixTaripa} />
                                      NO Fare Matrix/Taripa
                                        </label>

                                                                </div>

                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='NoRegistration' checked={this.state.NoRegistration} onChange={this.checkboxChange} value={this.state.NoRegistration
                                                                        } />
                                      No Registration
                                        </label>

                                                                </div>


                                                            </div>
                                                        </div>


                                                        <div style={{ width: '158px', overflowWrap: 'break-word' }}>
                                                            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '5px', justifyContent: 'space-evenly' }}>

                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='NoExpiredMTOP' checked={this.state.NoExpiredMTOP} onChange={this.checkboxChange} value={this.state.NoExpiredMTOP} />
                                          No/ Expired MTOP
                                        </label>
                                                                </div>

                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='FailuretocarryMTOP' checked={this.state.FailuretocarryMTOP} onChange={this.checkboxChange} value={this.state.FailuretocarryMTOP} />
                                      Failure to carry MTOP
                                        </label>
                                                                </div>





                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='NoBodyNumber' checked={this.state.NoBodyNumber} onChange={this.checkboxChange} value={this.state.NoBodyNumber} />
                                        No Body Number
                                          </label>
                                                                </div>

                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='NoMTOPSticker' checked={this.state.NoMTOPSticker} onChange={this.checkboxChange} value={this.state.NoMTOPSticker} />
                                        No MTOP Sticker
                                          </label>

                                                                </div>

                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='ONEngineWhileRefueling' checked={this.state.ONEngineWhileRefueling} onChange={this.checkboxChange} value={this.state.ONEngineWhileRefueling} />
                                        ON Engine While Refueling
                                          </label>

                                                                </div>

                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" name='SmokingWhileRefueling' checked={this.state.SmokingWhileRefueling} onChange={this.checkboxChange} value={this.state.SmokingWhileRefueling} />
                                      Smoking While Refueling
                                        </label>

                                                                </div>



                                                            </div>

                                                        </div >




                                                    </div>
                                                    <div className="box-body" style={{ padding: '0' }}>
                                                        <div className="form-group" style={{ display: 'flex', flexDirection: 'row', marginBottom: '0' }}>
                                                            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '5px' }}>
                                                                <label htmlFor="">Place of Apprehension</label>
                                                                <input className="form-control" name='PlaceofApprehension' value={this.state.PlaceofApprehension} onChange={this.hanleInputChange} required placeholder="" />
                                                            </div>

                                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                                <label htmlFor="">Date/ Time of Apprehetion</label>

                                                                <div>
                                                                    <DatePicker
                                                                        selected={moment(this.state.startDate).toDate()}
                                                                        onChange={date => this.handleChange(date)}
                                                                        showTimeSelect
                                                                        timeFormat="HH:mm"
                                                                        timeIntervals={15}
                                                                        timeCaption="time"
                                                                        dateFormat="MMMM d, yyyy h:mm aa"

                                                                    />
                                                                </div>



                                                            </div>

                                                            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '5px', }}>
                                                                <label htmlFor="">Remarks</label>
                                                                <input className="form-control" name='Remarks' value={this.state.Remarks} required onChange={this.hanleInputChange} placeholder="" />

                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>


                                            <div className="modal-footer" style={{ marginBottom: '5px', paddingTop: '5px' }}>
                                                <button type="button" className="btn btn-default pull-left" data-dismiss="modal" onClick={() => this.props.setModal(false)}>Close</button>
                                                <button type="submit" className="btn btn-primary">Save</button>
                                            </div>
                                        </form>


                                    </div>

                                </div>
                                {/* /.modal-content */}
                            </div>





                        </div>

                }
            </div>
        )
    }

}
export default Modal;
