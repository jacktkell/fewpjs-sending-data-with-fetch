function submitData(userName, userEmail) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    };

   return fetch("http://localhost:3000/users", configurationObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(id) {
        console.log(id);
    })
    .catch(function(error) {
        alert("Bad things! Ragnarok!");
        console.log(error.message);
    });
}
