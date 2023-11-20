import Image from 'next/image';
import {
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
    <StyledContentWrapper>
      <StyledWrapper>
        <StyledInfoMessage />
        <StyledImageLink href={linkHref} target="_blank">
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
        <StyledLink href={linkHref} target="_blank">
          {linkLabel}
        </StyledLink>
      </StyledWrapper>
    </StyledContentWrapper>
  );
};

export default QRCode;
