import React from "react"; 
import {  Row, Col, Card } from "react-bootstrap";
import { BsFillPersonCheckFill, BsFillPeopleFill, BsFillBookFill } from "react-icons/bs";

const Profile = ({ data, repositories}) => {
  
  return (
    <div>
        <Row>
          {/* profile */}
          <Col xs={12} md={4} className="mt-3">
            <div className="text-center">
            <Card key={data.id}>
              <Card.Img variant="top" src={data.avatar_url} />
                <Card.Body>
                  <Card.Title>Profile</Card.Title>
                    <p>{data.name}</p>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    <Row>
                      <Col>
                      <BsFillPersonCheckFill />
                        <h6>
                          <strong>{data.followers}</strong>
                        </h6>
                        <p>Followers</p>
                      </Col>
                      <Col>
                      <BsFillPeopleFill />
                        <h6>
                          <strong>{data.following}</strong>
                        </h6>
                        <p>Following</p>
                      </Col>
                      <Col>
                        <BsFillBookFill />
                        <h6>
                          <strong>{data.public_repos}</strong>
                        </h6>
                        <p>Public Repos</p>
                      </Col>
                    </Row>
                  </small>
                </Card.Footer>
              </Card>
              </div>
          </Col>
            {/* repos */}
          <Col className="mt-3">
            <Card className="p-3" >
              <Row>
                <h5>Your Repository</h5>
                  {repositories.map(repo => (
                    <Col xs={12} md={5} className="my-2">
                      <Card key={repo.id}>
                        <Card.Body>
                          <Card.Title>{repo.name}</Card.Title>
                            <Card.Link href={repo.html_url}>{repo.full_name}</Card.Link>
                              <p>{repo.language}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Card>
          </Col>
        </Row>
    </div>
    
  );
};

export default Profile;
