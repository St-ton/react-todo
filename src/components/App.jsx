import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const storedToDo = JSON.parse(localStorage.getItem('toDo')) || [];
    setToDo(storedToDo);
  }, []);

  useEffect(() => {
    localStorage.setItem('toDo', JSON.stringify(toDo));
  }, [toDo]);

  const addTask = e => {
    e.preventDefault();
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
    let confirmDelete = window.confirm('Are you sure to DELETE the Task ?');
    if (confirmDelete) {
      let newTasks = toDo.filter(task => task.id !== id);
      setToDo(newTasks);
    }
  };

  const deleteDay = value => {
    let confirmDelete = window.confirm('Are you sure to DELETE the Day ?');
    if (confirmDelete) {
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

  function updateTask() {
    let filterTodo = [...toDo].filter(task => task.id !== updateData.id);
    let editTask = {
      id: updateData.id,
      title: updateData.title,
      status: updateData.status ? true : false,
      value: value,
      valueDate: valueDate,
    };
    let updateTodo = [...filterTodo, editTask];
    setToDo(updateTodo);
    setUpdateData('');
    //
    // почему то не сработало, если не фильтровать массив стр. 105 и 113, а сразу перебирать массив и в нем заменить такс исходный на отредактированный
    // let updateTodo = [...toDo].map((task, i) => (i === updateData.id ? editTask : task));
    //
  }

  return (
    <div className="container App">
      <div className="text">
        ToDo мы на уроке рассмотрели поверхностно и оно, как мне кажется, сильно отличалось от
        текущего. Поэтому обращался за помощью к{' '}
        <span className="span_text">Валерии Куликовой</span>
        <p>
          ToDo реализовано с сохранением в LocalStorage. Но не получилось реализовать
          фильтрацию/сортировку выполненных дел в конец дня.
          <p className="span_text">Хотелось бы получить от вас СОВЕТ - как это реализовать</p>
        </p>
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
      <div className="footer">
        <div className="footer-wrapper">
          ToDo List App | Link GihHub
          <div className="footer-inner">
            <a href="https://github.com/St-ton/react-todo/tree/master/src" target="_blank">
              ToDo List App | Link GihHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
