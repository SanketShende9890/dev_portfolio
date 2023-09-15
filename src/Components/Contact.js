import React,{useState, useEffect} from 'react';
/** Components */
const Card = ({ children }) => (
  <div className="contact-card">
    {children}
  </div>
);

const Form = ({ children }) => (
  <form className="contact-form">{children}</form>
);

const TextInput = ({ name, label, value, focus, onChange, onInput, onFocus, onBlur }) => (
  <div className="text-input">
    <label className={(focus || value !== '') ? 'label-focus' : ''} htmlFor={name}>{label}</label>
    <input
      className={(focus || value !== '') ? 'input-focus' : ''}
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

const TextArea = ({ name, label, value, focus, onChange, onInput, onFocus, onBlur }) => (
  <div className="text-area">
    <label className={(focus || value !== '') ? 'label-focus' : ''} htmlFor={name}>{label}</label>
    <textarea
      className={(focus || value !== '') ? 'input-focus' : ''}
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
  <button className="contact-button">{children}</button>
);

const ContactForm = () => {
  
  const initialState = {
    name: {
      name: 'name',
      label: 'Name',
      value: '',
      focus: false,
    },
    email: {
      name: 'email',
      label: 'Email',
      value: '',
      focus: false,
    },
    message: {
      name: 'message',
      label: 'Message',
      value: '',
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
        <h1 className='text-2xl'>Let's talk..</h1>
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
  return (
    <section
    className="max-w-4xl py-10 px-6 text-white mx-auto fadeout"
    style={{ position: "relative" }}
  >
    <div className="relative overflow-hidden shadow-xl rounded-2xl flex bg-slate-800 h-[31.625rem] max-h-[60vh] sm:max-h-[none] lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 !h-auto max-h-[none] p-8">
    <ContactForm/>

  </div>
  </section>
  )
}

export default Contact