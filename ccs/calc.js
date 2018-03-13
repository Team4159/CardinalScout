const math = require("mathjs")
math.config({
  number: "BigNumber"
})
console.log(0.1 + 0.3)
console.log(math.add(0.1, 0.3))
>>>>>>> origin/server
