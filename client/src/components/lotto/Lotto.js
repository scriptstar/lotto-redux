import React from "react";
import SingleRow from "./SingleRow";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Fade = ({ children, ...props }) =>
  <CSSTransition {...props} timeout={500} classNames="fade">
    {children}
  </CSSTransition>;

const styles = {
  textDecoration: "underline",
  textDecorationColor: '#FF6C6C'
};

const Lotto = props => {
  const { lottonumbers } = props;
  return (
    <div className="App">
      {/* Render the numbers if we have them */}
      {lottonumbers.length
        ? <div>
            <h1>
              Random <span style={styles}>
                {props.location.toUpperCase()}
              </span> {" "}
              Number Generator!
            </h1>
            <TransitionGroup className="todo-list">
              {lottonumbers.map((lottonumber, index) => {
                return (
                  <Fade key={lottonumber}>
                    <div key={index}>
                      Row {index + 1} -{" "}
                      <SingleRow
                        lottonumber={lottonumber}
                        key={index}
                        location={props.location}
                      />
                    </div>
                  </Fade>
                );
              })}
            </TransitionGroup>
            <button className="getmore" onClick={props.getLottoNumbers}>
              Dude.. Get Me More
            </button>
          </div>
        : // Render a helpful message otherwise
          <div>
            <h1>No Numbers Generated :(</h1>
            <button className="getmore" onClick={props.getLottoNumbers}>
              Try Again?
            </button>
          </div>}
    </div>
  );
};

export default Lotto;
