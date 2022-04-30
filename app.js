let score = prompt ("ใส่คะเเนนของคุณ 😊")
/*ให้ score เป็นตัวเก็บค่าคะแนนที่ user กรอก โดยใช้คำสั่ง prompt แสดงผลเป็นเหมือน Pop-up ให้ user กรอกคะแนนลงไป */
if(score >= 80){
    document.getElementById("score").innerHTML = score   
    /* แสดงผลคะแนนที่ User กรอก */
    document.getElementById("answer").innerHTML = "คุณได้เกรด 4 😇"
    /* แสดงผลคำตอบให้กับ user */
}else if (score >= 75  ){
    document.getElementById("score").innerHTML = score   
    document.getElementById("answer").innerHTML = "คุณได้เกรด 3.5  😁"
}else if (score >= 70 ){
    document.getElementById("score").innerHTML = score   
    document.getElementById("answer").innerHTML = "คุณได้เกรด 3  🙂 "
}else if (score >= 65 ){
    document.getElementById("score").innerHTML = score   
    document.getElementById("answer").innerHTML = "คุณได้เกรด 2.5  😟"
}else if (score >= 60 ){
    document.getElementById("score").innerHTML = score   
    document.getElementById("answer").innerHTML = "คุณได้เกรด 2  😫"
}else if (score >= 55 ){
    document.getElementById("score").innerHTML = score   
    document.getElementById("answer").innerHTML = "คุณได้เกรด 1.5  😥"
}else if (score >= 50 ){
    document.getElementById("score").innerHTML = score   
    document.getElementById("answer").innerHTML = "คุณได้เกรด 1  (D)  😰 "
}else{
    document.getElementById("score").innerHTML = score   
    document.getElementById("answer").innerHTML = "คุณติด 0  (F)  😭"
}
