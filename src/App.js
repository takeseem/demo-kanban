import logo from './logo.svg';
import './App.css';

function App() {
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
            <li>
              <div>任务-1</div>
              <div>2024-10-08 10:35</div>
            </li>
          </ul>
        </section>
        <section className='kanban-column column-ongoing'>
          <h2>进行中</h2>
          <ul>
            <li>
              <div>任务-1</div>
              <div>2024-10-08 10:35</div>
            </li>
          </ul>
        </section>
        <section className='kanban-column column-done'>
          <h2>已完成</h2>
          <ul>
            <li>
              <div>任务-1</div>
              <div>2024-10-08 10:35</div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
