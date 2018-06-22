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
      addQuestionModelState: {
        question_describe: "",
        question_type: "",
        question_service_definition: "",
        question_father_question: "",
      },
      addOptionModalVisible: false,
      addOptionModelState: {
        option_describe: "",
        option_question: "",
        option_grade: "",
      },
      questionFatherList: [],
      serviceDefinitionDTOList: [],
      updateQuestionState: {
        mypcxt_question_id: '',
        question_describe: '',
        question_type: '',
        question_service_definition: '',
        question_sort: 0,
        question_father_question: '',
        question_gmt_create: '',
        question_gmt_modified: ''
      }
    }
    //
    //
    //
  }
  storeChanged() {
    if (this.state.questionServiceVO !== store.getState()["QuestionReducer"]["QuestionService"]["questionServiceVO"]) {

      this.setState({
        questionServiceVO: store.getState()["QuestionReducer"]["QuestionService"]["questionServiceVO"],
      });
    }
    if (this.state.questionDetailsModalVisible !== store.getState()["QuestionReducer"]["QuestionService"]["questionDetailsModalVisible"]) {
      this.setState({
        questionDetailsModalVisible: store.getState()["QuestionReducer"]["QuestionService"]["questionDetailsModalVisible"]
      });
    }
    if (this.state.serviceDefinitionDTOList !== store.getState()["QuestionReducer"]["QuestionService"]["serviceDefinitionDTOList"]) {
      this.setState({
        serviceDefinitionDTOList: store.getState()["QuestionReducer"]["QuestionService"]["serviceDefinitionDTOList"]
      });
    }
    if (this.state.tableLoading !== store.getState()["QuestionReducer"]["QuestionService"]["tableLoading"]) {
      this.setState({
        tableLoading: store.getState()["QuestionReducer"]["QuestionService"]["tableLoading"]
      });
    }
    // 更新父问题列表
    if (this.state.questionFatherList !== store.getState()["QuestionReducer"]["QuestionService"]["questionFatherList"]) {
      this.setState({
        questionFatherList: store.getState()["QuestionReducer"]["QuestionService"]["questionFatherList"]
      });
    }
  }
  componentDidMount() {
    store.subscribe(this.storeChanged);
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
            store.dispatch(QuestionActions.getServiceDefinitionList());
            store.dispatch(QuestionActions.getQuestionFatherList());
          }}>
          <Icon type="plus"/>
          &nbsp;创建问题
        </Button>
      </div>
      <Table dataSource={this.state.questionServiceVO.questionServiceDTOList} loading={this.state.tableLoading} bordered={true} title={() => (<h2>问题列表</h2>)}>
        <Column title="问题" dataIndex="question.question_describe" align="center" render={(text, record) => {
            return (<Tooltip title="查看">
              <a onClick={() => {
                  store.dispatch(QuestionActions.setQuestionDetailsModalVisible(true));
                  //
                  let questionDetails = Object.assign({}, this.state.questionDetails);
                  questionDetails = record;
                  this.setState({questionDetails: questionDetails});
                  //
                  this.setState({updateQuestionState: questionDetails.question});
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
          store.dispatch(QuestionActions.setQuestionDetailsModalVisible(false));
        }} footer={(
          this.state.questionDetails.question.question_type === "1")
          ? [
            <Button onClick={() => {
                store.dispatch(QuestionActions.setQuestionDetailsModalVisible(false));
              }}>返回</Button>,
            <Button icon="plus" onClick={() => {
                this.setState({addOptionModalVisible: true});
                //设置所属问题
                let addOptionModelState = Object.assign({}, this.state.addOptionModelState);
                addOptionModelState.option_question = this.state.questionDetails.question.mypcxt_question_id;
                addOptionModelState.option_grade = 1;
                this.setState({addOptionModelState: addOptionModelState});
              }}>
              创建新的选项
            </Button>,
            <Button icon="check" onClick={() => {
                this.setState({questionDetailsModalVisible: false});
                store.dispatch(QuestionActions.updateQuestion(this.state.updateQuestionState));
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
          <TextArea autosize={true} value={this.state.updateQuestionState.question_describe} onChange={(event) => {
              let updateQuestionState = Object.assign({}, this.state.updateQuestionState);
              updateQuestionState.question_describe = event.target.value;
              this.setState({updateQuestionState: updateQuestionState});
            }}></TextArea>
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
                            <a onClick={() => {}}><Icon type="edit"/></a>
                          </Tooltip>
                          <Divider type="vertical"/>
                          <Tooltip title="上移">
                            <a onClick={() => {
                                store.dispatch(QuestionActions.moveOption(record.mypcxt_option_id, "2"));
                              }}><Icon type="arrow-up"/></a>
                          </Tooltip>
                          <Divider type="vertical"/>
                          <Tooltip title="下移">
                            <a onClick={() => {
                                store.dispatch(QuestionActions.moveOption(record.mypcxt_option_id, "1"));
                              }}><Icon type="arrow-down"/></a>
                          </Tooltip>
                          <Divider type="vertical"/>
                          <Tooltip title="删除">
                            <a onClick={() => {}}><Icon type="delete"/></a>
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
      {/* 创建问题模态框 */}
      <Modal title="创建一个新的业务问题" visible={this.state.addQuestionModalVisible} wrapClassName="vertical-center-modal" onOk={() => {
          store.dispatch(QuestionActions.addQuestion(this.state.addQuestionModelState));
          this.setState({addQuestionModalVisible: false});
        }} onCancel={() => {
          this.setState({addQuestionModalVisible: false});
        }} okText="确认创建" cancelText="返回">
        <Form>
          <FormItem label="问题描述">
            <TextArea autosize={true} onChange={(event) => {
                let addQuestionModelState = Object.assign({}, this.state.addQuestionModelState);
                addQuestionModelState.question_describe = event.target.value;
                this.setState({addQuestionModelState: addQuestionModelState});
              }}></TextArea>
          </FormItem>
          <FormItem label="类型">
            <Select onChange={(value) => {
                let addQuestionModelState = this.state.addQuestionModelState;
                addQuestionModelState.question_type = value;
                this.setState({addQuestionModelState: addQuestionModelState});
              }}>
              <Option value="1">选择题</Option>
              <Option value="2">开放题</Option>
            </Select>
          </FormItem>
          <FormItem label="所属业务">
            <Select defaultValue="none" onChange={(value) => {
                let addQuestionModelState = Object.assign({}, this.state.addQuestionModelState);
                addQuestionModelState.question_service_definition = value;
                this.setState({addQuestionModelState: addQuestionModelState});
              }}>
              <Option value="none">无</Option>
              {
                this.state.serviceDefinitionDTOList.map(function(serviceDefinitionDTO) {
                  return <Option value={serviceDefinitionDTO.serviceDefinition.mypcxt_service_definition_id}>{serviceDefinitionDTO.serviceDefinition.service_definition_describe}</Option>
                })
              }
            </Select>
          </FormItem>
          <FormItem label="父问题">
            <Select defaultValue="none" onChange={(value) => {
                let addQuestionModelState = Object.assign({}, this.state.addQuestionModelState);
                addQuestionModelState.question_father_question = value;
                this.setState({addQuestionModelState: addQuestionModelState});
              }}>
              <Option value="none">无</Option>
              {
                this.state.questionFatherList.map(function(question) {
                  return <Option value={question.mypcxt_question_id}>{question.question_describe}</Option>
                })
              }
            </Select>
          </FormItem>
        </Form>
      </Modal>
      <Modal title="创建一个选择题的选项" visible={this.state.addOptionModalVisible} wrapClassName="vertical-center-modal" onOk={() => {
          store.dispatch(QuestionActions.addOption(this.state.addOptionModelState));
          this.setState({addOptionModalVisible: false});
        }} onCancel={() => {
          this.setState({addOptionModalVisible: false});
        }} okText="确认创建" cancelText="返回">
        <Form>
          <FormItem label="描述">
            <Input onChange={(event) => {
                let addOptionModelState = Object.assign({}, this.state.addOptionModelState);
                addOptionModelState.option_describe = event.target.value;
                this.setState({addOptionModelState: addOptionModelState});
              }}/>
          </FormItem>
          <FormItem label="分值">
            <InputNumber value={this.state.addOptionModelState.option_grade} onChange={(value) => {
                let addOptionModelState = Object.assign({}, this.state.addOptionModelState);
                addOptionModelState.option_grade = value;
                this.setState({addOptionModelState: addOptionModelState});
              }}/>
          </FormItem>
        </Form>
      </Modal>
    </div>);

  }
}
export default withRouter(QuestionServicePage);
