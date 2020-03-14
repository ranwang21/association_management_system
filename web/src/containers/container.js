import React, { Component } from 'react'
import Cookie from 'react-cookies'
import '../styles/_main.scss'
import Header from '../components/header'
import Main from './main'
import Footer from '../components/footer'
import Loading from '../components/loading'
import Snack from '../components/snack'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgba(0, 0, 0, 0.8)'
        },
        secondary: {
            main: 'rgb(1, 144, 147)'
        }
    }
})
class MainContainer extends Component {
    constructor () {
        super()
        this.state = {
            lang: 'fr',
            isConnected: false,
            userRole: null,
            showSnack: false,
            showLoading: false
        }
        this.onLangChanged = this.onLangChanged.bind(this)
        this.onLogInClick = this.onLogInClick.bind(this)
        this.onLogOutClick = this.onLogOutClick.bind(this)
        this.handleCloseSnack = this.handleCloseSnack.bind(this)
    }

    componentDidMount () {
        this.setState({
            isConnected: Cookie.load('isConnected'),
            userRole: Cookie.load('userRole')
        })
    }

    getLangFile () {
        return require('../lang/' + this.state.lang + '/container.json')
    }

    onLangChanged (event) {
        this.setState({
            lang: event.target.value
        })
    }

    onLogOutClick (event) {
        console.log('Deconnexion .. .. ..')
        this.setState({
            userRole: null,
            isConnected: false,
            showSnack: true
        })

        Cookie.remove('isConnected', { path: '/' })
        Cookie.remove('userRole', { path: '/' })
    }

    onLogInClick (event, role) {
        console.log('Connexion .. .. ..')
        this.setState({
            userRole: role,
            isConnected: true,
            showSnack: true,
            showLoading: true
        })
        this.showConnectedLoading()

        Cookie.save('isConnected', true, { path: '/' })
        Cookie.save('userRole', role, { path: '/' })
    }

    handleCloseSnack (event) {
        this.setState({
            showSnack: false
        })
    }

    showConnectedLoading () {
        setTimeout(() => {
            this.setState({
                showLoading: false
            })
        }, 6000)
    }

    render () {
        const lang = this.state.lang
        const langFile = this.getLangFile()
        const messageSnack = this.state.isConnected ? langFile.logInSnack : langFile.logOutSnack
        const userRole = this.state.userRole
        return (
            <>
                <ThemeProvider theme={theme}>
                    <Header
                        lang={lang}
                        handleLangChangedClick={this.onLangChanged}
                    />
                    {this.state.showLoading && <Loading lang={lang} />}
                    <Main
                        lang={lang}
                        userRole={userRole}
                        isConnected={this.state.isConnected}
                        onhandleLogInClick={this.onLogInClick}
                        onhandleLogOutClick={this.onLogOutClick}
                    />
                    <Footer lang={lang} />
                    <Snack
                        show={this.state.showSnack}
                        message={messageSnack}
                        onClose={this.handleCloseSnack}
                        severity='success'
                    />
                </ThemeProvider>
            </>
        )
    }
}
export default MainContainer
