import React from 'react';
import ToDoOneDay from './toDoOneDay';

export default function Thursday({ toDo, markDone, setUpdateData, deleteTask, deleteDay }) {
  // const toDoNew = toDo.filter(el => el.valueDate === 'thursday');
  const toDoNew = toDo.filter(el => el.valueDate === 'thu');

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
