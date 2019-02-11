import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Bottom 5% students</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Matric</th>
                        <th>Email</th>
                        <th className="text-center">Wk1</th>
                        <th className="text-center">Wk2</th>
                        <th className="text-center">Wk3</th>
                        <th className="text-center">Wk4</th>
                        <th className="text-center">Wk5</th>
                        <th className="text-center">Wk6</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td >U1223234G</td>
                        <td >rice001@e.ntu.edu.sg</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                      <tr>
                        <td>Dakota Rice</td>
                        <td >U1223234G</td>
                        <td >rice001@e.ntu.edu.sg</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                      <tr>
                        <td>Dakota Rice</td>
                        <td >U1223234G</td>
                        <td >rice001@e.ntu.edu.sg</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>

            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Top 5% students</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Matric</th>
                        <th>Email</th>
                        <th className="text-center">Wk1</th>
                        <th className="text-center">Wk2</th>
                        <th className="text-center">Wk3</th>
                        <th className="text-center">Wk4</th>
                        <th className="text-center">Wk5</th>
                        <th className="text-center">Wk6</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td >U1223234G</td>
                        <td >rice001@e.ntu.edu.sg</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                      <tr>
                        <td>Dakota Rice</td>
                        <td >U1223234G</td>
                        <td >rice001@e.ntu.edu.sg</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>

            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">All Students</CardTitle>
                </CardHeader>
                <CardBody>
                  
                       <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Matric</th>
                        <th>Email</th>
                        <th className="text-center">Wk1</th>
                        <th className="text-center">Wk2</th>
                        <th className="text-center">Wk3</th>
                        <th className="text-center">Wk4</th>
                        <th className="text-center">Wk5</th>
                        <th className="text-center">Wk6</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td >U1223234G</td>
                        <td >rice001@e.ntu.edu.sg</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                      <tr>
                        <td>Dakota Rice</td>
                        <td >U1223234G</td>
                        <td >rice001@e.ntu.edu.sg</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                      <tr>
                        <td>Dakota Rice</td>
                        <td >U1223234G</td>
                        <td >rice001@e.ntu.edu.sg</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                      <tr>
                        <td>Dakota Rice</td>
                        <td >U1223234G</td>
                        <td >rice001@e.ntu.edu.sg</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                      <tr>
                        <td>Dakota Rice</td>
                        <td >U1223234G</td>
                        <td >rice001@e.ntu.edu.sg</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                      <tr>
                        <td>Dakota Rice</td>
                        <td >U1223234G</td>
                        <td >rice001@e.ntu.edu.sg</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
