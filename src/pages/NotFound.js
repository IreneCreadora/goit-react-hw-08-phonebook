import { Helmet } from 'react-helmet';
import { WelcomeContainer } from './Home.styled';

export default function NotFound() {
  return (
    <WelcomeContainer>
      <Helmet>
        <title>NotFound</title>
      </Helmet>
      <h2>Error 404: Page Not Found</h2>
      <p>😮Sorry we couldn't find that page 😮</p>
    </WelcomeContainer>
  );
}
