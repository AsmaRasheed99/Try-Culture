import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import EditProfile from "../components/EditProfile";
import { UserContext } from "../UserContext";
import EditBlog from "../components/EditBlog";
import EditBusiness from "../components/EditBusiness";
import { Link } from "react-router-dom";
function Profile() {
  const { profileRefresh, updateProfileRefresh } = useContext(UserContext);

  const [userId, setUserId] = useState();
  const [userRole, setUserRole] = useState();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [user, setUser] = useState([]);
  const [UserBlogs, setUserBlogs] = useState([]);
  const [UserServices, setUserServices] = useState([]);
  const [img, setImage] = useState("");

  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        setUserId(response.data.user.id);
   

        axios
          .get(`http://localhost:5000/api/users/${response.data.user.id}`)
          .then((response) => {
            // setUserId(response.data.user.id);
            setUserName(response.data[0].firstName);
            setUserEmail(response.data[0].email);
            setUserRole(response.data[0].role);
            setUser(response.data[0]);
            setImage(response.data[0].image);
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });

        let id000 = response.data.user.id;
        try {
          const BlogsResponse = await axios.get(
            `http://localhost:5000/api/allUserBlogs/${id000}`
          );
          console.log(BlogsResponse.data);
          setUserBlogs(BlogsResponse.data);
        } catch (error) {
          console.error("Error retrieving data:", error);
        }

        try {
          const ServicesResponse = await axios.get(
            `http://localhost:5000/api/allUserServices/${id000}`
          );
          console.log(ServicesResponse.data);
          setUserServices(ServicesResponse.data);
        } catch (error) {
          console.error(error.message);
        }
      }
    } catch (error) {
      console.error(error);
      // localStorage.removeItem("auth");
      // window.location.href = "http://localhost:3000/Login";
    } finally {
      console.log(false);
    }
  };

  useEffect(() => {
    if (localStorage.auth) {
      fetchProtectedData();
    }
  }, [profileRefresh]);

  console.log(img);

  
  return (
    <div>
      <>
        {/* component */}
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
        <main className="profile-page">
          <section className="relative block h-500-px bg-cyan-600">
            {/* <div
          className="absolute top-0 w-full h-full bg-center bg-contain"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/3638731/pexels-photo-3638731.jpeg?auto=compress&cs=tinysrgb&w=600")'
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          />
        </div> */}
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0px)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x={0}
                y={0}
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="relative py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                      <img className="shadow-xl rounded-full h-40 w-96 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" 
                      src={`http://localhost:5000/${img}`}
                      />

                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        {localStorage.getItem("auth") !== null ? (
                          <EditProfile />
                        ) : (
                          <Link to="/Login">
                            <Button variant="gradient" size="lg" color="cyan">
                              Log In
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {UserBlogs.length}
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Blogs
                          </span>
                        </div>
                        {userRole == 2 && (
                          <div className="mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                              {UserServices.length}
                            </span>
                            <span className="text-sm text-blueGray-400">
                              Services
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                      {userName}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      <i className="fas fa-envelope mr-2 text-lg text-blueGray-400" />
                      {userEmail}
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 ">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          My Blogs
                        </p>
                        <section className="lg:-w-96 md:w-2/3 sm:min-w-full flex flex-col items-center ">
                          {UserBlogs.map((blog) => (
                            <article
                              className="flex flex-col shadow my-4 text-start"
                              key={blog._id}
                            >
                              <div className="hover:opacity-75 ">
                                <img src={`http://localhost:5000/${blog.image}`}/>
                              </div>
                              <div className="bg-white flex flex-col justify-start p-6">
                                <p className="text-3xl font-bold hover:text-gray-700 pb-4">
                                  {blog.title}
                                </p>

                                <p className="text-sm pb-3">
                                  By{" "}
                                  <span className="font-semibold hover:text-gray-800">
                                    {" "}
                                    {blog.author}
                                  </span>
                                  <br></br>
                                  Published on {blog.date}
                                </p>
                                <hr></hr>
                                {/* <p className="uppercase text-gray-800 hover:text-black pt-3">
                                  {blog.content}
                                </p> */}
                                <div className="w-full overflow-hidden">
                                  <p className="whitespace-normal h-auto w-52">
                                    {blog.content}
                                  </p>
                                </div>
                              </div>
                              <EditBlog id={blog._id} blogProps={blog} />
                            </article>
                          ))}
                        </section>
                      </div>
                    </div>
                  </div>
                  {userRole == 2 && (
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4">
                          <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                            My Business
                          </p>
                          <div className="flex flex-row justify-center flex-wrap gap-20 mt-20 text-start">
                            {UserServices.map((card) => (
                              <Card className="w-full max-w-[26rem] shadow-lg">
                                <CardHeader floated={false} color="blue-gray">
                                  <img
                                    src={`http://localhost:5000/${card.businessImage}`}

                                    alt="ui/ux review check"
                                  />
                                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                                </CardHeader>
                                <CardBody>
                                  <div className="mb-3 flex items-center justify-between">
                                    <Typography
                                      variant="h5"
                                      color="blue-gray"
                                      className=" font-bold"
                                    >
                                      {card.businessName}
                                    </Typography>
                                  </div>
                                  <Typography color="gray">
                                    <span className="text-lg font-semibold">
                                      {" "}
                                      Work Days :
                                    </span>
                                    {card.WorkDays}
                                  </Typography>
                                  <Typography color="gray">
                                    <span className="text-lg font-semibold">
                                      {" "}
                                      From :
                                    </span>
                                    {card.FromHours} <br></br>{" "}
                                    <span className="text-lg font-semibold">
                                      To{" "}
                                    </span>{" "}
                                    {card.ToHours}
                                  </Typography>
                                  <Typography color="gray">
                                    <span className="text-lg font-semibold">
                                      {" "}
                                      Phone Number :
                                    </span>
                                    {card.phoneNumber}
                                  </Typography>
                                  <Typography color="gray">
                                    <span className="text-lg font-semibold">
                                      {" "}
                                      Location :
                                    </span>
                                    {card.location}
                                  </Typography>
                                </CardBody>
                                <CardFooter className="pt-3">
                                  <EditBusiness
                                    id={card._id}
                                    cardProps={card}
                                  />
                                </CardFooter>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                  <div className="w-full md:w-6/12 px-4 mx-auto text-center"></div>
                </div>
              </div>
            </footer>
          </section>
        </main>
      </>
    </div>
  );
}

export default Profile;
