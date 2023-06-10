import React from 'react'
import '../components/Calendar.css'
import {
  FaPlusCircle
} from "react-icons/fa";

function Calendar() {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <div id='CalCon' className="container">
    <div className="calendar light">
      <div className="calendar_header">
        <h1 className="header_title">
          Try{" "}
          <span
            style={{
              fontSize: "5rem",
              color: "#1ebbce",
              fontFamily: "PT serif",
              fontWeight: "bold"
            }}
          >
            A
          </span>{" "}
          Culture
        </h1>
        <p className="header_copy">
          {" "}
          Plan and join cultural events and gatherings
        </p>
      </div>
      <div className="calendar_plan">
        <div className="cl_plan">
          <div className="cl_title">Today</div>
          <div className="cl_copy">4th May 2023</div>
          <div className="cl_add">
            <FaPlusCircle/>
          </div>
        </div>
      </div>
      <div className="calendar_events">
        <p className="ce_title">Upcoming Events</p>
        <div className="event_item">
          <div className="ei_Dot dot_active" />
          <div className="ei_Title">10:30 am</div>
          <div className="ei_Copy">Lunch with the community</div>
        </div>
        <div className="event_item">
          <div className="ei_Dot" />
          <div className="ei_Title">12:00 pm</div>
          <div className="ei_Copy">Lunch with the community</div>
        </div>
        <div className="event_item">
          <div className="ei_Dot" />
          <div className="ei_Title">13:00 pm</div>
          <div className="ei_Copy">
            Lunch with the community
            <br />
          </div>
        </div>
        <div className="event_item">
          <div className="ei_Dot" />
          <div className="ei_Title">14:30 am</div>
          <div className="ei_Copy">Lunch with the community</div>
        </div>
        <div className="event_item">
          <div className="ei_Dot" />
          <div className="ei_Title">15:30 am</div>
          <div className="ei_Copy">Add some more events to the calendar</div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Calendar