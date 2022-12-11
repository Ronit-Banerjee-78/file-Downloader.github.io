const inputField = document.getElementById("field")
const downLoadBtn = document.getElementById("download")
const clear = document.getElementById("clear")

downLoadBtn.addEventListener('click', e => {
    e.preventDefault();
    // console.log("butoon press hoiche" + inputField.value);
    downLoadBtn.innerText = "Downloading File......."
    fileMake(inputField.value);
})
clear.addEventListener('click', () => {
    inputField.innerText = ''
})

function fileMake(url) {
    fetch(url).then(res => res.blob()).then(project => {

        let theUrl = URL.createObjectURL(project);
        console.log(theUrl);

        let linkAtag = document.createElement("a");
        linkAtag.href = theUrl;
        // linkAtag.download = URL.replace(/^.*[\\\/]/, '');
        linkAtag.download = "DOWNLOAD"
        linkAtag.click()
        linkAtag.remove()
        URL.revokeObjectURL(theUrl)
        downLoadBtn.innerText = "Download File......."

    }).catch(() => {
        alert("Download is Not Possible, Please Paste the Address of The link")
        downLoadBtn.innerText = "Downloading File......."

    })
}