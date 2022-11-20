import { useStote, actions } from '../store';

const TestGlobalState = () => {
    const [state, dispathch] = useStote()
    const { todos, todoInput } = state

    console.log('to do Input: ', todoInput);

    const handleAdd = () => {
        dispathch(actions.addToDo(todoInput))
    }

    console.log(todos);

  return (
    <div>
        <input 
            value={todoInput}
            placeholder="Enter todo..."
            onChange={e => {
                dispathch(actions.setToDoInput(e.target.value))
            }}
        />
        <button onClick={handleAdd}>Add</button>
        {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
        ))}
    </div>
  )
}

export default TestGlobalState