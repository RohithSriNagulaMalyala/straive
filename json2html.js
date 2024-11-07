export default function json2html(data) {
  // Collect unique headers from the data array
  const headers = Array.from(new Set(data.flatMap(Object.keys)));
  
  // Generate table header HTML
  let tableHTML = `<table data-user="0710rohith@gmail.com"><thead><tr>`;
  headers.forEach(header => tableHTML += `<th>${header}</th>`);
  tableHTML += `</tr></thead><tbody>`;
  
  // Generate table rows
  data.forEach(row => {
    tableHTML += `<tr>`;
    headers.forEach(header => tableHTML += `<td>${row[header] || ""}</td>`);
    tableHTML += `</tr>`;
  });

  tableHTML += `</tbody></table>`;
  return tableHTML;
}
