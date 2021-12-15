function CandyHierarchy(title = '', weight = 10, sugar = 10) {
  this.title = title;
  this.weight = weight;
  this.sugar = sugar;
}

const mars = new CandyHierarchy('mars', 5);
const milkyway = new CandyHierarchy('milkyway', 8);
const twix = new CandyHierarchy('twix', 7);

function PresentBox(...candy) {
  this.candy = candy;
}

PresentBox.prototype.summaryWeight = function summaryWeight() {
  return this.candy.reduce((item, obj) => item + obj.weight, 0);
};

PresentBox.prototype.sortCandyByName = function sortCandyByName() {
  this.candy.sort((a, b) => (a.title < b.title ? -1 : 0));
};

PresentBox.prototype.searchCandy = function searchCandy(name) {
  let position = -1;
  this.candy.forEach((obj, i) => {
    if (obj.title === name) {
      position = i;
    }
  });
  return position;
};

const presentCandyBox = new PresentBox(mars, milkyway, twix);

module.export = presentCandyBox;
