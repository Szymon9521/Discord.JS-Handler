function chatColor() {}
const logger = class {
    static log(s) { return console.log(s) }
    static error(s) { return console.log("🚨 - \x1b[31m" + s + "\x1b[0m") }
    static info(s) { return console.log("🍏 - \x1b[32m" + s + "\x1b[0m") }
    static warning(s) { return console.log("⚠️ - \x1b[33m" + s + "\x1b[0m") }
    static succes(s) { return console.log("✅ - \x1b[32m" + s + "\x1b[0m") }
    static canceled(s) { return console.log("🥶 - \x1b[34m" + s + "\x1b[0m") }
    /*static sus = class {
        static xd = function() { console.log("debil")}
    }*/
}

chatColor.red = function(s) { return "\x1b[31m" + s + "\x1b[0m" }
chatColor.green = function(s) { return "\x1b[32m" + s + "\x1b[0m" }
chatColor.blue = function(s) { return "\x1b[34m" + s + "\x1b[0m" }
chatColor.yellow = function(s) { return "\x1b[33m" + s + "\x1b[0m" }
chatColor.white = function(s) { return "\x1b[37m" + s + "\x1b[0m" }


module.exports = {
    chatColor,
    logger
}