let alumno= new Alumno("Pepe","Feliz","12-07-1999","43509423","1004");
console.log(alumno);

let materia= new Materia("Física","lun y vie 19:00 a 22:00 hs");
materia.addNota(9);
console.log(materia);
materia.addNota(8);
console.log(materia);

let promedioMateria= materia.calcularPromedio();
console.log("Promedio materia: ",promedioMateria);
alumno.addMateria(materia); //agrego la materia al alumno

let m2= new Materia("Química", "mar y jue 19:00 a 22:00 hs");
m2.addNota(7);
m2.addNota(5);

let promAlumno= m2.calcularPromedio();
console.log("Promedio general: ", promAlumno);