import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from "@dnd-kit/core"
import { useState } from "react"
import Column from "./Column";
import Input from "./Input"
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export default function TaskBoard() {
	const [tasks, setTasks] = useState([
		{id: 1, title : "Add tasks to home page"},
		{id: 2, title : "Eat good food"},
		{id: 3, title : "get bitches"}
	]);

	const addTask = title => {
		setTasks(tasks => [...tasks, {id: tasks.length + 1, title}])
	}
	const getTaskPos = id => tasks.findIndex(task =>
		task.id === id)

	const handleDragEnd = event => {	
		const {active, over} = event

		if (active.id === over.id) return;
		
		setTasks(tasks => {
			const originalPos = getTaskPos(active.id)
			const newPos = getTaskPos(over.id)

			return arrayMove(tasks, originalPos, newPos)
		});
	}
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(TouchSensor), 
		useSensor(KeyboardSensor, {
			coordinateGetter : sortableKeyboardCoordinates,
		})
		);


    return (
			<div className="w-full bg-indigo-600 text-white rounded-md border-black">
				<h1 className="w-full indigo-700 text-center"> PROJECT NAME</h1>
				<div className="grid grid-cols-3 border-white">
						
						<Column tasks={tasks}/>
						<Column tasks={tasks}/>
						<Column tasks={tasks}/>

						
						<h1 className="w-full text-center"> hellow world</h1>
					<h1 className="w-full text-center"> hellow world</h1>
					<h1 className="w-full text-center"> hellow world</h1>

					<Input onSubmit={addTask}/>
				</div>
			</div>

    )
}