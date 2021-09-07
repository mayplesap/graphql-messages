import React, { useState } from "react";

function NewMessageForm(props: { createMessage: (username: string, message:string) => void }) {

  const [formData, setFormData] = useState({ username: "", message:""})

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    props.createMessage(formData.username, formData.message);
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
            placeholder="Input search term"
            className="form-control"
            required
          />
        </div>
        <div className="col-10">
          <input
            name="message"
            onChange={handleChange}
            placeholder="Input search term"
            className="form-control"
            required
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-info">Search</button>
        </div>
      </div>
    </form>
  )
}

export default NewMessageForm;