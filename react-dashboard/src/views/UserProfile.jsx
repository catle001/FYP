import React from "react";
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Table
} from "reactstrap";

// core components
import {
  chartExample1
} from "variables/user-chart.jsx";

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Row>
                <Col md="4" sm="4">
                  <Card>
                    <CardHeader>
                      <h5 className="title">Ranking</h5>
                      <CardTitle tag="h3">
                        <span><i className="tim-icons icon-bell-55 text-info" />{" "}</span>
                        40th
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Col>
                <Col md="4" sm="4">
                  <Card>
                    <CardHeader>
                      <h5 className="title">My average</h5>
                      <CardTitle tag="h3">
                        <i className="tim-icons icon-app text-success" />{" "}
                        80
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Col>
                <Col md="4" sm="4">
                  <Card>
                    <CardHeader>
                      <h5 className="title">Class average</h5>
                      <CardTitle tag="h3">
                        <i className="tim-icons icon-molecule-40 text-primary" />{" "}
                        80  
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col xs="12">
                  <Card className="card-chart">
                    <CardHeader>
                      <Row>
                        <Col className="text-left" sm="12">
                          <h5 className="title">Score by week</h5>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <div className="chart-area">
                        <Line
                          data={chartExample1.data2}
                          options={chartExample1.options}
                        />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>   
                <Col>           
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h4"> Notifications</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Alert color="info">
                        <span>
                          <b>You</b> score above benchmark on 
                          <b> Week 3 </b>
                        </span>
                      </Alert>
                      <Alert color="success">
                        <span>
                          <b>You</b> are the top scorer on 
                          <b> Week 4 </b>
                        </span>
                      </Alert>
                      <Alert color="danger">
                        <span>
                          <b>You</b> are the below benchmark on 
                          <b> Week 6 </b>
                        </span>
                      </Alert>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/anime3-square.png")}
                      />
                      <h5 className="title">Cat Le</h5>
                    </a>
                    <p className="description">Undergraduate Electrical and Electronics Enginneering</p>
                  </div>
                  <div className="card-description">
                    <Table className="tablesorter" responsive>
                      <tbody>
                        <tr>
                          <td>Matric No</td>
                          <td >U1234567G</td>
                        </tr>
                        <tr>
                          <td>Mobile No</td>
                          <td >1234 5678</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td >rice001@e.ntu.edu.sg</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">  
                    <Button className="btn-icon btn-round" color="google">
                      <i className="tim-icons icon-email-85" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
