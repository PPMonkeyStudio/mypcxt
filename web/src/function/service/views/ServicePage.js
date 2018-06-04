import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Route,
  Switch,
  Link,
  BrowserRouter,
  Router,
  Redirect,
  withRouter
} from 'react-router-dom';
import store from '../../../Store.js';
import PropTypes from 'prop-types';
import {
  Button,
  Menu,
  Layout,
  Breadcrumb,
  Tabs,
  Icon,
  Table,
  Checkbox,
  InputNumber,
  Modal,
  Form,
  Input,
  Popconfirm,
  Divider,
  Tooltip,
  Card,
  Pagination
} from 'antd';
import ServiceDefinition from './ServiceDefinition.js';
//
//
//
//
//
//
const FormItem = Form.Item;
const {Column, ColumnGroup,} = Table;
//
////
const tabList = [
  {
    key: '1',
    tab: '所有业务'
  }, {
    key: '2',
    tab: '业务定义'
  }, {
    key: '3',
    tab: '业务当事人'
  }, {
    key: '4',
    tab: '业务测评分配'
  }, {
    key: '5',
    tab: '业务数据抓取'
  },
];
class ServicePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: '2'
    };
  }
  static contextTypes = {
    router: PropTypes.object
  }
  componentDidMount() {
    switch (this.context.router.history.location.pathname) {
      case "/NavbarPage/ManagePage/ServicePage":
        {
          this.context.router.history.push("/NavbarPage/ManagePage/ServicePage/ServiceInstance");
          this.setState({key: "2"});
          break;
        }
      case "/NavbarPage/ManagePage/ServicePage/ServiceInstance":
        {
          this.setState({key: "1"})
          break;
        }
      case "/NavbarPage/ManagePage/ServicePage/ServiceDefinition":
        {
          this.setState({key: "2"})
          break;
        }
      case "/NavbarPage/ManagePage/ServicePage/ServiceClient":
        {
          this.setState({key: "3"})
          break;
        }
      case "/NavbarPage/ManagePage/ServicePage/ServiceDistribution":
        {
          this.setState({key: "4"})
          break;
        }
      case "/NavbarPage/ManagePage/ServicePage/ServiceGrab":
        {
          this.setState({key: "5"})
          break;
        }
      default:
        {
          this.setState({key: "2"})
        }
    }

  }
  render() {
    return (<div>
      <Card title="业务" activeTabKey={this.state.key}  tabList={tabList} onTabChange={(key) => {
          this.setState({
            key: key
          }, () => {
            switch (this.state.key) {
              case "1":
                {
                  this.context.router.history.push("/NavbarPage/ManagePage/ServicePage/ServiceInstance");
                  break;
                }
              case "2":
                {
                  this.context.router.history.push("/NavbarPage/ManagePage/ServicePage/ServiceDefinition");
                  break;
                }
              case "3":
                {
                  this.context.router.history.push("/NavbarPage/ManagePage/ServicePage/ServiceClient");
                  break;
                }
              case "4":
                {
                  this.context.router.history.push("/NavbarPage/ManagePage/ServicePage/ServiceDistribution");
                  break;
                }
              case "5":
                {
                  this.context.router.history.push("/NavbarPage/ManagePage/ServicePage/ServiceGrab");
                  break;
                }
            }
          });

        }}>
        <Switch>
          <WelcomeServicePage path="/NavbarPage/ManagePage/ServicePage/ServiceInstance"/>
          <ServiceDefinition path="/NavbarPage/ManagePage/ServicePage/ServiceDefinition"/>
          <WelcomeServicePage path="/NavbarPage/ManagePage/ServicePage/ServiceClient"/>
          <WelcomeServicePage path="/NavbarPage/ManagePage/ServicePage/ServiceDistribution"/>
          <WelcomeServicePage path="/NavbarPage/ManagePage/ServicePage/ServiceGrab"/>
        </Switch>
      </Card>
    </div>);
  }
}
const WelcomeServicePage = () => {
  return (<div style={{
      margin: "50px auto 0",
      textAlign: "center",
    }}>
    <h1>尚未开发</h1>
  </div>);
}
export default withRouter(ServicePage);
