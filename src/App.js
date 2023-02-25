import "./App.css";
import General from "./components/General";
import Items from "./components/Items";
import { education, practice} from "./components/factory";

function App() {
  return (
    <div className="App">
      <h1>CV Application</h1>
      <General />
      <Items
        title={education.title}
        items={education.objs}
        placeholder={education.placeholder}
        factory={education.factory}
      />
      <Items
        title={practice.title}
        items={practice.objs}
        placeholder={practice.placeholder}
        factory={practice.factory}
      />
    </div>
  );
}

export default App;
