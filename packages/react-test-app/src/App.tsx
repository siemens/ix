import { IxDropdown, IxDropdownItem, IxIcon } from '@siemens/ix-react';
import { useState } from 'react';

function App() {
  const [items] = useState(['Item 1', 'Abc 2', 'Blabla 3']);
  const [filter, setFilter] = useState('');

  return (
    <div>
      <IxIcon name="print" style={{ color: 'red' }} id="test" />
      <IxDropdown trigger={'test'} closeBehavior="outside">
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
            <IxDropdownItem label={i} key={i} />
          ))}
      </IxDropdown>
    </div>
  );
}

export default App;
