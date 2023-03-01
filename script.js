CSSContainerRule.addeventlistener('mouseenter'), ()=> {
    return CSSContainerRule.outertext=('***');
}
CSSContainerRule.addeventlistener('mouseleaves'), ()=> {
    return console.log('Mouse leaves');
}
