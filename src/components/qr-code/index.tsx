import Image from 'next/image';
import {
  StyledContainer,
  StyledImageWrapper,
  StyledLink,
  StyledContentWrapper,
} from './style';

export interface IQRCodeProps {
  linkHref: string;
  linkLabel: string;
}

const QRCode = ({ linkHref, linkLabel }: IQRCodeProps) => (
  <StyledContainer>
    <StyledContentWrapper>
      <StyledImageWrapper>
        <Image
          src="/qr-monkeytype.svg"
          alt="Logo"
          sizes="(min-width: 0px) 180px"
          priority
          fill
        />
      </StyledImageWrapper>
      <StyledLink href={linkHref}>{linkLabel}</StyledLink>
    </StyledContentWrapper>
  </StyledContainer>
);

export default QRCode;
