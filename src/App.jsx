import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-zinc-950 text-white">
      <div className="flex justify-center items-center min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
