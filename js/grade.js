function Evaluate(){
    var grade1 = document.getElementById("mathinput").value;
    var text1 = document.getElementById("matheval");

    if (grade1 >= 90 && grade1 <= 100 ){
       text1.innerHTML = "Excellent";
    }
    else if (grade1 >= 80 && grade1 <= 89){
        text1.innerHTML = "Good";
    }
    else if (grade1 >= 70 && grade1 <= 79){
        text1.innerHTML = "Average";
    }
    else if(grade1 >= 60 && grade1 <= 69){
        text1.innerHTML = "Poor";
    }
    else if(grade1 >= 0 && grade1 <= 59){
        text1.innerHTML = "Fail";
    }
    else{
        text1.innerHTML = "Out of Range";
    }

    var grade2 = document.getElementById("scienceinput").value;
    var text2 = document.getElementById("scienceeval");

    if (grade2 >= 90 && grade2 <= 100 ){
       text2.innerHTML = "Excellent";
    }
    else if (grade2 >= 80 && grade2 <= 89){
        text2.innerHTML = "Good";
    }
    else if (grade2 >= 70 && grade2 <= 79){
        text2.innerHTML = "Average";
    }
    else if(grade2 >= 60 && grade2 <= 69){
        text2.innerHTML = "Poor";
    }
    else if(grade2 >= 0 && grade2 <= 59){
        text2.innerHTML = "Fail";
    }
    else{
        text2.innerHTML = "Out of Range";
    }

    var grade3 = document.getElementById("englishinput").value;
    var text3 = document.getElementById("englisheval");

    if (grade3 >= 90 && grade3 <= 100 ){
       text3.innerHTML = "Excellent";
    }
    else if (grade3 >= 80 && grade3 <= 89){
        text3.innerHTML = "Good";
    }
    else if (grade3 >= 70 && grade3 <= 79){
        text3.innerHTML = "Average";
    }
    else if(grade3 >= 60 && grade3 <= 69){
        text3.innerHTML = "Poor";
    }
    else if(grade3 >= 0 && grade3 <= 59){
        text3.innerHTML = "Fail";
    }
    else{
        text3.innerHTML = "Out of Range";
    }

    var grade4 = document.getElementById("filipinoinput").value;
    var text4 = document.getElementById("filipinoeval");

    if (grade4 >= 90 && grade4 <= 100 ){
       text4.innerHTML = "Excellent";
    }
    else if (grade4 >= 80 && grade4 <= 89){
        text4.innerHTML = "Good";
    }
    else if (grade4 >= 70 && grade4 <= 79){
        text4.innerHTML = "Average";
    }
    else if(grade4 >= 60 && grade4 <= 69){
        text4.innerHTML = "Poor";
    }
    else if(grade4 >= 0 && grade4 <= 59){
        text4.innerHTML = "Fail";
    }
    else{
        text4.innerHTML = "Out of Range";
    }

    var grade5 = document.getElementById("peinput").value;
    var text5 = document.getElementById("peeval");

    if (grade5 >= 90 && grade5 <= 100 ){
       text5.innerHTML = "Excellent";
    }
    else if (grade5 >= 80 && grade5 <= 89){
        text5.innerHTML = "Good";
    }
    else if (grade5 >= 70 && grade5 <= 79){
        text5.innerHTML = "Average";
    }
    else if(grade5 >= 60 && grade5 <= 69){
        text5.innerHTML = "Poor";
    }
    else if(grade5 >= 0 && grade5 <= 59){
        text5.innerHTML = "Fail";
    }
    else{
        text5.innerHTML = "Out of Range";
    }
    
    var ranking = document.getElementById("rank");
    
    if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent"){
        ranking.innerHTML ="Top Honor Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent"){
        ranking.innerHTML ="Second Honorable Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text5.innerHTML =="Excellent"){
        ranking.innerHTML ="Second Honorable Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent"){
        ranking.innerHTML ="Second Honorable Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent"){
        ranking.innerHTML ="Second Honorable Student";
    }
    else if(text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent"){
        ranking.innerHTML ="Second Honorable Student";
    }

    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Good" && text5.innerHTML =="Good"){
        ranking.innerHTML ="Top 5 student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Average" && text5.innerHTML =="Average"){
        ranking.innerHTML ="Average Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Fail" && text5.innerHTML =="Fail"){
        ranking.innerHTML ="Summer Class Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Poor" && text5.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup Class Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Good" && text5.innerHTML =="Average"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Average" && text5.innerHTML =="Good"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Good" && text5.innerHTML =="Fail"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Fail" && text5.innerHTML =="Good"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Good" && text5.innerHTML =="Poor"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Poor" && text5.innerHTML =="Good"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Average" && text5.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Poor" && text5.innerHTML =="Average"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Average" && text5.innerHTML =="Fail"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Fail" && text5.innerHTML =="Average"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Fail" && text5.innerHTML =="Poor"){
        ranking.innerHTML ="Believe in God Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text3.innerHTML =="Excellent" && text4.innerHTML == "Poor" && text5.innerHTML =="Fail"){
        ranking.innerHTML ="Believe in God Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text3.innerHTML == "Good" && text5.innerHTML =="Good"){
        ranking.innerHTML ="Top 5 student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text3.innerHTML == "Average" && text5.innerHTML == "Average"){
        ranking.innerHTML ="Average Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text3.innerHTML == "Fail" && text5.innerHTML =="Fail"){
        ranking.innerHTML ="Summer Class Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text3.innerHTML == "Poor" && text5.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup Class Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text3.innerHTML == "Good" && text5.innerHTML =="Average"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text3.innerHTML == "Average" && text5.innerHTML =="Good"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text3.innerHTML == "Good" && text5.innerHTML =="Fail"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text3.innerHTML == "Fail" && text5.innerHTML =="Good"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text3.innerHTML == "Good" && text5.innerHTML =="Poor"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text3.innerHTML == "Poor" && text5.innerHTML =="Good"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text3.innerHTML == "Average" && text5.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text3.innerHTML == "Poor" && text5.innerHTML =="Average"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text3.innerHTML == "Average" && text5.innerHTML =="Fail"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text3.innerHTML == "Fail" && text5.innerHTML =="Average"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text3.innerHTML == "Fail" && text5.innerHTML =="Poor"){
        ranking.innerHTML ="Believe in God Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text3.innerHTML == "Poor" && text5.innerHTML =="Fail"){
        ranking.innerHTML ="Believe in God Student";
    }

    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text3.innerHTML == "Good" && text4.innerHTML =="Good"){
        ranking.innerHTML ="Top 5 student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text3.innerHTML == "Average" && text4.innerHTML =="Average"){
        ranking.innerHTML ="Average Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text3.innerHTML == "Fail" && text4.innerHTML =="Fail"){
        ranking.innerHTML ="Summer Class Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text3.innerHTML == "Poor" && text4.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup Class Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text3.innerHTML == "Good" && text4.innerHTML =="Average"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text3.innerHTML == "Average" && text4.innerHTML =="Good"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text3.innerHTML == "Good" && text4.innerHTML =="Fail"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text3.innerHTML == "Fail" && text4.innerHTML =="Good"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text3.innerHTML == "Good" && text4.innerHTML =="Poor"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text3.innerHTML == "Poor" && text4.innerHTML =="Good"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text3.innerHTML == "Average" && text4.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text3.innerHTML == "Poor" && text4.innerHTML =="Average"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text3.innerHTML == "Average" && text4.innerHTML =="Fail"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text3.innerHTML == "Fail" && text4.innerHTML =="Average"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text3.innerHTML == "Fail" && text4.innerHTML =="Poor"){
        ranking.innerHTML ="Believe in God Student";
    }
    else if(text1.innerHTML =="Excellent" && text2.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text3.innerHTML == "Poor" && text4.innerHTML =="Fail"){
        ranking.innerHTML ="Believe in God Student";
    }

     else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text2.innerHTML == "Good" && text5.innerHTML =="Good"){
        ranking.innerHTML ="Top 5 student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text2.innerHTML == "Average" && text5.innerHTML =="Average"){
        ranking.innerHTML ="Average Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text2.innerHTML == "Fail" && text5.innerHTML =="Fail"){
        ranking.innerHTML ="Summer Class Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text2.innerHTML == "Poor" && text5.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup Class Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text2.innerHTML == "Good" && text5.innerHTML =="Average"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text2.innerHTML == "Average" && text5.innerHTML =="Good"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text2.innerHTML == "Good" && text5.innerHTML =="Fail"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text2.innerHTML == "Fail" && text5.innerHTML =="Good"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text2.innerHTML == "Good" && text5.innerHTML =="Poor"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text2.innerHTML == "Poor" && text5.innerHTML =="Good"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text2.innerHTML == "Average" && text5.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text2.innerHTML == "Poor" && text5.innerHTML =="Average"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text2.innerHTML == "Average" && text5.innerHTML =="Fail"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text2.innerHTML == "Fail" && text5.innerHTML =="Average"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text2.innerHTML == "Fail" && text5.innerHTML =="Poor"){
        ranking.innerHTML ="Believe in God Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text2.innerHTML == "Poor" && text5.innerHTML =="Fail"){
        ranking.innerHTML ="Believe in God Student";
    }

    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Good" && text4.innerHTML =="Good"){
        ranking.innerHTML ="Top 5 student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Average" && text4.innerHTML =="Average"){
        ranking.innerHTML ="Average Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Fail" && text4.innerHTML =="Fail"){
        ranking.innerHTML ="Summer Class Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Poor" && text4.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup Class Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Good" && text4.innerHTML =="Average"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Average" && text4.innerHTML =="Good"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Good" && text4.innerHTML =="Fail"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Fail" && text4.innerHTML =="Good"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Good" && text4.innerHTML =="Poor"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Poor" && text4.innerHTML =="Good"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Average" && text4.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Poor" && text4.innerHTML =="Average"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Average" && text4.innerHTML =="Fail"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Fail" && text4.innerHTML =="Average"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Fail" && text4.innerHTML =="Poor"){
        ranking.innerHTML ="Believe in God Student";
    }
    else if(text1.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Poor" && text4.innerHTML =="Fail"){
        ranking.innerHTML ="Believe in God Student";
    }

    else if(text1.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Good" && text3.innerHTML =="Good"){
        ranking.innerHTML ="Top 5 student";
    }
    else if(text1.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Average" && text3.innerHTML =="Average"){
        ranking.innerHTML ="Average Student";
    }
    else if(text1.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Fail" && text3.innerHTML =="Fail"){
        ranking.innerHTML ="Summer Class Student";
    }
    else if(text1.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Poor" && text3.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup Class Student";
    }
    else if(text1.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Good" && text3.innerHTML =="Average"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text1.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Average" && text3.innerHTML =="Good"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text1.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Good" && text3.innerHTML =="Fail"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text1.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Fail" && text3.innerHTML =="Good"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text1.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Good" && text3.innerHTML =="Poor"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text1.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Poor" && text3.innerHTML =="Good"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text1.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Average" && text3.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text1.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Poor" && text3.innerHTML =="Average"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text1.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Average" && text3.innerHTML =="Fail"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text1.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Fail" && text3.innerHTML =="Average"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text1.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Fail" && text3.innerHTML =="Poor"){
        ranking.innerHTML ="Believe in God Student";
    }
    else if(text1.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text2.innerHTML == "Poor" && text3.innerHTML =="Fail"){
        ranking.innerHTML ="Believe in God Student";
    }

    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text1.innerHTML == "Good" && text5.innerHTML =="Good"){
        ranking.innerHTML ="Top 5 student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text1.innerHTML == "Average" && text5.innerHTML =="Average"){
        ranking.innerHTML ="Average Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text1.innerHTML == "Fail" && text5.innerHTML =="Fail"){
        ranking.innerHTML ="Summer Class Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text1.innerHTML == "Poor" && text5.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup Class Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text1.innerHTML == "Good" && text5.innerHTML =="Average"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text1.innerHTML == "Average" && text5.innerHTML =="Good"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text1.innerHTML == "Good" && text5.innerHTML =="Fail"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text1.innerHTML == "Fail" && text5.innerHTML =="Good"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text1.innerHTML == "Good" && text5.innerHTML =="Poor"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text1.innerHTML == "Poor" && text5.innerHTML =="Good"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text1.innerHTML == "Average" && text5.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text1.innerHTML == "Poor" && text5.innerHTML =="Average"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text1.innerHTML == "Average" && text5.innerHTML =="Fail"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text1.innerHTML == "Fail" && text5.innerHTML =="Average"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text1.innerHTML == "Fail" && text5.innerHTML =="Poor"){
        ranking.innerHTML ="Believe in God Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text4.innerHTML =="Excellent" && text1.innerHTML == "Poor" && text5.innerHTML =="Fail"){
        ranking.innerHTML ="Believe in God Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Good" && text4.innerHTML =="Good"){
        ranking.innerHTML ="Top 5 student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Average" && text4.innerHTML =="Average"){
        ranking.innerHTML ="Average Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Fail" && text4.innerHTML =="Fail"){
        ranking.innerHTML ="Summer Class Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Poor" && text4.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup Class Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Good" && text4.innerHTML =="Average"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Average" && text4.innerHTML =="Good"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Good" && text4.innerHTML =="Fail"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Fail" && text4.innerHTML =="Good"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Good" && text4.innerHTML =="Poor"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Poor" && text4.innerHTML =="Good"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Average" && text4.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Poor" && text4.innerHTML =="Average"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Average" && text4.innerHTML =="Fail"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Fail" && text4.innerHTML =="Average"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Fail" && text4.innerHTML =="Poor"){
        ranking.innerHTML ="Believe in God Student";
    }
    else if(text2.innerHTML =="Excellent" && text3.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Poor" && text4.innerHTML =="Fail"){
        ranking.innerHTML ="Believe in God Student";
    }
    else if(text2.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Good" && text3.innerHTML =="Good"){
        ranking.innerHTML ="Top 5 student";
    }
    else if(text2.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Average" && text3.innerHTML =="Average"){
        ranking.innerHTML ="Average Student";
    }
    else if(text2.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Fail" && text3.innerHTML =="Fail"){
        ranking.innerHTML ="Summer Class Student";
    }
    else if(text2.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Poor" && text3.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup Class Student";
    }
    else if(text2.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Good" && text3.innerHTML =="Average"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text2.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Average" && text3.innerHTML =="Good"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text2.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Good" && text3.innerHTML =="Fail"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text2.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Fail" && text3.innerHTML =="Good"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text2.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Good" && text3.innerHTML =="Poor"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text2.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Poor" && text3.innerHTML =="Good"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text2.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Average" && text3.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text2.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Poor" && text3.innerHTML =="Average"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text2.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Average" && text3.innerHTML =="Fail"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text2.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Fail" && text3.innerHTML =="Average"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text2.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Fail" && text3.innerHTML =="Poor"){
        ranking.innerHTML ="Believe in God Student";
    }
    else if(text2.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Poor" && text3.innerHTML =="Fail"){
        ranking.innerHTML ="Believe in God Student";
    }
    else if(text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Good" && text2.innerHTML =="Good"){
        ranking.innerHTML ="Top 5 student";
    }
    else if(text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Average" && text2.innerHTML =="Average"){
        ranking.innerHTML ="Average Student";
    }
    else if(text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Fail" && text2.innerHTML =="Fail"){
        ranking.innerHTML ="Summer Class Student";
    }
    else if(text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Poor" && text2.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup Class Student";
    }
    else if(text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Good" && text2.innerHTML =="Average"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Average" && text2.innerHTML =="Good"){
        ranking.innerHTML ="Top 10 Student";
    }
    else if(text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Good" && text2.innerHTML =="Fail"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Fail" && text2.innerHTML =="Good"){
        ranking.innerHTML ="Pass me sir Student";
    }
    else if(text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Good" && text2.innerHTML =="Poor"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Poor" && text2.innerHTML =="Good"){
        ranking.innerHTML ="2nd chance Student";
    }
    else if(text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Average" && text2.innerHTML =="Poor"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Poor" && text2.innerHTML =="Average"){
        ranking.innerHTML ="Makeup class Student";
    }
    else if(text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Average" && text2.innerHTML =="Fail"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Fail" && text2.innerHTML =="Average"){
        ranking.innerHTML ="I shall return Student";
    }
    else if(text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Fail" && text2.innerHTML =="Poor"){
        ranking.innerHTML ="Believe in God Student";
    }
    else if(text3.innerHTML =="Excellent" && text4.innerHTML == "Excellent" && text5.innerHTML =="Excellent" && text1.innerHTML == "Poor" && text2.innerHTML =="Fail"){
        ranking.innerHTML ="Believe in God Student";
    }
    else if(text1.innerHTML =="Poor" && text2.innerHTML == "Poor" && text3.innerHTML =="Poor" && text4.innerHTML == "Poor" && text5.innerHTML =="Poor"){
        ranking.innerHTML ="Repeater"
    }
    else if (text1.innerHTML =="Fail" && text2.innerHTML == "Fail" && text3.innerHTML =="Fail" && text4.innerHTML == "Fail" && text5.innerHTML =="Fail"){
        ranking.innerHTML ="Repeater"
    }
}

