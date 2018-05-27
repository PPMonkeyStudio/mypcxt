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

function Tr_Unit({num, unit_name, unit_gmt_create, unit_gmt_modified}) {
  return (<tr>
    <td>{num}</td>
    <td>{unit_name}</td>
    <td>{unit_gmt_create}</td>
    <td>{unit_gmt_modified}</td>
    <td>
      <Button>修改</Button>
    </td>
    <td>
      <Checkbox inline="inline">&nbsp;</Checkbox>
    </td>
  </tr>);
}

const Tbody_Unit = () => {
  let unit_List = store.getState()["UnitReducer"]["unitVO"]["unit_List"];
  return (<tbody>
    {
      (unit_List.map((mypcxt_unit, index) => {
        /**
         * key必不可少
         */
        return (<Tr_Unit key={index} num={++index} unit_name={mypcxt_unit.unit_name} unit_gmt_create={mypcxt_unit.unit_gmt_create} unit_gmt_modified={mypcxt_unit.unit_gmt_modified}/>);
      }))
    }
  </tbody>);
}

/**
 * [UnitPage description]
 * @extends Component
 */
class UnitPanel extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);
    // this.getStoreCurrentURL = this.getStoreCurrentURL.bind(this);

  }

  componentWillMount() {}

  componentDidMount() {
    store.subscribe(this.storeChanged);
    store.dispatch(UnitActions.getUnitVO());
  }
  storeChanged() {
    //setState是异步的
    let unitVO = store.getState()["unitVO"];

    this.forceUpdate();
    //
  }
  render() {
    return (<Panel style={{
        margin: "20px 0 0 0"
      }}>
      <div className="panel-heading">
        <h3 className="panel-title">单位列表</h3>
      </div>
      {/************************************************/}
      {/************************************************/}
      {/************************************************/}
      <div class="panel-body">
        <div style={{
            height: " 34px"
          }}>
          <Button>
            <i class="fa fa-plus-square"></i>
            &nbsp;新增一个单位
          </Button>
        </div>
        <Table hover="hover">
          <thead>
            <tr>
              <th>#</th>
              <th>单位名称</th>
              <th>创建时间</th>
              <th>修改时间</th>
              <th>操作</th>
              <th style={{
                  width: "100px"
                }}>
                <Checkbox inline="inline">
                  全选
                </Checkbox>
              </th>
            </tr>
          </thead>
          <Tbody_Unit/>
        </Table>
        <div style={{
            height: "34px",
            margin: "0 0 20px 0"
          }}>
          <Button bsStyle="danger" style={{
              float: "right",
              margin: "0 10px"
            }}>
            <i class="fa fa-trash-o"></i>
            &nbsp;删除所选
          </Button>
        </div>
      </div>
      {/************************************************/}
      {/************************************************/}
      {/************************************************/}
    </Panel>);
  }
}

export default withRouter(UnitPanel);
