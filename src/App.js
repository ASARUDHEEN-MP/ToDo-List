import { useState } from 'react';
import './App.css';

function App() {
  const [one, setOne] = useState('');
  const [two, setTwo] = useState([]);

  const handleAddItem = () => {
    if (one.trim() !== '') {
      setTwo([...two, { id: Date.now(), text: one, status: false }]);
      setOne('');
    }
  };
  

  const handleToggleStatus = (itemId) => {
    setTwo(
      two.map((item) =>
        item.id === itemId ? { ...item, status: !item.status } : item
      )
    );
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = two.filter((itaem) => itaem.id !== itemId);
    setTwo(updatedItems);
  };
  const getCurrentTime = () => {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    return currentTime;
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        
        <h2>Time{getCurrentTime()}   🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={one}
          onChange={(e) => setOne(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={handleAddItem} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {two.map((item) => (
          <div className="todo" key={item.id}>
            <div className="left">
              <input
                onChange={() => handleToggleStatus(item.id)}
                checked={item.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{item.text}</p>
            </div>
            <div className="right">
              <i
                className="fas fa-times"
                onClick={() => handleDeleteItem(item.id)}
              ></i>
            </div>
          </div>
        ))}
        {two.map((obj)=>{
                 if (obj.status){
                  return(<h1>{obj.text}</h1>)
                 }
        })}
      </div>

    </div>
  );
}

export default App;
