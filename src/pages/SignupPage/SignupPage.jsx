import React, { useState } from "react";
import  ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

export default function SignUpPage(props) {
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: '',
  });

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    // Photos have to be sent over using FormData,
    // they are sent over to the server in multiple requests
    const formData = new FormData()

    for (let fieldName in state) {
      // append the rest of the data to the form object
      formData.append(fieldName, state[fieldName])
    }

    try {
      // If you want to view the formData you need to loop over the object

      // use the userService to make the fetch request
      await userService.signup(formData);
      navigate("/");
      // Route to wherever you want!
      // after you get a response from the server from 
      // the signup request, you need to grab the token from 
      // local storage and set the user!


    } catch (err) {
      // Invalid user data (probably duplicate email)
      console.log(err.message)
      setError(err.message)
    }
  }
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Sign Up
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              label='Username'
              name="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              required
            />
            <Form.Input
              label='Email'
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              label='Password'
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Form.Input
              label='Confirm Password'
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="btn">
              Signup
            </Button>
          </Segment>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
      </Grid.Column>
    </Grid>

  );
}
