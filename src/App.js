import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: '任务-1', time: '2024-10-08 10:35' },
    { id: 3, title: '任务-3', time: '2024-10-08 10:35' },
    { id: 3, title: '任务-5', time: '2024-10-08 10:35' },
  ]);
  const ongoingList = [
    { id: 1, title: '任务-4', time: '2024-10-08 10:35' },
    { id: 2, title: '任务-2', time: '2024-10-08 10:35' },
    { id: 3, title: '测试-2', time: '2024-10-08 10:35' },
  ];
  const doneList = [
    { id: 1, title: '任务-2', time: '2024-10-08 10:35' },
    { id: 3, title: '测试-1', time: '2024-10-08 10:35' },
  ];
  const KanbanCard = ({ title, time }) => (
    <li className='kanban-card'>
      <div className='card-title'>{title}</div>
      <div className='card-time'>{time}</div>
    </li>
  );
  const KanbanCardList = ({ list }) => list.map(item => <KanbanCard {...item} />);

  const KanbanNewCard = ({ onSumbit }) => {
    const [title, setTitle] = useState('');
    const handleChange = (e) => {
      setTitle(e.target.value);
    };
    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        onSumbit(title);
      }
    };
    return (
      <li className='kanban-card'>
        <h3>添加新任务</h3>
        <div className='card-title'>
          <input type='text' placeholder='请输入任务名称' onChange={handleChange} onKeyDown={handleKeyDown} />
        </div>
      </li>
    );
  };

  const handleSubmit = (title) => {
    setTodoList(old => [{ title, time: new Date().toLocaleString() }, ...old]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>我的看板</h1>
      </header>
      <main className="kanban-board">
        <section className='kanban-column column-todo'>
          <h2>待办事项<button>⊕添加新任务</button></h2>
          <ul>
            <KanbanNewCard onSumbit={handleSubmit} />
            <KanbanCardList list={todoList} />
          </ul>
        </section>
        <section className='kanban-column column-ongoing'>
          <h2>进行中</h2>
          <ul>
            <KanbanCardList list={ongoingList} />
          </ul>
        </section>
        <section className='kanban-column column-done'>
          <h2>已完成</h2>
          <ul>
            <KanbanCardList list={doneList} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
