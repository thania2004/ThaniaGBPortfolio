function changeText() {
    var id = document.getElementsByName("button")[0].id;
    if (id == 1) {
        document.getElementById("text").innerHTML = "I am familiar with front-end frameworks like React and Angular, as well as server-side frameworks like Node.js and Express. I have experience working with databases such as MySQL and MongoDB, and I understand the importance of version control using Git. My skills in problem-solving and attention to detail allow me to create efficient and effective solutions. I am eager to continue learning and growing as a developer while contributing my skills to a team of professionals.";
        document.getElementsByName("button")[0].id = 0;
    } else {
        document.getElementById("text").innerHTML = "As a junior full stack developer, I possess a strong foundation in programming languages such as HTML, CSS, JavaScript, and various back-end technologies";
        document.getElementsByName("button")[0].id = 1;
    }
}

