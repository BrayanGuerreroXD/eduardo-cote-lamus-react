const registersByUSerID = async (user_id) => {
    const response = await fetch(`http://localhost:3000/api/registers/${user_id}`);
    const data = await response.json();
    return data;
}

export default registersByUSerID;