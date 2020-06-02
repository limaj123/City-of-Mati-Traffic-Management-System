import React, { Component } from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export default class MyDocument extends Component {
    render() {
        return (
            <div>
                <Document>
      <Page size="A4" style={{flexDirection: 'row',
      backgroundColor: '#E4E4E4'}}>
        <View style={{ margin: 10,
      padding: 10,
      flexGrow: 1}}>
          <Text>Section #1</Text>
        </View>
        <View style={{ margin: 10,
      padding: 10,
      flexGrow: 1}}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
          
               
           </div>
        )
    }
}
