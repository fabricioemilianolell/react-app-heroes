import { AuthProvider } from "./auth/context/AuthProvider";
import { AppRouter } from "./router/AppRouter";



function HeroesApp() {
  return (
    <AuthProvider>
      
        <AppRouter />
        
    </AuthProvider>
  );
}

export default HeroesApp;
