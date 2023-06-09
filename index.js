const express = require("express");
const ejs = require("ejs");
const path = require("path");
const engine = require("ejs-locals");
const app = express();
const favicon = require("serve-favicon");

// Projects json data
const projects = require(__dirname + "/public/json/projects.json");

// Public Folder
app.use(express.static(__dirname + "/public"));
// app.use(express.favicon(__dirname + "/public/main/favicon.ico"));

app.use(favicon(path.join(__dirname + "/public/img/main/favicon.ico")));

// Ejs Settings
app.engine("ejs", engine);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// Home page
app.get("/", (req, res) => {
  res.render("index.ejs", { title: "拾元宇宙", activeNav: "home" });
});

// Project page
app.get("/project", (req, res) => {
  res.render("project.ejs", {
    title: "展覽作品",
    activeNav: "project",
    projects: projects,
  });
});

// Team page
for (let i = 0; i < projects.length; i++) {
  app.get("/project/" + projects[i].team, (req, res) => {
    res.render("team.ejs", {
      title: projects[i].projectName,
      activeNav: "project",
      project: projects[i].projectDetails,
      cover: projects[i].projectCover,
    });
  });
}

// 404 page
app.get("*", (req, res) => {
  res.status(404);
  res.render("notFound.ejs", {
    title: "找不到您要的內容",
    activeNav: "none",
  });
});

// Localhost
app.listen(5500, () => {
  console.log("Server is Running on Port 5500");
});
