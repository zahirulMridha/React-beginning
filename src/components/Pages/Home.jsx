import Layout from "../Layout/Layouut";
function Home() {
  const persons = [
    { name: "sakib", mail: "sakib@gmail.com" },
    { name: "rakib", mail: "rakib@gmail.com" },
    { name: "hasib", mail: "hasib@gmail.com" },
    { name: "asad", mail: "asad@gmail.com" },
    { name: "riyad", mail: "riyad@gmail.com" },
  ];
  return (
    <Layout>
      <h1>This is Home page</h1>
      <h3 style={{margin:"1rem", textDecoration:"underline"}}>List of person</h3>
      <ul style={{listStyle:"none"}}>
        {persons.map((person) => (
          <li style={{margin:"1rem"}}>
            {person.name} - {person.mail}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
export default Home;
