import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
  Panel,
  ButtonToolbar,
  Button,
  FormGroup,
  FormControl,
  Image,
  Jumbotron,
  Table,
  Tabs,
  Tab,
  Checkbox
} from 'react-bootstrap';
import store from '../../../Store.js';

import UnitPanel from '../../unit/views/UnitPanel.js';

class ManagePage extends Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (<div style={{
        margin: "71px 0 0 0",
        float: "left",
        width: "100%",
        height: "100%"
      }}>
      {/************************************************/}
      {/************************************************/}
      {/************************************************/}
      <div style={{
          width: "95%",
          margin: "20px auto"
        }}>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="单位">
            <UnitPanel/>
          </Tab>
          <Tab eventKey={2} title="业务">业务</Tab>
          <Tab eventKey={3} title="人员">人员</Tab>
        </Tabs>
      </div>
      {/************************************************/}
      {/************************************************/}
      {/************************************************/}
    </div>);
  }
}

export default ManagePage;
