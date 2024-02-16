// call the main function input ***id*** and  calculate the value 2nd -----------------------------------------------------
//--1st triangle
function calculateTriangle() {
  const base = getBase('triangle-base');
  const height = getBase('triangle-height');
  const triangleResult = 0.5 * base * height;
  setInnerTextOne('showoutput1', triangleResult);
};
//--2nd Rectangle
function calculateRectangle() {
  const length = getBase('rectangle-length');
  const width = getBase('rectangle-width');
  const rectangleResult = width * length;
  setInnerTextTwo('showoutput2', rectangleResult);
};
//--3rd parallelogram
function calculateParallelogram() {
  const base = getBase('parallelogram-base');
  const height = getBase('parallelogram-height');
  const parallelogramResult = base * height;
  setInnerTextThree('showoutput3', parallelogramResult);
};
//--4th Rhombus
function calculateRhombus() {
  const base = getBase('rhombus-p');
  const height = getBase('rhombus-q');
  const rhombusResult = (base * height) / 2;
  setInnerTextFour('showoutput4', rhombusResult);
};
//--5th Pentagon
function calculatePentagon() {
  const pari = getBase('pentagon-pari');
  const apo = getBase('pentagon-apo');
  const pentagonResult = 0.5 * pari * apo;
  setInnerTextFive('showoutput5', pentagonResult);
};
//--6th Ellipse
function calculateEllipse() {
  const a = getBase('ellipse-major');
  const b = getBase('ellipse-minor');
  const ellipseResult = 3.1416 * a * b;
  setInnerTextSix('showoutput6', ellipseResult);
};
//Input value Receive Function 1st --------------------------------------------------------------------------------------
function getBase(inputFieldId) {
  const inputBase = document.getElementById(inputFieldId).value;
  const baseInput = parseFloat(inputBase);
  return baseInput;

};
//where i show output result my calculation function ()--------------------------------------------------------------------
//--1st---
function setInnerTextOne(elementId, triangleResult) {
  const element = document.getElementById(elementId);
  element.innerText = triangleResult;
};
//--2nd---
function setInnerTextTwo(elementId, rectangleResult) {
  const element = document.getElementById(elementId);
  element.innerText = rectangleResult;
};
//--3rd---
function setInnerTextThree(elementId, parallelogramResult) {
  const element = document.getElementById(elementId);
  element.innerText = parallelogramResult;
};
//--4th---
function setInnerTextFour(elementId, rhombusResult) {
  const element = document.getElementById(elementId);
  element.innerText = rhombusResult;
};
//--5th---
function setInnerTextFive(elementId, pentagonResult) {
  const element = document.getElementById(elementId);
  element.innerText = pentagonResult;
};
//--6th---
function setInnerTextSix(elementId, ellipseResult) {
  const element = document.getElementById(elementId);
  element.innerText = ellipseResult;
};

