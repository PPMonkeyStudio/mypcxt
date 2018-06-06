import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Route,
  Switch,
  Link,
  BrowserRouter,
  Router,
  Redirect,
  withRouter,
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
  Pagination,
} from 'antd';
import QuestionServicePage from '../../question/views/QuestionServicePage.js';
//
//
//
//
//
//
const FormItem = Form.Item;
const {Column, ColumnGroup} = Table;
//
////
const tabList = [
  {
    key: '1',
    tab: '业务问卷',
  }, {
    key: '2',
    tab: '问题',
  },
];
class QuestionPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: '1'
    };
  }
  static contextTypes = {
    router: PropTypes.object
  }
  componentDidMount() {
    switch (this.context.router.history.location.pathname) {
      case "/NavbarPage/ManagePage/QuestionPage/QuestionnairePage":
        {
          this.setState({key: "1"});
          break;
        }
      case "/NavbarPage/ManagePage/QuestionPage/QuestionServicePage":
        {
          this.setState({key: "2"});
          break;
        }
      default:
        {
          this.setState({key: "1"})
        }
    }

  }
  render() {
    console.debug(this.context.router.history.location.pathname);
    return (<div>
      <Card activeTabKey={this.state.key} tabList={tabList} onTabChange={(key) => {
          this.setState({
            key: key
          }, () => {
            switch (this.state.key) {
              case "1":
                {
                  this.context.router.history.push("/NavbarPage/ManagePage/QuestionPage/QuestionnairePage");
                  break;
                }
              case "2":
                {
                  this.context.router.history.push("/NavbarPage/ManagePage/QuestionPage/QuestionServicePage");
                  break;
                }
            }
          });
        }}>
        <Switch>
          <WelcomeQuestionPage path="/NavbarPage/ManagePage/QuestionPage/QuestionnairePage"/>
          <WelcomeQuestionPage path="/NavbarPage/ManagePage/QuestionPage/QuestionServicePage"/>
        </Switch>
      </Card>
    </div>);
  }
}
const WelcomeQuestionPage = () => {
  return (<div style={{
      margin: "50px auto 0",
      textAlign: "center"
    }}>
    <h1>尚未开发</h1>
  </div>);
}
export default withRouter(QuestionPage);
