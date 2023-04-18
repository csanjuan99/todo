const TodoSearch = ({ placeholder, label, isCreating, onChange, onCreate }) => {
    return (
        <div className="flex flex-col">
            {label ? <label className="my-2.5" htmlFor="search">{label}:</label> : null}
            <input 
            id="search" 
            type="search"
            className="px-5 py-2 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-blue-600 focus:border-transparent trasition-all duration-200" 
            placeholder={placeholder}
             onChange={onChange} />
            {
                isCreating ?
                    <button className="self-start my-2.5 px-5 py-2 
                    rounded-md bg-blue-600 hover:bg-blue-700 transition-all 
                    duration-200 tracking-wide font-semibold" type="button" onClick={onCreate}>
                        Create task
                    </button>
                    :
                    null
            }

        </div>
    );
}

export default TodoSearch;