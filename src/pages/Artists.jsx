import stock1 from "../assets/stock-photo-1.jpg"
import stock2 from "../assets/stock-photo-2.jpg"
import useWindowDimensions from "../useWindowDimensions";
import '../styles/artists.css';
import { useState } from "react";

const ARTISTS_DATA = [
  {
    name: "Artist Üks",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper",
    img: stock1
  },
  {
    name: "Artist Kaks",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper",
    img: stock2
  },
  {
    name: "Artist Kolm",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper",
    img: stock1
  },
  {
    name: "Artist Neli",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper",
    img: stock2
  },
  {
    name: "Artist Viis",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper",
    img: stock1
  },
  {
    name: "Artist Kuus",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper",
    img: stock2
  },
  {
    name: "Artist Seitse",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper",
    img: stock1
  },
  {
    name: "Artist Kaheksa",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper",
    img: stock2
  },
  {
    name: "Artist Üheksa",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper",
    img: stock1
  },
  {
    name: "Artist Kümme",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper",
    img: stock2
  },
  {
    name: "Artist Üksteist",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper",
    img: stock1
  },
  {
    name: "Artist Kaksteist",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper",
    img: stock2
  },
  {
    name: "Artist Kolmteist",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper",
    img: stock1
  },
  {
    name: "Artist Neliteist",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper",
    img: stock2
  },
  {
    name: "Artist Viisteist",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper",
    img: stock1
  },
  {
    name: "Artist Kuusteist",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper",
    img: stock2
  }
]

const Artists = () => {
  const { width } = useWindowDimensions();

  const isMobile = width <= 600;
  const isTablet = width <= 768;
  const isBreakpoint = width <= 1100;
  const isBreakpoint2 = width <= 540;
  const navbarCollapse = width <= 990;

  const [currentPage, setCurrentPage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleClickLeft = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 2);
      setCurrentIndex(currentIndex - 1);
    }
  }

  const handleClickRight = () => {
    if (currentPage < 14) {
      setCurrentPage(currentPage + 2);
      setCurrentIndex(currentIndex + 1);
    }
  }

  const handlePaginationClick = (i) => {
    setCurrentIndex(i);
    switch (i) {
      case 1: setCurrentPage(0); break;
      case 2: setCurrentPage(2); break;
      case 3: setCurrentPage(4); break;
      case 4: setCurrentPage(6); break;
      case 5: setCurrentPage(8); break;
      case 6: setCurrentPage(10); break;
      case 7: setCurrentPage(12); break;
      case 8: setCurrentPage(14); break;
      default: break;
    }
    console.log(i)
  }

  return (
    <div style={{ padding: "0px 0" }}>
      <p className="big-title-orange artists-title" style={{ paddingBottom: 20 }}>artistid</p>


      <div className="align " style={{ position: "relative" }}>
        <p className="centered-absolute-text" style={{ color: "black" }}>
          Kuulutatakse peagi välja!
        </p>
        <div className="artists-content artist-blur disabled" style={{ position: "relative", width: navbarCollapse ? isMobile ? "95%" : "90%" : width - 400 }}>
          <button className="carousel-btn" onClick={handleClickLeft} style={{ left: -150 }}>
            <i className="fas fa-chevron-left" style={{ fontSize: 40 }}></i>
          </button>
          <button className="carousel-btn" onClick={handleClickRight} style={{ right: -150 }}>
            <i className="fas fa-chevron-right" style={{ fontSize: 40 }}></i>
          </button>
          {ARTISTS_DATA.slice(currentPage, currentPage + 2).map((artist, index) => {
            return index % 2 === 0
              ? <div className="artist-content artist-content-img-left">
                <div className="artist-content-img">
                  <div className="circular">
                    <img className="artist-img" alt="" src={artist.img}></img>
                  </div>
                </div>
                <div className="artist-content-text">
                  <p className="artists-sub-title" style={{ fontSize: isMobile ? 24 : 24 }}>{artist.name}</p>
                  <p className="text-black container" style={{ fontSize: isMobile ? 14 : 18 }}>
                    {artist.text}
                  </p>
                </div>
              </div>
              : <div className="artist-content artist-content-img-right">
                <div className="artist-content-text" style={{ textAlign: "right" }}>
                  <p className="artists-sub-title" style={{ fontSize: isMobile ? 24 : 24 }}>{artist.name}</p>
                  <p className="text-black container" style={{ fontSize: isMobile ? 14 : 18 }}>
                    {artist.text}
                  </p>
                </div>
                <div className="artist-content-img">
                  <div className="circular">
                    <img className="artist-img" alt="" src={artist.img}></img>
                  </div>
                </div>
              </div>
          })}

          <div style={{ display: "flex", placeContent: "center", marginBottom: 40 }}>
            {[...Array(9).keys()].slice(1).map(i =>
              <button onClick={() => handlePaginationClick(i)} className={`pagination-btn ${i === currentIndex ? "pagination-btn-active" : ""}`} style={{}}>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artists;