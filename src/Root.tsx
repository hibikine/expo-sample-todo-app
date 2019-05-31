import * as React from 'react';
import { Text, View, CheckBox } from 'native-base';
import styled from 'styled-components'

type TodoData = {text: string, completed: boolean}
const TodoItem = ({ item: {text, completed}}: { item: TodoData }) => <View><CheckBox checked={completed}/><Text>{text}</Text></View>

export default () => (
  <Center>
    <TodoItem item={{text: 'hello', completed: false}}/>
    <TodoItem item={{text: 'sample', completed: true}}/>
  </Center>
)
const Center = styled(View)`
flex: 1;
align-items: center;
justify-content: center;
`
