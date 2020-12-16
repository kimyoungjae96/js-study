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
      <TodoApp></TodoApp>
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
