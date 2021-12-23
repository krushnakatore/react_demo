import "./styles.css";

export default function App() {
  let arr = ["Android", "Blackberry", "Iphone", "Windows Phone"];
  let arr1 = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      {arr.map((e) => (
        <li>{e}</li>
      ))}
      <h1>Mobile Manufacturers</h1>
      {arr1.map((e) => (
        <li>{e}</li>
      ))}
    </div>
  );
}
