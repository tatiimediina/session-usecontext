export const loginRequest = async (credentials) => {
  const response = await fetch("http://localhost:4000/auth/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
    credentials: "include",
  });

  if (!response.ok) throw new Error("Credenciales incorrectas");

  return await response.json();
};

export const logoutRequest = async () => {
  await fetch("http://localhost:4000/auth/sign-out", {
    method: "POST",
    credentials: "include",
  });
};

export const checkSessionRequest = async () => {
  const response = await fetch("http://localhost:4000/auth/session", {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) return null;

  return await response.json();
};
