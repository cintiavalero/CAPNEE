


select * from usuario;

select * from persona;

insert into usuario(username,passwd) values ('matias','1234');
insert into persona(nombre,apellido,email,fechanacimiento,idUsuario) values 
('matias','batista','matiasomarbatista99@gmail.com','1999-09-10',1);

CREATE TABLE IF NOT EXISTS Usuario (
id SERIAL PRIMARY KEY,
username varchar(20) NOT NULL UNIQUE,
passwd varchar(250) NOT NULL 
);

CREATE TABLE IF NOT EXISTS Persona (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(45) NOT NULL,
  apellido VARCHAR(45) NOT NULL,
  fechaNacimiento DATE NOT NULL,
  idUsuario INT NOT NULL UNIQUE ,
  CONSTRAINT fk_Persona_Usuario
    FOREIGN KEY (idUsuario)
    REFERENCES Usuario (id)
);

CREATE TABLE IF NOT EXISTS Alumno (
  id SERIAL PRIMARY KEY,
  legajo VARCHAR(45) NOT NULL,
  imagenAdjunta TEXT NOT NULL,
  idPersona INT NOT NULL UNIQUE,
   CONSTRAINT fk_Alumno_Persona
   FOREIGN KEY (idPersona)
   REFERENCES Persona (id)
);


CREATE TABLE IF NOT EXISTS Maestro (
  id SERIAL PRIMARY KEY,
  idPersona INT NOT NULL UNIQUE,
  email VARCHAR(45) NOT NULL UNIQUE,
  CONSTRAINT fk_Maestro_Persona
    FOREIGN KEY (idPersona)
    REFERENCES Persona (id)
);


CREATE TABLE IF NOT EXISTS Curso (
  id SERIAL PRIMARY KEY,
  anio INT NOT NULL,
  division VARCHAR(45) NOT NULL
);


CREATE TABLE IF NOT EXISTS AlumnoPorCurso (
  id SERIAL PRIMARY KEY,
  calificacion FLOAT NOT NULL,
  observacion VARCHAR(300),
  idAlumno INT NOT NULL,
  idCurso INT NOT NULL,
   FOREIGN KEY (idAlumno)
   REFERENCES Alumno (id),
   FOREIGN KEY (idCurso)
   REFERENCES Curso (id)
);


CREATE TABLE IF NOT EXISTS Afectacion (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(45) NOT NULL
);


CREATE TABLE IF NOT EXISTS AfectacionesPorAlumno (
  id SERIAL PRIMARY KEY,
  idAlumno INT NOT NULL,
  idAfectacion INT NOT NULL,
  descripcion VARCHAR(200) NOT NULL,
  FOREIGN KEY (idAlumno)
  REFERENCES Alumno (id),
  FOREIGN KEY (idAfectacion)
  REFERENCES Afectacion (id)
);

CREATE TABLE IF NOT EXISTS ContenidosTematicos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(45) NOT NULL,
  descripcion VARCHAR(200) NOT NULL
);


CREATE TABLE IF NOT EXISTS NivelDificultad (
  id SERIAL PRIMARY KEY,
  numero INT NOT NULL,
  descripcion VARCHAR(200) NOT NULL,
  idContenidosTematicos INT NOT NULL,
  FOREIGN KEY (idContenidosTematicos)
  REFERENCES ContenidosTematicos (id)
);

CREATE TABLE IF NOT EXISTS Actividad (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(45) NOT NULL,
  descripcion VARCHAR(200) NOT NULL,
  fechaInicio TIMESTAMP NOT NULL,
  fechaFin TIMESTAMP NOT NULL,
  idNivelDificultad INT NOT NULL,
  FOREIGN KEY (idNivelDificultad)
  REFERENCES NivelDificultad (id)
);


CREATE TABLE IF NOT EXISTS ContenidosTematicosPorCurso (
  id SERIAL PRIMARY KEY,
  idCurso INT NOT NULL,
  idContenidosTematicos INT NOT NULL,
   FOREIGN KEY (idCurso)
   REFERENCES Curso (id),
   FOREIGN KEY (idContenidosTematicos)
   REFERENCES ContenidosTematicos (id)
);

CREATE TABLE IF NOT EXISTS Ejercicio (
  id SERIAL PRIMARY KEY,
  enunciado VARCHAR(200) NOT NULL,
  imagenAdjunta TEXT NOT NULL,
  idActividad INT NOT NULL,
  FOREIGN KEY (idActividad)
  REFERENCES Actividad (id)
);


CREATE TABLE IF NOT EXISTS AlumnoPorActividad (
  id SERIAL PRIMARY KEY,
  nota FLOAT NOT NULL,
  observacion VARCHAR(45) NOT NULL,
  tiempoResolucion VARCHAR(45) NOT NULL,
  idActividad INT NOT NULL,
  idAlumno INT NOT NULL,
  FOREIGN KEY (idActividad)
  REFERENCES Actividad (id),
  FOREIGN KEY (idAlumno)
  REFERENCES Alumno (id)
);


CREATE TABLE IF NOT EXISTS MaestroPorCurso (
  id SERIAL PRIMARY KEY,
  idMaestro INT NOT NULL,
  idCurso INT NOT NULL,
  FOREIGN KEY (idMaestro)
  REFERENCES Maestro (id),
  FOREIGN KEY (idCurso)
  REFERENCES Curso (id)
);





