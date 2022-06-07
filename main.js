class Student{

    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learingPaths = [],
    })
    {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia ={
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learingPaths = learingPaths;
    }

}

class Course{
    constructor({
        name,
        teacher,
        classes = []
    }){
        this.name = name;
        this.teacher = teacher;
        this.classes = classes;
    }
}

class Lesson{
    constructor({
        numlesson,
        title
    }){
        this.numlesson = numlesson;
        this.title = title;
    }
}

class LearningPath{
    constructor({
        name,
        courses =[],
    })
    {
        this.name = name;
        this.courses = courses;
    }
}

//Cracion de las Class

const cursoProgBasica = new Course({
    name: "Curso Programacion Basica",
    teacher: "Fredy Vegas"
}) 
const cursoDefHTMLYCSS= new Course({
    name: "Curso Definitivo de HTML y CSS",
    teacher: "Fredy Vegas",
}) 
const cursoPracHTMLYCSS = new Course({
    name: "Curso Practico de HTML y CSS",
    teacher: "Fredy Vegas",
}) 
const cursoDataBuss = new Course({
    name: "Curso DataBussines",
    teacher: "Fredy Vegas",
}) 
const cursoDataViz = new Course({
    name: "Curso DataVIZ",
    teacher: "Fredy Vegas",
}) 
const cursoTableu = new Course({
    name: "Curso tableu",
    teacher: "Fredy Vegas",
}) 
const cursoUnreal = new Course({
    name: "Curso de Unreal engine",
    teacher: "Fredy Vegas",
}) 
const cursoIntrovdj= new Course({
    name: "Curso Introduccion a la Produccion de VideoJuegos",
    teacher: "Fredy Vegas",
}) 
const cursoUnity3D = new Course({
    name: "Curso de Unity 3D",
    teacher: "Fredy Vegas",
}) 



//Creacion de los Learining Paths

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrrollo Web",
    courses:[
        cursoProgBasica,
        cursoDefHTMLYCSS,
        cursoPracHTMLYCSS,
        "Curso de Responsive Desing"
    ]
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses:[
        cursoProgBasica,
        cursoDataBuss,
        cursoDataViz,
        cursoTableu
    ]
});

const escuelaVgs = new LearningPath({
    name: "Escuela de VideoJuegos",
        courses:[
            cursoProgBasica,
            cursoIntrovdj,
            cursoUnreal,
            cursoUnity3D
        ]
});

const juan = new Student({
    name: "juan Camilo",
    username: "juanc",
    email: "juanc@platzi.com",
    twitter: "juanitoFeliz",
    learingPaths:[
        escuelaWeb,
        escuelaVgs
    ]
})

const miguelito = new Student({
    name: "miguel angelo",
    username: "miguelito_feliz",
    email: "miguelito23@platzi.com",
    instagram: "miguelito_Feliz", 
    learingPaths:[
        escuelaWeb,
        escuelaData
    ]
})