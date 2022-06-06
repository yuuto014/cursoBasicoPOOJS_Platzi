//Creacion de un objeto literal
const natalia = {
    name: "Natalia",
    last_name : "Bohorquez",
    age : 20,
    cursosAprobados:[
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS"
    ],
    aprovarCurso(curso){
        this.cursosAprobados.push(curso)
        return this.cursosAprobados
    },
};

//Hacer que Natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Responsive Design")

//uso de protopipos

function Student(name,age,cursosAprobados){
    this.name =  name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprovarCurso = function (curso){
    //     this.cursosAprobados.push(curso);
    // }
}

Student.prototype.aprovarCurso = function(curso){
    this.cursosAprobados.push(curso);
}

const juanita = new Student (
    "Juanita Ruiz", 
    16 , 
    ["Curso de Introduccion a la Produccion de Videojuegos",
    "Curso de Creacion de Personajes"]
);

juanita.aprovarCurso("Curso de Unreal Engine")
