const users = [
    {
      username: "dhruv",
      password: "1617"
    },
    {
      username: "neha",
      password: "6342"
    },
    {
      username: "sagar",
      password: "2612"
    }
  ];
  
  const findUser = (username) => {
    return users.find((user) => user.username === username);
  };
  
  export const fakeAuthAPI = (username, password) => {
    const user = findUser(username);
    console.log(user);
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (user.password === password) {
          res({ success: true, status: 200 });
        } else {
          rej({ success: false, status: 401 });
        }
      }, 3000);
    });
  };
  