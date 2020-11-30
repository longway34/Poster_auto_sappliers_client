import {combineReducers} from 'redux';

import storagesReducer from './storagesReducer';
import uiReducer from './uiReducer';
import settingsReducer from './settingsReducer';
import shablonsReducer from './shablonsReducer';
import storageOrdersReducer from './storageOrdersReducer';
import shablonOrdersReducer from './shablonOrdersReducer';
import storageIngredientsReducer from './storageIngredientsReducer';
import shablonIngredientsReducer from './shablonIngredientsReducer';
import suppliersReducer from './suppliersReducer';

const rootReducer = combineReducers({
		storageOrders: storageOrdersReducer,
		shablonOrders: shablonOrdersReducer,
		storages: storagesReducer,
		suppliers: suppliersReducer,
		ui:	uiReducer,
		settings: settingsReducer,
		shablons: shablonsReducer,
		storageIngredients: storageIngredientsReducer,
		shablonIngredients: shablonIngredientsReducer,
}) 

export default rootReducer;


