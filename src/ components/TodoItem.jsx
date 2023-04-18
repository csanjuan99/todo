import CheckComponent from "./CheckComponent";
import UncheckComponent from "./UncheckComponent";

const TodoItem = ({ task, onCheck }) => {
    return (
        <li className={task.isCompleted ? 'opacity-50 bg-white rounded-md bg-opacity-70 backdrop-blur-lg px-5 py-2 flex items-center gap-4 text-neutral-900 text-lg font-semibold' : 'bg-white rounded-md bg-opacity-70 backdrop-blur-lg px-5 py-2 flex items-center gap-4 text-neutral-900 text-lg font-semibold'}>
            <button onClick={onCheck} type="button">
                {task.isCompleted ? <CheckComponent /> : <UncheckComponent />}
            </button>
            <span className={ task.isCompleted ? 'line-through' : '' }>{task.name}</span>
        </li>
    );
};

export default TodoItem;