import { useEffect, useState } from 'react';
import "./Style/Todo.css"
import { getDatabase, ref, set, onValue, remove, update, push, child } from 'firebase/database';
import BasicModal from './Components/Modal';
const db = getDatabase();

function TodoApp() {
	let [todos, setTodos] = useState([]);
	let [text, setText] = useState("");
	useEffect(() => {
		onValue(ref(db, 'TODOS/'), (data) => {
			setTodos((todos) => {
				todos = [];
				try {
					console.log(data.val())
					Object.values(data.val()).map((todo) => {
						todos.push({
							text: todo.value,
							newValue: "",
							confirmed: true,
							key: todo.key
						})
						return null;
					})
				}
				catch { }
				return todos;
			})
		})
	}, [])
	return (
		<div className="todoApp">
			<div className="App">
				<header className="App-header">
					<h1>TODOS</h1>
					<div className="todoList">
						{todos.map((todo, i) => {
							return (
								<div className="todoItem" key={todo.key}>
									{
										(todo.confirmed && <div className='todoText'>{todo.text}</div>)
										||
										(<input className='todoText' value={todo.newValue} onChange={(e) => {
											todos[i].newValue = e.target.value;
											setTodos([...todos]);
										}
										}></input>)
									}
									<div className='todoOptions'>
										{
											(todos[i].confirmed
												&&
												<button onClick={(e) => {
													todos[i].confirmed = false;
													todos[i].newValue = todos[i].text;
													setTodos([...todos]);
												}
												}>Edit
												</button>
											)
											||
											(
												<button onClick={() => {
													todos[i].text = todos[i].newValue;
													todos[i].confirmed = true;
													update(child(ref(db, 'TODOS/'), todos[i].key), { value: todos[i].newValue })
													setTodos([...todos]);
												}
												}>Update</button>
											)
										}
										{
											(todos[i].confirmed
												&&
												<button onClick={() => {
													remove(ref(db, 'TODOS/' + todos[i].key))
													todos.splice(i, 1);
													setTodos([...todos]);
												}
												}>Delete</button>
											)
											||
											(
												<button onClick={() => {
													todos[i].confirmed = true;
													todos[i].newValue = "";
													setTodos([...todos]);
												}
												}>Cancel Update</button>
											)
										}
									</div>
								</div>
							);
						})}
					</div>
					<form className="buttonHolder" onSubmit={
						(e) => {
							if (text) {
								let tempKey = push(ref(db, 'TODOS')).key
								todos.push({
									value: text,
									confirmed: true,
									newValue: "",
								});
								setTodos([...todos]);
								setText("");
								set(child(ref(db, 'TODOS'), tempKey), {
									key: tempKey,
									value: text
								})
							}
							e.preventDefault();
						}
					}>
						<input type="text" onChange={(e) => { setText(e.target.value) }} value={text} />
						<button>Add !</button>
						<button onClick={(e) => {
							todos.map((todo) => {
								remove(child(ref(db, 'TODOS'), todo.key))
								return null;
							})
							setTodos([]);
							e.preventDefault();
						}}>Delete All !</button>
					</form>
				</header>
			</div >
			<BasicModal text="Text" heading="heading" />
		</div >
	);
}

export default TodoApp;
