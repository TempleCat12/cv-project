import "./App.css";
import General from "./components/General";
import Items from "./components/Items";
import { education, practice } from "./components/factory";

function App() {
  return (
    <div className="App">
      {/* <h1>CV Application</h1> */}
      <div>
        <General />
        <Items
          title={practice.title}
          items={practice.objs}
          placeholder={practice.placeholder}
          factory={practice.factory}
        />
        <Items
          title={education.title}
          items={education.objs}
          placeholder={education.placeholder}
          factory={education.factory}
        />
      </div>
    </div>
  );
}

export default App;
