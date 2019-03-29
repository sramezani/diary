import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';

import store from '@redux/store';
import AppNavigation from '@navigation/';
import { Action } from '@lib/';

const persistor = persistStore(store);


// Wrap App in Redux provider (makes Redux available to all sub-components)
class AppContainer extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<AppNavigation
						ref={(navigatorRef) => {
							Action.setTopLevelNavigator(navigatorRef);
						}}
					/>
				</PersistGate>
			</Provider>
		);
	}
}
export default AppContainer;
