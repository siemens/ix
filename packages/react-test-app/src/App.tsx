import { CwDropdown, CwDropdownItem, CwIcon } from '@siemens/ix-react';
import { useState } from 'react';

function App() {
  const [items] = useState(['Item 1', 'Abc 2', 'Blabla 3']);
  const [filter, setFilter] = useState('');

  return (
    <div>
      <CwIcon name="print" style={{ color: 'red' }} id="test" />
      <CwDropdown trigger={'test'} closeBehavior="outside">
        <input
          onInput={(e) => setFilter((e.target as HTMLInputElement).value)}
        />

        {items
          .filter((i) => {
            if (!filter) {
              return true;
            }

            return i.includes(filter);
          })
          .map((i) => (
            <CwDropdownItem label={i} key={i} />
          ))}
      </CwDropdown>
    </div>
  );
}

export default App;
