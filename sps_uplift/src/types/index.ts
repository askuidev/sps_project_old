import * as React from 'react';

export interface RoutesConfigEntity {
  path: string;
  exact: boolean;
  component: React.Component;
  key: string;
}

export interface PieChartEntity {
  id?: string | number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  value?: number;
  name?: string;
  donutWidth?: number;
  mappedObject?: object;
  data?: AssetAllocationEntity;
}

export interface PieChartDataProps {
  id?: number;
  x?: number;
  y?: number;
  radius?: number;
  stroke?: number;
  width?: number;
  height?: number;
  value?: number;
  name?: string;
  donutWidth?: number;
  mappedObject?: object;
  data?: AssetAllocationEntity;
}

export interface ActionDetaisEntity {
  spsadvantage?: string;
  ownership?: string;
  plantype?: string;
  lastmodified?: string;
  lastmodifiedby?: string;
  nextannualreviewdate?: string;
}

export interface AssetAllocationDataProps {
  data?: AssetAllocationEntity[];
  id?: string | number;
}

export interface AssetAllocationEntity {
  x?: number;
  y?: number;
  value?: any;
  label?: string;
  stroke?: string;
}

export interface assetAllocationDataProps {
  assetAllocationData: AssetAllocationEntity[];
}

export interface GetStyleProps {
  prop: string;
  value: string | number;
}

export interface InitialStateEntity {
  assetAllocationData: AssetAllocationEntity[];
  actionDetailsEntity: ActionDetaisEntity;
}

export interface PieChartProps {
  data?: AssetAllocationEntity[];
  id?: string | number;
}

export interface PanelProps {
  children?: any;
  mainClass?: string;
  headingClass?: string;
  titleText?: string;
  bodyClass?: string;
  mainHeadingChildren?: any;
  subHeadingChildren?: any;
}
