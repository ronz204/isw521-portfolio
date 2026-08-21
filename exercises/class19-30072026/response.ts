type LoginExitoso = {
  exito: true;
  token: string;
};

type LoginFallido = {
  exito: false;
  error: string;
};

type RespuestaAuth = LoginExitoso | LoginFallido;
