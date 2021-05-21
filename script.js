document.addEventListener("keydown", function(event){
    if (event.key != 'Backspace' && event.key != 'Delete'){
        search.focus();
    }
    if (search.value.length == 1 && event.key == 'Backspace'){
        console.log("blurring");
        search.blur();
        search.value = '';
        lengthMoreThan1 = false;
    }
});

function checkIfEnter(event){

    console.log(event.key);
    const toSearch = search.value;

    if (event.key === "Enter"){

        // check if toSearch is url
        urlPattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
        const toSearchIsUrl = toSearch.match(urlPattern);
        
        // if url, open directly
        if (toSearchIsUrl)
            open(toSearch, "_self");

        // else google search
        else
            open(`https://www.google.com/search?q=${toSearch}`, "_self");
    }    
}