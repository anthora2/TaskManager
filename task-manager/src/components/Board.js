// // import { DndContext } from "@dnd-kit/core";
// // import { useState } from "react";


// // export default function Board() {

// // 	const [column, setColumn] = useState({
// // 		"column-1" : [
// // 			{id: 1, title: "add tasks to home page"},
// // 			{id: 2, title: "say hi to luke"}
// // 		], 
// // 		"column-2" : [
// // 			{id: 3, title: "get food"}
// // 		],
// // 		"column-3" : [
// // 			{id: 4, title: "eat food"}
// // 		]
// // 	});

	

// // 	return(
// // 		<div>
// // 			<DndContext>
// // 				<div className="">

// // 				</div>
				
// // 			</DndContext>
// // 		</div>
// // 	)
// // }

// import react, { useState } from "react";
// import { FaFire } from "react-icons/fa"
// import { FaTrash } from "react-icons/fi"
// //will need to run npm install to activate these


// const Board = () => {
// 	const [cards, setCards] = useState([]);

// 	return(
// 		<div className="flex h-full w-full gap-3 overflow-scroll p-12">
// 			<Column 
// 				title="Backlog"
// 				column="Backlog"
// 				headingColor="text-neutral-500"
// 				cards={cards}
// 				setCards={setCards}		
// 			/>

// 			<Column 
// 				title="TODO"
// 				column="todo"
// 				headingColor="text-yellow-200"
// 				cards={cards}
// 				setCards={setCards}		
// 			/>

// 			<Column 
// 				title="In Progress"
// 				column="doing"
// 				headingColor="text-blue-200"
// 				cards={cards}
// 				setCards={setCards}		
// 			/>

// 			<Column 
// 				title="Complete"
// 				column="done"
// 				headingColor="text-emerald-200"
// 				cards={cards}
// 				setCards={setCards}		
// 			/>
// 			<BurnBarrel setCards={setCards} />

// 		</div>
// 	)
// }

// const Column = ({title, headingColor, column, cards, setCards}) => {
// 	const [active, setActive] = useState(false);

// 	const filteredCards = cards.filter((c) => c.column === column);

// 	return (
// 		<div className="w-56 shrink-0">
// 			<div className="mb-3 flex items-center justify-between">
// 				<h3 className={`font-medium ${headingColor}`}>
// 					{title}
// 				</h3>
// 				<span className="rounded text-sm">
// 					{filteredCards.length}
// 				</span>
// 			</div>
// 			<div className={`h-full w-full transition-colors ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"}`}>
// 				{filteredCards.map((c) => {
// 					return <Card key={c.id} {...c} />
// 				})}
// 				<DropIndicator beforeId="-1" column={column} />
// 				<AddCard colum={column} setCards={setCards}/>
// 			</div>
// 		</div>
// 	)
// }

// const Card = ({title, id, column}) => {
// 	return (
// 		<>
// 		<DropIndicator beforeId={id} column={column}/>
// 			<div draggable="true" className="cursor-grab rounded-border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing">
// 				<p className="text-sm text-neutral-100">
// 					{title}
// 				</p>
// 			</div>
// 		</>
// 	)
// }

// const DropIndicator= ({beforeId, column}) => {
// 	return(
// 		<div data-before={beforeId || "-1"} data-column={column} className="my-0.5 h-0.5 w-full bg-violet-400 opacity-30">

// 		</div>
// 	)
// }

// const DEFAULT_CARDS = [
// 	{ title: "Look into render bug on dashboard", id: "1", column: "backlog"},
// 	{ title: "Look into render bug on dashboard", id: "2", column: "backlog"},
// 	{ title: "Look into render bug on dashboard", id: "3", column: "todo"},

// 	{ title: "Look into render bug on dashboard", id: "4", column: "doing"}
// ]
// const AddCard = ({ column, setCards }) => {
// 	const [text, setText] = useState("")
// 	const [adding, setAdding] = useState(false)
// 	return(
// 		<>
// 			{adding ? (
// 				<form>
// 					<textarea onChange={(e) => setText(e.target.value)}
// 						autoFocus
// 						placeholder="Add new task"
// 						className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
// 					/>
// 				</form>
// 				) : (
// 				 <button onClick={() => setAdding(true)} className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 
// 					transtion-colors hover:text-neutral-50">
// 				<span>
// 					 Add Card
// 				</span>
// 				<FiPlus />
// 				</button>)}
// 		</>
// 	)
// }
// const BurnBarrel = ({ setCards }) => {
// 	const [active, setActive] = useState(false);


// 	return(
// 		<div className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
// 			active ? 
// 				"border-red-800 bg-red-800/20 text-red-500"
// 				: "border-neutral-500 bg-neutral-500/20 text-neutral-500"
// 		}`}>
// 			{active ? <FaFire className="animate-bounce"/> : <FiTrash />}
// 		</div>
// 	)
// }