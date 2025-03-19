import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const FeatureCard = styled.div`
  padding: 1.5rem;
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function Features() {
  const features = [
    'Personalized Expression',
    'Cultural Representation',
    'Boosts Creativity',
    'User-Friendly Interface',
    'Inclusive Customization',
    'Enhances Marketing',
    'Group Communication',
    'Cross-Platform Access',
  ];

  return (
    <Container>
      <h2>Features</h2>
      <FeatureGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <h3>{feature}</h3>
          </FeatureCard>
        ))}
      </FeatureGrid>
    </Container>
  );
}

export default Features;