import React from 'react';
import styled from 'styled-components';
import EmojiGenerator from '../components/EmojiGenerator';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.div`
  text-align: center;
  margin: 4rem 0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.primary};
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

function Home() {
  return (
    <Container>
      <Hero>
        <Title>Face Emoji Generator</Title>
        <Subtitle>Create personalized emojis that reflect your unique style and culture</Subtitle>
      </Hero>
      <EmojiGenerator />
    </Container>
  );
}

export default Home;