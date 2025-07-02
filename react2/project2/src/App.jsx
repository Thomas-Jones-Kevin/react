import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import React from "react";
import Data from './data.jsx';

export default function App() {
  const EntryEle = Data.map((entry, index) => (
    <Entry
      key={index}
    // 1st method
    //   img={entry.img}
    //   title={entry.title}
    //   place={entry.place}
    //   maplink={entry.maplink}
    //   text={entry.text}
    // 2nd method
        entry = {entry} // add props.entry.whatever
    // 3rd method
    //  {...entry}
    />
  ));

  return (
    <>
      <Header />
      <div className="entries">
        {EntryEle}
      </div>
    </>
  );
}
