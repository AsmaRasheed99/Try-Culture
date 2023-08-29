import React, { useState, useEffect, useContext } from "react";
import "../styles/Calendar.css";
import axios from "axios";
import AddEvent from "../components/AddEvent";
import { UserContext } from "../UserContext";
import { useParams } from "react-router-dom";

function Calendar() {
  const { country } = useParams();
  const { EventRefresh, updateEventRefresh } = useContext(UserContext);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [filteredCurrentDate, setfilteredCurrentDate] = useState("");
  const [events, setEvents] = useState([]);
  const [DoneEvents, setDoneEvents] = useState([]);
  const [filteredEvents, setfilteredEvents] = useState([]);


  const getMonthData = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
  
    const dates = [];
    let currentDate = firstDay;

    while (currentDate <= lastDay) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const monthData = getMonthData(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const weeks = [];
  const chunkSize = 7;

  for (let i = 0; i < monthData.length; i += chunkSize) {
    weeks.push(monthData.slice(i, i + chunkSize));
  }

  const fetchEvents = async () => {
    const events = await axios.get("http://localhost:5000/api/getAllEvents");
    console.log(events.data);
    setEvents(events.data);
  };

  useEffect(() => {
    fetchEvents();
    const formated = new Date(currentDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setfilteredCurrentDate(formated);
    // setCurrentDate(formated)
  }, [EventRefresh]);
  console.log(filteredCurrentDate);

  function handleDate(date) {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const filteredEvents = events.filter((event) => {
      const formattedEventDate = new Date(event.Date).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );

      const filteredCurrentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      return (
        formattedEventDate === formattedDate &&
        new Date(filteredCurrentDate) < new Date(formattedDate)
      );
    });
    const formattedDate0 = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const filteredEvents0 = events.filter((event) => {
      const formattedEventDate0 = new Date(event.Date).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );

      const filteredCurrentDate0 = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      return (
        formattedEventDate0 === formattedDate0 &&
        new Date(filteredCurrentDate0) > new Date(formattedDate0)
      );
    });
    setfilteredEvents(filteredEvents);
    setDoneEvents(filteredEvents0);
  }

  return (
    <>
      <div className="flex w-screen justify-center P-0">
        <div id="CalCon" className="container text-center P-0 ">
          <div className="calendar light">
            <div className="calendar_header">
              <h1 className="header_title text-2xl">
                Try <span className="text-4xl text-[#1ebbce] font-bold font-serif">A</span> Culture
              </h1>
              <p className="header_copy text-xl my-5">
                Plan and join cultural events and gatherings
              </p>
            </div>

            <div className="calendar_plan  ">
              <div className="cl_plan flex justify-center">
                <button onClick={prevMonth}>&lt;</button>

                <div className="cl_title border p-4 m-2">
                  {" "}
                  <h2>
                    {currentDate.toLocaleDateString(undefined, {
                      month: "long",
                      year: "numeric",
                    })}
                  </h2>
                </div>

                <div className="cl_copy"></div>
                <button onClick={nextMonth}>&gt;</button>
              </div>
            </div>

            <table className="my-table">
              <thead>
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>
                {weeks.map((week, index) => (
                  <tr key={index}>
                    {week.map((date) => (
                      <td
                        onClick={() => {
                          handleDate(date);
                        }}
                        key={date.getTime()}
                      >
                        {date.getDate()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="calendar_events mt-10">
              <p className="ce_title">Upcoming Events</p>

              {filteredEvents.map((event, index) => (
                <div key={index} className="event_item border p-5">
                  <div className="ei_Dot dot_active" />
                  <div className="ei_Title font-bold text-lg">
                    {event.EventName}
                  </div>
                  <br></br>
                  <div className="ei_Title">
                    Organized By : {event.Organizer}
                  </div>
                  <br></br>

                  <div className="ei_Title">On : {event.Date}</div>
                  <br></br>
                  <div className="ei_Title"> At : {event.Time}</div>
                  <br></br>
                  <div className="ei_Title">{event.location}</div>
                  <br></br>
                  <div className="ei_Title">{event.Details}</div>
                  <br></br>
                </div>
              ))}
              {DoneEvents.map((event, index) => (
                <div key={index} className="event_item border  shadow-lg p-8 w-full lg:w-1/2 bg-red-100">
                  <div className="ei_Dot dot_active " />
                  <div className="ei_Title font-bold text-lg">
                    {event.EventName}
                  </div>
                  <br></br>
                  <div className="ei_Title">
                    Organized By : {event.Organizer}
                  </div>
                  <br></br>

                  <div className="ei_Title">On : {event.Date}</div>
                  <br></br>
                  <div className="ei_Title"> At : {event.Time}</div>
                  <br></br>
                  <div className="ei_Title">{event.location}</div>
                  <br></br>
                  <div className="ei_Title">{event.Details}</div>
                  <br></br>
                </div>
              ))}
            </div>
            <AddEvent country={country} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
