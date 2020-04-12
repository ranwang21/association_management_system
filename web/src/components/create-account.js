import React, { Component } from 'react'
import Fetch from '../utilities/fetch-datas'
import CreateAdmin from './create-admin'
import Register from '../containers/register'
import { withCookies } from 'react-cookie'
import '../styles/_create-account.scss'

const variables = require('../utilities/variables').variables

class CreateAccount extends Component {
    constructor () {
        super()
        this.state = {
            addList: null,
            actorSelected: null,
            addClick: true,
            showAddButton: true,
            showAddContainer: true,
            roles: []
        }
        this.addDiv = React.createRef()
        this.handleActorSelected = this.handleActorSelected.bind(this)
        this.handleRetour = this.handleRetour.bind(this)
        this.setRoles = this.setRoles.bind(this)
    }

    setRoles (roles) {
        this.setState({ roles: roles })
    }

    componentDidMount () {
        const role = this.getCurrentUser().role
        const list = role === variables.role.highAdmin ? this.getLangFile().addListForHighAdmin : this.getLangFile().addListForAdmin
        this.setState({ addList: [...list] })
        Fetch.role.get(this.setRoles)
    }

    getCurrentUser () {
        const currentUser = this.props.cookies.get(variables.cookies.user)
        return Fetch.decodeData(currentUser)
    }

    handleActorSelected (event, id) {
        this.setState({ actorSelected: id })
        this.addDiv.current.classList.remove('showAddDiv')
        this.addDiv.current.classList.add('hideAddDiv')
        const parentDiv = this.addDiv.current.parentElement
        parentDiv.classList.add('fullSize')
    }

    handleRetour () {
        this.addDiv.current.classList.remove('hideAddDiv')
        this.addDiv.current.classList.add('showAddDiv')
        const parentDiv = this.addDiv.current.parentElement
        parentDiv.classList.remove('fullSize')
    }

    getLangFile () { return require('../lang/' + this.props.lang + '/create-account.json') }

    buildButton (lang, actor) {
        return (
            <div key={actor.id} onClick={event => this.handleActorSelected(event, actor.id)}>
                <div />
                <div>
                    <p>{actor.label}</p>
                    {actor.label.includes('parent') && (
                        <span>{lang.required}</span>
                    )}
                </div>
            </div>
        )
    }

    switchToAddOption () {
        switch (this.state.actorSelected) {
        case variables.actors.collaborator:
            return (
                <Register lang={this.props.lang} onShowLoginForm={null} currentActor={variables.id.registerStart.check.collaborator} />
            )
        case variables.actors.parent:
            return (
                <Register lang={this.props.lang} onShowLoginForm={null} currentActor={variables.id.registerStart.check.parent} />
            )
        case variables.actors.both:
            return (
                <Register lang={this.props.lang} onShowLoginForm={null} currentActor={variables.id.registerStart.check.both} />
            )
        case variables.actors.admin:
            return (<CreateAdmin lang={this.props.lang} roles={this.state.roles} updateUsers={this.props.updateUsers} onGetBack={this.handleRetour} />)
        }
    }

    render () {
        const lang = this.getLangFile()
        return (
            <div className='create-account'>
                <div className='showAddDiv' ref={this.addDiv}>
                    <div className='choice'>
                        {this.state.addList !== null && this.state.addList.map(actor => this.buildButton(lang, actor))}
                    </div>
                    {this.state.showAddContainer && (
                        <div className='add-container'>
                            <div className='retour' onClick={this.handleRetour}>{lang.back}</div>
                            <div className='contain'>
                                {this.switchToAddOption()}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default withCookies(CreateAccount)
