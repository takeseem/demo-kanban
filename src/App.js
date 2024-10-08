import logo from './logo.svg';
import './App.css';

function App() {
  const todoList = [
    { id: 1, title: '任务-1', time: '2024-10-08 10:35' },
    { id: 3, title: '任务-3', time: '2024-10-08 10:35' },
    { id: 3, title: '任务-5', time: '2024-10-08 10:35' },
  ];
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>我的看板</h1>
      </header>
      <main className="kanban-board">
        <section className='kanban-column column-todo'>
          <h2>待办事项</h2>
          <ul>
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
