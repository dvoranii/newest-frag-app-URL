
import styled from 'styled-components';

export const ToolTipContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 8px;
`;

export const Trigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
`;

export const ToolTipContent = styled.div`
  position: absolute;
  z-index: 100;
  width: 200px;
  padding: 8px 12px;
  background: #333;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.4;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;