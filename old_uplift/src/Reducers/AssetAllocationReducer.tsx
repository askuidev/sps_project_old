import  { AssetAllocationEntity } from '../model' ;

const intialState = [{
		value: 21.12,
		label: "Cash",
		stroke:'#43A19E',
	},
	{
		value: 32.12,
		label: "Fixed Income",
		stroke:'#7B43A1',
	},
	{
		value: 42.12,
		label: "Derivatives",
		stroke:'#F2317A',
	},
	{
		value:35,
		label: "Equity",
		stroke:'#FF9824',
	},
	{
		value:13,
		label: "Other",
		stroke:'#58CF6C',
	}]

/*export function fetchAccountDetails() {
	return (dispatch, getState) => {
		return axios.get('http://localhost:9090/allocationDetails')
				.then((res) => {
					dispatch(allocationDetails(res.data));
				})
				.catch((error) => {
					console.log(error.message)
				});
}*/


export const  assetAllocationReducer = (state:AssetAllocationEntity [] = intialState, action:any) => {
	return state;
}
