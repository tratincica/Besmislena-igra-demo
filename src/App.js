import { useState } from "react";
import Initialization from "./components/game/initialization/Initialization";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";



function App() {

  const [firstTime, setFirstTime] = useState(true);

  return (
    <>
      <Header />
      <article>
      {firstTime && <Initialization />}
      </article>
      <Footer />
    </>
  );
}

export default App;
