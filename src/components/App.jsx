import { useState } from 'react';
import AddTaskForm from './AddTaskForm.jsx';
import UpdateForm from './UpdateForm.jsx';
import ToDo from './ToDo.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Monday from './Monday.jsx';
import Tuesday from './Tuesday.jsx';
import Wednesday from './Wednesday.jsx';
import Thursday from './Thursday.jsx';
import Friday from './Friday.jsx';
import Saturday from './Saturday.jsx';
import Sunday from './Sunday.jsx';

function App() {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');
  const [value, setValue] = useState('');
  const [valueDate, setValueDate] = useState('');

  // const [day, setDay] = useState('');

  const addTask = () => {
    if (
      value === 'Select' ||
      value === '' ||
      valueDate === 'Select' ||
      valueDate === '' ||
      newTask === ''
    ) {
      alert('Please fill in all fields...');
    } else {
      let num = toDo.length + 1;
      let newEntry = {
        id: num,
        title: newTask,
        status: false,
        value: value,
        valueDate: valueDate,
      };
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  };

  const deleteTask = id => {
    let conf = window.confirm('Are you sure to DELETE the Task ?');
    if (conf) {
      let newTasks = toDo.filter(task => task.id !== id);
      setToDo(newTasks);
    }
  };

  const deleteDay = value => {
    let conf = window.confirm('Are you sure to DELETE the Day ?');
    if (conf) {
      let newToDo = toDo.filter(task => task.valueDate !== value);
      setToDo(newToDo);
    }
  };

  const markDone = id => {
    const newTask = toDo.map(task => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  const cancelUpdate = () => {
    setUpdateData('');
  };

  // if (e.target.value === '') {
  //   alert('Write please Task ...');
  // }
  const changeTask = e => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  function changeSelect(event) {
    setValue(event.target.value);
    //   if (event.target.value === '') {
    //     alert('Select please Importance');
    //   }
  }

  function changeDate(event) {
    setValueDate(event.target.value);
    //   if (event.target.value === '') {
    //     alert('Select please Week Day');
    //   }
  }

  const updateTask = event => {
    console.log(`11 ${updateData.id} `);
    console.log(`21 ${updateData.status}`);
    console.log(`31 ${value}`);
    console.log(`41 ${valueDate}`);
    console.log(`51 ${[...toDo]}`);

    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updateObj = [...filterRecords, updateData];
    setToDo(updateObj);
    // setUpdateData('');
  };

  return (
    <div className="container App">
      <div className="text">
        Для меня это ДЗ оказалось супер трудное. Теоретически я процентов на 50% понимал, что и как
        нужно сделать по архитектуре компонентов. Но реализовать это через код для меня оказалось
        непосильным. Поэтому с разрешения <span className="span_text">Валерии Куликовой</span> взял
        ее код и в течении 7 часов только на половину разобравшись в нем переделал немного стили и
        добавил удаление дня недели при наведении на блок с днем. Как мне показалось по заданию -
        при наведении на блок дня недели не совсем правильный выбор для удаления
      </div>
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
          value={value}
          changeSelect={changeSelect}
          changeDate={changeDate}
          valueDate={valueDate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
          value={value}
          changeSelect={changeSelect}
          changeDate={changeDate}
          valueDate={valueDate}
        />
      )}
      {toDo && toDo.length ? '' : 'No Tasks...'}
      <div className="days ">
        <Monday
          toDo={toDo}
          markDone={markDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
          deleteDay={deleteDay}
        />
      </div>
      <div className="days">
        <Tuesday
          toDo={toDo}
          markDone={markDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
          deleteDay={deleteDay}
        />
      </div>
      <div className="days">
        <Wednesday
          toDo={toDo}
          markDone={markDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
          deleteDay={deleteDay}
        />
      </div>
      <div className="days">
        <Thursday
          toDo={toDo}
          markDone={markDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
          deleteDay={deleteDay}
        />
      </div>
      <div className="days">
        <Friday
          toDo={toDo}
          markDone={markDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
          deleteDay={deleteDay}
        />
      </div>
      <div className="days">
        <Saturday
          toDo={toDo}
          markDone={markDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
          deleteDay={deleteDay}
        />
      </div>
      <div className="days">
        <Sunday
          toDo={toDo}
          markDone={markDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
          deleteDay={deleteDay}
        />
      </div>
      <div className="days">
        <ToDo
          toDo={toDo}
          markDone={markDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
          deleteDay={deleteDay}
        />
      </div>
      <div className="footer">To Do List App | 2023</div>
    </div>
  );
}

export default App;
