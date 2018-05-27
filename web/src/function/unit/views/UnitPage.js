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
/**
 *
 * @type {[type]}
 */

import * as UnitActions from '../UnitActions.js';
/**
  *
  * @type {[type]}
  */
const title_Panel = (<h3>面板sss标题</h3>);

function Table_One_Unit({num, unit_name, unit_gmt_create, unit_gmt_modified}) {
  return (<tr>
    <td>{num}</td>
    <td>{unit_name}</td>
    <td>{unit_gmt_create}</td>
    <td>{unit_gmt_modified}</td>
    <td>操作</td>
    <td>
      <Checkbox inline="inline">.</Checkbox>
    </td>
  </tr>);
}

const Table_All_Unit = () => {
  let unit_List = store.getState()["UnitReducer"]["unitVO"]["unit_List"];
  return (<tbody>
    {
      (unit_List.map((mypcxt_unit, index) => {
        /**
         * key必不可少
         */
        return (<Table_One_Unit key={index} num={++index} unit_name={mypcxt_unit.unit_name} unit_gmt_create={mypcxt_unit.unit_gmt_create} unit_gmt_modified={mypcxt_unit.unit_gmt_modified}/>);
      }))
    }
  </tbody>);
}

/**
   * [panel_my description]
   * @type {[type]}
   */
const panel_my = (<Panel style={{
    margin: "20px 0 0 0"
  }}>
  <div className="panel-heading">
    <h3 className="panel-title">单位列表</h3>
  </div>
  {/************************************************/}
  {/************************************************/}
  {/************************************************/}
  <div class="panel-body">
    <Table hover="hover" className="Table_1">
      <thead>
        <tr>
          <th>#</th>
          <th>单位名称</th>
          <th>创建时间</th>
          <th>修改时间</th>
          <th>操作</th>
          <th>
            <Checkbox inline="inline">
              全选
            </Checkbox>
          </th>
        </tr>
      </thead>
      <Table_All_Unit/>
    </Table>
  </div>
  {/************************************************/}
  {/************************************************/}
  {/************************************************/}
</Panel>);





/**
 * [Tabs_my description]
 * @type {[type]}
 */
const Tabs_my = (<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
  <Tab eventKey={1} title="单位">{panel_my}</Tab>
  <Tab eventKey={2} title="人员">Tab 2 content</Tab>
</Tabs>);/** * [UnitPage description] * @method UnitPage */

class UnitPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);
    // this.getStoreCurrentURL = this.getStoreCurrentURL.bind(this);

    this.state = {
      'unitVO': {
        'unit_List': [],
        'totalRecords': 0
      }
    };
  }

  componentWillMount() {}

  componentDidMount() {
    store.subscribe(this.storeChanged);
    store.dispatch(UnitActions.getUnitVO());
  }
  storeChanged() {
    //setState是异步的
    let unitVO = store.getState()["unitVO"];

    this.setState({
      unitVO: unitVO
    }, () => {
      //回调方法
      //改变路由

    })
    //
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
        }}>{Tabs_my}</div>
      {/************************************************/}
      {/************************************************/}
      {/************************************************/}
    </div>);
  }
}

export default UnitPage;
