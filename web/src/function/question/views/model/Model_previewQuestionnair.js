import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

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
  Tag,
  Radio,
} from 'antd';
//
//
//
import store from '../../../../Store.js';
import * as UserActions from '../../../user/UserActions.js';
import * as QuestionnaireActions from '../../../question/QuestionnaireActions.js';
import * as QuestionActions from '../../../question/QuestionActions.js';
import Model_addOption from './Model_addOption.js';
//
//
//
const FormItem = Form.Item;
const {Column, ColumnGroup,} = Table;
const Option = Select.Option;
const {TextArea} = Input;
const RadioGroup = Radio.Group;
//
////
////

class Model_previewQuestionnair extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);

    this.state = {
      previewQuestionnaireModalVisible: false,
      questionnaireDTO: {
        serviceDefinitionDTO: {
          serviceDefinition: {
            mypcxt_service_definition_id: "",
            service_definition_describe: "",
            service_definition_unit: "",
            service_definition_gmt_create: "",
            service_definition_gmt_modified: ""
          },
          unit: {
            mypcxt_unit_id: "",
            unit_name: "",
            unit_correction_man: "",
            unit_gmt_create: "",
            unit_gmt_modified: ""
          }
        },
        questionServiceDTOList: [],
      },
    }

  }

  componentDidMount() {
    store.subscribe(this.storeChanged);

  }

  storeChanged() {
    if (this.state.previewQuestionnaireModalVisible !== store.getState()["QuestionReducer"]["Model_previewQuestionnair"]["previewQuestionnaireModalVisible"]) {
      this.setState({
        previewQuestionnaireModalVisible: store.getState()["QuestionReducer"]["Model_previewQuestionnair"]["previewQuestionnaireModalVisible"]
      });
    }
    if (this.state.questionnaireDTO !== store.getState()["QuestionReducer"]["Model_previewQuestionnair"]["questionnaireDTO"]) {
      this.setState({
        questionnaireDTO: store.getState()["QuestionReducer"]["Model_previewQuestionnair"]["questionnaireDTO"]
      });
    }
  }
  //
  //
  //
  render() {
    return (<Modal mask={false} width="960px" title="预览问卷" visible={this.state.previewQuestionnaireModalVisible} onCancel={() => {
        store.dispatch(QuestionnaireActions.set_previewQuestionnairModalVisible(false));
      }} footer={[
        <Button onClick={() => {
            store.dispatch(QuestionnaireActions.set_previewQuestionnairModalVisible(false));
          }}>返回</Button>,
      ]}>
      {
        (typeof this.state.questionnaireDTO.questionServiceDTOList !== "undefined")
          ? <div>
              <div>单位：{this.state.questionnaireDTO.serviceDefinitionDTO.unit.unit_name}</div>
              <br/>
              <div>业务：{this.state.questionnaireDTO.serviceDefinitionDTO.serviceDefinition.service_definition_describe}</div>
              <Divider/></div>
          : <div></div>
      }
      {
        (typeof this.state.questionnaireDTO.questionServiceDTOList !== "undefined")
          ? <div>
              {
                //遍历问题
                this.state.questionnaireDTO.questionServiceDTOList.map(function(questionServiceDTO) {
                  return <div>
                    <div>{questionServiceDTO.question.question_describe}</div>
                    <br/> {
                      (questionServiceDTO.question.question_type === "1")
                        ? <RadioGroup>
                            {
                              //遍历选择题选项
                              questionServiceDTO.optionList.map(function(option) {
                                return (<Radio style={{
                                    height: '30px',
                                    lineHeight: '30px'
                                  }} value={option.mypcxt_option_id}>{option.option_describe}</Radio>);
                              })
                            }
                          </RadioGroup>
                        : <div><TextArea/></div>
                    }
                    <Divider/>
                  </div>
                })
              }
            </div>
          : <div></div>
      }
    </Modal>);
  }
}

export default withRouter(Model_previewQuestionnair);
