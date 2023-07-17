import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import spotifyImage from "../../assets/img/spotify.png";
import deezerImage from "../../assets/img/deezer.png";
import qobuzImage from "../../assets/img/qobuz.png";
import CardService from "./CardService/CardService";

export default function Services() {
  const servicesArray = [
    {
      title: "Spotify",
      subtitle: "Disfruta de millones de canciones y podcasts en Spotify",
      image: spotifyImage,
      footer: "Ir a Spotify ➡️",
      link: "https://www.spotify.com/",
    },
    {
      title: "Deezer",
      subtitle: "Escucha música en streaming con Deezer",
      image: deezerImage,
      footer: "Ir a Deezer ➡️",
      link: "https://www.deezer.com/",
    },
    {
      title: "Qobuz",
      subtitle: "Descubre música de alta calidad en Qobuz",
      image: qobuzImage,
      footer: "Ir a Qobuz ➡️",
      link: "https://www.qobuz.com/",
    },
  ];

  return (
    <div id="Servicios" className="services p-4 mt-5">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h2 className="text-center">Servicios</h2>
            <h4 className="pb-3 text-center">
              Escuchar musica en alta calidad
            </h4>
            <Row xs={1} md={3} className="g-4 mt-4">
              {servicesArray.map((service, index) => (
                <CardService service={service} key={index} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
