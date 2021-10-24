function outputKeyValueObject(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}

module.exports = outputKeyValueObject;
