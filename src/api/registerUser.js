const registerUSer = async (user_id) => {
  // Get date as string in ISO format (YYYYY-MM-DD)
  const currentDate = new Date();
  const date = currentDate.toISOString().slice(0, 10);

  // Get current time as string in HH:MM:SS format
  const time = currentDate.toLocaleTimeString([], {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Save register in a constant
  const register = {
    register_date: date,
    register_time: time,
    user_id: user_id,
  };

  fetch("http://localhost:3000/api/registers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(register),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

export default registerUSer;