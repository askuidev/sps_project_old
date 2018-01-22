const CurrencyFormatter = require('currency-formatter');

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

interface ChangeAllocationData {
    value: string;
    id: string;
    field: string;
}

interface AdjustCashDataProps {
    id: string;
    actionType: string;
    actionValue: string;
}

interface GetStyleProps {
    prop: string;
    value: string | number;
}

/**
 * getUpdatedAllocationData - add/update actionType and actionValue
 *
 * @param {type} arr  allocationData array
 * @param {type} data asjustCash data object
 *
 * @returns {type} updated allocationData with adjustCash data
 */
export const getUpdatedAllocationData = (arr: AllocationDataProps[], data: AdjustCashDataProps) => {
    return arr.filter((obj) => {
        if (data.id === obj.id) {
            obj.actionType = data.actionType;
            obj.actionValue = data.actionValue;
            return true;
        }
        return false;
    });
};

/**
 * getUpdatedTargetData - update any key in the allocationData array
 *
 * @param {type} arr  allocationData array
 * @param {type} data changed allocationData object
 *
 * @returns {type} updated allocationData with new changes
 */
export const getUpdatedTargetData = (arr: AllocationDataProps[], data: ChangeAllocationData) => {
    return arr.filter((obj) => {
        if (data.id === obj.id) {
            obj[data.field] = data.value;
            return true;
        }
        return false;
    });
};

/**
 * getAdjustCashFormData - Get adjustCash data by clicked row data id
 *                         when user clicks on the adjustCash link in the table
 *
 * @param {type} arr  allocationData arrat
 * @param {type} data object which contains selected row data id to filter
 *
 * @returns {type} filtered row from the allocationData array
 *                 based on the provided row id
 */
export const getAdjustCashFormData = (arr: AllocationDataProps[], data: AdjustCashDataProps) => {
    return arr.filter(obj => data.id === obj.id)[0];
};

/**
 * getStyle - Creates a style object for the element
 *
 * @param {type}   prop  element style property name
 * @param {type}   value element style property value
 *
 * @returns {type} style object to add to the element style attribute
 */
export const getStyle = ({ prop, value }: GetStyleProps) => {
    const obj = {};
    obj[prop] = value;
    return obj;
};

/**
 * getStyles - Creates array of styles for the element
 *
 * @param {array} [styles=[]] styles array
 *
 * @returns {type} array of style objects returned from getStyle functon
 */
export const getStyles = (styles = []) => {
    return styles.map(style => getStyle(style));
};

/**
 * getPriceFormat - Get formatted price for the provided number with price format
 *
 * @param {type}   price      A number to format
 * @param {string} [code=USD] type of format
 *
 * @returns {type} formatted price
 */
export const getPriceFormat = (price: {}, code = 'USD') => {
    return CurrencyFormatter.format(price, { code });
};

/**
 * getCalculatedTotal - Get the sum of [field]s in the allocationData array
 *
 * @param {type} data  allocationData array
 * @param {type} field allocationData field name
 *
 * @returns {type} sum of the provided field
 */
export const getCalculatedTotal = (data: AllocationDataProps[], field: string) => {
    const callback = (prevValue: number, obj: {}) => {
        return prevValue + +obj[field];
    };
    const total = data.reduceRight(callback, 0);
    return total.toFixed(2);
};

export default {
    getUpdatedAllocationData,
    getUpdatedTargetData,
    getStyle,
    getStyles,
    getPriceFormat,
    getCalculatedTotal
};
