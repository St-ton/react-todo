import React from 'react';
import ToDoOneDay from './toDoOneDay';

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask, deleteDay }) => {
  const toDoNew = toDo.filter(el => el.valueDate === '');

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

export default ToDo;
