/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function changeColorR() {
    document.inputForm.color[0].checked = true;
    document.inputForm.color[1].checked = false;
    document.inputForm.color[2].checked = false;
    document.inputForm.color[3].checked = false;
}

function changeColorA() {
    document.inputForm.color[0].checked = false;
    document.inputForm.color[1].checked = true;
    document.inputForm.color[2].checked = false;
    document.inputForm.color[3].checked = false;
}

function changeColorN() {
    document.inputForm.color[0].checked = false;
    document.inputForm.color[1].checked = false;
    document.inputForm.color[2].checked = true;
    document.inputForm.color[3].checked = false;
}

function changeColorV() {
    document.inputForm.color[0].checked = false;
    document.inputForm.color[1].checked = false;
    document.inputForm.color[2].checked = false;
    document.inputForm.color[3].checked = true;
}