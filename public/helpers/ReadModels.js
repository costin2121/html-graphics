function read3DModel(file_content) {
    const lines = file_content.split('\n');

    let model = {};

    model.faces = [];
    model.points = [];

    for (const line of lines) {
        if (line.startsWith('v') && line[line.indexOf('v') + 1] == ' ') {
            const coords = line.replace(/\s+/g, ' ').trim().split(' ');
            const vect = new Vector3D(parseFloat(coords[1]), parseFloat(coords[2]), parseFloat(coords[3]));

            model.points.push(vect);
        }

        if (line.startsWith('f')) {
            const face = [];
            const facePairs = line.split(' ');
            facePairs.shift();
            for (const pair of facePairs) {
                const [faceIndex] = pair.split('/');
                face.push(parseInt(faceIndex) - 1);
            }
            model.faces.push(face);
        }

    }
    return model;
}

function load3DModels() {
    fetch('http://localhost:3000/3dmodels', {
        method: "GET",
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).then((res) => res.json()).then(data => {
        for (const model of data)
        {
            const converted_model = { name: model.name, points: [], faces: model.faces}
            for (const point of model.points)
            {
                converted_model.points.push(Vector3D.fromObject(point));
            }
            models[model.name] = converted_model;
        }
        modelsLoaded = true;
    })
}

load3DModels();