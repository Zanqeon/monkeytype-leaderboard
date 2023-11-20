import {
  StyledContainer,
  StyledBody,
  StyledHeading,
  StyledListItem,
} from './style';

export interface IInfoMessageProps {
  className?: string;
}

const InfoMessage = ({ className }: IInfoMessageProps) => (
  <StyledContainer className={className}>
    <StyledHeading>How to join</StyledHeading>
    <StyledBody>
      <StyledListItem>Go to monkeytype.com / scan QR code</StyledListItem>
      <StyledListItem>Create an account</StyledListItem>
      <StyledListItem>Go to settings, danger zone</StyledListItem>
      <StyledListItem>Generate an APE key and set it to active</StyledListItem>
      <StyledListItem>Send your username and APE key</StyledListItem>
    </StyledBody>
  </StyledContainer>
);

export default InfoMessage;
