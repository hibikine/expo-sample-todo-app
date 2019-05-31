import React from 'react';
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Title,
  Button,
  Icon,
} from 'native-base';
import TodoList from './TodoList';
import AddTodoButton from './AddTodoButton';
import { NavigationScreenProp } from 'react-navigation';

const Main = ({
  navigation,
}: {
  navigation: NavigationScreenProp<unknown, unknown>;
}) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Todo</Title>
        </Body>
        <Right>
          <AddTodoButton />
        </Right>
      </Header>
      <Content>
        <TodoList />
      </Content>
    </Container>
  );
};
export default Main;
