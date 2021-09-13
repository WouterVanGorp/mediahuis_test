import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { Logo, Container } from './components';


const client = new GraphQLClient({
  url: process.env.REACT_APP_POKE_ENDPOINT ?? '',
});

export default function App() {
  return (
    <ClientContext.Provider value={client}>
      <>
        <Container>
          <Logo />
          {/* Build your app here */}
        </Container>
      </>
    </ClientContext.Provider>
  );
}
