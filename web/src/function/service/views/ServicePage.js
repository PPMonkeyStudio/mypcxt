import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
// import {
//   ButtonToolbar,
//   FormGroup,
//   FormControl,
//   Image,
//   Jumbotron,
//   Table,
//   Tab
// } from 'react-bootstrap';
import store from '../../../Store.js';
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
  Pagination
} from 'antd';
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

//
////
////
/**
  *
  */
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({key: i.toString(), name: `Edrward ${i}`, age: 32, address: `London Park no. ${i}`,});
}
/**
 */
const EditableRow = ({
  form,
  index,
  ...props
}) => (<EditableContext.Provider value={form}>
  <tr {...props}/>
</EditableContext.Provider>);
const EditableContext = React.createContext();
const EditableFormRow = Form.create()(EditableRow);
/**
 * [EditableCell description]
 * @extends React
 */
class EditableCell extends React.Component {
  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps,
    } = this.props;
    return (<EditableContext.Consumer>
      {
        (form) => {
          const {getFieldDecorator} = form;
          return (<td {...restProps}>
            {
              editing
                ? (<FormItem style={{
                    margin: 0
                  }}>
                  {
                    getFieldDecorator(dataIndex, {
                      rules: [
                        {
                          required: true,
                          message: `Please Input ${title}!`
                        }
                      ],
                      initialValue: record[dataIndex]
                    })(<Input/>)
                  }
                </FormItem>)
                : restProps.children
            }
          </td>);
        }
      }
    </EditableContext.Consumer>);
  }
}
/**
 * [ServicePage description]
 * @extends Component
 */
class ServicePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      editingKey: '',
    };
  }
  isEditing = (record) => {
    return record.key === this.state.editingKey;
  };
  edit(key) {
    this.setState({editingKey: key});
  }
  saveEdit(form, key) {
    form.validateFields((error, row) => {

      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });

        this.setState({data: newData, editingKey: '',});
      } else {
        newData.push(data);
        this.setState({data: newData, editingKey: '',});
      }
    });
  }
  cancelEdit = () => {
    this.setState({editingKey: ''});
  };
  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };

    return (<div>
      <div style={{
          height: "34px",
          margin: "0 0 20px 0",
        }}></div>
      <Table components={components} bordered={true} dataSource={this.state.data}>
        <Column title="单位名称" dataIndex="name" align="center" editable="true" onCell={(record) => {
            return ({record, 'dataIndex': 'name', 'title': '单位名称', 'editing': this.isEditing(record)});
          }}/>

        <Column title="创建时间" dataIndex="age" align="center" editable="true" onCell={(record) => ({record, 'dataIndex': 'age', 'title': '创建时间', 'editing': this.isEditing(record)})}/>
        <Column title="修改时间" dataIndex="address" align="center"/>
        <Column title="操作" dataIndex="operation" align="center" render={(text, record) => {
            const editable = this.isEditing(record);
            return (<div>
              {
                editable
                  ? (<span>
                    <EditableContext.Consumer>
                      {
                        (form) => (<a href="javascript:;" onClick={() => this.saveEdit(form, record.key)} style={{
                            marginRight: 8
                          }}>
                          保存
                        </a>)
                      }
                    </EditableContext.Consumer>
                    <a onClick={() => this.cancelEdit(record.key)}>放弃</a>
                  </span>)
                  : (<a onClick={() => this.edit(record.key)}>修改</a>)
              }
              <Divider type="vertical"/>
              <Popconfirm title="确认删除吗?删除后，将删除所有此单位的数据及记录，无法恢复，是否继续？" okText="确认删除" cancelText="放弃" okType="danger" onConfirm={() => this.deleteUnit(record.mypcxt_unit_id)}>
                <Tooltip title="删除">
                  <a>
                    <Icon type="delete"/>
                  </a>
                </Tooltip>
              </Popconfirm>
            </div>);
          }}/>
      </Table>
    </div>);
  }
}

export default withRouter(ServicePage);
