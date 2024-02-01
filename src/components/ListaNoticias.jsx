import { Row, Col } from "react-bootstrap";
import Noticia from "./Noticia";
import React, { useState, useEffect } from 'react';

const ListaNoticias = ({ category }) => {
    const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  const fetchNews = async (category) => {
      const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_374867eb717c36cfe3081169e0a55ea02fe14&country=au,us&category=${category}`);
      const data = await response.json();
      setNews(data.results || []);
    
  };

  return (
    <div className="py-3 mt-3">
      <Row className="d-flex justify-content-center">
      {news.map((item, index) => (
        <Col md={4} className="mb-4" key={index}>
        <Noticia  item={item} />
        </Col>
      ))}
        
        
      </Row>
    </div>
  );
};

export default ListaNoticias;
