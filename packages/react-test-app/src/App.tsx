import { TreeContext, TreeModel } from '@siemens/ix';
import {
  iconCut,
  iconPrint,
  iconStar,
  iconError,
} from '@siemens/ix-icons/icons';
import { IxButton, IxIcon, IxTree } from '@siemens/ix-react';
import { useRef, useState } from 'react';

type TreeData = {
  name: string;
  icon: string;
};

function createModel(name: string, icon: string) {
  return {
    root: {
      id: 'root',
      data: {
        icon: '',
        name: '',
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        name,
        icon,
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
        icon: iconCut,
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
        icon: iconPrint,
      },
      hasChildren: false,
      children: [],
    },
  };
}

export default () => {
  const treeRef = useRef<HTMLIxTreeElement>(null);
  const [context, setContext] = useState<TreeContext>({});
  const [model, setModel] = useState<TreeModel<TreeData>>(
    createModel('Sample', iconStar)
  );

  function modify() {
    setContext({
      sample: {
        isExpanded: true,
        isSelected: false,
      },
      'sample-child-2': {
        isSelected: true,
        isExpanded: false,
      },
    });
    setModel(createModel('Bad sample', iconError));

    // treeRef.current?.markItemAsDirty(['sample', 'sample-child-2']);
  }

  return (
    <div
      style={{
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '40rem',
      }}
    >
      <IxButton onClick={modify} ghost style={{ marginBottom: '2rem' }}>
        Modify
      </IxButton>
      <IxTree
        ref={treeRef}
        root="root"
        model={model}
        context={context}
        onContextChange={({ detail }: CustomEvent<TreeContext>) => {
          setContext(detail);
        }}
        renderItem={(data: TreeData) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IxIcon
              name={data.icon}
              size="16"
              style={{
                marginInlineEnd: '0.5rem',
              }}
            />
            {data.name}
          </div>
        )}
      ></IxTree>
    </div>
  );
};
