import Image from 'next/image';
import {
  StyledContainer,
  StyledImageWrapper,
  StyledLink,
  StyledContentWrapper,
  StyledWrapper,
} from './style';

export interface IQRCodeProps {
  linkHref: string;
  linkLabel: string;
  image: string;
}

const QRCode = ({ linkHref, linkLabel, image }: IQRCodeProps) => (
  <StyledContainer>
    <StyledContentWrapper>
      <StyledWrapper>
        <StyledImageWrapper>
          <Image src={image} alt="QR Code" height={180} width={180} priority />
        </StyledImageWrapper>
        <StyledLink href={linkHref}>{linkLabel}</StyledLink>
      </StyledWrapper>
    </StyledContentWrapper>
  </StyledContainer>
);

export default QRCode;
