function readTextFile(file) {
    fetch(file, {
        method: "GET",
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).then((res) => res.text()).then((text) => {
        return text;
    }).catch((e) => console.error(e));
}





import_obj.onclick = () => {
    filedialog.click();
}
 
filedialog.onchange = (e) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
        customModel = read3DModel(fileReader.result);
        console.log(customModel)
    }

    shape.value = 'custom'
    fileReader.readAsText(e.target.files[0]);
}
