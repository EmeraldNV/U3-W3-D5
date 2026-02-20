import { Nav, Form } from "react-bootstrap";
import { Apple, Search, HouseDoor, GridFill, BroadcastPin } from "react-bootstrap-icons";
import "./SidebarComponent.css";
import { useEffect, useState } from "react";
import type { IDataSong, SidebarProps } from "../../../assets/interfaces/interface.MainCardComponent";

const SidebarComponent = ({ onSearchResults }: SidebarProps) => {
  const [author, setAuthor] = useState("eminem");

  const fetchSongs = async (song: string) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${song}`);

      if (response.ok) {
        const result = await response.json();
        const songsArray = result.data as IDataSong[];
        onSearchResults(songsArray);
        return songsArray;
      } else {
        throw new Error(`Deezer Error: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const setFetch = (e) => {
    setAuthor(e.currentTarget.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (author) {
        console.log(fetchSongs(author));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [author]);

  return (
    <div className="sidebar-container d-none d-md-block ">
      <div className="sidebar-logo">
        <Apple size={28} className="me-2" />
        <span>Music</span>
      </div>
      <div className="px-3 mb-4">
        <div className="search-wrapper">
          <Search className="search-icon-red" size={14} />
          <Form.Control type="text" placeholder="Cerca" className="sidebar-input" onChange={setFetch} value={author} />
        </div>
      </div>
      <Nav className="flex-column px-2">
        <Nav.Link className="sidebar-nav-link d-flex align-items-center">
          <HouseDoor className="sidebar-icon-red me-3" size={20} />
          <span>Home</span>
        </Nav.Link>
        <Nav.Link className="sidebar-nav-link active d-flex align-items-center">
          <GridFill className="sidebar-icon-red me-3" size={20} />
          <span>Novità</span>
        </Nav.Link>
        <Nav.Link className="sidebar-nav-link d-flex align-items-center">
          <BroadcastPin className="sidebar-icon-red me-3" size={20} />
          <span>Radio</span>
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default SidebarComponent;
