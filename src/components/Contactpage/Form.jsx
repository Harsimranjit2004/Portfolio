import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";
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
        "https://harsimranjit-singh.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Email sent successfully!");
        alert("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Error sending email:", response.statusText);
        alert(
          "Sorry, there was an error sending your message. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again later."
      );
    }

    e.target.reset();
  };
  let content;

  content = (
    <div className="contact__form__main bg-zinc-900 pt-[4rem]">
      <h2 className="head-text text-green-500">Drop up a line & Contact me</h2>
      <div className="contact__cards">
        <div className="contact__card">
          <FontAwesomeIcon
            className="contact__card__icon"
            icon={faMailForward}
          />
          <a href={`mailto:${"hsdosanjh1234@gmail.com"}`} className="p-text">
            {allUserInfo?.[0].email}
          </a>
        </div>
        <div className="contact__card">
          <FontAwesomeIcon className="contact__card__icon" icon={faPhone} />
          <a href={`tel:${"9057815750"}`} className="p-text">
            {allUserInfo?.[0].phone}
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="contact__form contact__flex">
          <div className="contact__flex">
            <input
              className="input p-text"
              type="text"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="contact__flex">
            <input
              className="input p-text"
              type="text"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="contact__flex">
            <textarea
              className="textarea p-text p-2 text-xl"
              placeholder="Your message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="button"
            className="p-text border-2 border-gray-300 hover:gap-5 text-white font-bold py-2 px-8 rounded  flex gap-4 mt-7"
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </div>
      ) : (
        <h1>thank you</h1>
      )}
    </div>
  );
  return content;
};

export default Form;
