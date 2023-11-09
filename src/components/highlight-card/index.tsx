import { useTheme } from 'styled-components';
import Image from 'next/image';
import {
  StyledWrapper,
  StyledImageWrapper,
  StyledName,
  StyledRecordList,
  StyledRecord,
  StyledRecordType,
  StyledRecordAccuracy,
  StyledRecordWordsPerMinute,
  StyledRecordContentWrapper,
  StyledHeader,
  StyledPlace,
  StyledPlaceNumber,
  StyledPlaceSuffix,
} from './style';

interface Record {
  wordsPerMinute: number;
  accuracy: string;
  type: string;
}

export interface IHighlightCardProps {
  place: number;
  name: string;
  records: Record[];
  image?: string;
}

const HighlightCard = ({
  place,
  name,
  records,
  image,
}: IHighlightCardProps) => {
  const { COLOR } = useTheme();

  const PLACE_COLORS = {
    1: COLOR.primary,
    2: COLOR.secondary,
    3: COLOR.tertiary,
  };

  const placeSuffix = (place: number) =>
    place === 1 ? 'st' : place === 2 ? 'nd' : 'rd';

  return (
    <StyledWrapper>
      <StyledHeader
        $backgroundColor={
          place === 1 || place === 2 || place === 3 ? PLACE_COLORS[place] : ''
        }
      >
        {image && (
          <StyledImageWrapper>
            <Image
              src={image}
              alt="avatar"
              sizes="(min-width: 0px) 80px"
              fill
              objectFit="cover"
            />
          </StyledImageWrapper>
        )}
        <StyledName>{name}</StyledName>
        <StyledPlace>
          <StyledPlaceNumber>{place}</StyledPlaceNumber>
          <StyledPlaceSuffix $place={place}>
            {placeSuffix(place)}
          </StyledPlaceSuffix>
        </StyledPlace>
      </StyledHeader>

      <StyledRecordList>
        {records.map((record) => (
          <StyledRecord key={record.type}>
            <StyledRecordType>{record.type}</StyledRecordType>
            <StyledRecordContentWrapper>
              <StyledRecordWordsPerMinute>
                {record.wordsPerMinute}
              </StyledRecordWordsPerMinute>
              <StyledRecordAccuracy>{record.accuracy}</StyledRecordAccuracy>
            </StyledRecordContentWrapper>
          </StyledRecord>
        ))}
      </StyledRecordList>
    </StyledWrapper>
  );
};

export default HighlightCard;
