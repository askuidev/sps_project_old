import { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from '../config';
import utils from '../utils';

const { allocationDataUrl, assetDataUrl } = config.dev;

const { getUpdatedAllocationData, getUpdatedTargetData } = utils;

interface AllocationDataProps {
  description: string;
  adjustCash: boolean;
  actionType: string;
  actionValue: string;
  currentPer: string;
  symbol: string;
  targetPer: string;
  value: string;
  id: string | number;
  targetPrice: string;
  buySellPrice: string;
  driftPer: string;
}

interface ChangeAllocationDataProps {
  value: string;
  id: string;
  field: string;
}

interface AdjustCashDataProps {
  id: string;
  actionType: string;
  actionValue: string;
}

interface HandleAdjustCashProps {
  type: string;
  data: HandleAdjustCashDataProps;
}

interface HandleAdjustCashDataProps {
  actionType?: string;
  actionValue?: string;
  id?: string | number;
  allocationId?: string | number;
}

export type Action =
  | {
      type: 'GET_ALLOCATION_DATA',
      payload: {
        request: AxiosRequestConfig
      }
    }
  | {
      type: 'GET_ALLOCATION_DATA_SUCCESS',
      payload: AxiosResponse
    }
  | {
      type: 'GET_ASSET_DATA',
      payload: {
        request: AxiosRequestConfig
      }
    }
  | {
      type: 'GET_ASSET_DATA_SUCCESS',
      payload: AxiosResponse
    }
  | {
      type: 'UPDATE_ALLOCATION_DATA',
      payload: {
        request: AxiosRequestConfig
      }
    }
  | {
      type: 'UPDATE_ALLOCATION_DATA_SUCCESS',
      payload: AxiosResponse
    }
  | {
      type: 'UPDATE_ALLOCATION_TARGET_DATA',
      payload: {
        request: AxiosRequestConfig
      }
    }
  | {
      type: 'UPDATE_ALLOCATION_TARGET_DATA_SUCCESS',
      payload: AxiosResponse
    }
  | {
      type: 'CLEAR_ADJUST_CASH_DATA',
      payload: {}
    }
  | {
      type: 'SHOW_ADJUST_CASH_MODAL',
      payload: HandleAdjustCashDataProps
    }
  | {
      type: 'HIDE_ADJUST_CASH_MODAL',
      payload: HandleAdjustCashDataProps
    };

export const GET_ALLOCATION_DATA = 'GET_ALLOCATION_DATA';
export const GET_ALLOCATION_DATA_SUCCESS = 'GET_ALLOCATION_DATA_SUCCESS';
export const GET_ALLOCATION_DATA_FAIL = 'GET_ALLOCATION_DATA_FAIL';
export const getAllocationData = (): Action => ({
  type: GET_ALLOCATION_DATA,
  payload: {
    request: {
      url: allocationDataUrl
    }
  }
});

export const GET_ASSET_DATA = 'GET_ASSET_DATA';
export const GET_ASSET_DATA_SUCCESS = 'GET_ASSET_DATA_SUCCESS';
export const GET_ASSET_DATA_FAIL = 'GET_ASSET_DATA_FAIL';
export const getAssetData = (): Action => ({
  type: GET_ASSET_DATA,
  payload: {
    request: {
      url: assetDataUrl
    }
  }
});

export const UPDATE_ALLOCATION_DATA = 'UPDATE_ALLOCATION_DATA';
export const UPDATE_ALLOCATION_DATA_SUCCESS = 'UPDATE_ALLOCATION_DATA_SUCCESS';
export const UPDATE_ALLOCATION_DATA_FAIL = 'UPDATE_ALLOCATION_DATA_FAIL';
export const updateAllocationData = (
  allocationData: AllocationDataProps[],
  data: AdjustCashDataProps
): Action => {
  const updatedAllocationData = getUpdatedAllocationData(allocationData, data);
  return {
    type: UPDATE_ALLOCATION_DATA,
    payload: {
      request: {
        method: 'PUT',
        url: allocationDataUrl + '/' + data.id,
        data: {
          ...updatedAllocationData[0]
        }
      }
    }
  };
};

export const UPDATE_ALLOCATION_TARGET_DATA = 'UPDATE_ALLOCATION_TARGET_DATA';
export const UPDATE_ALLOCATION_TARGET_DATA_SUCCESS =
  'UPDATE_ALLOCATION_TARGET_DATA_SUCCESS';
export const UPDATE_ALLOCATION_TARGET_DATA_FAIL =
  'UPDATE_ALLOCATION_TARGET_DATA_FAIL';
export const updateAllocationTargetData = (
  allocationData: AllocationDataProps[],
  data: ChangeAllocationDataProps
): Action => {
  const updatedTargetData = getUpdatedTargetData(allocationData, data);
  return {
    type: UPDATE_ALLOCATION_TARGET_DATA,
    payload: {
      request: {
        method: 'PUT',
        url: allocationDataUrl + '/' + data.id,
        data: {
          ...updatedTargetData[0]
        }
      }
    }
  };
};

export const CLEAR_ADJUST_CASH_DATA = 'CLEAR_ADJUST_CASH_DATA';
export const clearAdjustCashData = (): Action => ({
  type: CLEAR_ADJUST_CASH_DATA,
  payload: {}
});

export const SHOW_ADJUST_CASH_MODAL = 'SHOW_ADJUST_CASH_MODAL';
export const HIDE_ADJUST_CASH_MODAL = 'HIDE_ADJUST_CASH_MODAL';
export const handleAdjustCashModal = ({type, data}: HandleAdjustCashProps): Action => {
  if (type === 'open') {
    return {
      type: SHOW_ADJUST_CASH_MODAL,
      payload: data
    };
  } else {
    return {
      type: HIDE_ADJUST_CASH_MODAL,
      payload: data
    };
  }
};
