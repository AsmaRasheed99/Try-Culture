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
  bgcolor: "background.paper",
  border: " solid #f2f2f2",
  boxShadow: 3,
  p: 4,
};

function EditBusiness(props) {
  console.log(props.cardProps);

 
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  /////////////////////
  const [Id, setId] = useState();
  const [businessType, setBusinessType] = useState("");
  const [culture, setCulture] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [FromHours, setFromHours] = useState("");
  const [ToHours, setToHours] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [WorkDays, setWorkDays] = useState("");
  const [productImage, setProductImage] = useState(null);
  const { profileRefresh, updateProfileRefresh } = useContext(UserContext);


  const handleProductImageChange = (event) => {
    setProductImage(event.target.files[0]);
  };

  const fetchProtectedData = async () => {

    setBusinessName(props?.cardProps.businessName);
    setBusinessType(props?.cardProps.businessType);
    setCulture(props?.cardProps.culture);
    setFromHours(props?.cardProps.FromHours);
    setToHours(props?.cardProps.ToHours);
    setPhoneNumber(props?.cardProps.phoneNumber);
    setLocation(props?.cardProps.location);
    setWorkDays(props?.cardProps.WorkDays);

    setId(props?.cardProps._id);
  };

  useEffect(() => {
    if (localStorage.auth != null) {
      fetchProtectedData();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", productImage);
    formData.append("businessName", businessName);
    formData.append("businessType", businessType);
    formData.append("culture", culture);
    formData.append("FromHours", FromHours);
    formData.append("ToHours", ToHours);
    formData.append("phoneNumber", phoneNumber);
    formData.append("WorkDays", WorkDays);
    formData.append("location", location);
    console.log(productImage, businessName, businessType, culture, FromHours, ToHours, phoneNumber, WorkDays, location);
    axios
      .put(`http://localhost:5000/api/oneUserBusiness/${Id}`, formData
     )
      .then(function (response) {
        console.log(response);
        handleClose();
        updateProfileRefresh(response);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };
  return (
    <div className="overflow-y-auto ">
      <Button
        className="mb-10 border-solid border-[#0b3e45] border-2 text-[#00acc1] hover:bg-[#0b3e45] hover:text-[#ffffff]"
        variant="text"
        onClick={handleOpen}
      >
        Edit
      </Button>
      <Modal
        className="overflow-y-auto "
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col">
            <label>Business Name</label>
            <Input
              onChange={(e) => setBusinessName(e.target.value)}
              id="name"
              value={businessName}
              type="text"
              variant="h6"
              component="h2"
              className="m-5"
            >
              Text in a modal
            </Input>{" "}
            <br></br>
            <label>Content</label>
            <Input
              id="location"
              type="locatin"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              variant="h6"
              component="h2"
              className="m-5"
            >
              Text in a modal
            </Input>{" "}
            <br></br>
            <label>Phone Number</label>
            <Input
              id="tel"
              type="tel"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              variant="h6"
              component="h2"
              className="m-5"
            >
              Text in a modal
            </Input>{" "}
            <br></br>
            <label>Work Days</label>
            <Input
              id="days"
              type="text"
              onChange={(e) => setWorkDays(e.target.value)}
              value={WorkDays}
              variant="h6"
              component="h2"
              className="m-5"
            >
              Text in a modal
            </Input>{" "}
            <br></br>
            <label>From</label>
            <Input
              id="from"
              type="time"
              onChange={(e) => setFromHours(e.target.value)}
              value={FromHours}
              variant="h6"
              component="h2"
              className="m-5"
            >
              Text in a modal
            </Input>{" "}
            <br></br>
            <label>To</label>
            <Input
              id="to"
              type="time"
              onChange={(e) => setToHours(e.target.value)}
              value={ToHours}
              variant="h6"
              component="h2"
              className="m-5"
            >
              Text in a modal
            </Input>{" "}
            <label>Image</label>
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              name="image"
              onChange={handleProductImageChange}
              accept="image/*"
              required
            />
            <br></br>
            <Button
              onClick={handleSubmit}
              className=" m-5 border-solid border-[#00acc1] border-2 text-[#00acc1] hover:bg-[#00acc1] hover:text-[#ffffff]"
              variant="text"
            >
              Edit
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

export default EditBusiness;
