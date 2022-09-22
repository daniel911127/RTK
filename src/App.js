import { useSelector } from 'react-redux';
import './App.css';
import Button from './component/Button';
import Counter from './component/Counter';
import Input from './component/Input';

function App() {
  const input = useSelector((state) => state.InputSlices.input);

  return (
    <div className='App'>
      <h2>{input}</h2>
      <Input />
      <Counter />
      <Button>increment</Button>
      <Button>decrement</Button>
    </div>
  );
}

export default App;
