import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

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

    // 使用 useRef 创建 input 的引用
    const inputRef = useRef(null);
    // 使用 useEffect 在组件渲染后调用 focus
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus(); // 让 input 元素获得焦点
      }
    }, []); // 空数组确保这个 effect 只在初次渲染时运行一次
    
    return (
      <li className='kanban-card'>
        <h3>添加新任务</h3>
        <div className='card-title'>
          <input type='text' placeholder='请输入任务名称' onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef} />
        </div>
      </li>
    );
  };

  const [showAdd, setShowAdd] = useState(false);
  const handleAddClick = () => {
    setShowAdd(true);
  };
  const handleSubmit = (title) => {
    setTodoList(old => [{ title, time: new Date().toLocaleString() }, ...old]);
    setShowAdd(false);
  };

  const KanbanColumn = ({ title, className, list, children }) => (
    <section className={`kanban-column ${className}`}>
      <h2>{title}</h2>
      <ul>
        {children}
        <KanbanCardList list={list} />
      </ul>
    </section>
  );

  const KanbanBoard = ({ children }) => (
    <main className="kanban-board">
      {children}
    </main>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>我的看板</h1>
      </header>
      <KanbanBoard>
        <KanbanColumn
          title={<>待办事项<button onClick={handleAddClick} disabled={showAdd}>⊕添加新任务</button></>}
          className={'column-todo'}
          list={todoList}
        >
          {showAdd && <KanbanNewCard onSumbit={handleSubmit} />}
        </KanbanColumn>
        <KanbanColumn title="进行中" className="column-ongoing" list={ongoingList} />
        <KanbanColumn title="已完成" className="column-done" list={doneList} />
      </KanbanBoard>
    </div>
  );
}

export default App;
