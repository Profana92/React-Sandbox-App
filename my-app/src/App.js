import "./App.css";

const list = [
  { firstname: "Adam", lastname: "Kowalski", age: 10 },
  { firstname: "Izabela", lastname: "Makowska", age: 15 },
  { firstname: "Jan", lastname: "Urbański", age: 46 },
];
function formatting(text) {
  return (
    text.toLowerCase().charAt(0).toUpperCase() + text.slice(1).toLowerCase()
  );
}
function isAdult(age) {
  return age >= 18 ? "TAK" : "NIE";
}
function App() {
  return (
    <div className="App">
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Wiek</th>
            <th>Dorosły?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formatting(list[0].firstname)}</td>
            <td>{formatting(list[0].lastname)}</td>
            <td>{list[0].age}</td>
            <td>{isAdult(list[0].age)}</td>
          </tr>
          <tr>
            <td>{list[1].firstname}</td>
            <td>{list[1].lastname}</td>
            <td>{list[1].age}</td>
            <td>{isAdult(list[1].age)}</td>
          </tr>
          <tr>
            <td>{list[2].firstname}</td>
            <td>{list[2].lastname}</td>
            <td>{list[2].age}</td>
            <td>{isAdult(list[2].age)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
