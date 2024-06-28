
// import { useState } from 'react'

// export default function Input({onSubmit}) {
// 	const [input, setInput] = useState("")

// 	const handleSubmit = () => {
// 		if (!input) return;

// 		onSubmit(input)

// 		setInput("")
// 	}
// 	return (
// 		<div>
// 			<input type="text" value={input} onChange={e => setInput(e.target.value)} className='bg-black text-white flex flex-col rounded-md'/>
// 			<button onClick={handleSubmit} className='p-2 bg-indigo-500 teaxt-white rounded-md'>
// 				Add
// 			</button>
// 		</div>
// 	)
// }