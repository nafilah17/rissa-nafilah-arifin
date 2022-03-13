import React, { useState } from "react";
import {  Row, Col, Container, Form, Card, Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import Profile from "./Profile";

const Search = () => {
  const [ userInput, setUserInput ] = useState("");
  const [ data, setData ] = useState({})
  const [ repositories, setRepositories ] = useState([]);


  const handleSearch = (e) => {
    setUserInput(e.target.value)
    console.log('input', e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault();

    // get profile
    const searchUser = await fetch(`https://api.github.com/users/${userInput}`)
    const searchJson = await searchUser.json();
    // console.log('test search', searchJson)

    // get repositories
    const repositories = await fetch(searchJson.repos_url)
    const repoJson = await repositories.json();
    // console.log('test search', repoJson)

    if(searchJson){
      setData(searchJson);
      setRepositories(repoJson)
    }
  }

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center"> 
          <Col xs={12} md={6} className="text-center">
              <Card className="p-3">
                <h5 className="mb-3"> Search your profile github here!</h5>
                  <Form onSubmit={handleSubmit}>
                    <Row className="align-items-center">
                      <Col>
                        <Form.Control id="inlineFormInputName" placeholder="Search github user" onChange={handleSearch} value={userInput} />
                      </Col>
                      <Col xs="auto">
                        <Button type="submit" className="btn-search">
                          <BsGithub />{"   "}Search</Button>
                      </Col>
                    </Row>
                  </Form>
              </Card>
          </Col>
          <Profile data={data} repositories={repositories} />
        </Row>
        
      </Container>
    </div>
    
  );
};

export default Search;
