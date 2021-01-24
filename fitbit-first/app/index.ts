import  Clock  from "./Clock";
import DateDisplay from "./DateDisplay"
import document from "document";

const timeElement = document.getElementById("time") as TextElement;
const dateElement = document.getElementById("date") as TextElement;

const clock = new Clock();
clock.clockCallback = (t) => timeElement.text = t;
const dateDisplay = new DateDisplay();
dateDisplay.dateCallback = (d) => dateElement.text = d;
