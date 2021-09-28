import asyncHandler from "express-async-handler";

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

export { getRoles, getPermissions };