module.exports = (err, req, res, next) => {
  // Define respuestas para diferentes tipos de errores
  const errorResponse = {
    400: { message: "Solicitud incorrecta" },
    401: { message: "No autorizado" },
    403: { message: "Acceso prohibido" },
    409: { message: "Conflicto" },
    500: { message: "Error interno del servidor" },
  };

  // Verifica si el error tiene un código de estado conocido en el objeto de respuestas
  if (errorResponse[err.statusCode]) {
    const { status, message } = errorResponse[err.statusCode];
    res.status(err.statusCode).json({ error: message + ":" + err.message });
  } else {
    // Si el código de estado no está definido en el objeto, usa 500 como predeterminado
    res.status(500).json(errorResponse[500]);
  }
};
