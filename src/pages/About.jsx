import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamSection = styled.div`
  margin: 2rem 0;
`;

function About() {
  return (
    <Container>
      <h2>About Us</h2>
      <TeamSection>
        <h3>Team: Code Blasters</h3>
        <p>Team Leader: Aman Srivastava</p>
        <p>Members: Dhruv Kumar Rankoti, Arpit Rawat</p>
        <p>Project: Face Emoji Generator (FEG)</p>
      </TeamSection>
      <div>
        <h3>Our Mission</h3>
        <p>To create a customizable emoji generator that enhances digital expression with personal and cultural relevance.</p>
      </div>
    </Container>
  );
}

export default About;