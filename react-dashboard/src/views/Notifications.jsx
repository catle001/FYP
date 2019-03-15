import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class Notifications extends React.Component {
  notify = place => {
    var color = 4;
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Warning: Student <b>Dakota Rice - U1223234G</b> got score below benchmark on <b> Week 4 </b>
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };
  render() {
    return (
      <>
        <div className="content">
          <div className="react-notification-alert-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <Row>
            <Col md="7">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Under-performance Notifications</CardTitle>
                </CardHeader>
                <CardBody>
                  <Alert color="danger">
                    <span>
                      Student <b>Dakota Rice</b> scored below benchmark on 
                      <b> Week 4 </b>
                    </span>
                  </Alert>
                  <Alert color="warning">
                    <span>
                      Student <b>Dakota Rice</b> scored drops by 50% on 
                      <b> Week 4 </b>
                    </span>
                  </Alert>
                  <UncontrolledAlert className="alert-with-icon" color="info">
                    <span
                      className="tim-icons icon-bell-55"
                      data-notify="icon"
                    />
                    <span data-notify="message">
                      This is a notification with close button and icon.
                    </span>
                  </UncontrolledAlert>
                  <UncontrolledAlert className="alert-with-icon" color="info">
                    <span
                      className="tim-icons icon-bell-55"
                      data-notify="icon"
                    />
                    <span data-notify="message">
                      This is a notification with close button and icon and have
                      many lines. You can see that the icon and the close button
                      are always vertically aligned. This is a beautiful
                      notification. So you don't have to worry about the style.
                    </span>
                  </UncontrolledAlert>
                </CardBody>
              </Card>
            </Col>
            <Col md="5">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Over-performance Notifications</CardTitle>
                </CardHeader>
                <CardBody>
                  <Alert color="info">
                    <span>
                      Student <b>Dakota Rice</b> is the top scorer on 
                      <b> Week 4 </b>
                    </span>
                  </Alert>
                  <Alert color="success">
                    <span>
                      <b>All</b> student scores above benchmark on 
                      <b> Week 6 </b>
                    </span>
                  </Alert>
                  <UncontrolledAlert color="warning">
                    <span>
                      <b>Warning - </b>
                      This is a regular notification made with ".alert-warning"
                    </span>
                  </UncontrolledAlert>
                  <UncontrolledAlert color="danger">
                    <span>
                      <b>Danger - </b>
                      This is a regular notification made with ".alert-danger"
                    </span>
                  </UncontrolledAlert>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Notifications;
