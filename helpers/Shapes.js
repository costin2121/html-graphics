class Cube {
    points = [
        new Vector3D(-1, -1, 1),
        new Vector3D(1, -1, 1),
        new Vector3D(1, 1, 1),
        new Vector3D(-1, 1, 1),

        new Vector3D(-1, -1, -1),
        new Vector3D(1, -1, -1),
        new Vector3D(1, 1, -1),
        new Vector3D(-1, 1, -1),
    ]

    faces = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [0, 3, 7, 4],
        [1, 2, 6, 5],
    ]

    name = "cube"

    constructor(scale) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.points[i].mult(scale);
        }
    }
}

class Pyramid {
    points = [
        new Vector3D(-1, -1, -1),
        new Vector3D(-1, -1, 1),
        new Vector3D(1, -1, 1),
        new Vector3D(1, -1, -1),

        new Vector3D(0, 1, 0)
    ]

    faces = [
        [0, 1, 2, 3],
        [0, 1, 4],
        [1, 2, 4],
        [2, 3, 4],
        [3, 0, 4]
    ]

    name = "pyramid"

    constructor(scale) {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.points[i].mult(scale);
        }
    }
}

function handleShapes() {
    switch (shape.value) {
        case 'cube':
            if (!models.cube) models.cube = new Cube(1);
            model = models['cube'];
            break;
        case 'pyramid':
            if (!models.pyramid) models.pyramid = new Pyramid(1);
            model = models['pyramid'];
            break;
        case 'custom':
            if (customModel.points.length <= 0 || customModel.faces.length <= 0) {
                alert("Please upload a custom 3D model");
                shape.value = 'cube';
            }
            model = customModel;
            break;
        default:
            if (!models[shape.value]) return;
            model = models[shape.value];
            break;
    }
}


const loadOptions = setInterval(() => {
    if (models === undefined || !modelsLoaded) return;

    for (const model in models) {
        const modelOption = document.createElement("option");
        modelOption.value = model.toLowerCase();
        modelOption.innerText = model;
        shape.appendChild(modelOption);
    }

    const customOption = document.createElement("option");
    customOption.value = 'custom';
    customOption.innerText = 'Custom';
    shape.appendChild(customOption);
    clearInterval(loadOptions);
})