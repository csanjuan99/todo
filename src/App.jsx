import { useState, useEffect } from 'react'
import AppTtitle from './ components/AppTitle'
import TodoSearch from './ components/TodoSearch'
import TodoList from './ components/TodoList'

function App() {
  const [taskName, setTaskName] = useState('')
  const [taskList, setTaskList] = useState([])
  const [hideList, setHideList] = useState([])

  const handleTaskName = (event) => {
    setTaskName(event.target.value)
  }

  const handleCreateTask = () => {
    if (!taskName) return
    const task = taskName;
    const newTaskList = [...taskList, {
      name: task,
      isCompleted: false
    }]
    setTaskList(newTaskList)
    setTaskName('')
  }

  const handleCheck = (index) => {
    const newTaskList = [...taskList]
    newTaskList[index].isCompleted = !newTaskList[index].isCompleted
    setTaskList(newTaskList)
  }

  const handleHide = () => {
    const newHideList = taskList.filter(task => task.isCompleted);
    const newTaskList = taskList.filter(task => !task.isCompleted);
    if (hideList.length > 0) {
      setTaskList([...newTaskList, ...hideList]);
      setHideList([]);
    } else {
      setTaskList(newTaskList);
      setHideList(newHideList);
    }
  }

  useEffect(() => {
    console.log('hello world')
  }, [])


  return (
    <div className="container p-20">
      <AppTtitle title="Create new task" />
      <TodoSearch
        label={'Task Name'}
        placeholder={'Launch rocket to the moon'}
        isCreating={true}
        onChange={handleTaskName}
        onCreate={handleCreateTask}
      />
      <TodoList tasks={taskList} onCheck={handleCheck} onHide={handleHide} />
    </div>
  )
}

export default App
