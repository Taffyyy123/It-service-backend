const Router = require("express");
const {
  createRequest,
  getRequests,
  getOneRequest,
} = require("../controllers/requestCtrl");
const requestRouter = Router();

requestRouter.post("/createRequest", createRequest);
requestRouter.get("/getRequests", getRequests);
requestRouter.get("/getRequest/:requestId", getOneRequest);

module.exports = requestRouter;
