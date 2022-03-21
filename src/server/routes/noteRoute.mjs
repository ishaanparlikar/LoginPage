import express from "express";
const router = express.Router();
import Note from "../models/noteModel.cjs";
import app from '../../server.mjs'
const reciveData = Note

const User = Note

router.post("/register", (req, res) => {
	const { id, title} = req.body;

	User.findOne({ title: title, id:id })
		.then(() => {

			const user = new User({
				id,
				title,
			});

			user.save()
				.then(() => {
					res.status(201).json({
						message: "Data Stored Succesfuly",
					});
				})
				.catch((err) =>
					res.status(500).json({ error: "Faiiled" }),
				);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get("/recive", function (req, res) {
	console.log("Get requst");
	reciveData.find({}).exec(function (err, rData) {
		if (err) {
			console.log("error retriving data");
		} else {
			res.json(rData);
		}
	});
});

router.delete("/register/:id", function (req, res) {
	console.log("deleting a crypto ");
	User.findByIdAndDelete(req.params.id, function (err, deleteCrypto) {
		if (err) {
			res.send("error deleting crypto");
		} else {
			res.json(deleteCrypto);
		}
	});
});

export default router;
