const fetch = require("node-fetch")

async function fetchTBA() {
  try {
    let res = await fetch(
      "https://www.thebluealliance.com/api/v3/event/2017mttd/teams/simple",
      {
        method: "GET",
        headers: {
          "X-TBA-Auth-Key":
            "dN035xmkiTaxfsfyaKBMs7qlXImozqoe0Umw3WpjaPhoSz7S4Pm0hweEUjMoXGmT"
        }
      }
    )
    let json = await res.json()
    console.log(json)
    return json
  } catch (err) {
    console.err(err)
  }
}

module.exports = {
  fetchTBA
}
