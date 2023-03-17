let words_ele = document.querySelector("#id_words_display")
let counter_ele = document.querySelector("#id_character_display")
let text_ele = document.querySelector("#id_input_text")

function update_stat(evt) {
    let input_text = text_ele.value
    words_ele.innerText = count_words(input_text) + " words"
    counter_ele.innerText = input_text.length + " characters"
}

function count_words(text) {
    let word_count = 0
    let is_previous_alphabet_number = false
    let is_space
    let is_alphabet_number
    let char_code
    
    for (let i = 0; i < text.length; i++) {
        char_code = text.charCodeAt(i)
        is_space = char_code === 32
        is_alphabet_number = (char_code >= 48 && char_code <= 57) || 
            (char_code >= 65 && char_code <= 90) || 
            (char_code >= 97 && char_code <= 122)
        if (is_alphabet_number && is_previous_alphabet_number)
            continue
        is_previous_alphabet_number = is_alphabet_number
        if (!is_space)
            word_count++
    }
    return word_count
}

document.querySelector("#id_input_text").addEventListener("change", update_stat)
update_stat()
