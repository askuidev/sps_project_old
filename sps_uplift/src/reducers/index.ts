import { createStore, applyMiddleware } from 'redux';
import { Action } from '../actions';
import * as Actions from '../actions';
import config from '../config';
import axios from 'axios';
const axiosMiddleware = require('redux-axios-middleware').default;
import { InitialStateEntity } from '../types';

const { baseUrl } = config.dev;

const apiClient = axios.create({
    baseURL: baseUrl,
    responseType: 'json'
});

let initialState = {
    assetAllocationData: [],
    actionDetailsEntity: {
      spsadvantage: 'Text1',
      ownership: 'Text2',
      plantype: 'Text3',
      lastmodified: 'Text4',
      lastmodifiedby: 'Text5',
      nextannualreviewdate: 'Text6'
    }
};

const reducer = (state: InitialStateEntity = initialState, action: Action) => {
    switch (action.type) {
        case Actions.GET_ASSET_ALLOCATION_ENTITY_SUCCESS:
            state = Object.assign({}, state, { assetAllocationData: action.payload.data });
            break;
        case Actions.GET_ACTION_DETAILS_ENTITY_SUCCESS:
            const actionData = action.payload.data;
            const actionEntity = actionData && actionData[0];
            state = Object.assign({}, state, { actionDetailsEntity: actionEntity });
            break;
        default:

    }
    return state;
};

const configureStore = () => {
    return createStore(reducer, initialState, applyMiddleware(axiosMiddleware(apiClient)));
};

export default configureStore;
