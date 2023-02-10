import React from 'react';
import ToDoOneDay from './toDoOneDay';

const Monday = ({ toDo, markDone, setUpdateData, deleteTask, deleteDay }) => {
  const toDoNew = toDo.filter(el => el.valueDate === 'monday');

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

export default Monday;
