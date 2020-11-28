import React from 'react'
import './EventContainer.styles.css'
import EventItem from './../eventItem/EventItem.component'
import events from './../../API/data'

function EventContainer() {
  return (
    <div className="eventContainer">
      <div className="title">
        EVENTS
      </div>
      {
        events.map(event => <EventItem key={event.id} {...event} />
        )
      }
    </div>
  )
}

export default EventContainer
