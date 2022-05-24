function inflationCalculator(){

    var inflation=document.getElementById('inflationRate').value;
    var money=document.getElementById('money').value;
    var years=document.getElementById('years').value


    var vrijednost=money*1+(money*1*(inflation*1/100));

    for(var i=1;i<years;i++){
        vrijednost+=vrijednost*(inflation/100)
    }
   vrijednost = vrijednost.toFixed(2);
    console.log(vrijednost);

    var mainDiv=document.getElementById('container');
    var newText=document.createElement('p');
    newText.classList='paragraf';
    mainDiv.appendChild(newText);
    newText.innerText=`Unesena stopa inflacije u iznosu od ${inflation} % na novcani iznos od ${money} BAM na period od ${years} godina iznosit ce za ${years} godina ${vrijednost} BAM`;
    newText.style.color="white";
    newText.style.marginTop="10px";
    newText.style.textAlign="center";

    
  
}







    /*
    // Vrijednost za jednu godinu
    var vrijednost=money+(money*(inflation/100));

    for(var i=1; i<years;i++){
        vrijednost+=vrijednost*(inflation/100)
    }
    */