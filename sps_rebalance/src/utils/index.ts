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

export const getUpdatedTargetData = (arr: AllocationDataProps[], data: ChangeAllocationData) => {
    return arr.filter((obj) => {
        if (data.id === obj.id) {
            obj[data.field] = data.value;
            return true;
        }
        return false;
    });
};

export const getAdjustCashFormData = (arr: AllocationDataProps[], data: AdjustCashDataProps) => {
    return arr.filter(obj => data.id === obj.id)[0];
};

export const getStyle = ({ prop, value }: GetStyleProps) => {
    const obj = {};
    obj[prop] = value;
    return obj;
};

export const getStyles = (styles = []) => {
    return styles.map(style => getStyle(style));
};

export const getPriceFormat = (price: {}, code = 'USD') => {
    return CurrencyFormatter.format(price, { code });
};

export const getCalculatedTotal = (data: AllocationDataProps[], field: string) => {
    const total = data.reduceRight((prevValue, obj) => {
        return prevValue + +obj[field];
    }, 0);
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
