import { useState } from 'react';
import EmployeeManagement from './components/emp_manage.jsx';
import EmployeeView from './components/emp_view.jsx';

function App() {
  const [view, setView] = useState('management');

  const toggleView = () => {
    setView((prevView) => (prevView === 'management' ? 'view' : 'management'));
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={toggleView}>
        Switch to {view === 'management' ? 'Employee View' : 'Employee Management'}
      </button>
      {view === 'management' ? <EmployeeManagement /> : <EmployeeView />}
    </div>
  );
}

export default App;
