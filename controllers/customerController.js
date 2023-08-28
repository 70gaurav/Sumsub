import { db } from "../models/index.js";
import bcrypt from "bcrypt"


const Customer = db.CustomerModel;


export const signup = async (req, res) => {
   
    console.log(req.body);
    const user = {
		email: req.body.email,
		password: req.body.password,
		device_type: (req.body.device_type) ? req.body.device_type : '',
		device_token: (req.body.device_token) ? req.body.device_token : ""
	};

	Customer.findOne({ where: { email: req.body.email }, attributes: { exclude: ['password'] } })
		.then(async function (response) {

			if (!response) {

				//Save Customer in the database
				Customer.create(user)
					.then(async data => {

						return res.json({
							"status_code": 200,
							"message": "User Register successfully.",
							"data": data
						});
					})
					.catch(err => {
						return res.json({
							"status_code": 422,
							"message": "Some error occurred while registering user:" + err
						});
					});
			} else {
				Customer.update(user, { where: { id: response.id }, returning: true });
				const loandata = await Loan.findOne({ where: { customer_id: response.id } });
				return res.json({
					"status_code": 422,
					"message": "User already Register.",
					"data": response,
					"loandata": loandata
				});
			}
		}).catch((err) => {
			return res.json({
				"status_code": 422,
				"message": "Somthing went wrong."
			});
		})
  };
  