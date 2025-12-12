import { useState } from 'react';
function App() {
  //All states add here
  const [tasks, setTasks] = useState([]); // State to hold the list of tasks

  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  return (
    <div className="min-h-screen bg-gray-900 text-white">
        {/*Header*/}
        <header className="bg-gray-800 border-b border-gray-700 p-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold">Task Manager</h1>

                {/* Pore search box add korbo!! */}
            </div>
        </header>

        {/*Main Content*/}
        <main className="max-w-7xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Your Tasks</h2>

                {/* Buttons */}
                <div className="flex gap-4">
                    <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold">
                    Add Task
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg font-semibold">
                    Delete All
                    </button>
                </div>
            </div>

            <p>Task aikhane add korbo!!</p>
        </main>


{/*---------------------------------------------------*/}
        {/* Add Task Modal */ }
        {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4">
                        Add New Task
                    </h2>

                    {/* Title Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Task Title</label>
                        <input
                            type ="text"
                            value ={/* title state */}
                            onChange ={/* setTitle function */}
                            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
                            placeholder="Enter task title"
                        />
                    </div>

                </div>

            </div>
        )}  

    </div>
  );
}

export default App;
