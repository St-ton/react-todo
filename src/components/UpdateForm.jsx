// import { useState } from 'react';
export default function UpdateForm({
  updateData,
  changeTask,
  updateTask,
  cancelUpdate,
  value,
  changeSelect,
  valueDate,
  changeDate,
}) {
  return (
    <>
      <div className="row formTable">
        <div className="col">
          <input
            value={updateData && updateData.title}
            onChange={e => {
              changeTask(e);
              // console.log(`1 ${e.target.value}`);
            }}
            className="form-control form-control-lg"
          />

          <div className="row">
            <div className="row ch_importance">
              <p>Importance</p>
              <select
                name="import"
                value={value}
                onChange={e => {
                  changeSelect(e);
                  // console.log(`2 ${e.target.value}`);
                }}
              >
                <option selected>Select</option>
                <option value="important">important</option>
                <option value="current">non-important</option>
              </select>
            </div>
            <div className="row ch_calendar">
              <p>Week Day</p>
              <select
                value={valueDate}
                onChange={e => {
                  changeDate(e);
                  // console.log(`3 ${e.target.value}`);
                }}
              >
                <option selected>Select</option>
                <option value="mon">Monday</option>
                <option value="tue">Tuesday</option>
                <option value="wed">Wednesday</option>
                <option value="thu">Thursday</option>
                <option value="fri">Friday</option>
                <option value="sat">Saturday</option>
                <option value="sun">Sunday</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-lg btn-success"
            onClick={updateTask}
            // onClick={() => updateTask(id, title, value, valueDate)}
          >
            Update
          </button>
          <button className="btn btn-lg btn-warning" onClick={cancelUpdate}>
            Cancel
          </button>
        </div>
      </div>
      <br />
    </>
  );
}
