// GET /zen
(function () {
  document.addEventListener('DOMContentLoaded', function (event) {
    // TODO use fetch API!
    const req = new window.XMLHttpRequest()

    req.onreadystatechange = function process () {
      if (req.readyState === window.XMLHttpRequest.DONE && req.status === 200) {
        document.getElementById('content').innerText = req.responseText
      }
    }

    req.open('GET', 'https://api.github.com/octocat', true)
    req.send()
  })
})()
