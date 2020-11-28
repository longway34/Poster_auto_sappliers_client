import initialState from '../store/initialState';
import { actions } from '../actions';
import { getProxyHost } from '../store/constants';

export default function settingsReducer(state = initialState, action) {
	switch (action.type) {
		case actions.settings.FIRM_INFO_REQUEST:{
			return Object.assign({}, state, {
				firmName: "Название не определено...",
				firmAddress: "...",
				firmPhone: "",
				firmType: 0,
				firmLogoUrl: "",
				firmOwner: "",
				FirmEmail: "",
				FirmLogoImage: null

			})
		}
		case actions.settings.FIRM_INFO_RESPONSE:{
			let responce = action.data.response ? action.data.response : action.data;
			return Object.assign({}, state, {
				proxyHost: getProxyHost(),
				firmName: responce.company_name,
				firmAddress: responce.FIZ_ADRESS_CITY,
				firmPhone: responce.FIZ_ADRESS_PHONE,
				firmType: parseInt(responce.company_type),
				firmPosterUrl: action.data.firmPosterUrl ? action.data.firmPosterUrl : "",
				firmLogoUrl: action.data.firmLogoUrl ? action.data.firmLogoUrl : "",
				firmOwner: responce.name,
				FirmEmail: responce.email,
				// FirmLogoImage: action.data.FirmLogoImage,
				FirmPosterIdUrl: responce.COMPANY_ID
			})
		}
		default: return state
	}
}