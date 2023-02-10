import React from 'react';
import ToDoOneDay from './toDoOneDay';

const Wednesday = ({ toDo, markDone, setUpdateData, deleteTask, deleteDay }) => {
  const toDoNew = toDo.filter(el => el.valueDate === 'wednesday');
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

export default Wednesday;
