import { useState } from 'react';
import * as S from './styles';

interface ToolTipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const ToolTip = ({ content }: ToolTipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <S.ToolTipContainer>
      <S.Trigger 
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onTouchStart={() => setIsVisible(true)}
      >
        ?
      </S.Trigger>
        {isVisible && <S.ToolTipContent>{content}</S.ToolTipContent>}
    </S.ToolTipContainer>
  );
};

export default ToolTip;