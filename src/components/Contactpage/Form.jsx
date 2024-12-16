
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailForward, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectAllUserInfos } from "../../features/userInfoApiSlice";

const Form = () => {
  const allUserInfo = useSelector(selectAllUserInfos);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setIsFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Error sending message. Try again later.");
      }
    } catch (error) {
      alert("An error occurred. Try again. Gaand maar gyi code di");
    }
  };

  return (
    <div className="bg-zinc-900 text-gray-200 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-4xl flex flex-col items-center gap-8">
        {/* Section Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">
            Drop Me a <span className="text-green-400">Line</span>
          </h1>
          <p className="text-gray-400 mt-3">
            Reach out to me via the form below or through my contact details.
          </p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="flex items-center gap-4 bg-zinc-800 p-6 rounded-lg shadow-md w-80">
            <FontAwesomeIcon
              icon={faMailForward}
              className="text-green-400 text-2xl"
            />
            <a
              href={`mailto:${allUserInfo?.[0]?.email || "example@gmail.com"}`}
              className="text-gray-300 hover:text-green-400 transition duration-300"
            >
              {allUserInfo?.[0]?.email || "example@gmail.com"}
            </a>
          </div>

          <div className="flex items-center gap-4 bg-zinc-800 p-6 rounded-lg shadow-md w-80">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-green-400 text-2xl"
            />
            <a
              href={`tel:${allUserInfo?.[0]?.phone || "1234567890"}`}
              className="text-gray-300 hover:text-green-400 transition duration-300"
            >
              {allUserInfo?.[0]?.phone || "123-456-7890"}
            </a>
          </div>
        </div>

        {/* Form */}
        {!isFormSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-800 w-full p-8 rounded-lg shadow-lg"
          >
            <div className="mb-6">
              <label className="block text-gray-400 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={handleChangeInput}
                className="w-full p-3 rounded-lg bg-zinc-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleChangeInput}
                className="w-full p-3 rounded-lg bg-zinc-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 mb-2">Your Message</label>
              <textarea
                name="message"
                placeholder="Type your message here"
                value={message}
                onChange={handleChangeInput}
                rows="5"
                className="w-full p-3 rounded-lg bg-zinc-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center text-green-400 text-xl font-bold">
            <p>Thank you! Your message has been sent successfully.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
