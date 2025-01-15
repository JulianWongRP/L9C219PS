import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Register() {
  const navigate = useNavigate()
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const courseRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed", {state: {name: nameRef.current.value, email: emailRef.current.value, course: courseRef.current.value}});
  }

  return (
    <div className="container">
      <h1>Register your interest!</h1>
      <p>
      Please register the course you are interested!
      </p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name:
          <input type="text" name="name" ref={nameRef} required/>
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} required/>
        </label>
        <label>
          Course:
          <input type="text" name="course" ref={courseRef} required/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
