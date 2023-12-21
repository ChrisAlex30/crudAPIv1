const getStudents="select * from studet ";
const getStudentById="select * from studet where Id=$1";
const chkEmail="select * from studet where email=$1";
const addStu="insert into studet (name,email,age,dob) values ($1,$2,$3,$4)";
const delStu="delete from studet where Id=$1";
const updStu="update studet set name=$1,email=$2,age=$3,dob=$4 where Id=$5";

export default {
    getStudents,getStudentById,chkEmail,addStu,delStu,updStu,
}