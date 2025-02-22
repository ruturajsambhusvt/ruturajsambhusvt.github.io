// from: http://www.robots.ox.ac.uk/~vedaldi/assets/hidebib.js
function showselected()
{
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "paper") {
            if (el[i] .dataset.selected == 'n'){
                el [i] .style.display = 'none' ;
            }
        }
    }

    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "year_heading") {
            el [i] .style.display = 'none' ;
        }
    }
    document.getElementById('select').style = 'text-decoration:underline';
    document.getElementById('unselect').style = '';
    
}

function showselected_proj()
{
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "project") {
            if (el[i] .dataset.selected == 'n'){
                el [i] .style.display = 'none' ;
            }
        }
    }

    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "year_heading_proj") {
            el [i] .style.display = 'none' ;
        }
    }
    document.getElementById('select_proj').style = 'text-decoration:underline';
    document.getElementById('unselect_proj').style = '';
    
}

function showselected_course()
{
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "course") {
            if (el[i] .dataset.selected == 'n'){
                el [i] .style.display = 'none' ;
            }
        }
    }

    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "year_heading_course") {
            el [i] .style.display = 'none' ;
        }
    }
    document.getElementById('select_course').style = 'text-decoration:underline';
    document.getElementById('unselect_course').style = '';
    
}



function showall()
{
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "paper") {
            if (el[i] .dataset.selected == 'n'){
                el [i] .style.display = 'block' ;
            }
        }
    }

    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "year_heading") {
            el [i] .style.display = 'block' ;
        }
    }
    document.getElementById('unselect').style = 'text-decoration:underline';
    document.getElementById('select').style = '';
}

function showall_proj()
{
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "project") {
            if (el[i] .dataset.selected == 'n'){
                el [i] .style.display = 'block' ;
            }
        }
    }

    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "year_heading_proj") {
            el [i] .style.display = 'block' ;
        }
    }
    document.getElementById('unselect_proj').style = 'text-decoration:underline';
    document.getElementById('select_proj').style = '';
}

function showall_course()
{
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "course") {
            if (el[i] .dataset.selected == 'n'){
                el [i] .style.display = 'block' ;
            }
        }
    }

    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "year_heading_course") {
            el [i] .style.display = 'block' ;
        }
    }
    document.getElementById('unselect_course').style = 'text-decoration:underline';
    document.getElementById('select_course').style = '';
}

function hideallbibs()
{
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "paper") {
            var bib = el[i].getElementsByTagName("pre") ;
            if (bib.length > 0) {
                bib [0] .style.display = 'none' ;
            }
        }
    }
}

function togglebib(paperid)
{
    var paper = document.getElementById(paperid) ;
    var bib = paper.getElementsByTagName('pre') ;
    if (bib.length > 0) {
        if (bib [0] .style.display == 'none') {
            bib [0] .style.display = 'block' ;
        } else {
            bib [0] .style.display = 'none' ;
        }
    }
}

function toggleblock(blockId)
{
    var block = document.getElementById(blockId);
    if (block.style.display == 'none') {
    	block.style.display = 'block' ;
    } else {
    	block.style.display = 'none' ;
    }
}

function hideblock(blockId)
{
    var block = document.getElementById(blockId);
    block.style.display = 'none' ;
}