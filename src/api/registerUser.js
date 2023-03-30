const userExists = async (code) => {
  let userExists = false;

  // Check if user exists
  try {
    const response = await fetch(
      `https://ufps-library-register-production.up.railway.app/api/users/${code}`
    );

    if (response.status === 404) {
      throw new Error("User not found");
    }

    const data = await response.json();

    if (data.id) {
      userExists = true;
    }
  } catch (error) {
    console.log(error);
  }

  return userExists;
};

export default userExists;