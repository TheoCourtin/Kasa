﻿import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/banner";
import Card from "../components/card";
import axios from "axios";

const Home = () => {
  const [logementData, setLogementData] = useState([]);

  useEffect(() => {
    axios.get("./data/logements.json").then((res) => setLogementData(res.data));
  }, []);

  return (
    <main className="home">
      <Banner />

      {/* logement */}
      <section className="logement">
        {logementData.map((item) => (
          <Link key={item.id} to={`logement/${item.id}`}>
            <Card key={`${item.id}`} cover={item.cover} title={item.title} />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Home;