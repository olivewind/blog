import React from 'react';
import { ITodo } from '../../types';

interface IProps {
  todo: ITodo;
  onRemove(id: number): void;
  switchStatus(id: number): void;
}

export function Todo(props: IProps) {
  return (
    <div style={{ width: '300px', border: '1px solid #000', marginBottom: '4px', padding: '4px' }}>
      <span>{props.todo.name}</span>
      &nbsp;
      &nbsp;
      <button onClick={() => props.onRemove(props.todo.id)} style={{ float: 'right', cursor: 'point' }}>Delete</button>
      &nbsp;
      &nbsp;
      &nbsp;
      <button onClick={() => props.switchStatus(props.todo.id)} style={{ float: 'right', cursor: 'point' }}>{props.todo.done ? 'Undone' : 'Done'}</button>
    </div>
  );
}