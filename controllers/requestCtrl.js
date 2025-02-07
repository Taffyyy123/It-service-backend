const RequestModel = require("../models/requestModel");

const createRequest = async (req, res) => {
  try {
    const body = req.body;
    const request = await RequestModel.create(body);
    res.status(200).send(request);
  } catch (error) {
    console.log(error);
    res.send("Error creating request");
  }
};
const getRequests = async (req, res) => {
  try {
    const response = await RequestModel.find();
    res.send(response);
  } catch (error) {
    console.log(error);
    res.send("Error fetching requests");
  }
};
const getOneRequest = async (req, res) => {
  try {
    const requestId = req.params.requestId;
    const request = await RequestModel.findById(requestId);
    if (!request) {
      return res.status(404).send({ message: "Request not found" });
    }
    res.status(200).send(request);
  } catch (error) {
    console.log(error);
    res.send("Error fetching request");
  }
};
module.exports = { createRequest, getRequests, getOneRequest };
