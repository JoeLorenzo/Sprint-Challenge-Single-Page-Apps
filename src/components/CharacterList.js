import React, { useEffect, useState } from "react";
import axios from "axios";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
      axios
      .get('https://rickandmortyapi.com/api/')
      .then(response => {
        console.log(response.data.characters)
        console.log(response.data)

      })
      .catch(error => {
        console.log("something went wrong" + error);
      })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
