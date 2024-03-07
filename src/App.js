import { useState } from "react";
import { data } from "./data.js";
import { List } from "./List.js";

function App() {
  const [Person, NewPerson] = useState(data);

  return (
    <>
      <main>
        <section className="person">
          <h3>{Person.length} Birtdays Today</h3>
          <List people={Person} />
          <button className="button" onClick={() => NewPerson([])}>
            Clear All
          </button>
        </section>
      </main>
    </>
  );
}

export { App };
