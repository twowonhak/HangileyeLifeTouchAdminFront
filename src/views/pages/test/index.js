import React, {useState} from "react";
import 'react-tooltip/dist/react-tooltip.css';
import {DndProvider, useDrag, useDrop} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

export default function Test() {

  const [list1, setList1] = useState([
    {id: 1, content: 'Item 1'},
    {id: 2, content: 'Item 2'},
  ]);

  const [list2, setList2] = useState([
    {id: 3, content: 'Item 3'},
    {id: 4, content: 'Item 4'},
  ]);

  const ItemType = 'ITEM';

  const DraggableItem = ({item}) => {
    const [{isDragging}, drag] = useDrag(() => ({
      type: ItemType,
      item,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));

    return (
        <div
            ref={drag}
            style={{
              opacity: isDragging ? 0.5 : 1,
              cursor: 'move',
              padding: '8px',
              margin: '4px',
              backgroundColor: 'lightblue',
            }}
        >
          {item.content}
        </div>
    );
  };

  const DroppableList = ({items, setItems, onDropItem}) => {
    const [{isOver}, drop] = useDrop(() => ({
      accept: ItemType,
      drop: (item) => {
        onDropItem(item);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }));

    return (
        <div
            ref={drop}
            style={{
              padding: '16px',
              width: '200px',
              minHeight: '400px',
              backgroundColor: isOver ? 'lightgreen' : 'lightgray',
            }}
        >
          {items.map((item) => (
              <DraggableItem key={item.id} item={item}/>
          ))}
        </div>
    );
  };

  const App = () => {

    const handleDropItem = (item, sourceList, setSourceList, mainList, setMainList) => {

      if (!sourceList.some((i) => i.id === item.id)) {
        setSourceList([...sourceList, item])
      }
        setMainList(mainList.filter(obj => obj.id !== item.id))

    };


    return (
        <div style={{display: 'flex', justifyContent: 'space-around', padding: '50px'}}>
          <DroppableList
              items={list1}
              setItems={setList1}
              onDropItem={(item) => handleDropItem(item,  list1, setList1, list2, setList2)}
          />
          <DroppableList
              items={list2}
              setItems={setList2}
              onDropItem={(item) => handleDropItem(item, list2, setList2, list1, setList1)}
          />
        </div>
    );
  };


  ////////////////////////////////////////////
  return (
      <DndProvider backend={HTML5Backend}>
        <App/>
      </DndProvider>
  )
}