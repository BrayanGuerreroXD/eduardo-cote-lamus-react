const userExists = async (code) => {
    // Check if user exists
    const response = await fetch(`https://ufps-library-register-production.up.railway.app/api/users/${code}`);
    const data = await response.json();

    if (data.id){
        return true;
    }

    return false;
}

export default userExists;