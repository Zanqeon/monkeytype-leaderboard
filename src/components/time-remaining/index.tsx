import { useEffect, useState } from 'react';
import {
  StyledContainer,
  StyledWrapper,
  StyledTitle,
  StyledTime,
  StyledContentWrapper,
} from './style';

export interface ITimeRemainingProps {
  title: string;
}

const TimeRemaining = ({ title }: ITimeRemainingProps) => {
  const [secondsBetweenDates, setSecondsBetweenDates] = useState(0);

  const formattedTimes = (number: number) =>
    number.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    });

  useEffect(() => {
    const currentDate = new Date();
    const dateNextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );

    const secondsBetweenDates = Math.abs(
      (currentDate.getTime() - dateNextMonth.getTime()) / 1000
    );

    const timer = setTimeout(() => {
      setSecondsBetweenDates(secondsBetweenDates);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsBetweenDates]);

  var delta = secondsBetweenDates;

  const days = Math.floor(delta / 86400);
  delta -= days * 86400;

  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  const seconds = Math.floor(delta % 60);

  return (
    <StyledContainer>
      <StyledContentWrapper>
        <StyledWrapper>
          <StyledTitle>{title}</StyledTitle>
          {seconds && (
            <StyledTime>
              <span>{formattedTimes(days)} days</span>
              <span>{formattedTimes(hours)} hours</span>
              <span>{formattedTimes(minutes)} minutes</span>
              <span>{formattedTimes(seconds)} seconds</span>
            </StyledTime>
          )}
        </StyledWrapper>
      </StyledContentWrapper>
    </StyledContainer>
  );
};

export default TimeRemaining;
