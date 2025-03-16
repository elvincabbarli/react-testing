import Application from "./components/application/Application";
import Counter from "./components/counter/Counter";
import MuiMode from "./components/muiMode/muiMode";
import Skills from "./components/skills/Skills";
import UserDetails from "./components/UserList/UserDetails";
import UserList from "./components/UserList/UserList";
import { AppProvider } from "./provider/app-provider";

function App() {
  return (
    <AppProvider>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
        className="App"
      >
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            Learn React
          </a>
        </header>
        <Application />
        <hr />
        <Skills skills={["html", "css", "js"]} />
        <hr />
        <div>
          <UserList />
          <UserDetails />
        </div>
        <hr />
        <Counter />
        <hr />
        <MuiMode />
      </div>
    </AppProvider>
  );
}

export default App;
