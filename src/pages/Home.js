import { AiOutlineIdcard } from 'react-icons/ai';
import { Container } from './ContactsPage.styled';

export default function Home() {
  return (
    <Container>
      <h1>
        <span role="img" aria-label="logo icon">
          <AiOutlineIdcard size="30px" color="#9f40ff" />
        </span>{' '}
        Task manager welcome page
      </h1>
    </Container>
  );
}
