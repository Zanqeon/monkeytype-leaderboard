import ListItem, { IListItemProps } from '@app/components/list-item';
import { Container } from '@totemblock/layout';
import { StyledList } from './style';

export interface IListProps {
  items: IListItemProps[];
  isPlaceholder?: boolean;
}

const List = ({ items, isPlaceholder }: IListProps) => {
  const USERS_TO_SHOW = 10;

  return (
    <Container>
      <StyledList>
        {items
          .slice(0, USERS_TO_SHOW)
          .map((item: IListItemProps, idx: number) => (
            <ListItem
              {...item}
              place={idx + 1}
              key={idx}
              isPlaceholder={isPlaceholder || false}
            />
          ))}
      </StyledList>
    </Container>
  );
};

export default List;
