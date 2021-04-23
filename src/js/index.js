import TestJS from './TestJs.js';
import ConsoleLogIt from './ConsoleLogIt.js';
import getJSON from './getJSON';
const Table = require('./generateTable');

TestJS();
getJSON('', function (data) {
    console.log(data);
});

getJSON('http://localhost:8000/api/v1/cities',
    function(err, records) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            const table = document.querySelector('table');
            const data = Object.keys((records.data[0]));
            const dataRecords = records.data;
            const create = new Table();
            create.generateTableHead(table, data);
            create.generateTable(table, dataRecords);
            /*
            let data = Object.keys(records.data[0]);
            generateTable(table, records.data); // generate the table first
            generateTableHead(table, data); // then the head
             */
        }

    });
ConsoleLogIt('this workedss  in the bundle');
