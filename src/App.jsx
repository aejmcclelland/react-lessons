import './App.css'

import Hello from './Hello';

function App() {
  const helloComponents = Array(3).fill(<Hello />);

  return (
    <div>
      {helloComponents}
    </div>
  );
}

export default App;