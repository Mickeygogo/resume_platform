/*
 * @Author: your name
 * @Date: 2021-10-29 10:40:12
 * @LastEditTime: 2021-10-29 11:07:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit;
 * @FilePath: /resume_platform/app/render/store/index.ts
 */
import logger from 'redux-logger';
import RcReduxModal from 'rc-redux-model';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// 引入我们写好的 model
import globalModel from './globalModel';

// 这里只需要调用 RcReduxModel 实例化一下得到最后的 reduxModel
const reduxModel = new RcReduxModal([globalModel]);

// 无侵入式的使用 Redux，即使你写最原始的 reducer 也照样支持
const reducerList = combineReducers(reduxModel.reducers);

export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger));
