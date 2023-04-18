import AppTtitle from "./AppTitle";
import TodoItem from "./TodoItem";
import hide from '../assets/hide.svg'

const TodoList = ({ tasks, onCheck, onHide }) => {
    const completedTasks = tasks.filter(task => task.isCompleted).length;
    const totalTasks = tasks.length;

    return (
        <div className="todoList">
            <AppTtitle title="Your tasks" />
            {
                totalTasks === 0 ?
                    <p className="todoList__empty">You dont have tasks</p> :
                    <span className="font-semibold">Completed {completedTasks} to {totalTasks}</span>
            }

            {
                tasks ?
                    <ul className="py-2.5 flex flex-col gap-4">
                        {
                            tasks.map((tasks, index) => {
                                return <TodoItem key={index} task={tasks} onCheck={() => onCheck(index)} />
                            })
                        }
                    </ul>
                    :
                    null
            }
            <button onClick={onHide} className="text-center flex items-center gap-4" type="button">
                <img src={hide} alt="Hide completed tasks" />
                Hide completed tasks
            </button>
        </div>
    );
};

export default TodoList;