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
        <div className="col">
          <div className="row">
            <div className="row ch_importance">
              <p>Importance</p>
              <select name="import" value={value} onChange={e => changeSelect(e)}>
                <option selected>Select</option>
                <option value="important">important</option>
                <option value="current">non-important</option>
              </select>
            </div>
            <div className="row ch_calendar">
              <p>Week Day</p>
              <select value={valueDate} onChange={e => changeDate(e)}>
                <option selected>Select</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>
            </div>
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
      <br />
    </div>
  );
}
