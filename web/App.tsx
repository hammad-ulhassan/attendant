import { useEffect, useState } from "react";
import { checkServerHealth } from "./api/checkServerHealth";

export const App = (): JSX.Element => {
  const [serverHealth, setServerHealth] = useState(null);

  useEffect(() => {
    checkServerHealth().then((e) => {
      setServerHealth(e);
    });
  }, []);

  return (
    <>
      <h1>Hello world!</h1>
      <h3>{serverHealth?JSON.stringify(serverHealth):'loading'}</h3>
    </>
  );
};
