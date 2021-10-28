import Routes from './routes';
import { AuthProvider } from './hooks/auth.hook';

function App() {
  return (
    <AuthProvider>
      <div className="bg-gray-100 h-screen">
        <Routes />
      </div>
    </AuthProvider>
  );
}

export default App;
