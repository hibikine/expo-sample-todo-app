import * as React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Todo from './Todo';
import Sidebar from './Sidebar';

const DrawerNavigator = createDrawerNavigator(
  { Todo: { screen: Todo } },
  { contentComponent: props => <Sidebar {...props} /> }
);
export default createAppContainer(DrawerNavigator);
