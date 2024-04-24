import placeholderImg from "../assets/artists/no-image.jpeg"
import img1 from "../assets/artists/Deniss-Suhhanov.jpg"
import img2 from "../assets/artists/Marta-Liisa.jpg"
import img3 from "../assets/artists/Santo-Sueno.jpg"
import img4 from "../assets/artists/Michael-Stade.jpg"
import img5 from "../assets/artists/Janis-Korkjas.jpg"
import img6 from "../assets/artists/Arina.jpg"
import img7 from "../assets/artists/Blackgoat- Daughter.jpg"
import img8 from "../assets/artists/Doris-Rosenberg.jpg"
import img9 from "../assets/artists/Ele-Helina- Sein.jpg"
import img10 from "../assets/artists/Elvo-Grimm.jpg"
import img11 from "../assets/artists/Iisak.jpg"
import img12 from "../assets/artists/Janina.jpg"
import img13 from "../assets/artists/Kerli-Laidna.jpg"
import img14 from "../assets/artists/Kerli-Redfern.jpg"
import img15 from "../assets/artists/Krall.jpg"
import img16 from "../assets/artists/Laura-glassd0ll.jpg"
import img17 from "../assets/artists/Mari-murikaz.jpg"
import img18 from "../assets/artists/Nico.jpg"
import img19 from "../assets/artists/Paul-Eerik Rosenberg.jpg"
import img20 from "../assets/artists/Ramon-Rattasep.jpg"
import img21 from "../assets/artists/silvia_tattoos.jpg"
import img22 from "../assets/artists/Kristjan-Aosaar.jpg"
import img23 from "../assets/artists/Ulrike.jpg"
import img24 from "../assets/artists/Valerie.jpg"
import img25 from "../assets/artists/valuhaldjas.jpg"
import img26 from "../assets/artists/Darjapxl.jpg"
import img27 from "../assets/artists/Hatsu.jpg"
import img28 from "../assets/artists/Emilia-Sabirova.jpg"
import img29 from "../assets/artists/Darius.jpg"
import img30 from "../assets/artists/Maria-Liisa-Leonidov.jpg"
import img31 from "../assets/artists/Sigrit-Villido.jpg"
import img32 from "../assets/artists/Tilda.jpg"
import img33 from "../assets/artists/Aurika-Kotyn.jpg"
import img34 from "../assets/artists/Oleksandra-Prepiialo.png"
import img35 from "../assets/artists/Oskar-Poll.jpg"
import img36 from "../assets/artists/piretvaldna.jpg"
import img37 from "../assets/artists/rainexart.jpg"
import img38 from "../assets/artists/Sean-Meade.jpg"
import img39 from "../assets/artists/Villu-Koger.jpg"
import img40 from "../assets/artists/Desiree.jpg"
import img41 from "../assets/artists/Maila-Veske.jpg"
import img42 from "../assets/artists/Fatima.JPG"
import img43 from "../assets/artists/Mihkel-Kosk.jpeg"
import img44 from "../assets/artists/Regina-K.jpg"
import img45 from "../assets/artists/sinisaar.jpeg"
import img46 from "../assets/artists/Vitaly-Makurin.JPG"
import img47 from "../assets/artists/Ulla.jpg"
import img48 from "../assets/artists/Anatoliy-Tovarnytskyy.jpeg"
import img49 from "../assets/artists/ants-rauba.jpeg"
import img50 from "../assets/artists/Edmar-Sulaoja.jpg"
import img51 from "../assets/artists/Kairi-Matt.jpeg"
import img52 from "../assets/artists/Priit-Salusoo.jpg"
import img53 from "../assets/artists/Roman-Šestakov.jpg"
import useWindowDimensions from "../useWindowDimensions";
import '../styles/artists.css';
import { useState } from "react";
import { t } from "../components/translation/translation"
import { motion } from "framer-motion";

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
    name: "Arina Stretškova",
    link: <a href="https://www.instagram.com/barbiesundaytattoos" target="blank" className="link">@barbiesundaytattoos</a>,
    img: img6
  },
  {
    name: "Ave-Mari",
    link: <a href="https://www.instagram.com/blackgoatsdaughter" target="blank" className="link">@blackgoatsdaughter</a>,
    img: img7
  },
  {
    name: "Doris Rosenberg",
    link: <a href="https://www.instagram.com/dorisrosenberg_tattoo" target="blank" className="link">@dorisrosenberg_tattoo</a>,
    img: img8
  },
  {
    name: "Ele-Helina Sein",
    link: <a href="https://www.instagram.com/redserpenttats" target="blank" className="link">@redserpenttats</a>,
    img: img9
  },
  {
    name: "Elvo Grimm",
    link: <a href="https://www.instagram.com/grimme87" target="blank" className="link">@grimme87</a>,
    img: img10
  },
  {
    name: "Iisak Pilli",
    link: <a href="https://www.instagram.com/impossible_son" target="blank" className="link">@impossible_son</a>,
    img: img11
  },
  {
    name: "Janina Jakobson",
    link: <a href="http://www.instagram.com/jj13.tattoo" target="blank" className="link">@jj13.tattoo</a>,
    img: img12
  },
  {
    name: "Kerli Laidna",
    link: <a href="https://www.instagram.com/mor.inkk" target="blank" className="link">@mor.inkk</a>,
    img: img13
  },
  {
    name: "Kerli Luure",
    link: <a href="https://www.instagram.com/redfern.ink" target="blank" className="link">@redfern.ink</a>,
    img: img14
  },
  {
    name: "Kaarel Krall",
    link: <a href="https://www.instagram.com/_krlkrl_" target="blank" className="link">@_krlkrl_</a>,
    img: img15
  },
  {
    name: "Laura Käst",
    link: <a href="https://www.instagram.com/glassd0ll" target="blank" className="link">@glassd0ll</a>,
    img: img16
  },
  {
    name: "Mari Uibo",
    link: <a href="https://www.instagram.com/murikaz" target="blank" className="link">@murikaz</a>,
    img: img17
  },
  {
    name: "Nico Fibbioli",
    link: <a href="https://www.instagram.com/nicogrind_tattoo" target="blank" className="link">@Nicogrind_tattoo </a>,
    img: img18
  },
  {
    name: "Paul-Eerik Rosenberg",
    link: <a href="https://www.instagram.com/rosenbergpaul_tattoo" target="blank" className="link">@rosenbergpaul_tattoo</a>,
    img: img19
  },
  {
    name: "Ramon Rattasep",
    link: <a href="https://www.instagram.com/rottenbonestattoo" target="blank" className="link">@rottenbonestattoo</a>,
    img: img20
  },
  {
    name: "Silvia Volmar",
    link: <a href="https://www.instagram.com/silvia_tattoos" target="blank" className="link">@silvia_tattoos</a>,
    img: img21
  },
  {
    name: "Kristjan Aosaar",
    link: <a href="https://www.instagram.com/ignoramus_maximus" target="blank" className="link">@ignoramus_maximus</a>,
    img: img22
  },
  {
    name: "Ulrike Brett Uukkivi",
    link: <a href="https://www.instagram.com/uuk.kivi" target="blank" className="link">@uuk.kivi</a>,
    img: img23
  },
  {
    name: "Valeriya Gilimson",
    link: <a href="https://www.instagram.com/bitethegatto" target="blank" className="link">@bitethegatto</a>,
    img: img24
  },
  {
    name: "Liisa Kivimäe",
    link: <a href="https://www.instagram.com/valuhaldjas" target="blank" className="link">@valuhaldjas</a>,
    img: img25
  },
  {
    name: "Darja",
    link: <a href="https://www.instagram.com/pxl.ink" target="blank" className="link">@pxl.ink</a>,
    img: img26
  },
  {
    name: "Dmitri Hatsu",
    link: <a href="https://www.instagram.com/hatsu_blckcraft" target="blank" className="link">@hatsu_blckcraft</a>,
    img: img27
  },
  {
    name: "Emilia Sabirova",
    link: <a href="https://www.instagram.com/inkyshrimp" target="blank" className="link">@inkyshrimp</a>,
    img: img28
  },
  {
    name: "Darius Cloud",
    link: <a href="https://www.instagram.com/tattoodarius" target="blank" className="link">@tattoodarius</a>,
    img: img29
  },
  {
    name: "Maria-Liisa Leonidov",
    link: <a href="https://www.instagram.com/marialeonidov" target="blank" className="link">@marialeonidov</a>,
    img: img30
  },
  {
    name: "Sigrit Villido",
    link: <a href="https://www.instagram.com/sigritvillido" target="blank" className="link">@sigritvillido</a>,
    img: img31
  },
  {
    name: "Tilda Mae",
    link: <a href="https://www.instagram.com/tildatattoo" target="blank" className="link">@tildatattoo</a>,
    img: img32
  },
  {
    name: "Aurika Kotyn",
    link: <a href="https://www.instagram.com/kotyns" target="blank" className="link">@kotyns</a>,
    img: img33
  },
  {
    name: "Oleksandra Prepiialo",
    link: <a href="https://www.instagram.com/aliaska_tattoo" target="blank" className="link">@aliaska_tattoo</a>,
    img: img34
  },
  {
    name: "Oskar Poll",
    link: <a href="https://www.instagram.com/kuraditosin13" target="blank" className="link">@kuraditosin13</a>,
    img: img35
  },
  {
    name: "Piret Valdna",
    link: <a href="https://www.instagram.com/piretvaldna" target="blank" className="link">@piretvaldna</a>,
    img: img36
  },
  {
    name: "Raine Kapp",
    link: <a href="https://www.instagram.com/rainexart" target="blank" className="link">@rainexart</a>,
    img: img37
  },
  {
    name: "Sean Meade",
    link: <a href="https://www.instagram.com/spirit_and_ink" target="blank" className="link">@spirit_and_ink</a>,
    img: img38
  },
  {
    name: "Villu Koger",
    link: <a href="https://www.instagram.com/villukoger" target="blank" className="link">@villukoger</a>,
    img: img39
  },
  {
    name: "Desiree",
    link: <a href="https://www.instagram.com/desupoke" target="blank" className="link">@desupoke</a>,
    img: img40
  },
  {
    name: "Maila Veske",
    link: <a href="https://www.instagram.com/mailushkaa" target="blank" className="link">@mailushkaa</a>,
    img: img41
  },
  {
    name: "Fatima Susanna",
    link: <a href="https://www.instagram.com/fatimasusanna" target="blank" className="link">@fatimasusanna</a>,
    img: img42
  },
  {
    name: "Mihkel Kosk",
    link: <a href="https://www.instagram.com/mihkelkosk" target="blank" className="link">@mihkelkosk</a>,
    img: img43
  },
  {
    name: "Regina Kuznetsova",
    link: <a href="https://www.instagram.com/reginatattoos" target="blank" className="link">@reginatattoos</a>,
    img: img44
  },
  {
    name: "Sten-Martin Sinisaar",
    link: <a href="https://www.instagram.com/stensinisaar" target="blank" className="link">@stensinisaar</a>,
    img: img45
  },
  {
    name: "Vitaly Makurin",
    link: <a href="https://www.instagram.com/vitaly_makurin" target="blank" className="link">@vitaly_makurin</a>,
    img: img46
  },
  {
    name: "Ulla-Mari",
    link: <a href="https://www.instagram.com/ullamari.tattoo" target="blank" className="link">@ullamari.tattoo</a>,
    img: img47
  },
  {
    name: "Anatoliy Tovarnytskyy",
    link: <a href="https://www.instagram.com/tattoosbytovarnytskyy" target="blank" className="link">@tattoosbytovarnytskyy</a>,
    img: img48
  },
  {
    name: "Ants Rauba",
    link: <a href="https://www.instagram.com/antsrauba" target="blank" className="link">@antsrauba</a>,
    img: img49
  },
  {
    name: "Edmar Sulaoja",
    link: <a href="https://www.instagram.com/etstattoo" target="blank" className="link">@etstattoo</a>,
    img: img50
  },
  {
    name: "Kairi Matt",
    link: <a href="https://www.instagram.com/mairikatt/" target="blank" className="link">@mairikatt</a>,
    img: img51
  },
  {
    name: "Priit Salusoo",
    link: <a href="https://www.instagram.com/priitsalusooart" target="blank" className="link">@priitsalusooart</a>,
    img: img52
  },
  {
    name: "Roman Šestakov",
    link: <a href="https://www.instagram.com/romansestakov" target="blank" className="link">@romansestakov</a>,
    img: img53
  },
  /*
  {
    name: "Kristiina Nikolajeva",
    link: <a href="https://www.instagram.com/kryysaa/" target="blank" className="link">@kryysaa</a>,
    img: placeholderImg
  },
  {
    name: "Nathan Norma",
    link: <a href="https://www.instagram.com/northfrytats" target="blank" className="link">@northfrytats</a>,
    img: placeholderImg
  },
  {
    name: "Lorenzo Gentil ",
    link: <a href="https://www.instagram.com/lorenzogentil" target="blank" className="link">@lorenzogentil</a>,
    img: placeholderImg
  },
  {
    name: "Merili Mägi",
    link: <a href="https://www.instagram.com/illusiooniline" target="blank" className="link">@illusiooniline</a>,
    img: placeholderImg
  },
  {
    name: "Allan Tuul",
    link: <a href="https://www.instagram.com/zero.kaos" target="blank" className="link">@zero.kaos</a>,
    img: placeholderImg
  },
  },
  {
    name: "",
    link: <a href="" target="blank" className="link">@</a>,
    img: placeholderImg
  },
  */
]

 function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

shuffle(ARTISTS_DATA)

const Artists = () => {
  const { width } = useWindowDimensions();
  const [data, setData] = useState(ARTISTS_DATA);

  const isMobile = width <= 1000;
  const isSmallerMobile = width <= 750;

  const firstArtistsListBreakpoint = width <= 1100;
  const paginationBreakpoint = width <= 360;
  const flexDirectionBreakpoint = width <= 520;

  const itemsPerPage = firstArtistsListBreakpoint ? isSmallerMobile ? 2 : 3 : 4;
  const totalPages = Math.ceil(ARTISTS_DATA.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, ARTISTS_DATA.length);

  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const [swipeDirection, setSwipeDirection] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    setSwipeDirection(isLeftSwipe ? "next" : "prev");
    if (isLeftSwipe) {
      handleClickRight();
    }
    if (isRightSwipe) {
      handleClickLeft();
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleClickLeft = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleClickRight = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  const renderPaginationButtons = () => {
    return (
      <div style={{ display: "flex", gap: 10, placeContent: "center" }}>
        <button className="carousel-btn" onClick={handleClickLeft}>
          <i className="fas fa-chevron-left" style={{ fontSize: 30 }}></i>
        </button>
        { firstArtistsListBreakpoint && isSmallerMobile
          ? <p>{currentPage + 1}/{totalPages}</p>
          : [...Array(totalPages).keys()].map((page, index) => 
              <button
                style={{ margin: "auto 0" }}
                key={page}
                className={`pagination-btn ${currentPage === page ? "pagination-btn-active" : ""}`}
                onClick={() => handlePageChange(page)}
              >
              </button>
          )
        }
        <button className="carousel-btn" onClick={handleClickRight}>
          <i className="fas fa-chevron-right" style={{ fontSize: 30 }}></i>
        </button>
      </div>
    );
  };

  return (
    <div style={{ padding: "0px 0" }}>
      <p className="big-title-orange artists-title" style={{ paddingBottom: 40 }}>{t("artists-title")}</p>

      <div style={{ position: 'relative' }}>

        <div className="align " style={{ position: "relative" }}>

          <div style={{ position: 'relative' }}>
            <motion.section key={currentPage} className="" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} style={{
                display: 'flex',
                flexDirection: flexDirectionBreakpoint ? 'column' : 'row',
                justifyContent: 'center',
                overflow: 'hidden',
                marginTop: flexDirectionBreakpoint ? -30 : -10,
                height: isMobile ? flexDirectionBreakpoint ? 'initial' : 300 : 330,
                paddingTop: 10
            }}
              variants={{
                hidden: {opacity: 0, x: 0 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    staggerChildren: 0.25,
                  }
                }
              }}
              initial="hidden"
              animate="show">
              {data.slice(startIndex, endIndex).map((artist, i) => {
                return (
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 100
                      },
                      show: {
                        opacity: 1,
                        y: 0
                      },
                      transition: {
                        delay: 8
                      }
                    }} 
                    key={artist + i}
                    className="artist-card" onClick={(e) => e.stopPropagation()}>
                    <div style={{ width: '200px', margin: flexDirectionBreakpoint ? '10px auto' : '0 20px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
                        <div className="circular" style={{ display: 'flex', flexDirection: 'column' }}>
                          <img className="artist-img" alt="" src={artist.img}></img>
                        </div>
                        <p className="artists-sub-title" style={{
                          fontSize: '18px',
                          marginTop: flexDirectionBreakpoint ? 10 : 20,
                          display: 'flex',
                          justifyContent: 'center'
                        }}>{artist.name}</p>
                        <div>
                          <p className="text-black container" style={{ fontSize: isMobile ? '14px' : '18px', marginTop: '2px', width: '200px', display: 'flex', justifyContent: 'center' }}>
                            {artist.link}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.section>

            <div className="pagination" style={{ marginTop: flexDirectionBreakpoint ? 20 : 'initial' }}>{renderPaginationButtons()}</div>

          </div>
        </div>
      </div>
    </div >
  );
}

export default Artists;