import React from 'react';
import { Container, Content, Text, List, ListItem } from 'native-base';
import { NavigationScreenProp } from 'react-navigation';
const routes = ['Home', 'Chat', 'Profile'];
const Sidebar = ({
  navigation,
}: {
  navigation: NavigationScreenProp<unknown, unknown>;
}) => (
  <Container>
    <Content>
      <List
        dataArray={routes}
        renderRow={data => {
          return (
            <ListItem button onPress={() => navigation.navigate(data)}>
              <Text>{data}</Text>
            </ListItem>
          );
        }}
      />
    </Content>
  </Container>
);
export default Sidebar;
