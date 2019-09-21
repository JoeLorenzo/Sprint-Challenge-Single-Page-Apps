import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <WelcomePage />
      <CharacterList />
      <Route exact path="/" component="WelcomePage" />

    </main>
  );
}
