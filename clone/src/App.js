import { GoogleOAuthProvider } from "@react-oauth/google";

//components
import AccountProvider from "./context/AccountProvider";
import Messenger from "./components/Messenger";

function App() {
  const clientId =
    "246536220053-bdphd43acq2ahgjmsj494oki8q61uua0.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
