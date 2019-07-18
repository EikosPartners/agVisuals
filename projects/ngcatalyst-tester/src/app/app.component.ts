import { Component, OnInit } from '@angular/core';
const sunburstDataJson = require('../assets/sunburstData.json');
const punchDataJson = require('../assets/punchData.json');
const pieDataJson = require('../assets/pieData.json');
const lineDataJson = require('../assets/lineData.json');
const heatDataJson = require('../assets/heatDataCal.json');
const heatData2Json = require('../assets/heatData.json');
const bubbleDataJson = require('../assets/bubbleData.json');
const barDataJson = require('../assets/barData.json');
import { shuffle } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngcatalyst-tester';

  yAxisLabel = 'Thing Measured';
  xAxisLabelDate = 'Date of Thing';
  xAxisLabel = 'Quantity';
  falseVar = false;
  axisAngle = 25;
  plotPct = "200%";
  hundoPct = "100%";
  fiftyPct = "50%";
  margin = {};

  barData = barDataJson;
  barPropID = 'angularbar';
  barTitle = 'Bar Chart';
  barColor = '#57a71c';
  height = 500;
  width = 600;

  bubbleData = bubbleDataJson;
  bbcData = [
    { x: 1, y: 1, label: "Value 1", value: 100 },
    { x: 4, y: 5, label: "Value 2", value: 150 },
    { x: 7, y: -3, label: "Value 3", value: 300 },
    { x: 12, y: 5, label: "Value 4", value: 200 },
    { x: 1, y: 33, label: "Value 5", value: 250 }
  ];
  bubblePropID = 'angularbubble';
  bubbleTitle = 'Bubble Chart';
  bubbleColors = ["#4F1E71", "#7C388E", "#A93B8D", "#BA5288", "#F38595", "#EDB7A7", "#F06292", "#C2185B"];
  bbcDivHeight = 300;
  bbcDivWidth = 400;

  heatData = heatDataJson;
  heatData2 = heatData2Json;
  heatPropID = "heat2";
  xAxisAngle = "45";
  dataType = "other";

  lineData = lineDataJson;
  linePropID = 'angularlines';
  lineTitle = 'Line Plot';
  lineColor = "#5c2197";

  pieData = pieDataJson;
  piePropID = 'angularpie';
  pieTitle = 'Pie Chart';
  pieColors = ["#081A4E", "#092369", "#1A649F", "#2485B4", "#2DA8C9", "#5DC1D0", "#9AD5CD", "#D5E9CB", "#64B5F6", "#01579B"];
  donutWidth = 100;
  donutWidthPct = "10%";

  punchData = punchDataJson;
  punchPropID = 'angularpunch';
  punchTitle = 'Punch Card';
  punchColors =  ["#641E16", "#7B241C", "#922B21", "#A93226", "#C0392B", "#CD6155", "#D98880", "#E6B0AA", "#E57373", "#B71C1C"];
  axisColor = ["#FF6F00", "#FFD600"];

  sunburstData = sunburstDataJson;
  sunburstPropID = "angularsunburst";
  sunburstTitle = 'Sunburst';

  alineData2: any;


  ngOnInit() {
    console.log(this.lineData);
    this.alineData2 = this.createValue();
  }

  get barData2() {
    return this.barData.map((item, index) => {
      item.value = this.randomNumber(0, 5);
      return item;
    });
  }

  get pieData2() {
    return this.pieData.map((item, index) => {
      item.value = this.randomNumber(0, 50);
      return item;
    });
  }

  get sunburstData2() {
    const foo = this.metaCollect(this.sunburstData);

    return foo;
  }

  metaCollect(obj) {
    const collector = [];
    obj.forEach((item, index) => {
      const subject = {"name": item["name"]};
      if (item["children"]) {
        subject["children"] = this.metaCollect(item["children"]);
      } else {
        subject["size"] = this.randomNumber(500, 20000);
      }
      collector.push(subject);
    });
    console.log(collector);
    const names = this.shuffleMap(collector, "name");
    const sizes = this.shuffleMap(collector, "size");

    let kids = [];
    if (collector.some(i2 => i2["children"])) {
      kids = this.shuffleMap(collector, "children");
    }

    const randomized = [];
    names.forEach((item, index, arr) => {
      const subtree = {name: item};
      if (kids.length > 0) {
        subtree["children"] = kids[index];
      }
      if (collector.some(i2 => i2["name"] === item)) {
        subtree["size"] = sizes[index];
      }
      randomized.push(subtree);
    });

    return randomized;
  }

  shuffleMap(arr, arg) {
    return shuffle(arr.map(item => item[arg]));
  }


  onclickfn () {
    this.sunburstTitle = "different";
    console.log('clicked')
    this.lineData = this.lineData.map((item, index) => {
      item.value = this.randomNumber(0, 30000);
      return item;
    });
    console.log(this.lineData);
    console.log("a", this.alineData2);
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  createValue() {
    console.log("before", this.lineData);
    console.log("before", this.lineData);

    const returner = [];

    this.lineData.forEach((item, index) => {
      item.value = this.randomNumber(0, 300);
      returner.push(item);
    });
    console.log("pushed", returner);

    return returner;
  }

}
