import React from 'react'
import { Col, Row, Form, Card, Button } from 'react-bootstrap'

const Overview = () => {
  return (
    <div>
        <Row>
        <div className="m-2">
          <Form>
            <Row className="align-items-center">
              <Col sm={3}>
                <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                  Cari
                </Form.Label>
                <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
              </Col>
              <Col xs="auto">
                <Button type="submit">Cari</Button>
              </Col>
            </Row>
          </Form>
        </div>
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col xs={12} md={5} className="m-2">
            <Card>
              <Card.Body>
                <Card.Title>name</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Overview