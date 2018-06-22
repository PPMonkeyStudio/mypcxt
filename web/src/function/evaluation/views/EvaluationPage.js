import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter, Route, Switch,} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Menu,
  Layout,
  Breadcrumb,
  Tabs,
  Card,
} from 'antd';
//
//
//
import store from '../../../Store.js';
import ErrorPage from '../../route/views/ErrorPage.js';
//
//
//
const TabPane = Tabs.TabPane;
//
//
const WelcomeManage = () => {
  return (<div style={{
      margin: "50px auto 0",
      textAlign: "center",
    }}>
    <h1>系统管理</h1>
    <h2>请点击左侧标签进入具体的管理模块</h2>
  </div>);
}

class EvaluationPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);

    this.state = {
    }

  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    store.subscribe(this.storeChanged);

  }
  storeChanged() {}

  render() {
    return (<Card title="测评" style={{
        float: "left",
        width: "100%",
      }}>
      {/************************************************/}
      {/************************************************/}
      {/************************************************/}

      {/************************************************/}
      {/************************************************/}
      {/************************************************/}
    </Card>);
  }
}

export default withRouter(EvaluationPage);
