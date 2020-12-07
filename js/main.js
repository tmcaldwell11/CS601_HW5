const btn = document.querySelector('button');

const getDegrees = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('get', 'data/degrees.json', true);
  xhr.onreadystatechange = () => {
    if ((xhr.readyState === XMLHttpRequest.DONE ) && (xhr.status === 200)) {
        const response = JSON.parse(xhr.responseText);
        const toInsert = buildDegrees(response);

        btn.insertAdjacentHTML('beforebegin', toInsert);
        btn.style.display = 'none';
      }
  };
  xhr.send();
};

btn.addEventListener('click', getDegrees);

const buildDegrees = ({degrees}) => {
    let degreesOutput = '';
    degreesOutput += `<table>`;
    degreesOutput += `<tr>`;
    degreesOutput += `<th> School </th>`;
    degreesOutput += `<th> Program </th>`;
    degreesOutput += `<th> Type </th>`;
    degreesOutput += `<th> Year </th>`;
    degreesOutput += `</tr>`;
    degreesOutput += `<tr>`;
    degreesOutput += `<td> ${degrees[0].degree.School}</td>`;
    degreesOutput += `<td> ${degrees[0].degree.Program}</td>`;
    degreesOutput += `<td> ${degrees[0].degree.Type}</td>`;
    degreesOutput += `<td> ${degrees[0].degree.Year}</td>`;
    degreesOutput += `</tr>`;
    degreesOutput += `<tr>`;
    degreesOutput += `<td> ${degrees[1].degree.School}</td>`;
    degreesOutput += `<td> ${degrees[1].degree.Program}</td>`;
    degreesOutput += `<td> ${degrees[1].degree.Type}</td>`;
    degreesOutput += `<td> ${degrees[1].degree.Year}</td>`;
    degreesOutput += `</tr>`;
    degreesOutput += `</table>`;

    return degreesOutput;
};
