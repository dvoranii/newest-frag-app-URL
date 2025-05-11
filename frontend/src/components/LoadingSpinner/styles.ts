import styled, { keyframes } from 'styled-components';

export const rotator = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
`;

export const dash = keyframes`
  0% {
    stroke-dashoffset: 187;
  }
  50% {
    stroke-dashoffset: 46.75;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    transform: rotate(450deg);
  }
`;

export const colors = keyframes`
  0% { stroke: #4285F4; }
  25% { stroke: #DE3E35; }
  50% { stroke: #F7C223; }
  75% { stroke: #1B9A59; }
  100% { stroke: #4285F4; }
`;

export const SpinnerSVG = styled.svg`
  animation: ${rotator} 1.4s linear infinite;
  width: 65px;
  height: 65px;
`;

export const SpinnerPath = styled.circle`
  fill: none;
  stroke-width: 6;
  stroke-linecap: round;
  cx: 33;
  cy: 33;
  r: 30;
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: ${dash} 1.4s ease-in-out infinite, ${colors} 5.6s ease-in-out infinite;
`;