import "./styles.css";

export default function App() {
  return (
    <div class="container">
      <div class="wrapper">
        <div class="title">
          <span>Iniciar sesión </span>
        </div>
        <form action="#">
          <div class="row">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Usuario" required />
          </div>
          <div class="row">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Contraseña" required />
          </div>
          <div class="pass">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <div class="row button">
            <input type="submit" value="Login" />
          </div>
          <div class="signup-link">
            <a href="#">Registrate ahora</a>
          </div>
        </form>
      </div>
    </div>
  );
}
