import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter, Route, Switch} from 'react-router-dom';
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
  Nav,
  NavItem,
  Navbar,
  Checkbox
} from 'react-bootstrap';
import PropTypes from 'prop-types'
//
//
//
import store from '../../../Store.js';
import UnitPanel from '../../unit/views/UnitPanel.js';
import ErrorPage from '../../route/views/ErrorPage.js';
//
//
//
const WelcomeManage = () => {
  return (<Jumbotron style={{
      width: "95%",
      margin: "20px auto",
      textAlign: "center"
    }}>
    <h1>系统管理</h1>
    <p>请点击左上角标签进入具体的管理模块</p>
  </Jumbotron>);
}

class ManagePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      tabsKey: 0
    }

  }
  componentDidMount() {
    switch (this.context.router.history.location.pathname) {
      case "/NavbarPage/ManagePage":
        {
          this.setState({tabsKey: 0})
          break;
        }
      case "/NavbarPage/ManagePage/UnitPanel":
        {
          this.setState({tabsKey: 1})
          break;
        }
      case "/NavbarPage/ManagePage/ServicePanel":
        {
          this.setState({tabsKey: 2})
          break;
        }
      case "/NavbarPage/ManagePage/UserPanel":
        {
          this.setState({tabsKey: 3})
          break;
        }
      default:
        {
          this.setState({tabsKey: 0})
        }
    }
  }
  static contextTypes = {
    router: PropTypes.object
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
          width: "90%",
          margin: "20px auto"
        }}>

        <Tabs activeKey={this.state.tabsKey} onSelect={(key) => {
            this.setState({
              tabsKey: key
            }, () => {
              switch (key) {
                case 0:
                  {
                    this.context.router.history.push("/NavbarPage/ManagePage");
                    break;
                  }
                case 1:
                  {
                    this.context.router.history.push("/NavbarPage/ManagePage/UnitPanel");
                    break;
                  }
                case 2:
                  {
                    this.context.router.history.push("/NavbarPage/ManagePage/ServicePanel");
                    break;
                  }
                case 3:
                  {
                    this.context.router.history.push("/NavbarPage/ManagePage/UserPanel");
                    break;
                  }

              }
            })

          }}>
          <Tab eventKey={0} title="管理"></Tab>
          <Tab eventKey={1} title="单位"></Tab>
          <Tab eventKey={2} title="业务"></Tab>
          <Tab eventKey={3} title="人员"></Tab>
        </Tabs>

        <Switch>
          <Route path="/NavbarPage/ManagePage/UnitPanel" component={UnitPanel}></Route>
          <Route path="/NavbarPage/ManagePage/ServicePanel" component={WelcomeManage}></Route>
          <Route path="/NavbarPage/ManagePage/UserPanel" component={WelcomeManage}></Route>
          <Route path="/NavbarPage/ManagePage" component={WelcomeManage}></Route>
        </Switch>
      </div>
      {/************************************************/}
      {/************************************************/}
      {/************************************************/}
    </div>);
  }
}

export default withRouter(ManagePage);
