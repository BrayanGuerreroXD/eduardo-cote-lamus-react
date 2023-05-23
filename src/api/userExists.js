import registerUSer from "./registerUser";

const userExists = async (code) => {
  let userExists = false;
  let user_name = "";
  let user_lastname = "";

  // Check if user exists
  try {
    const response = await fetch(
      `https://library-register-restapi-production.up.railway.app/api/users/${code}`
    );

    if (response.status === 404) {
      throw new Error("User not found");
    }

    const data = await response.json();

    if (data.id) {
      await registerUSer(data.id);
      userExists = true;
      user_name = data.name;
      user_lastname = data.lastname;
    }
  } catch (error) {
    console.log(error);
  }

  return {userExists, user_name, user_lastname};
};

export default userExists;