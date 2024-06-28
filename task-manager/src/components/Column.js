
// import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
// import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from "@dnd-kit/core"
// import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
// import Task from "./Task"
// import { useState } from "react";
// import Input from "./Input";

// export default function Column({tasksInput}) {

// 	const [tasks, setTasks] = useState([
// 		{id: 1, title : "Add tasks to home page"},
// 		{id: 2, title : "Eat good food"},
// 		{id: 3, title : "get nice bowl"}
// 	]);

// 	const addTask = () => {
		
// 	}

// 	const getTaskPos = id => tasks.findIndex(task =>
// 		task.id === id)

// 	const handleDragEnd = event => {	
// 		const {active, over} = event

// 		if (active.id === over.id) return;
		
// 		setTasks(tasks => {
// 			const originalPos = getTaskPos(active.id)
// 			const newPos = getTaskPos(over.id)

// 			return arrayMove(tasks, originalPos, newPos)
// 		});
// 	}
// 	const sensors = useSensors(
// 		useSensor(PointerSensor),
// 		useSensor(TouchSensor), 
// 		useSensor(KeyboardSensor, {
// 			coordinateGetter : sortableKeyboardCoordinates,
// 		})
// 		);



//     return (
//         <div>
// 					<DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>

// 						<SortableContext items={tasks} strategy={verticalListSortingStrategy}>
// 							{tasks.map((task) => (
// 								<Task id={task.id} title={task.title} key={task.id} />
// 								))}
// 							</SortableContext>

// 					</DndContext>
//         </div>
//     )
// }


// // import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
// // import Task from "./Task";

// // export default function Column({ columnId, tasks }) {
// //     return (
// //         <div style={{ border: '1px solid black', padding: '1rem', minWidth: '200px' }}>
// //             <SortableContext items={tasks.map(task => task.id)} strategy={verticalListSortingStrategy}>
// //                 {tasks.map(task => (
// //                     <Task key={task.id} id={task.id} title={task.title} />
// //                 ))}
// //             </SortableContext>
// //         </div>
// //     );
// // }
