import "./FirstStep.css";
import CardFruit from "./CardFruit";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";

export const fruits = [
  {
    id: 1,
    icon: "🍅",
    name: "Tomate",
    description:
      "El tomate es una fruta de color rojo brillante, jugoso y delicioso. Se utiliza en muchas recetas, como ensaladas, salsas y jugos.",
  },
  {
    id: 2,
    icon: "🫐",
    name: "Arándanos",
    description:
      "Los arándanos son pequeñas frutas azules que son dulces y llenas de antioxidantes. Son ideales para comer solos o añadirlos a batidos y postres.",
  },
  {
    id: 3,
    icon: "🍌",
    name: "Plátano",
    description:
      "El plátano es una fruta amarilla y alargada que es rica en potasio. Es perfecta como merienda o para añadirla a batidos y postres.",
  },
  {
    id: 4,
    icon: "🍎",
    name: "Manzana",
    description:
      "La manzana es una fruta crujiente y jugosa que viene en una variedad de colores y sabores. Se puede comer sola o utilizar en diversas preparaciones culinarias.",
  },
  {
    id: 5,
    icon: "🍇",
    name: "Uva",
    description:
      "Las uvas son pequeñas frutas redondas y dulces que crecen en racimos. Se pueden comer frescas, utilizarse para hacer vino o incluso secarse como pasas.",
  },
  {
    id: 6,
    icon: "🍊",
    name: "Naranja",
    description:
      "La naranja es una fruta cítrica jugosa y refrescante. Está llena de vitamina C y es perfecta para hacer jugos frescos o simplemente para disfrutarla como está.",
  },
];

export default function FirstStep() {
  const [selectedCard, setSelectedCard] = useState(null);

  const clickCard = (fruit) => {
    setSelectedCard(fruit.id);
    localStorage.setItem("fruitName", fruit.name);
    localStorage.setItem("iconFruit", fruit.icon);
  };

  return (
    <div>
      <h2>Elige tu fruta favorita</h2>
      <h4>Selecciona tu fruta y luego haz clic en el botón "Siguiente Paso"</h4>
      <Container className="p-5 text-center">
        <Row>
          {fruits.map((fruit, index) => (
            <CardFruit
              fruit={fruit}
              key={index}
              clickCard={clickCard}
              selectedCard={selectedCard}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}
