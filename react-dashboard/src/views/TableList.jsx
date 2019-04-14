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
                        <td>Derek Ho</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                      <tr>
                        <td>Kent Tan</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                      <tr>
                        <td>Kazet Tan</td>
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
                        <td>Martin Le</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                      <tr>
                        <td>David Sim</td>
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
                        <td>Tan Xiao Gou</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                      <tr>
                        <td>Tan Wei Wei</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                      <tr>
                        <td>Chi Pu</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                      <tr>
                        <td>Duyen Le</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                      <tr>
                        <td>Nguyet Nguyen</td>
                        <td className="text-center">10</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">73</td>
                        <td className="text-center">78</td>
                        <td className="text-center">38</td>
                      </tr>
                      <tr>
                        <td>Martin Tan</td>
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
