import { useEffect, useState } from "react";
import { setupInterceptorsTo } from "./providers/interceptors/HttpInterceptor";
import { HttpService } from "./providers/http/HttpService";
import { setupAuthInterceptorsTo } from "./providers/interceptors/AuthHeaderInterceptor";
import { Logger } from "./providers/logger/Logger";

setupInterceptorsTo(HttpService.axios);
setupAuthInterceptorsTo(HttpService.axios);

function App() {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const fetch = async () => {
    const getCharacters = await HttpService.get(
      import.meta.env.VITE_BACKEND_URL
    );

    Logger.info(`[App] getCharacters ${JSON.stringify(getCharacters)}`);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <h1>hola</h1>
      <p>Texto de ejemplo</p>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <p>Counter: {counter}</p>
      <a href="https://www.google.com">Google</a>
    </>
  );
}

export default App;
