import EventPractice from "./EventPractice/EventPractice";
import ValidationSample from "./ValidationSample/ValidationSample";
import ScrollBox from "./ScrollBox/ScrollBox";
import LifeCycleSample from "./LifeCycleSample/LifeCycleSample";
import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";
import Info from "./Info/Info";
import Average from "./Average/Average";
import SassComponent from "./SassComponent/SassComponent";
import StyledComponent from "./StyledComponents/StyledComponents";
import TodoApp from "./TodoApp/App";
import { Route, Link, Switch, NavLink } from "react-router-dom";
import About from "./ReactRouter/About";
import Home from "./ReactRouter/Home";
import Profiles from "./ReactRouter/Profiles";
import HistorySample from "./ReactRouter/HistorySample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      // <TodoApp></TodoApp>
      <div>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/profiles"> 프로필</Link>
          </li>
          <li>
            <Link to="/history"> History 예제</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path={["/about", "/info"]} component={About} />
          <Route path="/profiles" component={Profiles} />
          <Route path="/history" component={HistorySample} />
          <Route
            render={({ location }) => (
              <div>
                <h2>이 페이지는 존재하지 않습니다:</h2>
                <p>{location.pathname}</p>
              </div>
            )}
          />
        </Switch>
      </div>
      // <div className="App">
      //   <ErrorBoundary>
      //     <EventPractice />
      //     <LifeCycleSample color={this.state.color} />
      //     <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
      //     <button onClick={this.handleClick}>랜덤 색상</button>
      //     <button onClick={() => this.scrollBox.scrollToBottom()}>
      //       맨 밑으로
      //     </button>
      //     <Counter></Counter>
      //     <Info />
      //     <Average />
      //     <SassComponent />
      //     <StyledComponent />
      //   </ErrorBoundary>
      // </div>
    );
  }
}

export default App;
