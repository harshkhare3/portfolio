import React, { useState } from "react"
import { Fade } from "react-awesome-reveal"
import { Card, CardActions, CardContent, TextField } from "@material-ui/core"
import Message from "../../images/message.png"
import Button from "@material-ui/core/Button"
import "react-notifications/lib/notifications.css"
import axios from "axios"
import { NotificationContainer, NotificationManager } from "react-notifications"

import "./Contact.scss"

const Contact = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const sendMessage = (e) => {
    e.preventDefault()
    axios
      .post(
        "https://us-central1-portfolio-cd117.cloudfunctions.net/app/email",
        {
          name: name,
          email: email,
          message: message,
        }
      )
      .then((res) => {
        if (res.data === "success") {
          console.log("in")
          createNotification()
        }
      })

    setName("")
    setEmail("")
    setMessage("")
  }

  const createNotification = () => {
    NotificationManager.success(
      "Thanks for reaching out. I'll get back to you soon.",
      "Email sent successfully!"
    )
  }
  return (
    <Fade duration="2000">
      <div id="contact" className="contact__contactMe">
        <div className="contact__messageContainer">
          <h1>LETS CONNECT</h1>
          <br />
          <br />
          <br />
          <p>
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>
          <br />
          <Card>
            <CardContent className="contact__card">
              <TextField
                className="contact__field"
                label="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <br />
              <br />
              <TextField
                className="contact__field"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
              <br />
              <TextField
                className="contact__field"
                label="Message"
                multiline
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                rows={4}
              />
            </CardContent>
            <CardActions className="contact__sendButton">
              <Button
                onClick={(e) => sendMessage(e)}
                variant="contained"
                color="primary"
                size="small"
              >
                Send
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="contact__icon">
          <br />
          <br />
          <img src={Message} alt="" />
        </div>
      </div>
      <NotificationContainer />
    </Fade>
  )
}

export default Contact
