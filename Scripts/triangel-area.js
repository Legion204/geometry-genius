function triangleAreaCalculation(){
    // triangle base
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseText = triangleBase.value; 
    const base = parseFloat(triangleBaseText);

    // triangle hight
    const triangleHight = document.getElementById('triangle-hight');
    const triangleHightText = triangleHight.value;
    const hight = parseFloat(triangleHightText);

    // area calculation
    const area = 0.5 * base * hight;
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText=area;
};