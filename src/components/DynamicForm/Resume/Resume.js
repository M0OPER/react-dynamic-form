import { Button, CardGroup, Modal } from "react-bootstrap";
import CardResume from "./CardResume/CardResume";
import CardResumeHobbies from "./CardResume/CardResumeHobbies";
import CardResumeAnimales from "./CardResume/CardResumeAnimales";
export default function Resume({ showModal, setModal, setStep }) {
  const favouriteFruit = localStorage.getItem("fruitName");
  const fruitIcon = localStorage.getItem("iconFruit");
  const hobbiesStorage = JSON.parse(localStorage.getItem("hobbies"));
  const animalesStorage = JSON.parse(localStorage.getItem("animales"));
  const addiotionalHobbie = localStorage.getItem("additionalHobbie");
  const comment = localStorage.getItem("comment");

  const clearForm = () => {
    localStorage.clear();
    setModal(false);
    setStep(1);
  };

  return (
    <Modal
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={clearForm}
    >
      <Modal.Header closeButton>
        <Modal.Title>Felicitaciones !🥳 🎉</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Aquí está tu resumen</h4>
        <CardGroup className="mt-4">
          {favouriteFruit && fruitIcon && (
            <CardResume
              title={fruitIcon}
              subtitle="Tu fruta favortia es "
              text={favouriteFruit}
            />
          )}
          {hobbiesStorage && (
            <CardResumeHobbies
              subtitle="Tus pasatiempos "
              text={addiotionalHobbie}
              hobbiesStorage={hobbiesStorage}
            />
          )}
          {animalesStorage && (
            <CardResumeAnimales
              subtitle="Tus animales "
              animalesStorage={animalesStorage}
            />
          )}
          {comment && <CardResume subtitle="Tus comentarios" text={comment} />}
        </CardGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={clearForm} variant="outline-dark">
          Salir y limpiar formulario
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
