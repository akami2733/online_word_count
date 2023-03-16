let words_ele = document.querySelector("#id_words_display")
let counter_ele = document.querySelector("#id_character_display")
let text_ele = document.querySelector("#id_input_text")

function update_stat(evt) {
    let input_text = text_ele.value
    words_ele.innerText = count_words(input_text) + " words"
    counter_ele.innerText = input_text.length + " characters"
}

function count_words(text) {
    let new_word = true
    let word_count = 0
    for (const c of text) {
        if (c === " ")
            new_word = true
        else {
            if (new_word)
                word_count++
            new_word = false
        }
    }
    return word_count
}

document.querySelector("#id_input_text").addEventListener("change", update_stat)
update_stat()
