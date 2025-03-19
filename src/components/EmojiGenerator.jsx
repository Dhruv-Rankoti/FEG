import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const GeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

const CanvasWrapper = styled.div`
  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 8px;
  background-color: #fff;
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.secondary};
  width: 100%;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

// Simple prompt parser
const parsePrompt = (prompt) => {
  const lowerPrompt = prompt.toLowerCase();
  const attributes = {
    skinTone: '#ffdab9', // Default
    eyes: 'none',
    mouth: 'none',
    accessory: 'none',
  };

  // Skin tone detection
  if (lowerPrompt.includes('light brown')) attributes.skinTone = '#f4a261';
  else if (lowerPrompt.includes('medium brown')) attributes.skinTone = '#d48c5e';
  else if (lowerPrompt.includes('dark brown')) attributes.skinTone = '#8d5524';
  else if (lowerPrompt.includes('peach')) attributes.skinTone = '#ffdab9';

  // Eyes detection
  if (lowerPrompt.includes('circle eyes') || lowerPrompt.includes('round eyes')) attributes.eyes = 'style1';
  else if (lowerPrompt.includes('square eyes')) attributes.eyes = 'style2';

  // Mouth detection
  if (lowerPrompt.includes('smile') || lowerPrompt.includes('happy')) attributes.mouth = 'smile';
  else if (lowerPrompt.includes('frown') || lowerPrompt.includes('sad')) attributes.mouth = 'frown';

  // Accessory detection
  if (lowerPrompt.includes('holi') || lowerPrompt.includes('gulal')) attributes.accessory = 'gulal';
  else if (lowerPrompt.includes('sunglasses')) attributes.accessory = 'sunglasses';

  return attributes;
};

function EmojiGenerator() {
  const canvasRef = useRef(null);
  const [prompt, setPrompt] = useState('');
  const [attributes, setAttributes] = useState({
    skinTone: '#ffdab9',
    eyes: 'none',
    mouth: 'none',
    accessory: 'none',
  });

  // Draw emoji on canvas based on attributes
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw face
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, Math.PI * 2);
    ctx.fillStyle = attributes.skin;
    ctx.fill();
    ctx.closePath();

    // Draw eyes
    if (attributes.eyes === 'style1') {
      ctx.beginPath();
      ctx.arc(70, 80, 10, 0, Math.PI * 2); // Left eye
      ctx.arc(130, 80, 10, 0, Math.PI * 2); // Right eye
      ctx.fillStyle = 'black';
      ctx.fill();
      ctx.closePath();
    } else if (attributes.eyes === 'style2') {
      ctx.beginPath();
      ctx.fillStyle = 'blue';
      ctx.fillRect(65, 75, 15, 10); // Left square eye
      ctx.fillRect(125, 75, 15, 10); // Right square eye
      ctx.closePath();
    }

    // Draw mouth
    if (attributes.mouth === 'smile') {
      ctx.beginPath();
      ctx.arc(100, 130, 30, 0, Math.PI, false); // Smile curve
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'red';
      ctx.stroke();
      ctx.closePath();
    } else if (attributes.mouth === 'frown') {
      ctx.beginPath();
      ctx.arc(100, 150, 30, Math.PI, 2 * Math.PI, false); // Frown curve
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'red';
      ctx.stroke();
      ctx.closePath();
    }

    // Draw accessory
    if (attributes.accessory === 'gulal') {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // Red powder
      ctx.fillRect(60, 40, 20, 20);
      ctx.fillStyle = 'rgba(0, 255, 0, 0.5)'; // Green powder
      ctx.fillRect(80, 50, 20, 20);
      ctx.fillStyle = 'rgba(0, 0, 255, 0.5)'; // Blue powder
      ctx.fillRect(100, 40, 20, 20);
      ctx.closePath();
    } else if (attributes.accessory === 'sunglasses') {
      ctx.beginPath();
      ctx.fillStyle = 'black';
      ctx.fillRect(60, 70, 30, 10); // Left lens
      ctx.fillRect(110, 70, 30, 10); // Right lens
      ctx.fillRect(90, 70, 20, 2); // Bridge
      ctx.closePath();
    }
  }, [attributes]);

  const handleGenerate = () => {
    const newAttributes = parsePrompt(prompt);
    setAttributes(newAttributes);
  };

  const downloadEmoji = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'custom-emoji.png';
    link.href = dataURL;
    link.click();
  };

  return (
    <GeneratorContainer>
      <CanvasWrapper>
        <canvas ref={canvasRef} width={200} height={200} />
      </CanvasWrapper>
      <Controls>
        <Input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., 'A happy face with circle eyes and Holi gulal'"
        />
        <Button onClick={handleGenerate}>Generate Emoji</Button>
        <Button onClick={downloadEmoji}>Download Emoji</Button>
      </Controls>
    </GeneratorContainer>
  );
}

export default EmojiGenerator;