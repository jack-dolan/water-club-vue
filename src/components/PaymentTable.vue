<template>
<div class="table-container">
<table class="table is-fullwidth is-hoverable">
    <thead>
        <tr>
            <th>Member ID</th>
            <th>Nov 19</th>
            <th>Dec 19</th>
            <th>Jan 20</th>
            <th>Feb 20</th>
            <th>Mar 20</th>
            <th>Piggy Bank</th>
        </tr>
    </thead>
    <tbody id="variable-table">
        <!-- Load content from firebase below -->
    </tbody>
</table>
</div>
</template>

<script>
import { db } from './firebase';
export default {
    name: 'payment-table',
}

const ref = db.ref('1y3fWsX4e3XMEBYye98DKlkJsS52uBFZwoBovTDROo1E/Status');

document.addEventListener("DOMContentLoaded", function(event) {// eslint-disable-line no-unused-vars
    let tableContent = document.getElementById('variable-table');

    ref.on('value', function(data){
        let objKey = Object.keys(data.val());
        for (var obj in objKey){
            tableContent.innerHTML +=`
                <tr>
                    <th>${data.val()[(objKey[obj])].id}</th>
                    <td>${data.val()[(objKey[obj])].nov2019}</td>
                    <td>${data.val()[(objKey[obj])].dec2019}</td>
                    <td>${data.val()[(objKey[obj])].jan2020}</td>
                    <td>${data.val()[(objKey[obj])].feb2020}</td>
                    <td>${data.val()[(objKey[obj])].mar2020}</td>
                    <td>${data.val()[(objKey[obj])].piggyBank}</td>
                </tr>
            `
        }
    });
});
</script>

<style scoped>
.table {
    background-color:rgba(255, 255, 255, 0.1);
    font-size: 1.25em;
}
</style>