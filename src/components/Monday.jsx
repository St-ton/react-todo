import React from 'react';
import ToDoOneDay from './toDoOneDay';

export default function Monday({ toDo, markDone, setUpdateData, deleteTask, deleteDay }) {
  // const toDoNew = toDo.filter(el => el.valueDate === 'monday');
  const toDoNew = toDo.filter(el => el.valueDate === 'mon');

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
