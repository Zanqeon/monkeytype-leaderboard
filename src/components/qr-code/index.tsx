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
}

const QRCode = ({ linkHref, linkLabel }: IQRCodeProps) => (
  <StyledContainer>
    <StyledContentWrapper>
      <StyledWrapper>
        <StyledImageWrapper>
          <Image
            src="/qr-monkeytype.svg"
            alt="Logo"
            // sizes="(min-width: 0px) 180px"
            height={180}
            width={180}
            // priority
            // fill
          />
        </StyledImageWrapper>
        <StyledLink href={linkHref}>{linkLabel}</StyledLink>
      </StyledWrapper>
    </StyledContentWrapper>
  </StyledContainer>
);

export default QRCode;
