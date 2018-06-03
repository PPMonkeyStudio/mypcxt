import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Card} from 'antd';

const ServiceDefinition = () => {
  return (<Card style={{
      width: "100%",
      margin: "0 auto",
      padding: "100px 0 200px",
      textAlign: "center"
    }}>
    <h1>ServiceDefinition</h1>
  </Card>);
};

export default withRouter(ServiceDefinition);
