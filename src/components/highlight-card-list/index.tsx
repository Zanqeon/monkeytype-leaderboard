import { Container } from '@totemblock/layout';
import { StyledTitle, StyledList } from './style';
import HighlightCard, {
  IHighlightCardProps,
} from '@app/components/highlight-card';

export interface IHighlightCardListProps {
  items: IHighlightCardProps[];
}

const HighlightCardList = ({ items }: IHighlightCardListProps) => {
  return (
    <Container>
      <StyledTitle>October spotlight</StyledTitle>
      <StyledList>
        {items.map((item: IHighlightCardProps, idx: number) => (
          <HighlightCard {...item} place={idx + 1} key={idx} />
        ))}
      </StyledList>
    </Container>
  );
};

export default HighlightCardList;
