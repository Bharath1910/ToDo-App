function TodoList({todoList, handleChange}) {
    return (
        <>
        {
            todoList.map((todo) => {
                return (
                    <>
                        <label>{todo.title}</label>
                        <input 
                            type="checkbox" 
                            value="hello" 
                            checked={todo.completed}
                            onChange={handleChange}
                        />
                        <br/>
                    </>
                );
            })
        }
        </>
    )
}

export default TodoList