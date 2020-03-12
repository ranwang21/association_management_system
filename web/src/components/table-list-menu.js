import React, { Component } from 'react'
import { Button, ButtonGroup } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import '../styles/_table-list-menu.scss'

class Table extends Component {
    getLangFile () {
        return require('../lang/' + this.props.lang + '/table-list-menu.json')
    }

    buildButton (name, key) {
        return (
            <Button
                variant={this.props.selected === key ? 'contained' : 'outlined'}
                onClick={event => this.props.handleActorSelected(event, key)}
            >
                {name}
            </Button>
        )
    }

    render () {
        const lang = this.getLangFile()
        return (
            <div className='table-menu'>
                <div>
                    <ButtonGroup size='medium' color='primary' aria-label='large outlined primary button group'>
                        {this.buildButton(lang.children, 'children')}
                        {this.buildButton(lang.parent, 'parent')}
                        {this.buildButton(lang.collaborator, 'collaborator')}
                    </ButtonGroup>
                </div>
                <div className='search-container'>
                    <input className='search-input' type='text' placeholder={lang.searchbar} />
                    <SearchIcon className='search-icon' />
                </div>
            </div>
        )
    }
}

export default Table
