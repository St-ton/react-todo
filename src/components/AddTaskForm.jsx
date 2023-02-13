export default function AddTaskForm({
  newTask,
  setNewTask,
  addTask,
  value,
  changeSelect,
  valueDate,
  changeDate,
}) {
  return (
    <div>
      <div className="row formTable">
        <form onSubmit={addTask}>
          <div className="col">
            <div className="row">
              <div className="row ch_importance">
                <p>Importance</p>
                <select
                  required="required"
                  name="import"
                  value={value}
                  onChange={e => changeSelect(e)}
                >
                  <option value="" selected>
                    Select
                  </option>
                  <option value="important">important</option>
                  <option value="current">non-important</option>
                </select>
              </div>
              <div className="row ch_calendar">
                <p>Week Day</p>
                <select required="required" value={valueDate} onChange={e => changeDate(e)}>
                  <option value="" selected>
                    Select
                  </option>
                  <option value="mon">Monday</option>
                  <option value="tue">Tuesday</option>
                  <option value="wed">Wednesday</option>
                  <option value="thu">Thursday</option>
                  <option value="fri">Friday</option>
                  <option value="sat">Saturday</option>
                  <option value="sun">Sunday</option>
                </select>
              </div>
              <input
                required="required"
                placeholder="Task name....."
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-auto">
              <button onClick={addTask} className="btn btn-lg btn-success">
                Add Task
              </button>
            </div>
          </div>
        </form>
      </div>
      <br />
    </div>
  );
}
