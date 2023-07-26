import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@material-tailwind/react";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../UserContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 700,
  bgcolor: "background.paper",
  border: " solid #f2f2f2",
  boxShadow: 3,
  p: 4,
};

function AddEvent({country}) {
  const [theDate, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [EventName, setEventName] = useState("");
  const [Culture, setCulture] = useState("");
  const [Location, setLocation] = useState("");
  const [Details, setDetails] = useState("");
  const [Organizer, setOrganizer] = useState(null);
  const [userId, setUserId] = useState(null);
  const {EventRefresh, updateEventRefresh} = useContext(UserContext)
  //   console.log({
  //     Organizer,
  //     theDate,
  //     Time,
  //     EventName,
  //     Culture,
  //     Location,
  //     Details,
  //     userId,
  //   });

  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        setOrganizer(response.data.user.username);
        setUserId(response.data.user.id);
      }
    } catch (error) {
      console.error(error);
      // localStorage.removeItem("auth");
      // window.location.href = "http://localhost:3000/Login";
    }
  };
  useEffect(() => {
    fetchProtectedData();
  }, []);

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  ////////////////////
  const [currentDate, setCurrentDate] = useState(new Date());
  const getMonthData = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(
      firstDay.getFullYear(),
      firstDay.getMonth(),
      firstDay.getDate() - firstDay.getDay()
    );
    const endDate = new Date(
      lastDay.getFullYear(),
      lastDay.getMonth(),
      lastDay.getDate() + (6 - lastDay.getDay())
    );
    const dates = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
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

  function handleDate(date) {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    setDate(formattedDate);
  }

  const createNewEvent = async () => {
    try {
      const newEvent = await axios.post(
        "http://localhost:5000/api/createNewEvent",
        {
          Date: theDate,
          Time: Time,
          EventName: EventName,
          Culture: country,
          location: Location,
          Details: Details,
          Organizer: Organizer,
          userId: userId,
        }
      );
      console.log(newEvent.data);
      setOpen(false);
      updateEventRefresh(newEvent);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <Button
        className="mb-10 mt-10 border-solid border-[#0b3e45] border-2 text-[#00acc1] hover:bg-[#0b3e45] hover:text-[#ffffff]"
        variant="text"
        onClick={handleOpen}
      >
        Add Event
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="overflow-y-auto" sx={style}>
          <div className="calendar_plan ">
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
          <div className="flex flex-col border my-5 p-5">
            <label>Event Name</label>
            <Input
              onChange={(e) => setEventName(e.target.value)}
              id="name"
              value={EventName}
              type="text"
              variant="h6"
              component="h2"
              className="m-5"
            >
              Text in a modal
            </Input>{" "}
            <br></br>
            <label>Date</label>
            <Input
              id="email"
              type="email"
              onChange={(e) => setDate(e.target.value)}
              value={theDate}
              variant="h6"
              component="h2"
              className="m-5"
            >
            </Input>{" "}
            <label>Time</label>
            <Input
              id="time"
              type="time"
              onChange={(e) => setTime(e.target.value)}
              value={Time}
              variant="h6"
              component="h2"
              className="m-5"
            >
            </Input>{" "}
       
            <label>Location</label>
            <Input
              id="location"
              type="text"
              onChange={(e) => setLocation(e.target.value)}
              value={Location}
              variant="h6"
              component="h2"
              className="m-5"
            >
            </Input>{" "}
            <label
              for="Info"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Detailes
            </label>
            <textarea
              id="Info"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
              placeholder="More Details..."
              onChange={(e) => {
                setDetails(e.target.value);
              }}
              value={Details}
            ></textarea>
            <Button
              onClick={createNewEvent}
              className=" m-5 border-solid border-[#00acc1] border-2 text-[#00acc1] hover:bg-[#00acc1] hover:text-[#ffffff]"
              variant="text"
            >
              Add An Event
            </Button>
            <Button
              className="m-5 border-solid border-[#0b3e45] border-2 text-[#0b3e45] hover:bg-[#0b3e45] hover:text-[#ffffff]"
              variant="text"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default AddEvent;
