
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from "@dnd-kit/core"
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Task from "./Task"


export default function Column({tasks}) {

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


		//okay so the problem right now is just figuring out what to do about the column being draggable

    return (
        <div>
					<DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>

						<SortableContext items={tasks} strategy={verticalListSortingStrategy}>
							{tasks.map((task) => (
								<Task id={task.id} title={task.title} key={task.id} />
								))}
							</SortableContext>

					</DndContext>
        </div>
    )
}