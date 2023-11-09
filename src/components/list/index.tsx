import ListItem, { IListItemProps } from '@app/components/list-item';
import { Container } from '@totemblock/layout';
import { StyledList } from './style';

export interface IListProps {
  items: IListItemProps[];
}

const List = ({ items }: IListProps) => {
  return (
    <Container>
      <StyledList>
        {items.map((item: IListItemProps, idx: number) => (
          <ListItem {...item} place={idx + 1} key={idx} />
        ))}
      </StyledList>
    </Container>
  );
};

export default List;
