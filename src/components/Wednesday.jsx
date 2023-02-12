import React from 'react';
import ToDoOneDay from './toDoOneDay';

export default function Wednesday({ toDo, markDone, setUpdateData, deleteTask, deleteDay }) {
  // const toDoNew = toDo.filter(el => el.valueDate === 'wednesday');
  const toDoNew = toDo.filter(el => el.valueDate === 'wed');
  return (
    <>
      <ToDoOneDay
        toDoNew={toDoNew}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
        deleteDay={deleteDay}
      />
    </>
  );
}
