/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { addTodo, setTodo, updateTodo } from "./todosReducer";
import { useDispatch, useSelector } from "react-redux";

export default function TodoForm(){
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
 {
    return (
      <ListGroupItem>
        <Button onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click"> Add </Button>
        <Button onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click"> Update </Button>
        <FormControl value={todo.title}
          onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }/>
      </ListGroupItem>
  );}
}