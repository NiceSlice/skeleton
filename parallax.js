function bottomValue(bottom, scroll){
    let result = (250 - scroll) * (bottom/250);
    console.log(bottom, scroll, result);//15.5 2 0 //15.5 2 15.5
    //15.5 371 14
    return result.toString() + 'rem';
}

function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){

    //document.getElementsByClassName('layer-1')[0].style.bottom = '-10rem';

    window.addEventListener('scroll', function(event){
        var scroll = this.scrollY;

        if(scroll <= 250){

            document.getElementsByClassName('layer-5')[0].style.bottom = bottomValue(15.5, scroll);
            document.getElementsByClassName('layer-4')[0].style.bottom = bottomValue(11, scroll);
            document.getElementsByClassName('layer-3')[0].style.bottom = bottomValue(12.5, scroll);
            document.getElementsByClassName('layer-2')[0].style.bottom = bottomValue(6, scroll);

        }

    });

});