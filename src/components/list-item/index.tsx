import { useTheme } from 'styled-components';
import {
  StyledWrapper,
  StyledPlaceWrapper,
  StyledPlace,
  StyledContentWrapper,
  StyledNameWrapper,
  StyledName,
  StyledWordsPerMinute,
  StyledAccuracy,
  StyledDate,
} from './style';

export interface IListItemProps {
  place?: number;
  name: string;
  wordsPerMinute: number;
  accuracy: string;
  date: string;
}

const ListItem = ({
  place,
  name,
  wordsPerMinute,
  accuracy,
  date,
}: IListItemProps) => {
  const { COLOR } = useTheme();

  const PLACE_COLORS = {
    1: COLOR.primary,
    2: COLOR.secondary,
    3: COLOR.tertiary,
  };
  return (
    <StyledWrapper>
      <StyledPlaceWrapper
        $backgroundColor={
          place === 1 || place === 2 || place === 3 ? PLACE_COLORS[place] : ''
        }
      >
        <StyledPlace>{place}</StyledPlace>
      </StyledPlaceWrapper>
      <StyledContentWrapper $hasLabel={place === 1 || place == 6}>
        <StyledNameWrapper>
          <StyledName>{name}</StyledName>
        </StyledNameWrapper>
        <StyledWordsPerMinute>{wordsPerMinute}</StyledWordsPerMinute>
        <StyledAccuracy>{accuracy}</StyledAccuracy>
        <StyledDate>{date}</StyledDate>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default ListItem;
