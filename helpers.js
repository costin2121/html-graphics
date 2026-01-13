function read3DModel(file_name, file_content) {
    const lines = file_content.split('\n');

    let model = { name: file_name };

    model.faces = [];
    model.points = [];

    for (const line of lines) {
        if (line.startsWith('v') && line[line.indexOf('v') + 1] == ' ') {
            const coords = line.replace(/\s+/g, ' ').trim().split(' ');
            const vect = { x: parseFloat(coords[1]), y: parseFloat(coords[2]), z: parseFloat(coords[3]) };

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

module.exports = { read3DModel }