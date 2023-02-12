import React from 'react';
import ToDoOneDay from './toDoOneDay';

export default function Sunday({ toDo, markDone, setUpdateData, deleteTask, deleteDay }) {
  // const toDoNew = toDo.filter((el) => el.valueDate === "sunday");
  const toDoNew = toDo.filter(el => el.valueDate === 'sun');

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
