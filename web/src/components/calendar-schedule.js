import React, { Component } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '../styles/_calendar.scss'

class Schedule extends Component {
    render () {
        return (
            <div className='calendar'>
                <Calendar
                    onChange={this.props.handleDateChange}
                    value={this.props.date}
                    onClick
                    locale={this.props.lang}
                />
            </div>
        )
    }
};

export default Schedule