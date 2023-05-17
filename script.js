const key1 = document.querySelector('.r1c1')

key1.addEventListener("click", () => {
    const update = (document.querySelector(".upper").innerText) + "1"
    document.querySelector(".upper").innerText = update

})

const key2 = document.querySelector('.r1c2')

key2.addEventListener("click", () => {
    const update = (document.querySelector(".upper").innerText) + "2"
    document.querySelector(".upper").innerText = update
})

const key3 = document.querySelector('.r1c3')

key3.addEventListener("click", () => {
    const update = (document.querySelector(".upper").innerText) + "3"
    document.querySelector(".upper").innerText = update
})

const key4 = document.querySelector('.r2c1')

key4.addEventListener("click", () => {
    const update = (document.querySelector(".upper").innerText) + "4"
    document.querySelector(".upper").innerText = update
})

const key5 = document.querySelector('.r2c2')

key5.addEventListener("click", () => {
    const update = (document.querySelector(".upper").innerText) + "5"
    document.querySelector(".upper").innerText = update
})

const key6 = document.querySelector('.r2c3')

key6.addEventListener("click", () => {
    const update = (document.querySelector(".upper").innerText) + "6"
    document.querySelector(".upper").innerText = update
})

const key7 = document.querySelector('.r3c1')

key7.addEventListener("click", () => {
    const update = (document.querySelector(".upper").innerText) + "7"
    document.querySelector(".upper").innerText = update
})

const key8 = document.querySelector('.r3c2')

key8.addEventListener("click", () => {
    const update = (document.querySelector(".upper").innerText) + "8"
    document.querySelector(".upper").innerText = update
})

const key9 = document.querySelector('.r3c3')

key9.addEventListener("click", () => {
    const update = (document.querySelector(".upper").innerText) + "9"
    document.querySelector(".upper").innerText = update
})

const key10 = document.querySelector('.r4c1')

key10.addEventListener("click", () => {
    const update = (document.querySelector(".upper").innerText) + "*"
    document.querySelector(".upper").innerText = update
})

const key11 = document.querySelector('.r4c2')

key11.addEventListener("click", () => {
    const update = (document.querySelector(".upper").innerText) + "0"
    document.querySelector(".upper").innerText = update
})

const key12 = document.querySelector('.r4c3')

key12.addEventListener("click", () => {
    const update = (document.querySelector(".upper").innerText) + "#"
    document.querySelector(".upper").innerText = update
})

const key13 = document.querySelector(".delete")

key13.addEventListener("click", () => {

    const currentText = document.querySelector(".upper").innerText;
    const updatedText = currentText.slice(0, -1);

    document.querySelector(".upper").innerText = updatedText

})