import { createStore, applyMiddleware } from 'redux';
import { Action } from '../actions';
import * as Actions from '../actions';
import config from '../config';
import axios from 'axios';
const axiosMiddleware = require('redux-axios-middleware').default;

const { baseUrl } = config.dev;

const apiClient = axios.create({
    baseURL: baseUrl,
    responseType: 'json'
});

interface AdjustCashDataProps {
    actionType: string;
    actionValue: string;
}

interface InitialStateProps {
    allocationData: {}[];
    assetData: {}[];
    allocationId: {};
    showAdjustCashModal: boolean;
    adjustCashData: AdjustCashDataProps;
}

let initialState = {
    allocationData: [],
    assetData: [],
    allocationId: '',
    showAdjustCashModal: false,
    adjustCashData: {
        actionType: '',
        actionValue: ''
    }
};

const reducer = (state: InitialStateProps = initialState, action: Action) => {
    switch (action.type) {
        case Actions.GET_ALLOCATION_DATA_SUCCESS:
            state = Object.assign({}, state, { allocationData: action.payload.data });
            break;
        case Actions.GET_ASSET_DATA_SUCCESS:
            state = Object.assign({}, state, { assetData: action.payload.data });
            break;
        case Actions.CLEAR_ADJUST_CASH_DATA:
            state = Object.assign({}, state, { adjustCashData: initialState.adjustCashData });
            break;
        case Actions.SHOW_ADJUST_CASH_MODAL:
            const showAdjustCashFormData = {
                actionType: action.payload.actionType || '',
                actionValue: action.payload.actionValue || ''
            };
            const showAdjustCashData = {
                showAdjustCashModal: true,
                allocationId: action.payload.id,
                adjustCashData: showAdjustCashFormData
            };
            state = Object.assign({}, state, showAdjustCashData);
            break;
        case Actions.HIDE_ADJUST_CASH_MODAL:
            const hideAdjustCashFormData = {
                actionType: '',
                actionValue: ''
            };
            const hideAdjustCashData = {
                showAdjustCashModal: false,
                allocationId: null,
                adjustCashData: hideAdjustCashFormData
            };
            state = Object.assign({}, state, hideAdjustCashData);
            break;
        default:

    }
    return state;
};

const configureStore = () => {
    return createStore(reducer, initialState, applyMiddleware(axiosMiddleware(apiClient)));
};

export default configureStore;
