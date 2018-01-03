import { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from '../config';

const { assetAllocationEntityUrl, actionDetailsEntityUrl } = config.dev;

export type Action =
  | {
      type: 'GET_ASSET_ALLOCATION_ENTITY',
      payload: {
        request: AxiosRequestConfig
      }
    }
  | {
      type: 'GET_ASSET_ALLOCATION_ENTITY_SUCCESS',
      payload: AxiosResponse
    }
  | {
      type: 'GET_ACTION_DETAILS_ENTITY',
      payload: {
        request: AxiosRequestConfig
      }
    }
  | {
      type: 'GET_ACTION_DETAILS_ENTITY_SUCCESS',
      payload: AxiosResponse
    };

export const GET_ASSET_ALLOCATION_ENTITY = 'GET_ASSET_ALLOCATION_ENTITY';
export const GET_ASSET_ALLOCATION_ENTITY_SUCCESS = 'GET_ASSET_ALLOCATION_ENTITY_SUCCESS';
export const GET_ASSET_ALLOCATION_ENTITY_FAIL = 'GET_ASSET_ALLOCATION_ENTITY_FAIL';
export const getAssetAllocationData = (): Action => ({
  type: GET_ASSET_ALLOCATION_ENTITY,
  payload: {
    request: {
      url: assetAllocationEntityUrl
    }
  }
});

export const GET_ACTION_DETAILS_ENTITY = 'GET_ACTION_DETAILS_ENTITY';
export const GET_ACTION_DETAILS_ENTITY_SUCCESS = 'GET_ACTION_DETAILS_ENTITY_SUCCESS';
export const GET_ACTION_DETAILS_ENTITY_FAIL = 'GET_ACTION_DETAILS_ENTITY_FAIL';
export const getActionDetailsEntityData = (): Action => ({
  type: GET_ACTION_DETAILS_ENTITY,
  payload: {
    request: {
      url: actionDetailsEntityUrl
    }
  }
});
