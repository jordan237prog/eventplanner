import React from 'react'
import "./eventItem.styles.css"
import Chat  from "./../../assets/chat.png"
function EventItem({date, title, detail, time, address}) {

    const month = date.slice(5)
    const SuperScript = date.slice(2,4)
    const day = date.slice(0,2)
    
  return (
    <div className="eventItem">
      <div className="eventItem_date">
        <div className="dayAndsuperscript">
          <h2>{day}</h2> 
          <h2 className ="SuperScript">{ SuperScript }</h2>
          &nbsp; <span className="span"><br/></span>
        </div>
        <h2> {month}</h2>
      </div>
      <div className="eventItem_descriptionContainer">
        <div className="eventItem_descriptionContent">
          <div className="eventItem_description">
            <div className="eventItem_description_title">
              <h4> {title} </h4>
            </div>
            <div className="eventItem_description_details">
              {detail}
            </div>
          </div>
          <div className="eventItem_timeAndAddress">
            <div className="eventItem_timeAndAddress_time">
              <h4>{ time }</h4>
            </div>
            <div className="eventItem_timeAndAddress_address">
              {address}
            </div>
          </div>
        </div>
        <div className="eventItem_description_addDetails">
          <p>+ Event Details</p>
        </div>
      </div>
      <div className="messageIcon">
        <img src={Chat} alt="img"/>
      </div>
    </div>
  )
}

export default EventItem
