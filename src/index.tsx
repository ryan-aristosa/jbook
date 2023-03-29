import ReactDOM from 'react-dom/client';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import CodeCell from './components/code-cell';

const App = () => {
  return (
    <div>
      <CodeCell />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
