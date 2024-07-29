import { useEffect, useState } from "react";


function Login() {

  console.log("App rendered");
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  // if(storedLogin){
  //   setLoggedIn(true);
  // }

  
  //this is wrong because it will cause an infinite loop, that's why we use useEffect
  //side effect is something that happens outside of the component
  useEffect(() => {
    const storedLogin = localStorage.getItem("loggedIn");
    if (storedLogin == "true") {
      setLoggedIn(true);
    }

  }, []);
  var timeout;
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("checking form validity and debouncing");
      if (email.length > 5 && password.length > 5) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [email, password]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    console.log("submit");
    setLoggedIn(true);
    localStorage.setItem("loggedIn", true);
  };
  return (
    <>
      <div className="formSection">
        {loggedIn ? (
          <div>
            {" "}
            Welcome
            <button
              onClick={() => {
                setLoggedIn(false);
                localStorage.removeItem("loggedIn");
              }}
            >
              {" "}
              LogOut
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="Form">
           
            <div>
            <label htmlFor="Email">Email:</label>
              {" "}
             
              <input
                type="text"
                className="emailInput"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
            <label htmlFor="Email">PassWord:</label>
            {" "}
              <input
                type="password"
                className="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className={isFormValid ? "enabled" : "disabled"}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default Login;
