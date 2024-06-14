import React, { useState } from 'react';

function TravelList() {
  const [itemList, setItemList] = useState([]);
  const [item, setItem] = useState('');

  const addItem = () => {
    if (item !== '') {
      setItemList([...itemList, item]);
      setItem('');
    }
  };

  const removeItem = (index) => {
    setItemList(itemList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {itemList.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TravelList;
