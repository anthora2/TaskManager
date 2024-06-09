import React from 'react';

export default function HomePage() {
  return (
		<div>
			<h1 className='text-center mb-1 pt-5'> Task Manager</h1>
			<div className="flex items-center justify-center h-screen bg-white">
				<div className="w-4/5 h-4/5 bg-white border-2 border-gray-400 rounded-lg p-4 flex gap-4">
					<div className="flex-1 bg-gray-200 rounded-lg"></div>
					<div className="flex-1 bg-gray-200 rounded-lg"></div>
					<div className="flex-1 bg-gray-200 rounded-lg"></div>
				</div>
			</div>
		</div>
    
  );
}

