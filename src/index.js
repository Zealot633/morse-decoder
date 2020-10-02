const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "**********": " ",
};

function decode(expr) {
  function separate(str) {
    let result = [];
    for (let i = 0; i < str.length / 10; i++) {
      result.push(str.substr(i * 10, 10));
    }
    return result;
  }
  let result = separate(expr)
    .map(
      (e) =>
        (e = e
          .split("00")
          .filter((elem) => elem !== "")
          .join(""))
    )
    .map((e) => e.replace(/10/g, ".").replace(/11/g, "-"))
    .map((e) => (e = MORSE_TABLE[e]))
    .join("");
  return result;
}

module.exports = {
  decode,
};
