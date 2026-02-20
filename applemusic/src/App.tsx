import { useState } from "react";
import "./App.css";
import NavbarComponent from "./components/header/NavbarComponent/NavbarComponent";
import HomepageComponent from "./components/main/HomepageComponent/HomepageComponent";
import SidebarComponent from "./components/main/SidebarComponent/SidebarComponent";
import type { IDataSong } from "./assets/interfaces/interface.MainCardComponent";

function App() {
  const [songs, setSongs] = useState<IDataSong[]>([]);

  return (
    <>
      <div className="d-flex">
        <SidebarComponent onSearchResults={(data) => setSongs(data)} />
        <div className="flex-grow-1">
          <NavbarComponent />
          <HomepageComponent songs={songs} />
        </div>
      </div>
    </>
  );
}

export default App;
