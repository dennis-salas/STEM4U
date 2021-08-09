import { Container, Tab, Tabs } from "react-bootstrap";
import CardTecno from "../../Components/CardTecno";
import CardScience from "../../Components/CardScience";

export const Publications = () => {
  return (
    <Container className="my-3">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="tecnology" title="Tecnologia">
          <CardTecno/>
        </Tab>
        <Tab eventKey="science" title="Ciencias">
          <CardScience />
        </Tab>
      </Tabs>
    </Container>
  );
};
