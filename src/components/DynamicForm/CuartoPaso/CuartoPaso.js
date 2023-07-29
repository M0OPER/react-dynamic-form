import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Select from "react-select";

import Resume from "../Resume";

const options = [
  { id: 1, value: "cat", label: "Cat 🐱" },
  { id: 2, value: "dog", label: "Dog 🐶" },
  { id: 3, value: "elephant", label: "Elephant 🐘" },
  { id: 4, value: "lion", label: "Lion 🦁" },
  { id: 5, value: "tiger", label: "Tiger 🐯" },
  { id: 6, value: "giraffe", label: "Giraffe 🦒" },
  { id: 7, value: "monkey", label: "Monkey 🐵" },
];

export default function SecondStep({ setStep }) {
  const [selectOption, setSelectOption] = useState(null);
  const animalesSer = JSON.stringify(selectOption);
  localStorage.setItem("animales", animalesSer);

  const [modal, setModal] = useState(false);

  return (
    <div>
      <Container className="p-5 text-center">
        <h2>Selecciona tu animal favorito</h2>
        <Row className="justify-content-md-center">
          <Select
            defaultValue={selectOption}
            onChange={setSelectOption}
            options={options}
            isSearchable
            isMulti
          />
        </Row>
        <div className="send-form">
          <p className="result p-3" onClick={() => setModal(true)}>
            Ver resultados 🙌
          </p>
        </div>
        {modal && (
          <Resume showModal={modal} setModal={setModal} setStep={setStep} />
        )}
      </Container>
    </div>
  );
}
