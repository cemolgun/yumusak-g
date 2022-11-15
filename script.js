g_mors = [
    "ğĞ",
    "Ğğğğ",
    "ĞğĞğ",
    "Ğğğ",
    "ğ",
    "ğğĞğ",
    "ĞĞğ",
    "ğğğğ",
    "ğğ",
    "ğĞĞĞ",
    "ĞğĞ",
    "ğĞğğ",
    "ĞĞ",
    "Ğğ",
    "ĞĞĞ",
    "ğĞĞğ",
    "ĞĞğĞ",
    "ğĞğ",
    "ğğğ",
    "Ğ",
    "ğğĞ",
    "ğğğĞ",
    "ğĞĞ",
    "ĞğğĞ",
    "ĞğĞĞ",
    "ĞĞğğ"
];

a_letters = "abcdefğhijklmnopqrstuvwxyz"

g_box = document.querySelector("#yumusak-g");
a_box = document.querySelector("#alfabe");

function g(){

    a_str = a_box.value;
    a_str = a_str.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    //console.log(a_str);

    g_str="";

    for(i = 0; i<a_str.length;i++){

        if (a_str.charCodeAt(i)>= 65 && a_str.charCodeAt(i)<=90){
            g_str += g_mors[a_str.charCodeAt(i)-65]+" ";
        }
        else {
            g_str += a_str[i];
            if (a_str[i] != " "){
                g_str +=" ";
            }
        }

    }
    g_box.value = g_str;
}

function a(){

    g_str = g_box.value;
    cleaning_array = g_str.split("")
    g_str = "";

    for(i=0;i<cleaning_array.length;i++){
        if (cleaning_array[i] == "ğ" || cleaning_array[i] == "Ğ" || cleaning_array[i] == " "){
            g_str+=cleaning_array[i];
        }
    }

    letter_list = g_str.split(" ");
    //console.log(letter_list)

    a_str="";

    for(i=0;i<letter_list.length;i++){
        if (letter_list[i] == ""){
            a_str += " ";
            continue;
        }
        for (j=0; j<27; j++){
            if (letter_list[i] == g_mors[j]){
                a_str += a_letters[j];
                break;
            }
        }
    }

    a_box.value = a_str;
}