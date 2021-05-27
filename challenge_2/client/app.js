const getCSV = (data) => {
  let csvRows = [];
  let keys = Object.keys(JSON.parse(data));
  csvRows.push(keys.join(','));

  for (let row of data) {
    let values = keys.map(key => {
      let adjusted = String(row[key]).replace(/"/g, '\\"');
      return `"${adjusted}"`;
    });
    csvRows.push(values.join(','));
  }
  return csvRows.join('\n');
}

module.exports = getCSV;