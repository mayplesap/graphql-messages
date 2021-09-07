import React, { useState } from "react";
import { useHistory } from "react-router-dom"

interface MessageFormProps { 
  createMessage: (username: string, message:string) => void 
}

function NewMessageForm(props: MessageFormProps) {
  const history = useHistory();
  const [formData, setFormData] = useState({ username: "", message:""})

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    props.createMessage(formData.username, formData.message);
    history.push("/");
  }

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }
  return (
    <form onSubmit={handleSubmit}
      className="UserForm form-group container mt-3">
      <div className="row">
        <div className="col-10">
          <input
            name="username"
            onChange={handleChange}
            placeholder="username"
            className="form-control"
            required
          />
        </div>
        <div className="col-10">
          <input
            name="message"
            onChange={handleChange}
            placeholder="message"
            className="form-control"
            required
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-info">submit</button>
        </div>
      </div>
    </form>
  )
}

export default NewMessageForm;