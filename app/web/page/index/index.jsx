import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'mobx-react'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Header from 'component/header'
import Alert from 'component/alert'
import Home from 'page/home'
import stores from 'store/index'
import 'styles/main.scss'

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            light: blue[300],
            main: blue[500],
            dark: blue[700],
            contrastText: '#fff'
        }
    }
})

const styles = () => ({
    container: {
        maxWidth: '1200px',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '100px',
        flexGrow: 1
    }
})

const App = withStyles(styles)(({ classes }) => (
    <Provider stores={stores}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <div>
                    <Header />
                    <div className={classes.container}>
                        <Route path="/" exact component={Home} />
                    </div>
                </div>
            </Router>
            <Alert />
        </MuiThemeProvider>
    </Provider>
))

const Index = () => {
    return EASY_ENV_IS_DEV ? <AppContainer><App /></AppContainer> : <App />
}

export default Index
