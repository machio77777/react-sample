import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {

  constructor(props) {
    super(props);
  }

  th = {
    fontSize : '14px',
    backgroundColor : 'blue',
    color : 'white',
    padding : '5px 10px',
    width : '50px'
  }
  td = {
    fontSize : '14px',
    backgroundColor : 'white',
    color : 'darkblue',
    padding : '5px 10px',
    border : '1px solid lightblue',
    minWidth : '300px'
  }
  data = {
    fontSize : '14px',
    backgroundColor : 'white',
    color : 'darkblue',
    padding : '5px 10px',
    border : '1px solid lightblue',
    width : '80px'
  }

  render() {
    let d = this.props.value.created;
    let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    return (
      <tr><th style={this.th}>No, {this.props.index}</th>
        <td style={this.td}>{this.props.value.message}</td>
        <td style={this.date}>{f}</td>
      </tr>
    );
  }
}

export default connect()(Item);