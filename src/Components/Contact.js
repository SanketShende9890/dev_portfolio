import React, { useState } from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";

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

  return (
    <div className="contact-form-container ">
      <Card>
        <h1 className="text-2xl text-white">Let's talk..</h1>
        <Form>
          <TextInput
            {...name}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <TextInput
            {...email}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <TextArea
            {...message}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <Button>SEND</Button>
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
    <section
      className="max-w-4xl py-10 px-2 text-white mx-auto "
      style={{ position: "relative" }}
    >
      <Reveal keyframes={customLeftAnimation}>
        <Fade delay={1e1} cascade damping={1e-1}>
          <div className="relative overflow-hidden shadow-xl rounded-2xl flex bg-slate-bg h-[31.625rem] max-h-[60vh] sm:max-h-[none] lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 !h-auto max-h-[none] p-8">
            <ContactForm />
          </div>
        </Fade>
      </Reveal>
    </section>
  );
};

export default Contact;
