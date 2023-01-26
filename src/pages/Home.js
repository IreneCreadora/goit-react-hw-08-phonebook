import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks/useAuth';
import { AiOutlineIdcard } from 'react-icons/ai';
import { WelcomeContainer, Header, LinkStyled } from './Home.styled';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <WelcomeContainer>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <span role="img" aria-label="logo icon">
        <AiOutlineIdcard size="120px" color="#9f40ff" />
      </span>
      <Header>Welcome to Your Contacts Book</Header>
      {!isLoggedIn && (
        <p>
          For you available{' '}
          <LinkStyled to="/register"> registration </LinkStyled> or{' '}
          <LinkStyled to="/login">login</LinkStyled> if you are already with us.
          <br></br>
          Enter your personal account, use our service and enjoy.
        </p>
      )}

      {isLoggedIn && (
        <p>
          Whats up? to access your contacts, go to the{' '}
          <LinkStyled to="/contacts">Phonebook</LinkStyled> !
        </p>
      )}
    </WelcomeContainer>
  );
}
