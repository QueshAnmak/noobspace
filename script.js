function enter(event){
    console.log(event.key);

    if (event.key === "Enter"){

    const string1 = document.getElementsByClassName("search").item(0).value;
    
    console.log(string1);
    window.open(`https://www.google.com/search?q=${string1}`);
    }    
}
