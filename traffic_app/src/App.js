      import React, { Component } from 'react'
      import Menu from './component/Menu'
      import Header from './component/Header'
      import Footer from './component/Footer'
      import Main from './component/Main'
      import Violator from './component/Violator'
      import Logs from './component/Logs'
      import User from './component/User'
      import Login from './component/Login'
      import data from './component/data'
      import Modal from './component/Modal'
      import { PDFViewer } from '@react-pdf/renderer'
    import MyDocument from './component/MyDocument'
  


      export default class App extends Component {
        constructor() {
          super();
          this.state = {
            route: 'signin',
            modal: '',
            date: new Date(),
            file:data,
            modalTypes:''
          }

        }
        
         Pdfdata = () => (
          <PDFViewer>
            <MyDocument />
          </PDFViewer>
        );

        onChange = date => this.setState({ date });

        dataModal = (modal) => {
          this.setState({ modal: modal });
          console.log(this.state.modal);
        };



        modaltype = (modaltypes) =>{
          this.setState({modalTypes:modaltypes})
        };


        onRouteChange = (route) => {
          this.setState({ route: route });
        };

        render() {

          return (
            <div>
              <div>

                {
                  this.state.route === 'signin' ?
                    <Login onRouteChange={this.onRouteChange} /> :
                    (this.state.route === 'PdfView' ? <PDFViewer>
                    <MyDocument />
                  </PDFViewer>
                    :     <div>
                    <Header />

                    <Menu onRouteChange={this.onRouteChange} />

                    {this.state.route === 'DashBoard' ?
                      <Main /> :
                      (this.state.route === 'Violator' ?
                        <Violator dataModal={this.dataModal} data={(this.state)} modaltype={this.modaltype}/> : this.state.route === 'Logs' ?
                          <Logs /> : <User />)

                    }
                    <Footer />
                  </div>
                    )
                }
              </div>
                 
            </div>
          )

        }
      }