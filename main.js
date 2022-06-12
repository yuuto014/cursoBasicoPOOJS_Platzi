class Comment {
    constructor({
        content,
        studentName,
        studentRole = "Estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 1;
    }
    publicar(){
        console.log(this.studentName 
            + " ( "
            + this.studentRole 
            + " ) \n"
            + this.likes
            + " likes \n"
            + this.content
            )
    }
}

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
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }

}

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(curso){
        if(curso.isFree){
            this.approvedCourses.push(curso);
        }
        else{
            console.warn("Lo sentimos, "+this.name+", solo puedes tomar cursos gratis");
        }
    }
}
class BasicStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(curso){
        if(curso.lang !== "english"){
            this.approvedCourses.push(curso);
        }
        else{
            console.warn("Lo sentimos, "+this.name+", no puedes tomar cursos en ingles");
        }
    }
}
class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(curso){
        this.approvedCourses.push(curso);
        
    }
}
class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(curso){
        this.approvedCourses.push(curso);
        
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "teacher"
        });
        comment.publicar();
    }
}

function videoPlay(id){
    const urlSecreta = "https://platziultrasecretomasquelanasa.com" + id;
    console.log("Se esta reproduciendo desde la url " + urlSecreta);
}

function videoStop(id){
    const urlSecreta = "https://platziultrasecretomasquelanasa.com" + id;
    console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass{
    constructor({
        name,
        videoID
    }){
        this.name = name;
        this.videoID = videoID;
    }
    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoStop);
    }
}

class Course{
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish"
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
    get name(){
        return this._name;
    }
    set name(nuevoNombre){
        if (nuevoNombre == "Curso malito"){
            console.error("Wey... Noooooo");
        }
        else{
            this._name = nuevoNombre
        }
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
    isFree: true,
    lang: "spanish"
}) 
const cursoDefHTMLYCSS= new Course({
    name: "Curso Definitivo de HTML y CSS",
    isFree: false,
    lang: "spanish"
}) 
const cursoPracHTMLYCSS = new Course({
    name: "Curso Practico de HTML y CSS",
    isFree: false,
    lang: "english"
}) 
const cursoDataBuss = new Course({
    name: "Curso DataBussines",
    isFree: false,
    lang: "spanish"
}) 
const cursoDataViz = new Course({
    name: "Curso DataVIZ",
    isFree: false,
    lang: "spanish"
}) 
const cursoTableu = new Course({
    name: "Curso tableu",
    isFree: false,
    lang: "spanish"
}) 
const cursoUnreal = new Course({
    name: "Curso de Unreal engine",
    isFree: false,
    lang: "spanish"
}) 
const cursoIntrovdj= new Course({
    name: "Curso Introduccion a la Produccion de VideoJuegos",
    isFree: false,
    lang: "spanish"
}) 
const cursoUnity3D = new Course({
    name: "Curso de Unity 3D",
    isFree: false,
    lang: "spanish"
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

const juan = new FreeStudent({
    name: "juan Camilo",
    username: "juanc",
    email: "juanc@platzi.com",
    twitter: "juanitoFeliz",
    learingPaths:[
        escuelaWeb,
        escuelaVgs
    ]
})

const miguelito = new BasicStudent({
    name: "miguel angelo",
    username: "miguelito_feliz",
    email: "miguelito23@platzi.com",
    instagram: "miguelito_Feliz", 
    learingPaths:[
        escuelaWeb,
        escuelaData
    ]
})

const fredy = new TeacherStudent({
    name: "Freddy vega",
    username: "Fredier",
    email: "fredier@platzi.com ",
    instagram : "freddiervegas",
})