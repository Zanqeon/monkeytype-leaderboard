import { useTheme } from 'styled-components';
import { getFormattedRecordDate } from '@app/utils/get-formatted-date';
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
  StyledNote,
} from './style';

export interface IListItemProps {
  place?: number;
  displayName?: string;
  wordsPerMinute: number;
  accuracy: number;
  timestamp: number;
  isPlaceholder?: boolean;
}

const ListItem = ({
  place,
  wordsPerMinute,
  accuracy,
  timestamp,
  displayName,
  isPlaceholder,
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
      <StyledContentWrapper
        $hasLabelDesktop={place === 1 || place == 6}
        $hasLabelMobile={place === 1}
        $showPlaceholderNote={place === 10 && isPlaceholder}
      >
        <StyledNameWrapper>
          <StyledName>{displayName}</StyledName>
        </StyledNameWrapper>
        <StyledWordsPerMinute>
          {wordsPerMinute ? wordsPerMinute : ''}
        </StyledWordsPerMinute>
        <StyledAccuracy>{accuracy ? `${accuracy}%` : ''}</StyledAccuracy>
        <StyledDate>{getFormattedRecordDate(timestamp)}</StyledDate>
        <StyledNote>*Placeholder leaderboard</StyledNote>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default ListItem;
