import Image from 'next/image';
import {
  StyledContainer,
  StyledImageWrapper,
  StyledLink,
  StyledContentWrapper,
  StyledWrapper,
  StyledInfoMessage,
  StyledImageLink,
} from './style';

export interface IQRCodeProps {
  linkHref: string;
  linkLabel: string;
  image: string;
}

const QRCode = ({ linkHref, linkLabel, image }: IQRCodeProps) => {
  return (
    <StyledContainer>
      <StyledContentWrapper>
        <StyledWrapper>
          <StyledInfoMessage />
          <StyledImageLink href={linkHref}>
            <StyledImageWrapper>
              <Image
                src={image}
                alt={linkLabel}
                height={180}
                width={180}
                priority
                sizes="(min-width: 0px) 180px"
              />
            </StyledImageWrapper>{' '}
          </StyledImageLink>
          <StyledLink href={linkHref}>{linkLabel}</StyledLink>
        </StyledWrapper>
      </StyledContentWrapper>
    </StyledContainer>
  );
};

export default QRCode;
