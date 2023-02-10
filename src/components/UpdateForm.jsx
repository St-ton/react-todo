const UpdateForm = ({
  updateData,
  changeTask,
  updateTask,
  cancelUpdate,
  value,
  chengeSelect,
  valueDate,
  chengeDate,
}) => {
  return (
    <>
      <div className="row formTable">
        <div className="col">
          <input
            value={updateData && updateData.title}
            onChange={e => changeTask(e)}
            className="form-control form-control-lg"
          />

          <div className="row">
            <div className="row ch_importance">
              <select name="import" value={value} onChange={e => chengeSelect(e)}>
                <option selected value="Select">
                  Importance
                </option>
                <option value="important">important</option>
                <option value="current">non-important</option>
              </select>
            </div>
            <div className="row ch_calendar">
              <div className="select">Week Day: </div>
              <select required value={valueDate} onChange={e => chengeDate(e)}>
                <option selected value="Select">
                  Week Day
                </option>
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
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success" onClick={updateTask}>
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
};

export default UpdateForm;
