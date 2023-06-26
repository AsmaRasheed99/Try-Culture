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
      const [img ,setImg] = useState("")
      const [title, setTitle] = useState("");
      const [content, setContent] = useState("");
      const [blogData , setBlogData] = useState({});
  


      const onChange = (e) => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file);
        console.log(img);
      };
      const onLoad = (fileString) => {
        setImg(fileString);
      };
      const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          onLoad(reader.result);
        };
      };







      const fetchProtectedData = async () => {
        
       let x =props?.blogProps.image

        
        setContent(props?.blogProps.content)
        setTitle(props?.blogProps.title)
        setId(props?.blogProps._id)
        setImg(x)
      };
    
    
    useEffect(()=>{
      if(localStorage.auth != null){   
        fetchProtectedData()
      }
    },[])
    
      
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log( img )

      axios
        .put(`http://localhost:5000/api/oneUserBlogs/${Id}`, {
          title: title,
           image: img,
          content: content,
        })
        .then(function (response) {
          console.log(response);
          handleClose()
          updateProfileRefresh(response)
          
        })
        .catch(function (error) {
          console.log(error);
        });




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
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              placeholder="Table Image"
              name="guest_num"
              onChange={(e) => {
                onChange(e);
              }}
              accept="image/*"
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
  )
}

export default EditBlog