import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import {Header} from "./components/Header";

function App() {
  return (
    <div className="container">
        <Header />
        <Card bg="primary"
              text="white"
              className='mb-2'
              style={{ width: '18rem' }}
        >
          <Card.Header>Name</Card.Header>
          <Card.Body>
            <Card.Title> Card Title </Card.Title>
            <Card.Text>Game</Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
}

export default App;
