function RangeToHeight(bottomRangeH500, height){//makes bottom value relative to height in case that height != 500


    let c = (bottomRangeH500[0] / 500) * height;
    let d = (bottomRangeH500[1] / 500) * height;

    return [c, d];

    /*
    500 - 0
    a - b

    height - 0
    c - d

    a / 500 = c / height
    b / 500 = d / height

    c = a / 500 * height
    d = b / 500 * height
    */

}

function bottom(bottomRange, scrollRange, scroll){

    let result = Math.abs(scrollRange[0] - scrollRange[1]);
    result = (result - scroll) / result;
    result = result * Math.abs(bottomRange[0] - bottomRange[1]);
    result = result + bottomRange[1];

    return result.toString() + 'rem';
}




function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){

    const scrollRangeH500 = [0, 250];
    const bottomRangeH500 = {
        layer2: [6.5, 5],
        layer3: [9.5, 6],
        layer4: [14, 9],
    }



    //page offset
    let height = document.getElementById('parallax-container').offsetHeight;
    let scroll = window.scrollY;
   
    
    let scrollRange = RangeToHeight(scrollRangeH500, height);
    let bottomRange = {};
    for(let i = 2; i <= 4; i++){
        bottomRange['layer' + i] = RangeToHeight(bottomRangeH500['layer' + i], height);
    }

    if(scroll > scrollRange[1]){
        scroll = scrollRange[1];
    }
    for(let i = 2; i <= 4; i++){
        document.getElementById('layer' + i).style.bottom = bottom(bottomRange['layer' + i], scrollRange, scroll);

    }

    


    //resize
    window.addEventListener('resize', function(event){

        height = document.getElementById('parallax-container').offsetHeight;

        scrollRange = RangeToHeight(scrollRangeH500, height);
        for(let i = 2; i <= 4; i++){
            bottomRange['layer' + i] = RangeToHeight(bottomRangeH500['layer' + i], height);
        }

        scroll = this.scrollY;
      
        if(scroll > scrollRange[1]){
            scroll = scrollRange[1];
        }
        for(let i = 2; i <= 4; i++){

            document.getElementById('layer' + i).style.bottom = bottom(bottomRange['layer' + i], scrollRange, scroll);

        }


    })


    //scroll
    window.addEventListener('scroll', function(event){
        let scroll = this.scrollY;

        if(scroll <= scrollRange[1]){

            for(let i = 2; i <= 4; i++){

                document.getElementById('layer' + i).style.bottom = bottom(bottomRange['layer' + i], scrollRange, scroll);
    
            }

        }

    });
   

});

/*
works, just adjust
*/