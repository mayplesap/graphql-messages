import React, { useState } from "react";

function NewUserForm(props: { createUser: (username: string, firstName: string, lastName: string) => void }) {

  const [formData, setFormData] = useState({ username: "", firstName: "", lastName: "" })

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    props.createUser(formData.username, formData.firstName, formData.lastName);
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
            name="firstName"
            onChange={handleChange}
            placeholder="Input search term"
            className="form-control"
            required
          />
        </div>
        <div className="col-10">
          <input
            name="lastName"
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

export default NewUserForm;