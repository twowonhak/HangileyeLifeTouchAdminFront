import {DndProvider, useDrag, useDrop} from 'react-dnd';
import React, {memo} from "react";
import {HTML5Backend} from "react-dnd-html5-backend";

export default memo(function Drop({items, setItems, onDropItem}) {

      function DroppableList() {
        const [{isOver}, drop] = useDrop(() => ({
          accept: 'ITEM',
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
                  padding: '10px',
                  width: '100%',
                  minHeight: '100%',
                  backgroundColor: isOver ? 'lightgreen' : 'white',
                }}
            >
              {items.map((item) => (
                  <DraggableItem key={item.menuCd} item={item}/>
              ))}
            </div>
        )
      }


      function DraggableItem({item}) {
        const [{isDragging}, drag] = useDrag(() => ({
          type: 'ITEM',
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
                  padding: '10px',
                  margin: '4px',
                  backgroundColor: 'lightblue',
                }}
            >
              {item.menuNm}
            </div>
        );
      }

      return (
          <DndProvider backend={HTML5Backend}>
            <DroppableList/>
          </DndProvider>
      )

    }
)