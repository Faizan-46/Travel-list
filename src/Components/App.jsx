import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function Reset() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form AddItems={handleItems} />
      <PackingList
        items={items}
        deleteItems={handleDelete}
        onDeleteItems={handleToggle}
        onReset={Reset}
      />
      <Stats items={items} />
    </div>
  );
}
