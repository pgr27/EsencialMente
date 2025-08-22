import { useEffect, useState } from "react";
import {
  signIn,
  signUp,
  signInWithGoogle,
  resetPassword,
} from "../../services/authService";

export default function Authentication({ initialMode = "signin", onSuccess }) {
  const [mode, setMode] = useState(initialMode); // 'signin' | 'signup'
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => setMode(initialMode), [initialMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setInfo("");
    setLoading(true);
    try {
      if (mode === "signin") {
        await signIn({ email, password });
      } else {
        await signUp({ email, password, displayName });
      }
      onSuccess?.(); // cerrar modal si nos lo pasan
    } catch (e) {
      setErr(humanize(e));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setErr("");
    setLoading(true);
    try {
      await signInWithGoogle();
      onSuccess?.();
    } catch (e) {
      setErr(humanize(e));
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    setErr("");
    setInfo("");
    setLoading(true);
    try {
      await resetPassword(email);
      setInfo("Te enviamos un correo para restablecer la contraseña.");
    } catch (e) {
      setErr(humanize(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: 12 }}>
        {mode === "signin" ? "Inicia sesión" : "Crear cuenta"}
      </h2>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
        {mode === "signup" && (
          <div>
            <label>Nombre</label>
            <input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
        )}

        <div>
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Contraseña</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading
            ? "Procesando..."
            : mode === "signin"
            ? "Entrar"
            : "Registrarme"}
        </button>
      </form>

      <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
        <button onClick={handleGoogle} disabled={loading}>
          Entrar con Google
        </button>
        <button
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          disabled={loading}
        >
          {mode === "signin"
            ? "¿No tienes cuenta? Regístrate"
            : "¿Ya tienes cuenta? Inicia sesión"}
        </button>
        <button onClick={handleReset} disabled={loading}>
          Olvidé mi contraseña
        </button>
      </div>

      {err && <p style={{ color: "tomato", marginTop: 8 }}>{err}</p>}
      {info && <p style={{ color: "green", marginTop: 8 }}>{info}</p>}
    </div>
  );
}

function humanize(e) {
  const code = e?.code || "";
  switch (code) {
    case "auth/email-already-in-use":
      return "Ese email ya está registrado.";
    case "auth/invalid-email":
      return "Email inválido.";
    case "auth/weak-password":
      return "La contraseña es demasiado débil.";
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "Credenciales incorrectas.";
    case "auth/popup-closed-by-user":
      return "Ventana cerrada antes de completar el login.";
    default:
      return "Ha ocurrido un error. Inténtalo de nuevo.";
  }
}
