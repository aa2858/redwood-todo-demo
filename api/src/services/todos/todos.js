import { db } from 'src/lib/db';

export const todo = ({ id }) =>
	db.todo.findOne({
		where: { id }
	});

export const todos = () => db.todo.findMany();

export const todosCount = () => db.todo.count();

export const createTodo = ({ body }) => db.todo.create({ data: { body } });

export const updateTodoStatus = ({ id, status }) =>
	db.todo.update({
		data: { status },
		where: { id }
	});

export const renameTodo = ({ id, body }) =>
	db.todo.update({
		data: { body },
		where: { id }
	});
