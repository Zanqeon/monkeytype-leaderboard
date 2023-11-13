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

  const currentDate = new Date();
  const dateNextMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    1
  );

  const formattedTimes = (number: number) =>
    number.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    });

  const timeLeft = () => {
    var delta = secondsBetweenDates;

    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    const minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    const seconds = Math.floor(delta % 60);

    return {
      days: formattedTimes(days),
      hours: formattedTimes(hours),
      minutes: formattedTimes(minutes),
      seconds: formattedTimes(seconds),
    };
  };

  useEffect(() => {
    const newSecondsBetweenDates = Math.abs(
      (currentDate.getTime() - dateNextMonth.getTime()) / 1000
    );

    const timer = setTimeout(() => {
      setSecondsBetweenDates(newSecondsBetweenDates);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsBetweenDates, currentDate, dateNextMonth]);

  return (
    <StyledContainer>
      <StyledContentWrapper>
        <StyledWrapper>
          <StyledTitle>{title}</StyledTitle>
          {secondsBetweenDates > 0 && (
            <StyledTime>
              <span>{timeLeft().days} days</span>
              <span>{timeLeft().hours} hours</span>
              <span>{timeLeft().minutes} minutes</span>
              <span>{timeLeft().seconds} seconds</span>
            </StyledTime>
          )}
        </StyledWrapper>
      </StyledContentWrapper>
    </StyledContainer>
  );
};

export default TimeRemaining;
