import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const QuoteContainer = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 8rem;
      color: #000000;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: right;
    color: #666666;
    margin-top: 2rem;
  }
`;

const Quote = ({ quote }) => {
  return (
    <QuoteContainer>
      <h2>{quote.quote}</h2>
      <p>- {quote.author}</p>
    </QuoteContainer>
  );
};

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
};

export default Quote;
