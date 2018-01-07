export interface TableRowDataProps {
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

export interface TargetAllocationProps {
  getAllocationData: () => void;
  handleAdjustCashModal: (props: AdjustCashModalEntity) => void;
  updateAllocationTargetData: (
    allocationData: TableRowDataProps[],
    props: ChangeAllocationData
  ) => void;
  allocationData: TableRowDataProps[];
  allocationId: string;
  showAdjustCashModal: boolean;
}

export interface TargetAllocationState {
  leftGroupActive?: string;
  middleGroupActive?: string;
}

export interface AdjustCashModalEntity {
  type: string;
  data: any;
}

export interface ChangeAllocationData {
  value: string;
  id: string;
  field: string;
}

export interface AssetDataProps {
  color: string;
  assetClass: string;
  difference: string;
}

export interface DiffAllocationTableProps {
  assetData?: AssetDataProps[];
  getAssetData: () => {};
}

export interface DiffAllocationTableRowProps {
  color?: string;
  assetClass?: string;
  difference?: string;
}

export interface CallbackProps {
  (params: object): void;
}

export interface TableRowEntity {
  rowData?: TableRowDataProps;
  fieldType?: string;
  onAdjustCashClick?: (rowData: TableRowDataProps) => void;
  onDataChange?: CallbackProps;
}

export interface TableRowState {
  targetPer?: string;
}

export interface MyEventTarget extends EventTarget {
  value: string;
}

export interface MyFormEvent extends React.FormEvent<HTMLInputElement> {
  target: MyEventTarget;
}

export interface TableFooterProps {
  allocationData?: TableRowDataProps[];
  searchText?: string;
}

export interface TableFooterState {
  searchText: string;
}

export interface TableControlsProps {
  leftGroupActive?: string;
  middleGroupActive?: string;
  onLeftGroupClick?: (leftGroupActive: string) => void;
  onMiddleGroupClick?: (middleGroupActive: string) => void;
}

export interface TableCellProps {
  value?: string;
  id?: string | number;
  field?: string;
}

export interface TableBodyProps {
  allocationData?: TableRowDataProps[];
  fieldType?: string;
  onAdjustCashClick?: (allocationData: TableRowDataProps) => void;
  onDataChange?: (params: TableCellProps) => void;
}

export interface NoDataRowProps {
  colSpan: number;
  message: string;
}

export interface TableProps {
  tableClass?: string;
  fieldType?: string;
  allocationData: TableRowDataProps[];
  onAdjustCashClick?: (params: TableRowDataProps) => void;
  onDataChange?: (params: TableCellProps) => void;
}

export interface ButtonGroupProps {
  buttonType?: string;
  withIcons?: boolean;
  isGroup?: boolean;
  activeBtn?: string;
  mainClass?: string;
  grouped?: boolean;
  buttons?: ButtonProps[] | RadioBtnProps[];
  checkedRadio?: string;
  onButtonGroupClick?: (field: string) => void;
  onRadioChange?: (text: string, e: MyFormEvent) => void;
  onCheckChange?: (actionType: string, e: MyFormEvent) => void;
  onValueChange?: (e: MyFormEvent) => void;
  onClearClick?: () => void;
}

export interface ButtonProps {
  text?: string;
  field?: string;
  iconClass?: string;
  className?: string;
}

export interface RadioBtnProps {
  name?: string;
  type?: string;
  text?: string;
}

export interface ModalProps {
  children?: any;
  mainClass?: string;
  titleText?: string;
  showModal?: boolean;
  onModalHide?: () => void;
  onSubmitClick?: () => void;
}

export interface CheckboxProps {
  id?: string | number;
  label?: string;
  mainClass?: string;
  onChange?: (id: string | number, e: object) => void;
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

export interface AdjustCashFormProps {
  buttonType?: string;
  actionType?: string;
  actionValue?: string;
  withIcons?: boolean;
  isGroup?: boolean;
  activeBtn?: string;
  mainClass?: string;
  grouped?: boolean;
  buttons?: ButtonProps[];
  checkedRadio?: string;
  onCheckChange: (actionType: string, e: MyFormEvent) => void;
  onValueChange: (e: MyFormEvent) => void;
  onClearClick: () => void;
}

export interface AdjustCashDataProps {
  id: string | number;
  actionType: string;
  actionValue: string;
}

export interface HandleAdjustCashModalProps {
  type: string;
  data: string;
}

export interface AdjustCashModalProps {
  allocationData: TableRowDataProps[];
  adjustCashData: AdjustCashDataProps;
  allocationId: string | number;
  mainClass: string;
  showAdjustCashModal: boolean;
  handleAdjustCashModal: (props: HandleAdjustCashModalProps) => void;
  updateAllocationData: (allocationData: TableRowDataProps[], props: AdjustCashDataProps) => void;
}

export interface AdjustCashModalState {
  actionType: string;
  actionValue: string;
}
