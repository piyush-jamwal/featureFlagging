import "./App.css";
import { withLDProvider } from "launchdarkly-react-client-sdk";
import Button from "./button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
      </header>
    </div>
  );
}
export default withLDProvider({
  clientSideID: "paste_Client_id_here",
  // context: {
  //   kind: "user",
  //   key: "example_user",
  //   name: "Example user",
  //   email: "User@example.com",
  // },
})(App);
