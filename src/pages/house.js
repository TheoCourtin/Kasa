import React from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../components/slideshow";
import Error from "./error";
import Profil from "../components/profils";
import Accordeon from "../components/accordeon";
import Data from "../data/logements.json";

const House = () => {
  const { id } = useParams();
  const details = Data.find((el) => el.id === id);

  if (!details) {
    return <Error />;
  }

  return (
    <main className="house container">
      <Slideshow pictures={details.pictures} />
      <Profil />

      <section className="accordeon">
        <Accordeon title={"Description"} content={details.description} />
        <Accordeon title={"Équipements"} content={details.equipments} />
      </section>
    </main>
  );
};

export default House;