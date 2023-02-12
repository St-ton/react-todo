import React from 'react';
import ToDoOneDay from './toDoOneDay';

export default function Tuesday({ toDo, markDone, setUpdateData, deleteTask, deleteDay }) {
  // const toDoNew = toDo.filter(el => el.valueDate === 'tuesday');
  const toDoNew = toDo.filter(el => el.valueDate === 'tue');

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
