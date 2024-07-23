if (window.self === window.top) {
    const popup = open("about:blank", "_blank")
    const doc = popup.document
    const iframe = doc.createElement("iframe")
    const style = iframe.style
    const link = doc.createElement("link")
    const name = "My Drive - Google Drive"
    const icon = "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png" // S M O R T
    doc.title = name
    link.rel = "icon"
    link.href = icon
    iframe.src = location.href
    style.position = "fixed"
    style.top = style.bottom = style.left = style.right = 0
    style.border = style.outline = "none"
    style.width = style.height = "100%"
    doc.head.appendChild(link)
    doc.body.appendChild(iframe)
    location.replace(getRandomSite())
}


function getRandomSite() {
    let sites = [
        "https://google.com",
        "https://classroom.google.com",
        "https://docs.google.com",
    ]
    return sites[randRange(0, sites.length())]
}

function randRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);

}