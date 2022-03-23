
let dataObject = {
    alert: "This is an alert message!",
    projects: [
        { title: "portfolio", languages: ["HTML", "CSS", "VueJS"] },
        { title: "blog", languages: ["HTML", "CSS", "VueJS"] },
        { title: "infoblog", languages: ["HTML", "CSS", "VueJS"] },
    ]
}
let app = new Vue({
    el: "#app",
    data: dataObject,

})