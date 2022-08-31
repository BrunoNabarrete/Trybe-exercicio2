window.onload = function() {
    let selectBackground = document.querySelector('[name="background"]');
    //console.log(selectBackground);
    selectBackground.addEventListener('change', function(){
        //console.log('sempre que houver mudanças')
        document.body.style.backgroundColor = selectBackground.value;

        localStorage.setItem('background-color', selectBackground.value);
    })

    let selectFontColor = document.querySelector('[name="font-color"]');
    console.log(selectFontColor);
    selectFontColor.addEventListener('change', function(){
        document.body.style.color = selectFontColor.value;

        localStorage.setItem('font-color', selectFontColor.value);
    })
    
    let selectFontSize = document.querySelector('[name="font-size"]');
    selectFontSize.addEventListener('change', function() {
        console.log(selectFontSize.value);
        let p = document.querySelector('p');
        p.style.fontSize = `${selectFontSize.value}px`

        localStorage.setItem('font-size', `${selectFontSize.value}px`);

    })
    
    let selectFontHeight = document.querySelector('[name="font-height"]');
    //console.log(selectFontHeight);
    selectFontHeight.addEventListener('change', function() {
        console.log(selectFontHeight.value);
        let p = document.querySelector('p');
        p.style.lineHeight = selectFontHeight.value;

        localStorage.setItem('line-height', selectFontHeight.value);
    })

    let savedBackground = localStorage.getItem('background-color');
    document.body.style.backgroundColor = savedBackground;

    let savedFontColor = localStorage.getItem('font-color');
    document.body.style.color = savedFontColor;

    let savedFontSize = localStorage.getItem('font-size');
    let p = document.querySelector('p');
    p.style.fontSize = savedFontSize;

    let savedLineHeight = localStorage.getItem('line-height');
    p.style.lineHeight = savedLineHeight;

}