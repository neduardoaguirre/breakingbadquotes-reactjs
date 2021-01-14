import React, { useState, useEffect } from 'react';
import Quote from './components/Quote';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';
import logo from './logo.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.div`
  img {
    padding-bottom: 2rem;
    display: block;
    margin: 0 auto;
    width: 80%;
  }
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 272px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
  min-width: 272px;
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [quote, saveQuote] = useState({});
  const [loading, saveLoading] = useState(true);

  const getQuote = async () => {
    saveLoading(true);
    const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
    try {
      const req = await fetch(url);
      const res = await req.json();
      saveQuote(res[0]);
      saveLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Breaking Bad Logo" />
      </Logo>
      {loading ? <Spinner /> : <Quote quote={quote} />}

      {/* <Quote quote={quote} /> */}
      <Button onClick={getQuote}>Get Quotes</Button>
    </Container>
  );
}

export default App;
