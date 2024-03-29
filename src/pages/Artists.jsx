import stock1 from "../assets/stock-photo-1.jpg"
import stock2 from "../assets/stock-photo-1.jpg"
import img1 from "../assets/Deniss-Suhhanov.jpeg"
import img2 from "../assets/Marta-Liisa.jpg"
import img3 from "../assets/Santo-Sueno.JPG"
import img4 from "../assets/Michael-Stade.JPG"
import img5 from "../assets/Janis-Korkjas.JPG"
import useWindowDimensions from "../useWindowDimensions";
import '../styles/artists.css';
import { useState } from "react";

const ARTISTS_DATA = [

  {
    name: "Deniss Suhhanov",
    link: <a href="https://www.instagram.com/svd_tattoo/" target="blank" className="link">@svd_tattoo</a>,
    img: img1
  },
  {
    name: "Marta Liisa",
    link: <a href="https://www.instagram.com/martaliisa.tats" target="blank" className="link">@martaliisa.tats</a>,
    img: img2
  },
  {
    name: "Santo Sueno ",
    link: <a href="https://www.instagram.com/santo_sueno" target="blank" className="link">@santo_sueno</a>,
    img: img3
  },
  {
    name: "Michael Stade",
    link: <a href="https://www.instagram.com/mikestatuering" target="blank" className="link">@mikestatuering</a>,
    img: img4
  },
  {
    name: "Janis Kõrkjas",
    link: <a href="studiohttps://www.instagram.com/studio11tattoos/11tattoos" target="blank" className="link">@studio11tattoos</a>,
    img: img5
  },
  {
    name: "Paul-Eerik Rosenberg",
    link: <a href="https://www.instagram.com/rosenbergpaul_tattoo" target="blank" className="link">@rosenbergpaul_tattoo</a>,
    img: stock2
  },
  {
    name: "Doris Rosenberg",
    link: <a href="https://www.instagram.com/dorisrosenberg_tattoo" target="blank" className="link">@dorisrosenberg_tattoo</a>,
    img: stock1
  },
  {
    name: "Iisak Pilli",
    link: <a href="https://www.instagram.com/impossible_son" target="blank" className="link">@impossible_son</a>,
    img: stock2
  },
  {
    name: "Kaarel Krall",
    link: <a href="https://www.instagram.com/_krlkrl_" target="blank" className="link">@_krlkrl_</a>,
    img: stock1
  },
  {
    name: "Arina Stretškova",
    link: <a href="https://www.instagram.com/barbiesundaytattoos" target="blank" className="link">@barbiesundaytattoos</a>,
    img: stock2
  },
  {
    name: "Kristjan Aosaar",
    link: <a href="https://www.instagram.com/ignoramus_maximus" target="blank" className="link">@ignoramus_maximus</a>,
    img: stock1
  },
  {
    name: "Ants Rauba",
    link: <a href="" target="blank" className="link">@</a>,
    img: stock1
  },
  {
    name: "Edmar Sulaoja",
    link: <a href="" target="blank" className="link">@</a>,
    img: stock2
  },
  {
    name: "Vitaly Makurin",
    link: <a href="" target="blank" className="link">@</a>,
    img: stock1
  },
  {
    name: "Liisa Kivimäe",
    link: <a href="https://www.instagram.com/valuhaldjas" target="blank" className="link">@valuhaldjas</a>,
    img: stock2
  },
  {
    name: "Valeriya Gilimson",
    link: <a href="https://www.instagram.com/bitethegatto" target="blank" className="link">@bitethegatto</a>,
    img: stock1
  },
  {
    name: "Allan Tuul",
    link: <a href="https://www.instagram.com/zero.kaos" target="blank" className="link">@zero.kaos</a>,
    img: stock2
  },
  {
    name: "",
    link: <a href="https://www.instagram.com/rottenbonestattoo" target="blank" className="link">@rottenbonestattoo</a>,
    img: stock1
  },
  {
    name: "",
    link: <a href="https://www.instagram.com/redserpenttats" target="blank" className="link">@redserpenttats</a>,
    img: stock2
  },
  {
    name: "",
    link: <a href="https://www.instagram.com/mor.inkk" target="blank" className="link">@mor.inkk</a>,
    img: stock2
  },
  {
    name: "",
    link: <a href="https://www.instagram.com/grimme87" target="blank" className="link">@grimme87</a>,
    img: stock2
  },
  {
    name: "Ave-Mari( Blackgoat’s Daughter)",
    link: <a href="https://www.instagram.com/blackgoatsdaughter" target="blank" className="link">@blackgoatsdaughter</a>,
    img: stock2
  },
  {
    name: "Dmitri (Hatsu)",
    link: <a href="https://www.instagram.com/hatsu_blckcraft" target="blank" className="link">@hatsu_blckcraft</a>,
    img: stock2
  },
  {
    name: "Darja ( Pxl.ink)",
    link: <a href="https://www.instagram.com/pxl.ink" target="blank" className="link">@pxl.ink</a>,
    img: stock2
  },
  {
    name: "Ulrike Brett Uukkivi",
    link: <a href="https://www.instagram.com/uuk.kivi" target="blank" className="link">@uuk.kivi</a>,
    img: stock2
  },
  {
    name: "Mari Uibo",
    link: <a href="https://www.instagram.com/murikaz" target="blank" className="link">@murikaz</a>,
    img: stock2
  },
  {
    name: "Laura Käst",
    link: <a href="https://www.instagram.com/glassd0ll" target="blank" className="link">@glassd0ll</a>,
    img: stock2
  },
  {
    name: "Kerli Luure",
    link: <a href="https://www.instagram.com/redfern.ink" target="blank" className="link">@redfern.ink</a>,
    img: stock2
  },
  {
    name: "Silvia Volmar ",
    link: <a href="https://www.instagram.com/silvia_tattoos" target="blank" className="link">@silvia_tattoos</a>,
    img: stock2
  },
  {
    name: "Roman Sestakov",
    link: <a href="https://www.instagram.com/romansestakov" target="blank" className="link">@romansestakov</a>,
    img: stock2
  },
  {
    name: "Priit Salusoo",
    link: <a href="https://www.instagram.com/priitsalusooart" target="blank" className="link">@priitsalusooart</a>,
    img: stock2
  },
  {
    name: "Kairi Matt",
    link: <a href="https://www.instagram.com/mairikatt/" target="blank" className="link">@mairikatt</a>,
    img: stock2
  },
  {
    name: "Piret Valdna",
    link: <a href="https://www.instagram.com/piretvaldna" target="blank" className="link">@piretvaldna</a>,
    img: stock2
  },
  {
    name: "Raine Kapp",
    link: <a href="https://www.instagram.com/rainexart" target="blank" className="link">@rainexart</a>,
    img: stock2
  },
  {
    name: "Villu Koger",
    link: <a href="https://www.instagram.com/villukoger" target="blank" className="link">@villukoger</a>,
    img: stock2
  },
  {
    name: "Oskar Poll",
    link: <a href="https://www.instagram.com/kuraditosin13" target="blank" className="link">@kuraditosin13</a>,
    img: stock2
  },
  {
    name: "Sean Meade",
    link: <a href="https://www.instagram.com/spirit_and_ink" target="blank" className="link">@spirit_and_ink</a>,
    img: stock2
  },
  {
    name: "Aurika Kotyn",
    link: <a href="https://www.instagram.com/kotyns" target="blank" className="link">@kotyns</a>,
    img: stock2
  },
  {
    name: "Oleksandra Prepiialo",
    link: <a href="https://www.instagram.com/aliaska_tattoo" target="blank" className="link">@aliaska_tattoo</a>,
    img: stock2
  },
  {
    name: "Kristiina Nikolajeva",
    link: <a href="https://www.instagram.com/kryysaa/" target="blank" className="link">@kryysaa</a>,
    img: stock2
  },
  {
    name: "Sten-Martin Sinisaar",
    link: <a href="https://www.instagram.com/stensinisaar" target="blank" className="link">@stensinisaar</a>,
    img: stock2
  },
  {
    name: "Maria-Liisa Leonidov",
    link: <a href="https://www.instagram.com/marialeonidov" target="blank" className="link">@marialeonidov</a>,
    img: stock2
  },
  {
    name: "Sigrit Villido",
    link: <a href="https://www.instagram.com/sigritvillido" target="blank" className="link">@sigritvillido</a>,
    img: stock2
  },
  {
    name: "Mihkel Kosk",
    link: <a href="https://www.instagram.com/mihkelkosk" target="blank" className="link">@mihkelkosk</a>,
    img: stock2
  },
  {
    name: "Nathan Norma",
    link: <a href="https://www.instagram.com/northfrytats" target="blank" className="link">@northfrytats</a>,
    img: stock2
  },
  {
    name: "Nico Fibbioli",
    link: <a href="https://www.instagram.com/nicogrind_tattoo" target="blank" className="link">@Nicogrind_tattoo </a>,
    img: stock2
  },
  {
    name: "Lorenzo Gentil ",
    link: <a href="https://www.instagram.com/lorenzogentil" target="blank" className="link">@lorenzogentil</a>,
    img: stock2
  },
  {
    name: "Anatoliy Tovarnytskyy",
    link: <a href="https://www.instagram.com/tattoosbytovarnytskyy" target="blank" className="link">@tattoosbytovarnytskyy</a>,
    img: stock2
  },
  {
    name: "Emilia Sabirova",
    link: <a href="https://www.instagram.com/inkyshrimp" target="blank" className="link">@inkyshrimp</a>,
    img: stock2
  },
  {
    name: "",
    link: <a href="" target="blank" className="link">@</a>,
    img: stock2
  },
]

const Artists = () => {
  const { width } = useWindowDimensions();

  const isMobile = width <= 1000;
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
      <p className="big-title-orange artists-title" style={{ paddingBottom: 40 }}>artistid</p>

      <div style={{ position: 'relative' }}>
        <p className="centered-absolute-text" style={{ color: "black"}}>
          Kuulutatakse peagi välja!
        </p>
        <div className="align artist-blur disabled" style={{ position: "relative" }}>

          <div>

            {/* <button className="carousel-btn" onClick={handleClickLeft} style={{ left: -150 }}>
            <i className="fas fa-chevron-left" style={{ fontSize: 40 }}></i>
          </button>
          <button className="carousel-btn" onClick={handleClickRight} style={{ right: -150 }}>
            <i className="fas fa-chevron-right" style={{ fontSize: 40 }}></i>
          </button> */}

            <div className="artist-blur disabled" style={{ display: 'flex', overflowX: 'hidden' }}>
              {ARTISTS_DATA.slice(currentPage, isMobile ? currentPage + 1 : currentPage + 4).map((artist, index) => {
                return (
                  <div style={{ width: '200px', margin: '0 20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
                      <div className="circular" style={{ display: 'flex', flexDirection: 'column' }}>
                        <img className="artist-img" alt="" src={artist.img}></img>
                      </div>
                      <p className="artists-sub-title" style={{ fontSize: isMobile ? '24px' : '24px', marginTop: '20px', display: 'flex', justifyContent: 'center' }}>{artist.name}</p>
                      <div>
                        <p className="text-black container" style={{ fontSize: isMobile ? '14px' : '18px', marginTop: '10px', width: '200px', display: 'flex', justifyContent: 'center' }}>
                          {artist.link}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div style={{ display: "flex", placeContent: "center", marginBottom: 40 }}>
              {[...Array(9).keys()].slice(1).map(i =>
                <button onClick={() => handlePaginationClick(i)} className={`pagination-btn ${i === currentIndex ? "pagination-btn-active" : ""}`} style={{}}>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Artists;