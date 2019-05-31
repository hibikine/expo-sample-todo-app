import * as React from 'react';
import { TodoData } from '../actions';
import { CheckBox, ListItem, Left, Body, Input } from 'native-base';
import styled from 'styled-components';
const TodoItem = ({
  item: { text, completed },
  toggleCompleted,
  textChanged,
}: {
  item: TodoData;
  toggleCompleted: () => void;
  textChanged: (text: string) => void;
}) => (
  <ListItem>
    <Left>
      <CheckBox checked={completed} onPress={toggleCompleted} />
      <Body>
        <TodoText value={text} onChangeText={textChanged} />
      </Body>
    </Left>
  </ListItem>
);

const TodoText = styled(Input)`
  height: 24px;
`;

export default TodoItem;
