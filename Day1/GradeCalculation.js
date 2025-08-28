

let score=45
function studentScore(score){

    switch(true){
        case (score>=90):
            console.log("Student Grade is O")
            break
        case (score>=80):
            console.log("Student Grade is A")
            break
        case (score>=70):
            console.log("Student Grade is B")
            break
        case (score>=60):
            console.log("Student Grade is C")
            break
        case (score>=50):
            console.log("Student Grade is C")
            break
        default:
            console.log("Student Grade is E")
    }
}
studentScore(score)
