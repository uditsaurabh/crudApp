import BookTablePage from "./pages/BookTablePage";
import { Switch, Route } from "react-router-dom";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
function App() {
  return (
    <Switch>
      <Route exact path="/">
        <BookTablePage />
      </Route>

      <Route path="/addBooks">
        <AddBook />
      </Route>

      <Route exact path="/edit">
        <EditBook />
      </Route>
    </Switch>
  );
}

export default App;
