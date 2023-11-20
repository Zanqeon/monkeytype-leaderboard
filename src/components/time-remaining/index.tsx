import { useEffect, useState } from 'react';
import {
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

  useEffect(() => {
    setSecondsBetweenDates(
      Math.abs(currentDate.getTime() - dateNextMonth.getTime()) / 1000
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsBetweenDates((t) => t - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [secondsBetweenDates]);

  const formattedTimes = (number: number) =>
    number.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    });

  let delta = secondsBetweenDates;
  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;
  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;
  // what's left is seconds
  var seconds = Math.floor(delta % 60); // in theory the modulus is not required

  return (
    <StyledContentWrapper>
      <StyledWrapper>
        <StyledTitle>{title}</StyledTitle>
        {secondsBetweenDates > 0 && (
          <StyledTime>
            <span>{formattedTimes(days)} days</span>
            <span>{formattedTimes(hours)} hours</span>
            <span>{formattedTimes(minutes)} minutes</span>
            <span>{formattedTimes(seconds)} seconds</span>
          </StyledTime>
        )}
      </StyledWrapper>
    </StyledContentWrapper>
  );
};

export default TimeRemaining;
