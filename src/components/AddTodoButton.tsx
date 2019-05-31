import * as React from 'react';
import { Button, Icon } from 'native-base';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodoButton = ({ onPress }: { onPress: () => void }) => (
  <Button transparent onPress={onPress}>
    <Icon name="add" />
  </Button>
);
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onPress: () => dispatch(addTodo()),
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodoButton);
