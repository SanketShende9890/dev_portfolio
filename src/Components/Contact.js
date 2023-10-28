import React, { useState, useRef } from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";
import emailjs from '@emailjs/browser';

const Card = ({ children }) => <div className="contact-card">{children}</div>;

const Form = ({ children }) => <form className="contact-form">{children}</form>;

const TextInput = ({
  name,
  label,
  value,
  focus,
  onChange,
  onInput,
  onFocus,
  onBlur,
}) => (
  <div className="text-input">
    <label
      className={focus || value !== "" ? "label-focus" : ""}
      htmlFor={name}
    >
      {label}
    </label>
    <input
      className={focus || value !== "" ? "input-focus" : ""}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      onInput={onInput}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </div>
);

const TextArea = ({
  name,
  label,
  value,
  focus,
  onChange,
  onInput,
  onFocus,
  onBlur,
}) => (
  <div className="text-area">
    <label
      className={focus || value !== "" ? "label-focus" : ""}
      htmlFor={name}
    >
      {label}
    </label>
    <textarea
      className={focus || value !== "" ? "input-focus" : ""}
      name={name}
      value={value}
      onChange={onChange}
      onInput={onInput}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </div>
);

const Button = ({ children }) => (
  <button className="btn-grad w-full py-2">{children}</button>
);

const ContactForm = () => {
  const initialState = {
    name: {
      name: "name",
      label: "Name",
      value: "",
      focus: false,
    },
    email: {
      name: "email",
      label: "Email",
      value: "",
      focus: false,
    },
    message: {
      name: "message",
      label: "Message",
      value: "",
      focus: false,
    },
  };

  const [state, setState] = useState(initialState);

  const handleFocus = (e) => {
    const name = e.target.name;
    const newState = { ...state };
    newState[name].focus = true;
    setState(newState);
  };

  const handleBlur = (e) => {
    const name = e.target.name;
    const newState = { ...state };
    newState[name].focus = false;
    setState(newState);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const newState = { ...state };
    newState[name].value = e.target.value;
    setState(newState);
  };

  const { name, email, message } = state;

  const serviceId = 'service_6s8xvzt';
  const publicKey = 'o7KpYmg8ix6thE3jj';
  const templateId = 'template_zm3uvir';


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("sent eamil");
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form-container ">
      <Card>
        <h1 className="text-2xl text-white">Let's talk..</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex-col">

          <div className="my-3">

      <label>Name</label>
      <input type="text" style={{color: '#000'}} name="user_name" />
          </div>
          <div className="my-3">

      <label>Email</label>
      <input type="email" style={{color: '#000'}} name="user_email" />
          </div>
          <div className="my-3">

      <label>Message</label>
      <textarea style={{color: '#000'}} name="message" />
          </div>
          <div className="my-3">

      <input className="btn" type="submit" value="Send" />
          </div>
          </div>
    </form>
        <Form >
          <TextInput
          name="user_name"
            {...name}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <TextInput
           name="user_email" 
            {...email}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <TextArea
          name="message"
            {...message}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <Button type="submit" value="Send">SEND</Button>
        </Form>
      </Card>
    </div>
  );
};

const Contact = () => {
  const customLeftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 100px);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }`;
  return (
    <Reveal keyframes={customLeftAnimation}>
        <Fade delay={1e1} cascade damping={1e-1}>
        <section
          className="max-w-4xl my-10 text-white mx-auto outer-grad-cont"
          style={{ position: "relative" }}
        >
          <div className="relative overflow-hidden shadow-xl rounded-2xl flex inner-grad-cont h-[31.625rem] max-h-[60vh] sm:max-h-[none] lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 !h-auto max-h-[none] p-8">
            <ContactForm />
          </div>
    </section>
        </Fade>
      </Reveal>
  );
};

export default Contact;
