import React, { Component } from 'react'
import ChildCount from '../components/child-count'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import NextIcon from '@material-ui/icons/NavigateNextRounded'
import PreviousIcon from '@material-ui/icons/NavigateBeforeRounded'
import ChildrenInscription from '../components/forms/children-inscription'
import CollaboratorBenevoles from '../components/forms/collaborator-benevoles'
import InformationCoordonnees from '../components/forms/informations-coordonnees'
import ComplementaryInformations from '../components/forms/complementary-informations'
import { IconButton, Button, FormControl, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core'
import Fetch from '../utilities/fetch-datas'
import '../styles/_register.scss'

const types = {
    text: 'textField',
    radio: 'radioField',
    checkBox: 'checkboxField',
    date: 'dateField',
    contacts: 'contactField',
    membership: 'membershipField',
    participation: 'participationField',
    volunteering: 'volunteeringField',
    textAreaField: 'textAreaField',
    phoneField: 'phoneField'
}

const variables = require('../utilities/variables').variables
const passwordIds = require('../utilities/variables').variables.id.registerPassword
const actorsIds = require('../utilities/variables').variables.id.registerStart.check
const closeId = require('../utilities/variables').variables.id.loginRegister.showLogin
const initialiseState = {
    step: 1,
    nbrChild: 0,
    showPrev: false,
    showNext: true,
    informationsCoordonnees: {
        fields: {
            sex: 'male',

            email: 'imoneparent@gmail.com',
            address: '5217 Av. Trans-Island',
            //birthday: null,
            birthday: new Date('1975-10-06'),
            last_name: 'Toihoun',
            first_name: 'Derrick',

            contacts_personal: '(514) 820-5545',
            contacts_work: null,
            contacts_home: '(514) 363-7840',
            contacts_emergency: null,

            has_child: false,
            is_subscribed: false,

            membership: null,
            membership_becomeMember_memberCard: false,
            membership_becomeMember_discountCard: false,
            membership_becomeMember_paymentMethod: null
        },
        errors: {
            sex: false,
            birthday: false,
            last_name: false,
            first_name: false,
            email: false,
            address: false,
            contact: false,
            membership: false
        }
    },
    childrenInscription: {
        fields: {
            step1: {
                sex: null,
                last_name: null,
                first_name: null,
                //birthday: null,
                birthday: new Date('2007-02-15'),
                garde: null,
                gardeParentOption: null,
                gardeOtherOption: null,

                school: 'Ecole cool',
                schoolLevel: null,
                adlRegister: false,
                lastRedoubleLevel: null,
                registerReason: 'Améliorer les performances de mon enfant',
                evaluation: false,
                daycareServiceYesName: 'Sandrine H.',
                daycareServiceYesPhone: '(514) 666-8989',

                expiration: null,
                allergies: null,
                drug: null,
                othersInfos: null,

                autorisationPapper: false,
                autorisationInternet: false
            },
            step2: {
                sex: 'male',
                last_name: 'Toihoun',
                first_name: 'Claude',
                //birthday: null,
                birthday: new Date('2007-02-15'),
                garde: null,
                gardeParentOption: null,
                gardeOtherOption: null,

                school: 'Ecole cool',
                schoolLevel: null,
                adlRegister: false,
                lastRedoubleLevel: null,
                registerReason: 'Améliorer les performances de mon enfant',
                evaluation: false,
                daycareServiceYesName: 'Sandrine H.',
                daycareServiceYesPhone: '(514) 666-8989',

                expiration: null,
                allergies: null,
                drug: null,
                othersInfos: null,

                autorisationPapper: false,
                autorisationInternet: false
            },
            step3: {
                sex: 'female',
                last_name: 'Toihoun',
                first_name: 'Marine',
                //birthday: null,
                birthday: new Date('2007-02-15'),
                garde: null,
                gardeParentOption: null,
                gardeOtherOption: null,

                school: 'Ecole cool',
                schoolLevel: null,
                adlRegister: false,
                lastRedoubleLevel: null,
                registerReason: 'Améliorer les performances de mon enfant',
                evaluation: false,
                daycareServiceYesName: 'Sandrine H.',
                daycareServiceYesPhone: '(514) 666-8989',

                expiration: null,
                allergies: null,
                drug: null,
                othersInfos: null,

                autorisationPapper: false,
                autorisationInternet: false
            },
            step4: {
                sex: null,
                last_name: null,
                first_name: null,
                birthday: null,
                garde: null,
                gardeParentOption: null,
                gardeOtherOption: null,

                school: 'Ecole cool',
                schoolLevel: null,
                adlRegister: false,
                lastRedoubleLevel: null,
                registerReason: 'Améliorer les performances de mon enfant',
                evaluation: false,
                daycareServiceYesName: 'Sandrine H.',
                daycareServiceYesPhone: '(514) 666-8989',

                expiration: null,
                allergies: null,
                drug: null,
                othersInfos: null,

                autorisationPapper: false,
                autorisationInternet: false
            },
            step5: {
                sex: null,
                last_name: null,
                first_name: null,
                birthday: null,
                garde: null,
                gardeParentOption: null,
                gardeOtherOption: null,

                school: 'Ecole cool',
                schoolLevel: null,
                adlRegister: false,
                lastRedoubleLevel: null,
                registerReason: 'Améliorer les performances de mon enfant',
                evaluation: false,
                daycareServiceYesName: 'Sandrine H.',
                daycareServiceYesPhone: '(514) 666-8989',

                expiration: null,
                allergies: null,
                drug: null,
                othersInfos: null,

                autorisationPapper: false,
                autorisationInternet: false
            }
        },
        errors: {
            step1: {
                sex: false,
                last_name: false,
                first_name: false,
                birthday: false,
                garde: false,

                school: false,
                schoolLevel: false,
                registerReason: false
            },
            step2: {
                sex: false,
                last_name: false,
                first_name: false,
                birthday: false,
                garde: false,

                school: false,
                schoolLevel: false,
                registerReason: false
            },
            step3: {
                sex: false,
                last_name: false,
                first_name: false,
                birthday: false,
                garde: false,

                school: false,
                schoolLevel: false,
                registerReason: false
            },
            step4: {
                sex: false,
                last_name: false,
                first_name: false,
                birthday: false,
                garde: false,

                school: false,
                schoolLevel: false,
                registerReason: false
            },
            step5: {
                sex: false,
                last_name: false,
                first_name: false,
                birthday: false,
                garde: false,

                school: false,
                schoolLevel: false,
                registerReason: false
            }
        }
    },
    parent: {
        fields: {
            expectationsVar: null,
            needsVar: null,
            talents: null,
            snacks: false,
            organization: false,
            support: false,
            otherInvolvement: null
        },
        errors: {
            expectationsVar: false
        }
    },
    collaborator: {
        fields: {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            magicJournal: false,
            serveSnack: false,
            animationPreparation: false,
            accompanyWorkshop: false,
            prepareSnack: false,
            accompanyInternet: false,

            comment: 'Mon commentaire',
            experience: 'Mes experiences',
            motivation: 'Mes motivations',
            heard: 'Heard',

            availability: null
        },
        errors: {
            availability: false,
            interest: false,
            motivation: false,
            experience: false
        }
    },
    childCountError: false,
    enableSubmit: false,
    loading: false,
    password: '',
    confirmPassword: '',
    errorPassword: false,
    showPassword: false,
    successRegister: false
}

class RegisterContainer extends Component {
    constructor () {
        super()
        this.state = {
            ...initialiseState,
            roles: [],
            days: []
        }
        this.handleStepClick = this.handleStepClick.bind(this)
        this.handleSaveRegister = this.handleSaveRegister.bind(this)
        this.onParentInputChange = this.onParentInputChange.bind(this)
        this.onChildrenInputChange = this.onChildrenInputChange.bind(this)
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this)
        this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this)
        this.handleChildrenFirstCount = this.handleChildrenFirstCount.bind(this)
        this.onInformationsInputChange = this.onInformationsInputChange.bind(this)
        this.onCollaboratorInputChange = this.onCollaboratorInputChange.bind(this)
        this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this)
        this.handleRessetStepAndRedirect = this.handleRessetStepAndRedirect.bind(this)
        this.setRolesAndDays = this.setRolesAndDays.bind(this)
        this.savedUser = this.savedUser.bind(this)
    }

    componentDidMount(){
        Fetch.getRolesAndDays(this.setRolesAndDays)
    }

    getLangFile () { return require('../lang/' + this.props.lang + '/register.json') }

    //#region Functions To check Errors By Step

        stepInformationsHasErrors () {
            const fields = this.state.informationsCoordonnees.fields
            let contactsError = true
            if ((fields.contacts_personal !== null && fields.contacts_personal.replace(/\u2000/gi, '').length === 14) ||
            (fields.contacts_home !== null && fields.contacts_home.replace(/\u2000/gi, '').length === 14) ||
            (fields.contacts_work !== null && fields.contacts_work.replace(/\u2000/gi, '').length === 14) ||
            (fields.contacts_emergency !== null && fields.contacts_emergency.replace(/\u2000/gi, '').length === 14)) {
                contactsError = false
            }

            const newErrors = {
                sex: fields.sex === null,
                birthday: fields.birthday === null,
                last_name: fields.last_name === null,
                first_name: fields.first_name === null,
                address: fields.address === null,
                email: ((fields.email === null) || !Fetch.validateEmail(fields.email)),
                membership: fields.membership === null,
                contacts: contactsError
            }
            this.setState({
                informationsCoordonnees: {
                    ...this.state.informationsCoordonnees,
                    errors: {
                        ...this.state.informationsCoordonnees.errors,
                        ...newErrors
                    }
                }
            })
            const value = Object.values(newErrors).filter(val => val === true)
            return value.length !== 0
        }

        stepChildrenFirstHasErrors () {
            if (this.state.nbrChild === 0) {
                this.setState({ childCountError: true })
                setTimeout(() => { this.setState({ childCountError: false }) }, 1500)
                return true
            } else return false
        }

        stepChildrenHasErrors () {
            const currentStep = this.state.step
            const fields = this.state.childrenInscription.fields['step' + (currentStep - 2)]
            const newErrors = {
                sex: fields.sex === null,
                last_name: fields.last_name === null,
                first_name: fields.first_name === null,
                birthday: fields.birthday === null,
                garde: (fields.garde === null ||
                    ((fields.garde === 'gardeMother' || fields.garde === 'gardeFather') && fields.gardeParentOption === null)),

                school: fields.school === null,
                schoolLevel: fields.schoolLevel === null,
                registerReason: fields.registerReason === null
            }
            this.setState(state => {
                const oldInformations = state.childrenInscription
                oldInformations.errors['step' + (currentStep - 2)] = newErrors
                return {
                    childrenInscription: oldInformations
                }
            })
            const value = Object.values(newErrors).filter(val => val === true)
            return value.length !== 0
        }

        stepParentHasErrors () {
            const fields = this.state.parent.fields
            const newErrors = {
                expectationsVar: fields.expectationsVar === null
            }
            this.setState({
                parent: {
                    ...this.state.parent,
                    errors: {
                        ...this.state.parent.errors,
                        ...newErrors
                    }
                }
            })
            const value = Object.values(newErrors).filter(val => val === true)
            return value.length !== 0
        }

        stepCollaboratorHasErrors () {
            const fields = this.state.collaborator.fields
            const newErrors = {
                availability: (!fields.monday && !fields.tuesday && !fields.wednesday && !fields.thursday),
                interest: (!fields.magicJournal && !fields.serveSnack && !fields.animationPreparation &&
                            !fields.accompanyWorkshop && !fields.prepareSnack && !fields.accompanyInternet),
                motivation: fields.motivation === null,
                experience: fields.experience === null
            }
            const arrDays = []
            fields.monday && arrDays.push(this.state.days.filter(day => day.title === 'lundi')[0]._id)
            fields.tuesday && arrDays.push(this.state.days.filter(day => day.title === 'mardi')[0]._id)
            fields.wednesday && arrDays.push(this.state.days.filter(day => day.title === 'mercredi')[0]._id)
            fields.thursday && arrDays.push(this.state.days.filter(day => day.title === 'jeudi')[0]._id)

            this.setState({
                collaborator: {
                    ...this.state.collaborator,
                    fields:{
                        ...this.state.collaborator.fields,
                        availability: arrDays
                    },
                    errors: {
                        ...this.state.collaborator.errors,
                        ...newErrors
                    }
                }
            })
            const value = Object.values(newErrors).filter(val => val === true)
            return value.length !== 0
        }

    //#endregion

    //#region Functions Events

    //#region Forms Input Change

        onInformationsInputChange (event, name, type) {
            let newValue = null
            if (type === types.date) {
                newValue = event._d
            } else if (type === types.checkBox) {
                newValue = event.target.checked
            } else {
                newValue = event.target.value === '' ? null : event.target.value
            }

            this.setState(state => {
                const oldInformations = state.informationsCoordonnees
                oldInformations.fields[name] = newValue
                if (newValue !== null && oldInformations.errors[name]) oldInformations.errors[name] = false
                return {
                    informationsCoordonnees: oldInformations
                }
            })
        }

        onChildrenInputChange (event, name, type) {
            let newValue = null
            if (type === types.date) {
                newValue = event._d
            } else if (type === types.checkBox) {
                newValue = event.target.checked
            } else {
                newValue = event.target.value === '' ? null : event.target.value
            }

            this.setState(state => {
                const oldInformations = state.childrenInscription
                const currentStep = state.step - 2
                oldInformations.fields['step' + currentStep][name] = newValue
                if (newValue !== null && oldInformations.errors['step' + currentStep][name]) oldInformations.errors['step' + currentStep][name] = false
                return {
                    childrenInscription: oldInformations
                }
            })
        }

        onParentInputChange (event, name, type) {
            let newValue = null
            if (type === types.checkBox) {
                newValue = event.target.checked
            } else {
                newValue = event.target.value === '' ? null : event.target.value
            }

            this.setState(state => {
                const oldInformations = state.parent
                oldInformations.fields[name] = newValue
                if (newValue !== null && oldInformations.errors[name]) oldInformations.errors[name] = false
                return {
                    parent: oldInformations
                }
            })
        }

        onCollaboratorInputChange (event, name, type) {
            let newValue = null
            if (type === types.checkBox) {
                newValue = event.target.checked
            } else {
                newValue = event.target.value === '' ? null : event.target.value
            }

            this.setState(state => {
                const oldInformations = state.collaborator
                oldInformations.fields[name] = newValue
                if (newValue !== null && oldInformations.errors[name]) oldInformations.errors[name] = false
                return {
                    collaborator: oldInformations
                }
            })
        }

    //#endregion

        handleChildrenFirstCount (event, newValue) {
            this.setState({ nbrChild: newValue })
        }

        handleStepClick (event, maxStep) {
            let currentStep = this.state.step
            const currentElement = event.target.tagName === 'path' ? event.target.parentElement : event.target
            if (currentElement.id === 'prev') {
                this.setState({
                    step: currentStep > 1 ? --currentStep : 1,
                    showPrev: currentStep > 1,
                    showNext: true
                })
            } else if (currentElement.id === 'next') {
                if(currentStep <= maxStep){
                    !this[this.getFunctionErrorName(maxStep)]() && (
                        this.setState({
                            step: ++currentStep,
                            showPrev: true,
                            showNext: currentStep < maxStep
                        })
                    )
                }else{
                    this.setState({
                        step: maxStep,
                        showPrev: true,
                        showNext: false
                    })
                }
            }
        }

        handlePasswordInputChange(event, fieldsName) {
            this.setState({[fieldsName]: event.target.value})
        }

        handleClickShowPassword(){
            this.setState({ showPassword: !this.state.showPassword })
        }

        handleMouseDownPassword(event){
            event.preventDefault()
        }

        handleRessetStepAndRedirect () {
            this.setState({
                ...initialiseState
            })
            this.props.onShowLoginForm()
        }

        handleSaveRegister () {
            if((this.state.password !== '' && this.state.confirmPassword !== '') && (this.state.password === this.state.confirmPassword)){
                this.setState({errorPassword: false, successRegister: true})
            }else{
                this.setState({errorPassword: true, successRegister: false})
            }
            let params = null
            let role = ''
            switch (this.props.currentActor) {
                case actorsIds.parent:
                    params = {...this.state.informationsCoordonnees.fields, ...this.state.parent.fields}
                    role = 'parent'
                    break;
                case actorsIds.collaborator:
                    params = {...this.state.informationsCoordonnees.fields, ...this.state.collaborator.fields}
                    role = 'collaborater'
                    break;
                case actorsIds.both:
                    params = {...this.state.informationsCoordonnees.fields, ...this.state.parent.fields, ...this.state.collaborator.fields}
                    role = 'collab_parent'
                    break;
            }
            const user = this.getUserToSave(params, this.state.roles, role)
            const userLogin = {
                id_user: null,
                email: this.state.informationsCoordonnees.fields.email,
                password: 'abc123...',
                is_active: false
            }
            Fetch.registerSaveUser(user, userLogin, this.savedUser)
            console.log(user)
        }

        savedUser(success, idUser){
            console.log('success => ', success)
            console.log('idUser => ', idUser)
            const nbrChild = this.state.nbrChild
            if (this.props.currentActor !== actorsIds.collaborator) {
                const childRole = 'children'
                const childFields = this.state.childrenInscription.fields
                const child = { child1 : null, child2 : null, child3 : null, child4 : null, child5 : null }

                child.child1 = nbrChild >= 1 ? this.getUserToSave({...childFields.step1}, this.state.roles, childRole) : null
                child.child2 = nbrChild >= 2 ? this.getUserToSave({...childFields.step2}, this.state.roles, childRole) : null
                child.child3 = nbrChild >= 3 ? this.getUserToSave({...childFields.step3}, this.state.roles, childRole) : null
                child.child4 = nbrChild >= 4 ? this.getUserToSave({...childFields.step4}, this.state.roles, childRole) : null
                child.child5 = nbrChild === 5 ? this.getUserToSave({...childFields.step5}, this.state.roles, childRole) : null

                const childrens = Object.values(child).filter(x => x !== null)
                console.log(childrens)
                Fetch.saveChildren(childrens, idUser, this.saveChildren)
            }
        }

        saveChildren(success){
            console.log('children save')
            console.log(success)
        }

    //#endregion

    //#region Utilities

        getMaxStep () {
            switch (this.props.currentActor) {
            case actorsIds.collaborator:
                return 3
            case actorsIds.parent:
                return this.state.nbrChild + 4
            case actorsIds.both:
                return this.state.nbrChild + 5
            default:
                return 0
            }
        }

        getFunctionErrorName (maxStep) {
            let funcName = ''
            if (this.state.step <= 1) {
                funcName = 'Informations'
            } else {
                if (this.props.currentActor === actorsIds.collaborator) {
                    funcName = 'Collaborator'
                } else if (this.props.currentActor === actorsIds.parent) {
                    funcName = this.state.step <= 2 ? 'ChildrenFirst' : (
                        this.state.step < (maxStep - 1) ? 'Children' : 'Parent'
                    )
                } else {
                    funcName = this.state.step <= 2 ? 'ChildrenFirst' : (
                        this.state.step < (maxStep - 2) ? 'Children' : (
                            this.state.step < (maxStep - 1) ? 'Parent' : 'Collaborator'
                        )
                    )
                }
            }
            return 'step' + funcName + 'HasErrors'
        }

        buildPasswordFields (lang, name) {
            return (
                <FormControl variant="outlined">
                    <InputLabel>{lang[name].label}</InputLabel>
                    <OutlinedInput
                        label={lang[name].label}
                        error={this.state.errorPassword}
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state[name]}
                        onChange={event => this.handlePasswordInputChange(event, name)}
                        endAdornment={
                            <InputAdornment position="end">
                            <IconButton
                                onClick={this.handleClickShowPassword}
                                onMouseDown={this.handleMouseDownPassword}
                                edge="end"
                            >
                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            )
        }

        getUserToSave (fields, roles, roleTitle) {
            const templateUser = require('../utilities/variables').variables.templateUser
            const findRole = roles.filter(role => role.title === roleTitle)

            const user = {
                ...templateUser,
                id_role: findRole[0]._id,
                first_name: fields.first_name,
                last_name: fields.last_name,
                sex: fields.sex,
                birthday: (fields.birthday && fields.birthday !== null) ? (fields.birthday.getFullYear() + '/' + (fields.birthday.getMonth() + 1) + '/' + fields.birthday.getDate()) : null,
            }
            if (roleTitle !== 'children') {
                user.address = fields.address,
                user.has_child = fields.has_child,
                user.is_subscribed = fields.is_subscribed,
                user.contact = [{
                    personal: fields.contacts_personal,
                    work: fields.contacts_work,
                    home: fields.contacts_home,
                    emergency: fields.contacts_emergency
                }]
                const membershipStatus = (fields.membership === 'membership_becomeMember' || fields.membership === 'membership_alreadyMember') ? true : false
                user.membership = [{
                    status: membershipStatus,
                    payement_method: fields.membership_becomeMember_paymentMethod,
                    member_card: fields.membership_becomeMember_memberCard,
                    discount_card: fields.membership_becomeMember_discountCard
                }]
                if(roleTitle === 'parent' || roleTitle === 'collab_parent') {
                    user.expectation = fields.expectationsVar,
                    user.need = fields.needsVar,

                    user.involvement[0].response = fields.talents,
                    user.involvement[1].response = fields.snacks,
                    user.involvement[2].response = fields.organization,
                    user.involvement[3].response = fields.support,
                    user.involvement[4].response = fields.otherInvolvement
                }
                if(roleTitle === 'collaborater' || roleTitle === 'collab_parent') {
                    user.comment = fields.comment,
                    user.experience = fields.experience,
                    user.motivation = fields.motivation,
                    user.availability = fields.availability,
                    user.question[3].response = fields.heard,

                    user.interest[0].response = fields.magicJournal,
                    user.interest[1].response = fields.serveSnack,
                    user.interest[2].response = fields.animationPreparation,
                    user.interest[3].response = fields.accompanyWorkshop,
                    user.interest[4].response = fields.prepareSnack,
                    user.interest[5].response = fields.accompanyInternet
                }
            } else {
                user.school_info = [{
                    name: fields.school,
                    level: fields.schoolLevel,
                    adl: fields.adlRegister, // TRUE / FALSE
                    redouble: fields.lastRedoubleLevel,
                    evaluate: fields.evaluation,
                    reason: fields.registerReason,
                    educator_name: fields.daycareServiceYesName,
                    educator_phone: fields.daycareServiceYesPhone,
                }],
                user.medical_info = [{
                    ramq: (fields.expiration && fields.expiration !== null) ? ((fields.expiration.getMonth() + 1) + '/' + fields.expiration.getFullYear()) : null,
                    allergies: fields.allergies,
                    drugs: fields.drug,
                    other_info: fields.othersInfos
                }],
                user.authorization = [{
                    paper: fields.autorisationPapper,
                    internet: fields.autorisationInternet
                }],
                user.question[0].response = fields.garde
                user.question[1].response = fields.gardeParentOption
                user.question[2].response = fields.gardeOtherOption
            }
            return user
        }

    //#endregion

    testRegister(){
        /*
        let role = ''

        switch (this.props.currentActor) {
            case actorsIds.collaborator:
                role = 'collaborater'
                break
            case actorsIds.parent:
                role = 'collaborater'
                break
            case actorsIds.both:
                role = 'collab_parent'
                break
            }
        Fetch.getIdRole('', 'super_admin', this.funcReg)
        */
    }

    setRolesAndDays(roles, days){
        const newDays = days.filter(day => day.value <= 4)
        this.setState({roles: roles, days: newDays})
    }

    render () {
        const lang = this.getLangFile()
        const max = this.getMaxStep()
        return (
            <div className={this.state.successRegister ? 'register-container registered' : 'register-container'}>
                {this.props.onShowLoginForm !== null && (
                    <div className='div-back' id={closeId} onClick={this.handleRessetStepAndRedirect}>{lang.back}</div>
                )}
                <div className='form-container'>
                    {!this.state.successRegister && (
                        <IconButton className={!this.state.showPrev ? 'disable-level-button' : ''} onClick={event => this.handleStepClick(event, max)}>
                            <PreviousIcon id='prev' fontSize='large' />
                        </IconButton>
                    )}
                    <div className='forms'>
                                {this.state.step === 1 && (
                                    <div>
                                        <InformationCoordonnees
                                            lang={this.props.lang}
                                            fields={this.state.informationsCoordonnees.fields}
                                            errors={this.state.informationsCoordonnees.errors}
                                            inputEvent={this.onInformationsInputChange}
                                        />
                                    </div>
                                )}
                                {(this.props.currentActor !== actorsIds.collaborator && this.state.nbrChild >= 0 && this.state.step === 2) && (
                                    <div>
                                        <ChildCount
                                            lang={this.props.lang}
                                            childCount={this.state.nbrChild}
                                            onChildCount={this.handleChildrenFirstCount}
                                            childCountError={this.state.childCountError}
                                        />
                                    </div>
                                )}
                                {[...Array(this.state.nbrChild).keys()].map(x => (
                                    this.props.currentActor !== actorsIds.collaborator && this.state.nbrChild >= (x + 1) && this.state.step === (x + 3) && (
                                        (<div key={this.state.nbrChild + x}>
                                            <ChildrenInscription
                                                lang={this.props.lang}
                                                nbre={this.state.step - 2}
                                                nbreChild={this.state.nbrChild}
                                                fields={this.state.childrenInscription.fields['step' + (x + 1)]}
                                                errors={this.state.childrenInscription.errors['step' + (x + 1)]}
                                                inputEvent={this.onChildrenInputChange}
                                            />
                                        </div>
                                    ))
                                ))}
                                {((this.props.currentActor === actorsIds.parent && this.state.step === (max - 1)) ||
                                    (this.props.currentActor === actorsIds.both && this.state.step === (max - 2))) && (
                                        <div>
                                            <ComplementaryInformations
                                                lang={this.props.lang}
                                                fields={this.state.parent.fields}
                                                errors={this.state.parent.errors}
                                                inputEvent={this.onParentInputChange}
                                            />
                                        </div>
                                )}
                                {((this.props.currentActor === actorsIds.collaborator && this.state.step === (max - 1)) ||
                                    (this.props.currentActor === actorsIds.both && this.state.step === (max - 1))) && (
                                        <div>
                                            <CollaboratorBenevoles
                                                lang={this.props.lang}
                                                fields={this.state.collaborator.fields}
                                                errors={this.state.collaborator.errors}
                                                inputEvent={this.onCollaboratorInputChange}
                                            />
                                        </div>
                                )}
                            {this.state.step === max && (
                                <div className='final-div'>
                                    {!this.state.successRegister
                                    ? (
                                        <div className='div-before-success'>
                                            <div className='fields'>
                                                <p>{lang.finalStep.registerPassword.label}</p>
                                                {this.state.errorPassword && (<p className='p-error'>{lang.finalStep.registerPassword.labelError}</p>)}
                                                {this.buildPasswordFields(lang.finalStep.registerPassword, 'password')}
                                                {this.buildPasswordFields(lang.finalStep.registerPassword, 'confirmPassword')}
                                                <Button
                                                    variant='outlined'
                                                    onClick={this.handleSaveRegister}
                                                >
                                                    {lang.finalStep.registerPassword.save}
                                                </Button>
                                            </div>
                                        </div>
                                    )
                                    : (
                                        <div className='div-success'>
                                            <div>
                                                <p>Enregistrement effectué avec succès </p>
                                                <DoneAllIcon className='svg-done' />
                                            </div>
                                            <p>Votre inscription est en attente de validation.
                                                Vous recevrez un message de confirmation dans un bref delai.</p>
                                            <p>Merci pour l'intérêt que vous portez à la Maison d'Aurore.</p>
                                        </div>
                                    )}
                                </div>
                            )}
                    </div>
                    {!this.state.successRegister && (
                    <IconButton className={!this.state.showNext ? 'disable-level-button' : ''} onClick={event => this.handleStepClick(event, max)}>
                        <NextIcon id='next' fontSize='large' />
                    </IconButton>
                    )}
                </div>
            </div>
        )
    }
}

export default RegisterContainer
