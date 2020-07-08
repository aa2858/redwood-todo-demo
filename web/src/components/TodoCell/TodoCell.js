export const QUERY = gql`
	query TODO($id: Int!) {
		todo(id: $id) {
			id
			body
			status
		}
	}
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => <div>Error: {error.message}</div>;

export const Success = ({ todo }) => {
	return JSON.stringify(todo);
};
