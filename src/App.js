import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import ToDoList from "./components/todolist/ToDoList";
import Footer from "./components/footer/Footer";
import Active from "./components/active/Active";
import Completed from "./components/completed/Completed";
import NotFound from "./components/notfound/NotFound";
import { connect } from "react-redux";

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Switch>
          <Route exact path="/">
            <ToDoList />
          </Route>
          <Route path="/active">
            <Active />
          </Route>
          <Route path="/completed">
            <Completed />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </section>
    </>
  );
}
const mapStateToProps = (state) => ({
  todos: state.todos,
});
export default connect(mapStateToProps)(App);
