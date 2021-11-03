import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Class from "../models/ClassModel.js";
import jwt from "jsonwebtoken";
import axios from "axios";

// @desc    Get all roles
// @route   GET /admin/roles
// @access  Private/Admin
const getRoles = asyncHandler(async (req, res) => {
  const result = await axios.post(
    "https://dev-fnrh5opn.us.auth0.com/oauth/token",
    '{"client_id":"FohheJnq3XD0UoJ8b7yXYMYfeFdxQHOw","client_secret":"B-ONnG9xgl5mJ82NHIS7YVzRuKOft1C4j0kQGPNO0yfOTdosBJgBNipXq0wdO4My","audience":"https://dev-fnrh5opn.us.auth0.com/api/v2/","grant_type":"client_credentials"}',
    { headers: { "content-type": "application/json" } }
  );
  const token = result.data.access_token;
  if (token) {
    const response = await axios.get(
      `https://dev-fnrh5opn.us.auth0.com/api/v2/roles`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    res.json(response);
  } else {
    res.status(401);
    throw new Error("Can not Access this Route !");
  }
});

const getPermissions = asyncHandler(async (req, res) => {
  const result = await axios.post(
    "https://dev-fnrh5opn.us.auth0.com/oauth/token",
    '{"client_id":"FohheJnq3XD0UoJ8b7yXYMYfeFdxQHOw","client_secret":"B-ONnG9xgl5mJ82NHIS7YVzRuKOft1C4j0kQGPNO0yfOTdosBJgBNipXq0wdO4My","audience":"https://dev-fnrh5opn.us.auth0.com/api/v2/","grant_type":"client_credentials"}',
    { headers: { "content-type": "application/json" } }
  );
  const token = result.data.access_token;
  if (token) {
    const response = await axios.get(
      `https://dev-fnrh5opn.us.auth0.com/api/v2/users/USER_ID/permissions`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    res.json(response);
  } else {
    res.status(401);
    throw new Error("Can not Access this Route !");
  }
});

const CreateAClass = asyncHandler(async (req, res) => {
  const { name, subject, category, teacher_email, creator_id } = req.body;
  const classExists = await Class.findOne({ name });
  const teacher = await User.findOne({ teacher_email });
  if (teacher == null) {
    res.status(400);
    throw new Error("There is not a teacher with this email !");
  }
  const creator = await User.findById(creator_id);
  if (classExists) {
    //updateClass(req,res);
    res.status(400);
    throw new Error("User already exists");
  }

  // meeting link
  //Use the ApiKey and APISecret from config.js
  const payload = {
    iss: "MRHFx3gaTx2w0S4MaHwJaQ",
    exp: new Date().getTime() + 5000,
  };

  const token = jwt.sign(payload, "Qk5DyjyBym0jnLWYPDGpzqU9CPzlp8UQ51s6");
  var options = {
    method: "POST",
    uri:
      "https://api.zoom.us/v2/users/" +
      "sandunherath124@gmail.com" +
      "/meetings",
    body: {
      topic: name + " " + subject,
      type: 1,
      settings: {
        host_video: "true",
        participant_video: "true",
      },
    },
    auth: {
      bearer: token,
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    json: true, //Parse the JSON string in the response
  };

  const result = await axios.post(
    "https://api.zoom.us/v2/users/" + "sandunherath124@gmail.com" + "/meetings",
    options.body,

    { headers: options.headers }
  );

  console.log(result.data.id);
  if (result.data == null) {
    res.status(400);
    throw new Error("Can not create a Class in this time ...");
  } else {
    const my_class = new Class({
      name: name,
      subject: subject,
      category: category,
      teacher: teacher._id,
      creator: creator._id,
      join_url: result.data.join_url,
      start_url: result.data.start_url,
      meeting_id: result.data.id,
      meeting_password: result.data.encrypted_password,
    });

    const createClass = await my_class.save();
    res.status(201).json(createClass);
  }
});

const updateClass = asyncHandler(async (req, res) => {
  const classExists = await Class.findOne({ name });

  // meeting link
  //Use the ApiKey and APISecret from config.js
  const payload = {
    iss: "MRHFx3gaTx2w0S4MaHwJaQ",
    exp: new Date().getTime() + 5000,
  };

  const token = jwt.sign(payload, "Qk5DyjyBym0jnLWYPDGpzqU9CPzlp8UQ51s6");
  var options = {
    method: "POST",
    uri:
      "https://api.zoom.us/v2/users/" +
      "sandunherath124@gmail.com" +
      "/meetings",
    body: {
      topic: classExists.name + " " + classExists.subject,
      type: 1,
      settings: {
        host_video: "true",
        participant_video: "true",
      },
    },
    auth: {
      bearer: token,
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    json: true, //Parse the JSON string in the response
  };

  const result = await axios.post(
    "https://api.zoom.us/v2/users/" + "sandunherath124@gmail.com" + "/meetings",
    options.body,

    { headers: options.headers }
  );

  console.log(result.data.id);

  if (classExists) {
    classExists.join_url = result.data.join_url;
    classExists.start_url = result.data.start_url;
    classExists.meeting_id = result.data.id;
    classExists.meeting_password = result.data.encrypted_password;

    const classUpdated = await classExists.update();
    res.json(classUpdated);
  } else {
    res.status(404);
    throw new Error("Class not found");
  }
});

export { getRoles, getPermissions, CreateAClass, updateClass };
