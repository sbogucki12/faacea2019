import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import store from './store/index';
import App from './components/App';

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