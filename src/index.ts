import "./style.css";

const ROOT: HTMLElement = document.getElementById("root");

const wrapper: HTMLElement = document.createElement("div");

const title: HTMLElement = document.createElement("h1");

title.innerText = "Pokemon Game";
wrapper.classList.add("wrapper");
title.classList.add("title");

// attach nodes

wrapper.appendChild(title);

ROOT.appendChild(wrapper);
