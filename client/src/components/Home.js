import React from "react";

const Home = () =>
  <div>
    <h2>Welcome to the Lotto lottery random number generator</h2>
    <p>
      This example is built on using{" "}
      <a
        href="https://github.com/facebookincubator/create-react-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        create-react-app
      </a>, React Router v4
      and components written using latest ES6 features.
    </p>
    <h2> What is this?</h2>
    The U.K{" "}
    <a
      href="https://www.national-lottery.co.uk/"
      target="_blank"
      rel="noopener noreferrer"
    >
      National Lottery
    </a>{" "}
    called Lotto will be played every Wednesday and Saturday. In order to
    play, you need to predict 6 numbers between 1 - 59. This program will
    generate 6 random numbers for you so that you can buy with no pain of
    predicting or thinking. Don't hurt your brain. Use the{" "}
    <a href="./uk-lotto" alt="Lotto">Lotto</a> tab to see
    generated numbers exclusively for you. As a bonus, we thrown{" "}
    <a href="./euro-million" alt="Euro Million">Euro million</a> lottery
    predictor too!
    <div>
      <h2>Technologies used:</h2>
      <li> React </li>
      <li> React Router v4 </li>
      <li> Express </li>
      <li> ES6 </li>
    </div>
    <p>
      {" "}Feel free to{" "}
      <a
        href="https://github.com/scriptstar/lotto"
        target="_blank"
        rel="noopener noreferrer"
      >
        fork
      </a>{" "}
      this for your own use.
    </p>
  </div>;

export default Home;
