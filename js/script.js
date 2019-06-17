/**
 * 
 * REGULAR EXPRESSION FUNCTIONS
 * 6/17/2019
 * 
 */
function dateCheck(str) {
    let regex = /^\d{1,2}[/-]\d{1,2}[/-]\d{4}$/;
    return regex.test(str);
}

function usTelephoneCheck(str) {
    let regex = /^(1\s?)?(\((\d{3})\)|\d{3})[\s-]*\d{3}[\s-]*\d{4}$/;
    return regex.test(str);
}
document.getElementById("regex-options").addEventListener("change", function(){
    let regex_options = document.getElementById("regex-options");
    let selected_option = regex_options.options[regex_options.selectedIndex].value;
    let user_input = document.getElementById("user-input");
    let icon = document.getElementById("icon");
    if(selected_option == "Date"){
        user_input.name = "date";
        user_input.type = "date";
        user_input.pattern = /^\d{1,2}[/-]\d{1,2}[/-]\d{4}$/;
        icon.classList = "fas fa-calendar"
    }
    else if(selected_option == "U.S. Telephone Number"){
        user_input.name = "phone_num";
        user_input.type = "tel";
        user_input.pattern = /^\d{1,2}[/-]\d{1,2}[/-]\d{4}$/;
        icon.classList = "fas fa-phone"
    }
    console.log(user_input)
})


