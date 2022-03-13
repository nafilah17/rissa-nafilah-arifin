import React, { useState, useEffect } from "react";
import {  Row, Col, Container, Form, Card, Button } from "react-bootstrap";
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
    console.log('test search', repoJson)

    if(searchJson){
      setData(searchJson);
      setRepositories(repoJson)
    }
  }

  return (
    <div className="mt-3">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="search">
              <Form onSubmit={handleSubmit}>
                <Row className="align-items-center">
                  <Col>
                    <Form.Control id="inlineFormInputName" placeholder="search github user" onChange={handleSearch} value={userInput} />
                  </Col>
                  <Col xs="auto">
                    <Button type="submit">Search</Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
          <Profile data={data} repositories={repositories} />
          
        </Row>
        
      </Container>
    </div>
    
  );
};

export default Search;
