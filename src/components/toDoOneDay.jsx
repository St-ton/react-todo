import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function ToDoOneDay({ toDoNew, markDone, setUpdateData, deleteTask, deleteDay }) {
  const flag = '';
  return (
    <>
      <div className="dayName" onClick={() => deleteDay(toDoNew[0].valueDate)}>
        {toDoNew && toDoNew.length ? (
          <p>{(toDoNew[0].valueDate === '' ? 'No date' : toDoNew[0].valueDate).toUpperCase()}</p>
        ) : (
          ''
        )}
        {/* <div className="del_day" onClick={() => deleteDay(toDoNew[0].valueDate)}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="trash-can"
            class="svg-inline--fa fa-trash-can "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
            ></path>
          </svg>
          </div>
           */}
        <div className="del_day" onClick={() => deleteDay(toDoNew[0].valueDate)}>
          <FontAwesomeIcon icon={faTrashCan} />
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
