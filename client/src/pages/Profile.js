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
import { Link, useNavigate } from "react-router-dom";
function Profile() {
  const { profileRefresh, updateProfileRefresh } = useContext(UserContext);
  const navigate = useNavigate();

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
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });

        let id000 = response.data.user.id;
        try {
          const BlogsResponse = await axios.get(
            `http://localhost:5000/api/allUserBlogs/${id000}`
          );
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
    } finally {
      console.log(false);
    }
  };

  useEffect(() => {
    if (localStorage.auth) {
      fetchProtectedData();
    }
  }, [profileRefresh]);

  const handleBlog = (id) => {
    navigate(`/BlogDetails/${id}`);
  };

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
            <div
              className="absolute top-0 w-full bg-cover h-full bg-center "
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=600")',
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              />
            </div>
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
                        <img
                          className="shadow-xl rounded-full h-40 w-96 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
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
                        <section className="flex flex-wrap items-center justify-center ">
                          {UserBlogs.map((blog) => (
                            <article
                              className="flex flex-col w-96 shadow my-4 text-start m-5 cursor-pointer"
                              key={blog._id}
                            >
                              <div className="hover:opacity-75  ">
                                <img
                                  className="w-full h-80"
                                  src={`http://localhost:5000/${blog.image}`}
                                  onClick={() => {
                                    handleBlog(blog._id);
                                  }}
                                />
                              </div>
                              <div className="bg-white flex flex-col justify-start p-6">
                                <div className="flex justify-between items-center pb-4">
                                  <p className="text-3xl h-32 text-center font-bold hover:text-gray-700 ">
                                    {blog.title}
                                  </p>
                                </div>
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

                                <div className="w-ful flex justify-between items-center overflow-hidden mt-4">
                                  <p className="whitespace-normal h-10 w-52">
                                    {blog.content}
                                  </p>
                                  <EditBlog id={blog._id} blogProps={blog} />
                                </div>
                              </div>
                            </article>
                          ))}
                        </section>
                      </div>
                    </div>
                  </div>
                  {userRole == 2 && (
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                          <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                            My Business
                          </p>
                          <div className="flex flex-wrap gap-7 justify-center mt-20 text-start">
                            {UserServices.map((card) => (
                              <Card className="w-80 shadow-lg" key={card._id}>
                                <CardHeader floated={false} color="blue-gray">
                                  <img
                                    className="w-full h-60"
                                    src={`http://localhost:5000/${card.businessImage}`}
                                    alt="ui/ux review check"
                                  />
                                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                                </CardHeader>
                                <CardBody className="h-80">
                                  <div className="mb-3 h-16 flex items-center justify-between">
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
                                    <span className="text-lg h-10 font-semibold">
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
