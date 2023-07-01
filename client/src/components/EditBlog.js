import  React from "react";
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

function EditBlog(props) {
    const { profileRefresh, updateProfileRefresh } = useContext(UserContext);
    console.log( props?.blogProps._id)
    const navigate=useNavigate()
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
      /////////////////////
      const [Id ,setId] = useState()
      // const [img ,setImg] = useState("")
      const [title, setTitle] = useState("");
      const [content, setContent] = useState("");
      const [blogData , setBlogData] = useState({});
  

      const [productImage, setProductImage] = useState(null);

      const handleProductImageChange = (event) => {
        setProductImage(event.target.files[0]);
      };
      // const onChange = (e) => {
      //   const files = e.target.files;
      //   const file = files[0];
      //   getBase64(file);
      //   console.log(img);
      // };
      // const onLoad = (fileString) => {
      //   setImg(fileString);
      // };
      // const getBase64 = (file) => {
      //   let reader = new FileReader();
      //   reader.readAsDataURL(file);
      //   reader.onload = () => {
      //     onLoad(reader.result);
      //   };
      // };







      const fetchProtectedData = async () => {
        
      //  let x =props?.blogProps.image

        
        setContent(props?.blogProps.content)
        setTitle(props?.blogProps.title)
        setId(props?.blogProps._id)
        // setImg(x)
      };
    
    
    useEffect(()=>{
      if(localStorage.auth != null){   
        fetchProtectedData()
      }
    },[])
    
      
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", productImage);
      formData.append("title", title);
      formData.append("content",content);
   
      axios
        .put(`http://localhost:5000/api/oneUserBlogs/${Id}`, formData)
        .then(function (response) {
          console.log(response);
          handleClose()
          updateProfileRefresh(response)
          setOpen(false);
        })
        .catch(function (error) {
          console.log(error);
        });

    }

    const handleDelete = async () => {
      try {
       const response = await axios.delete(`http://localhost:5000/api/deleteBlog/${Id}`);
        updateProfileRefresh(response)
        setOpen(false);
        handleClose()
      } catch (error) {
        console.error(error.message)
      }

    }
  return (
    <div>
    <Button
      className="mb-10 border-solid border-[#0b3e45] border-2 text-[#00acc1] hover:bg-[#0b3e45] hover:text-[#ffffff]"
      variant="text"
      onClick={handleOpen}
    >
      Edit
    </Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="flex flex-col">
          <label >
            Title
          </label>
          <Input
            onChange={(e) => setTitle(e.target.value)}
            id="name"
            value={title}
            type="text"
            variant="h6"
            component="h2"
            className="m-5"
          >
            Text in a modal
          </Input>{" "}
          <br></br>
          <label >
            Content
          </label>
          <Input
            id="email"
            type="email"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            variant="h6"
            component="h2"
            className="m-5"
          >
            Text in a modal
          </Input>{" "}

          <label >
            Image
          </label>

          <input
            className="file-upload-input mx-auto"
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
          <Button
            className="m-5 border-solid border-red-800 border-2 text-red-800 hover:bg-red-800 hover:text-[#ffffff]"
            variant="text"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </Box>
    </Modal>
  </div>
  )
}

export default EditBlog