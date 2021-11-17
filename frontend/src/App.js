import Routes from "./routes";
import { AuthProvider } from "./hooks/auth.hook";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <div className="bg-gray-100" style={{ minHeight: "100vh" }}>
        <ToastContainer />
        <Routes />
      </div>
    </AuthProvider>
  );
}

export default App;
