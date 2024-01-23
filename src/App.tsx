import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
// import { Menu } from "./pages/Menu/Menu";
// import { Cart } from "./pages/Cart/Cart";
// import { Error } from "./pages/Error/Error";

function App() {
  return (
    <>
      <h1>Intensive Project</h1>
      <Button>Save</Button>
      <Button appearence="big">Big</Button>
      <Input placeholder="email" />
    </>
  );
}

export default App;
