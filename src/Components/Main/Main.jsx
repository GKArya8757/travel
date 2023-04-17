import React, { useEffect } from "react";
import "./main.css";
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

import img from "../../Assets/img.jpg";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Bora Bora is world-famous for its vibrant turquoise lagoon, soft, white sandy stretches of beach and luxurious resorts. With such a dreamlike setting, this magical island is, unsurprisingly, a great spot to plan a getaway.",
  },
  {
    id: 2,
    imgSrc: img1,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Machu Picchu is the most visited tourist destination in Peru. A symbol of the Incan Empire and built around 1450AD, Machu Picchu was designated a UNESCO World Heritage Site in 1983 and was named one of the New Seven Wonders of the World in 2007.",
  },
  {
    id: 3,
    imgSrc: img2,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The Great Barrier Reef is unique as it extends over 14 degrees of latitude, from shallow estuarine areas to deep oceanic waters. Within this vast expanse is a unique range of ecological communities, habitats and species – all of which make the Reef one of the most complex natural ecosystems in the world.",
  },
  {
    id: 4,
    imgSrc: img3,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "Cappadocia is a land famous for its distinctive rock formation, historical heritage, and scenic hot air balloon trips. Sitting in Central Anatolia, this historical region attracts crowds of tourists from all over the world.",
  },
  {
    id: 5,
    imgSrc: img4,
    destTitle: "Guanajuato",
    location: "Maxico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      "Guanajuato is recognized by UNESCO for its signature architecture, silver mines, and deep history. (Read the full description: here.) After three trips to Guanajuato and even a monthlong stay, it has easily become one of our favorite places to travel in Mexico.",
  },
  {
    id: 6,
    imgSrc: img5,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$840",
    description:
      "Cinque Terre as a World Heritage site: “a remarkable cultural landscape created by human endeavor over a millennium in a rugged and dramatic natural environment. It represents the harmonious interaction between people and nature to produce a landscape of exceptional scenic quality”.",
  },
  {
    id: 7,
    imgSrc: img6,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Angkor is one of the most important archaeological sites in South-East Asia. Stretching over some 400 km2, including forested area, Angkor Archaeological Park contains the magnificent remains of the different capitals of the Khmer Empire, from the 9th to the 15th century.",
  },
  {
    id: 8,
    imgSrc: img7,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      "The Taj Mahal is considered to be the greatest architectural achievement in the whole range of Indo-Islamic architecture. Its recognised architectonic beauty has a rhythmic combination of solids and voids, concave and convex and light shadow; such as arches and domes further increases the aesthetic aspect.",
  },
  {
    id: 9,
    imgSrc: img8,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Bali Indonesia. Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers paradise!",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS
                    <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
