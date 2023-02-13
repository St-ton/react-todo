import React from 'react';
// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function ToDoOneDay({ toDoNew, markDone, setUpdateData, deleteTask, deleteDay }) {
  return (
    <>
      {/* <div className="dayName" onClick={() => deleteDay(toDoNew[0].valueDate)}> */}
      <div className="dayName">
        {toDoNew && toDoNew.length ? (
          <p>{(toDoNew[0].valueDate === '' ? 'Special' : toDoNew[0].valueDate).toUpperCase()}</p>
        ) : (
          ''
        )}

        <div className="del_day" onClick={() => deleteDay(toDoNew[0].valueDate)}>
          <FontAwesomeIcon icon={faTrashCan} />
          <div className="del_underline"></div>
        </div>
      </div>
      <div className="taskCont">
        {toDoNew
          .sort((a, b) => (a.value < b.value ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className={task.value === 'important' ? 'taskBg import' : 'taskBg curr'}>
                  <div className={task.status ? 'done' : ''}>
                    {/* <span
                      className={
                        task.value === 'important' ? 'taskNumber import' : 'taskNumber curr'
                      }
                    >
                      {index + 1}
                    </span> */}
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="iconsWrap">
                    <div className="icons_block">
                      <span title="Completed/Not Completed" onClick={e => markDone(task.id)}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                      {task.status ? null : (
                        <span
                          title="Edit"
                          onClick={() =>
                            setUpdateData({
                              id: task.id,
                              title: task.title,
                              status: task.status ? true : false,
                            })
                          }
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </span>
                      )}
                      <span title="Delete" onClick={() => deleteTask(task.id)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                      </span>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
}
