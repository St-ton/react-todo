import React from 'react';
import ToDoOneDay from './toDoOneDay';

export default function Friday ({ toDo, markDone, setUpdateData, deleteTask, deleteDay }) {
  // const toDoNew = toDo.filter(el => el.valueDate === 'friday');
  const toDoNew = toDo.filter(el => el.valueDate === 'fri');

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
};