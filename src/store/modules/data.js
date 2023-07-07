export const user = {
    baseUrl: "http://45.12.239.156:8081/api",
    login: "bogush.a",
    password: "jc63fk",
    token:
      localStorage.getItem('token')
  };
  
  const checkAnswer = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };
  
  //запрос токена
  function token() {
    return fetch("http://45.12.239.156:8081/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: "bogush.a",
        password: "jc63fk",
      }),
    })
      .then(checkAnswer)
      .then((res) => {
        let token = res.token;
        localStorage.setItem('token', token)
      })
      .catch((err) => {
        console.log(err);
      });
  }