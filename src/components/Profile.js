import React, { useState, useEffect } from "react";
import {  Row, Col, Image, Form, Card, Button } from "react-bootstrap";
import { BsFillPersonCheckFill, BsFillPeopleFill, BsFillBookFill } from "react-icons/bs";

const Profile = ({ data, repositories}) => {
  
  return (
    <div className="mt-3">
        <Row>
          <Col xs={12} md={4}>
            <div className="text-center">
            <Card>
              <Card.Img variant="top" src={data.avatar_url} />
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                    <h5>{data.userName}</h5>
                    <h6>Joined in {data.createdAt}</h6>
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
          <Col>
            <div>
              <Row>
                {/* repos cards */}
                {repositories.map(repo => (
                    <Col xs={12} md={5} className="my-2">
                      <Card>
                        <Card.Body>
                          <Card.Title>{repo.name}</Card.Title>
                          <Card.Text>
                            {repo.html_url}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    ))}
              </Row>
            </div>
          </Col>
        </Row>
    </div>
    
  );
};

export default Profile;
