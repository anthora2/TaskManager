// import React from 'react';

// export default function HomePage() {
//   return (
// 		<div>
// 			<h1 className='text-center mb-1 pt-5 text-3xl'> Task Manager</h1>

// 			<div className="flex items-center justify-center h-screen bg-white">
// 				<div className="w-4/5 h-4/5 bg-white border-2 border-gray-400 rounded-lg p-4 flex gap-4">
// 						<div className="flex-1 bg-gray-200 rounded-lg">D</div>
				
					
// 					<div className="flex-1 bg-gray-200 rounded-lg"></div>
// 					<div className="flex-1 bg-gray-200 rounded-lg"></div>
// 				</div>
// 			</div>
// 		</div>
    
//   );
// }
// src/components/TaskBoard.js
// ProjectBoard.js
// import React from 'react';

// const TaskBoard = () => {
//   return (
//     <div className="flex flex-col items-center h-screen bg-gray-100">
//       <div className="w-3/4 h-5/6 border-2 border-purple-700 rounded-lg overflow-hidden shadow-lg">
//         {/* Project Name */}
//         <div className="bg-purple-200 text-center py-4 border-b-2 border-purple-700">
//           <h1 className="text-2xl font-bold text-purple-800">Project Name</h1>
//         </div>

//         <div className="flex h-full">
//           <div className="flex-1 p-4 border-r-2 border-purple-700 bg-purple-100 flex flex-col">
//             <div className="text-center mb-4">
//               <h2 className="text-xl font-bold text-purple-800">Back Log</h2>
//             </div>
//             {/* Tasks can be added here */}
//           </div>
//           <div className="flex-1 p-4 border-r-2 border-purple-700 bg-purple-100 flex flex-col">
//             <div className="text-center mb-4">
//               <h2 className="text-xl font-bold text-purple-800">In Progress</h2>
//             </div>
//             {/* Tasks can be added here */}
//           </div>
//           <div className="flex-1 p-4 bg-purple-100 flex flex-col">
//             <div className="text-center mb-4">
//               <h2 className="text-xl font-bold text-purple-800">Ready for Review</h2>
//             </div>
//             {/* Tasks can be added here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskBoard;
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTasks = {
  backlog: [
    { id: 'task-1', content: 'Task 1' },
    { id: 'task-2', content: 'Task 2' },
  ],
  inProgress: [
    { id: 'task-3', content: 'Task 3' },
    { id: 'task-4', content: 'Task 4' },
  ],
  review: [
    { id: 'task-5', content: 'Task 5' },
    { id: 'task-6', content: 'Task 6' },
  ],
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn = tasks[source.droppableId];
    const destColumn = tasks[destination.droppableId];
    const [movedTask] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, movedTask);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    });
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <div className="w-3/4 h-5/6 border-2 border-purple-700 rounded-lg overflow-hidden shadow-lg">
        {/* Project Name */}
        <div className="bg-purple-200 text-center py-4 border-b-2 border-purple-700">
          <h1 className="text-2xl font-bold text-purple-800">Project Name</h1>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex h-full">
            <Droppable droppableId="backlog">
              {(provided) => (
                <div
                  className="flex-1 p-4 border-r-2 border-purple-700 bg-purple-100 flex flex-col"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="text-center mb-4">
                    <h2 className="text-xl font-bold text-purple-800">Back Log</h2>
                  </div>
                  {tasks.backlog.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white p-4 mb-4 rounded shadow"
                        >
                          {task.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="inProgress">
              {(provided) => (
                <div
                  className="flex-1 p-4 border-r-2 border-purple-700 bg-purple-100 flex flex-col"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="text-center mb-4">
                    <h2 className="text-xl font-bold text-purple-800">In Progress</h2>
                  </div>
                  {tasks.inProgress.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white p-4 mb-4 rounded shadow"
                        >
                          {task.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="review">
              {(provided) => (
                <div
                  className="flex-1 p-4 bg-purple-100 flex flex-col"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="text-center mb-4">
                    <h2 className="text-xl font-bold text-purple-800">Ready for Review</h2>
                  </div>
                  {tasks.review.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white p-4 mb-4 rounded shadow"
                        >
                          {task.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default TaskBoard;

