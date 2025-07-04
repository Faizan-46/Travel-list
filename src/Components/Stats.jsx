import Item from './Item';
export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const Percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {Percentage == 100
          ? 'You Got Everything! Ready To Go ✈'
          : `
        👜 You have ${numItems} items on your list, and you are already packed
        ${numPacked} (${Percentage}%)`}
      </em>
    </footer>
  );
}
