import "./App.css";
import AppComp from "./exchange_comps/appComp";
// import Input from "./comps/input";
// import AppColors from "./comps/appColors";
// import AppVod from "./vodComps/appVod";

function App() {
  return (
    <div className="container text-center">
      <img src="/logo192.png" alt="image" />
      <h1 className="text-info">Hello From React </h1>
      {/* <Input /> */}
      {/* <AppColors /> */}
      {/* <AppVod /> */}
      <AppComp />
    </div>
  );
}

export default App;
