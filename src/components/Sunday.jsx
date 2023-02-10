import React from "react";
import ToDoOneDay from "./toDoOneDay";

const Sunday = ({ toDo, markDone, setUpdateData, deleteTask, deleteDay }) => {
  const toDoNew = toDo.filter((el) => el.valueDate === "sunday");

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
export default Sunday;
