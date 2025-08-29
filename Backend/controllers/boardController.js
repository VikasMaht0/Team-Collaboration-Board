const Board = require('../models/Board');


exports.getBoards = async (req, res, next) => {
try {
const boards = await Board.find().sort({ createdAt: -1 });
res.json(boards);
} catch (err) {
next(err);
}
};

exports.createBoard = async (req, res, next) => {
try {
const { name } = req.body;
const board = await Board.create({ name });
res.status(201).json(board);
} catch (err) {
next(err);
}
};