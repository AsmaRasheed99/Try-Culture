import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Payment = ({ UserIdApp }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [cardnumber, setCardNumber] = useState("");
  const [expirationdate, setDateCard] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholder, setcardholder] = useState("");

  const handlePayment = () => {
    const cardNumber = document.getElementById("card-no").value;
    const cardRegex = /^(4\d{15}|5\d{15})$/;

    if (!cardnumber || !cvv || !expirationdate || !cardholder) {
      showAlert("Please enter all card details");
      return;
    }
    if (!cardRegex.test(cardNumber)) {
      showAlert("Invalid card number");
      return;
    }

    const cvcRegex = /^\d{3}$/;

    if (!cvcRegex.test(cvv)) {
      showAlert("Invalid CVC");
      return;
    }
    submitPayment();
  };

  const submitPayment = async () => {
    const paymentData = {
      cvv: parseInt(cvv),
      ServiceId: id,
      userId: UserIdApp,
      cardholder: cardholder,
      CardNumber: cardnumber,
    };

    let serId;

    try {
      // Send the data to the server using an HTTP POST request
      const response = await axios.post(
        "http://localhost:5000/api/NewPayment",
        paymentData
      );
      serId = paymentData.ServiceId;
    } catch (error) {
      console.error("Error inserting data:", error);
    }

    try {
      const sub = await axios.put(
        `http://localhost:5000/api/Subscribed/${serId}`,
        { Subscribed: true }
      );
    } catch (error) {
      console.error(error.message);
    }
    showSuccessAlert("Subscribed successfully");
  };

  const showSuccessAlert = (message) => {
    Swal.fire({
      title: `Your Business will be added as soon as possible after we are done reviewing it`,
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/Profile");
    });
  };

  const showAlert = (message) => {
    Swal.fire({
      title: "Error",
      text: message,
      icon: "error",
      confirmButtonText: "OK",
    });
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="flex-1 text-center hidden lg:flex">
            <img
              src="https://media.istockphoto.com/id/1399955999/photo/subscribe-written-rectangular-shaped-yellow-chat-bubble-on-turquoise-background.jpg?s=612x612&w=0&k=20&c=wU5YyqyCT7_kWCj4ozK-anWJLgDQjnHgJU4lfs_sk3Y="
              alt="subscribe"
              className="rounded-tl-md rounded-bl-md"
            />
          </div>
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 sm:w-10/12">
            <div>
              <div className="mt-12 flex flex-col items-center">
                <h1
                  className="text-2xl xl:text-3xl font-extrabold"
                  style={{ color: "#000" }}
                >
                  Annual Subscription <br></br>
                  <hr></hr>
                  <span className="flex text-base justify-center py-2">Only 50JD</span>
                </h1>
                <div className="w-full flex-1 mt-8">
                  <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">Payment Details</p>
                    <p className="text-gray-400">
                      Complete your Subscription by providing your payment
                      details.
                    </p>
                    <div className="justify-center">
                      <label
                        htmlFor="card-holder"
                        className="mt-4 mb-2 block text-sm font-medium"
                      >
                        Card Holder
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="card-holder"
                          name="card-holder"
                          className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Your full name here"
                          value={cardholder}
                          onChange={(e) => setcardholder(e.target.value)}
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <label
                        htmlFor="card-no"
                        className="mt-4 mb-2 block text-sm font-medium"
                      >
                        Card Details
                      </label>
                      <div className="flex">
                        <div className="relative w-7/12 flex-shrink-0">
                          <input
                            type="text"
                            id="card-no"
                            name="card-no"
                            className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="xxxx-xxxx-xxxx-xxxx"
                            value={cardnumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                          />
                          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg
                              className="h-4 w-4 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                            </svg>
                          </div>
                        </div>
                        <input
                          type="text"
                          name="credit-expiry"
                          className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="MM/YY"
                          value={expirationdate}
                          onChange={(e) => {
                            const inputDate = e.target.value;

                            // Validate format (MM/YY)
                            if (
                              !/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(inputDate)
                            ) {
                              setDateCard(inputDate);
                              return; // Exit early for invalid format
                            }

                            const [inputMonth, inputYear] =
                              inputDate.split("/");
                            const currentYear = new Date().getFullYear() % 100; // Get last two digits of current year
                            const currentMonth = new Date().getMonth() + 1; // Months are 0-indexed

                            // Compare with current date to check expiry
                            if (
                              parseInt(inputYear, 10) > currentYear ||
                              (parseInt(inputYear, 10) === currentYear &&
                                parseInt(inputMonth, 10) >= currentMonth)
                            ) {
                              setDateCard(inputDate);
                            }
                          }}
                        />
                        <input
                          type="text"
                          name="credit-cvc"
                          className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="CVV"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-b py-2">
                    <div className="mt-6 flex justify-between">
                      <Link
                        to="/ServiceForm"
                        className="text-sm text-indigo-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 inline-block text-sm"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                        Go Back
                      </Link>
                      <button
                        className="relative inline-flex items-center justify-center p-1 overflow-hidden text-lg font-medium text-white rounded-lg group bg-gradient-to-br from-cyan-500 to-gray-500  hover:text-black dark:text-white focus:ring-4  focus:ring-cyan-200 dark:focus:ring-cyan-800 w-fit hover:bg-gradient-to-br hover:from-cyan-500 hover:to-gray-400 hover:bg-black "
                        style={{ backgroundColor: "#0db5c9", color: "white" }}
                        onClick={handlePayment}
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
