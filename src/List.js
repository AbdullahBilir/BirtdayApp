function List({ people }) {
  return (
    <>
      {people.map((person) => {
        return (
          <section key={person.id} className="List">
            <img src={person.image} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} Years</p>
            </div>
          </section>
        );
      })}
    </>
  );
}

export { List };
