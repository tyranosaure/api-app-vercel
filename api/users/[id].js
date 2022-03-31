const users = ["Bob Smith", "Guillaume Bibeau"];

export default (req, res) => {
	const { id } = req.query;
	res.status(200).json({ user: users[Number(id)] });
};
