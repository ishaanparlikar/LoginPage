import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
const TodoList = () => {
	const [todo, setTodo] = React.useState("");
	const [items, setItems] = React.useState([]);
   const [posts,setPosts] = React.useState([]);
   const [uid,setId] = React.useState(uuidv4());
	// const [send,setSend]= React.useState({title:""})
	const [isLoading, setLoading] = React.useState(false);
	const addItem = async () => {
      setId(uuidv4())
		await axios.post(
			"http://localhost:3001/register",
			{title:todo,id:uid}
		);
      setPosts([...posts,{title:todo,id:uid} ]);

      setTodo("");
	};

	const deleteItem = async(id) => {
		await axios.delete(`http://localhost:3001/register/${id}`);
      const updatedData = items.filter(item => item._id !== id);
      setPosts(updatedData);
	};

	React.useEffect(() => {
		// api call
		const fetchPosts = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					`http://localhost:3001/recive`,
				);
				
            
             setItems(response.data);
             setPosts(response.data);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		fetchPosts();
	},[]);

	return (
		<div className="">
			<h1>Todo</h1>

			<Form>
				<Form.Group controlId="todo">
					<Form.Label>Add Todo</Form.Label>
					<div className="d-flex">
						<input
							placeholder="todo"
							value={todo}
							onChange={(e) =>
								setTodo(e.target.value)
							}
						/>
						<Button onClick={addItem}>Add Todo</Button>
					</div>
					<Form.Text className="text-muted">
						Add your daily tasks
					</Form.Text>
				</Form.Group>
			</Form>
			<div className="">
				<ul>
					{isLoading ? (
						<div>Loading...</div>
					) : (
						posts.map((item, index) => (
							<Card key={index}>
								<Card.Body>
									<Card.Title>
										{item.title}
									</Card.Title>
                           {item.id}
                           <h5>{item._id}</h5>
									<Button
										variant="danger"
										onClick={() =>deleteItem(item._id)}>
										Delete
									</Button>
								</Card.Body>
							</Card>
						))
					)}
				</ul>
			</div>
		</div>
	);
};

export default TodoList;
