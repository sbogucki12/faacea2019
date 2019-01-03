import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers'; 

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const theme = createMuiTheme({
	typography: {
		useNextVariants: true,
	  },
	  palette: {
		primary: blue,
		secondary: {
		  main: '#4db6ac',
		},
	  },
});

ReactDOM.render(
	<Provider store={store}>
		<CssBaseline /> 
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.querySelector('#root')
);