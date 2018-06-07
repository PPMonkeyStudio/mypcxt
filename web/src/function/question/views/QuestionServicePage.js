import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
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
  Pagination,
  Select,
  Tag
} from 'antd';
import * as QuestionActions from '../QuestionActions.js';

const FormItem = Form.Item;
const {Column, ColumnGroup} = Table;
const Option = Select.Option;
const {TextArea} = Input;
//
//
//
//
class QuestionServicePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);
    this.state = {
      questionServiceVO: {
        questionServiceDTOList: [],
        totalRecords: 0,
      },
      tableLoading: false,
      questionDetailsModalVisible: false,
      questionDetails: {
        question: {
          mypcxt_question_id: '',
          question_describe: '',
          question_type: '',
          question_service_definition: '',
          question_sort: 0,
          question_father_question: '',
          question_gmt_create: '',
          question_gmt_modified: '',
        },
        serviceDefinitionDTO: {
          serviceDefinition: {
            mypcxt_service_definition_id: '',
            service_definition_describe: '',
            service_definition_unit: '',
            service_definition_gmt_create: '',
            service_definition_gmt_modified: ''
          },
          unit: {
            mypcxt_unit_id: '',
            unit_name: '',
            unit_correction_man: '',
            unit_gmt_create: '',
            unit_gmt_modified: '',
          },
        },
        optionList: []
      },
      addQuestionModalVisible: false,
      addOptionModalVisible: false,
      addOptionModelState: {
        option_describe: "",
        option_question: "",
        option_grade: "",
      }
    }
  }
  storeChanged() {
    if (this.state.questionServiceVO !== store.getState()["QuestionReducer"]["QuestionService"]["questionServiceVO"]) {
      this.setState({
        questionServiceVO: store.getState()["QuestionReducer"]["QuestionService"]["questionServiceVO"]
      });
    }
    if (this.state.questionDetailsModalVisible !== store.getState()["QuestionReducer"]["QuestionService"]["questionDetailsModalVisible"]) {
      this.setState({
        questionDetailsModalVisible: store.getState()["QuestionReducer"]["QuestionService"]["questionDetailsModalVisible"]
      });
    }

  }
  componentDidMount() {
    store.subscribe(this.storeChanged);
    //
    //加载数据
    //
    store.dispatch(QuestionActions.getQuestionServiceVO());
  }
  render() {
    return (<div>
      <div style={{
          height: "34px",
          margin: "0 0 20px 0"
        }}>
        <Button onClick={() => {
            this.setState({addQuestionModalVisible: true});
          }}>
          <Icon type="plus"/>
          &nbsp;创建问题
        </Button>
      </div>
      <Table dataSource={this.state.questionServiceVO.questionServiceDTOList} loading={this.state.tableLoading} bordered={true} title={() => (<h2>问题列表</h2>)}>
        <Column title="问题" dataIndex="question.question_describe" align="center" render={(text, record) => {
            return (<Tooltip title="查看">
              <a onClick={() => {
                  this.setState({questionDetailsModalVisible: true});
                  let questionDetails = this.state.questionDetails;
                  questionDetails = record;
                  this.setState({questionDetails: questionDetails});
                  //
                  //
                  //
                  let addOptionModelState = this.state.addOptionModelState;
                  addOptionModelState.option_question = record.question.mypcxt_question_id;
                  this.setState({addOptionModelState: addOptionModelState});
                }}>{record.question.question_describe}</a>
            </Tooltip>);
          }}/>
        <Column title="问题类型" dataIndex="question.question_type" align="center" render={(text, record) => {
            return (<div>
              {
                (text === "1")
                  ? <Tag color="#108ee9">选择题</Tag>
                  : <Tag color="#87d068">开放题</Tag>
              }
            </div>);
          }}/>
        <Column title="所属业务" dataIndex="serviceDefinitionDTO.serviceDefinition.service_definition_describe" align="center"/>
        <Column title="所属单位" dataIndex="serviceDefinitionDTO.unit.unit_name" align="center"/>
        <Column title="操作" dataIndex="question.mypcxt_question_id" align="center" render={(text, record) => {
            return (<Tooltip title="删除">
              <a onClick={(record) => {}}><Icon type="delete"/></a>
            </Tooltip>);
          }}/>
      </Table>
      <div style={{
          margin: "20px auto 10px",
          width: "200px",
          textAlign: "center",
        }}>共{this.state.questionServiceVO.totalRecords}条记录</div>
      <Modal title="问题详情" visible={this.state.questionDetailsModalVisible} onCancel={() => {
          this.setState({questionDetailsModalVisible: false});
        }} footer={(
          this.state.questionDetails.question.question_type === "1")
          ? [
            <Button onClick={() => {
                this.setState({questionDetailsModalVisible: false});
              }}>返回</Button>,
            <Button icon="plus" onClick={() => {
                this.setState({addOptionModalVisible: true});
              }}>
              创建新的选项
            </Button>,
            <Button icon="check" onClick={() => {
                this.setState({questionDetailsModalVisible: false});
              }}>保存问题描述的修改</Button>,
          ]
          : [
            <Button onClick={() => {
                this.setState({questionDetailsModalVisible: false});
              }}>返回</Button>,
            <Button icon="check" onClick={() => {
                this.setState({questionDetailsModalVisible: false});
              }}>保存问题描述的修改</Button>,
          ]}>
        <div>
          <h2>问题：</h2>
          <TextArea autosize={true} defaultValue={this.state.questionDetails.question.question_describe}></TextArea>
          {
            (this.state.questionDetails.question.question_type === "1")
              ? <div>
                  <Divider/>
                  <h2>选项：</h2>
                  <Table dataSource={this.state.questionDetails.optionList} bordered={true} size="small" pagination={false}>
                    <Column title="描述" dataIndex="option_describe" align="center"/>
                    <Column title="分数" dataIndex="option_grade" align="center"/>
                    <Column title="操作" dataIndex="mypcxt_option_id" align="center" render={(text, record) => {
                        return (<div>
                          <Tooltip title="修改">
                            <a onClick={(record) => {}}><Icon type="edit"/></a>
                          </Tooltip>
                          <Divider type="vertical"/>
                          <Tooltip title="上移">
                            <a onClick={(record) => {}}><Icon type="arrow-up"/></a>
                          </Tooltip>
                          <Divider type="vertical"/>
                          <Tooltip title="下移">
                            <a onClick={(record) => {}}><Icon type="arrow-down"/></a>
                          </Tooltip>
                          <Divider type="vertical"/>
                          <Tooltip title="删除">
                            <a onClick={(record) => {}}><Icon type="delete"/></a>
                          </Tooltip>
                        </div>);
                      }}/>
                  </Table>
                </div>
              : <div></div>
          }
          <Divider/>
          <h2>类型：</h2>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {
              (this.state.questionDetails.question.question_type === "1")
                ? <Tag color="#108ee9">选择题</Tag>
                : <Tag color="#87d068">开放题</Tag>
            }
          </div>
          <Divider/>
          <h2>所属业务：</h2>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.questionDetails.serviceDefinitionDTO.serviceDefinition.service_definition_describe}</div>
          <Divider/>
          <h2>所属单位：</h2>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.questionDetails.serviceDefinitionDTO.unit.unit_name}</div>
        </div>

      </Modal>
      <Modal title="创建问题" visible={this.state.addQuestionModalVisible} wrapClassName="vertical-center-modal" onOk={() => {}} onCancel={() => {
          this.setState({addQuestionModalVisible: false});
        }} okText="确认创建" cancelText="返回"></Modal>
      <Modal title="创建选项" visible={this.state.addOptionModalVisible} wrapClassName="vertical-center-modal" onOk={() => {
          store.dispatch(QuestionActions.addOption(this.state.addOptionModelState));
          this.setState({addOptionModalVisible: false});
        }} onCancel={() => {
          this.setState({addOptionModalVisible: false});
        }} okText="确认创建" cancelText="返回">
        <Form>
          <FormItem label="描述">
            <Input onChange={(event) => {
                let addOptionModelState = this.state.addOptionModelState;
                addOptionModelState.option_describe = event.target.value;
                this.setState({addOptionModelState: addOptionModelState});
              }}/>
          </FormItem>
          <FormItem label="分值">
            <InputNumber defaultValue={1} onChange={(event) => {
                let addOptionModelState = this.state.addOptionModelState;
                addOptionModelState.option_grade = event.target.value;
                this.setState({addOptionModelState: addOptionModelState});
              }}/>
          </FormItem>
        </Form>
      </Modal>
    </div>);

  }
}
export default withRouter(QuestionServicePage);
