import React, { useState } from "react";
import { useHistory } from "react-router-dom"

interface UserFormInterface {
  createUser: (
    username: string, 
    firstName: string, 
    lastName: string) => void
}

function NewUserForm(props: UserFormInterface): React.ReactElement {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "" 
  })

  function handleSubmit(evt: React.FormEvent): void {
    evt.preventDefault();
    props.createUser(formData.username, formData.firstName, formData.lastName);
    history.push("/");
  }

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }
  return (
    <form onSubmit={handleSubmit}
      className="UserForm form-group container mt-3 w-50">
        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            onChange={handleChange}
            placeholder="Username"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            name="firstName"
            onChange={handleChange}
            placeholder="First name"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            name="lastName"
            onChange={handleChange}
            placeholder="Last name"
            className="form-control"
            required
          />
        </div>
          <button type="submit" className="btn btn-info mt-2">Create User</button>
    </form>
  )
}

export default NewUserForm;