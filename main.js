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

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrrollo Web",
    courses:[
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
        "Curso de Responsive Desing"
    ]
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses:[
        "Curso DataBussines",
        "Curso DataVIZ",
        "Curso Tabnleu"
    ]
});

const escuelaVgs = new LearningPath({
    name: "Escuela de VideoJuegos",
            courses:[
                "Curso Introduccion a la Produccion de VideoJuegos",
                "Curso de Unreal engine",
                "Curso de Unity 3D"
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