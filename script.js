let BACKGROUND_COLOR = "#101010";
let CIRCLE_COLOR = "#ff0000";
let LINE_COLOR = "#ffffff";


render.width = 800;
render.height = 600;

const ctx = render.getContext('2d')
const drawing = new Drawing(ctx, BACKGROUND_COLOR, CIRCLE_COLOR, LINE_COLOR)

let offset = new Vector2D(render.width / 2, render.height / 2);
let scale = 100;
let FPS = 60;

let angle_x = 0;
let angle_y = 0;
let angle_z = 0;
let synced_rot = 0;
let d_angle = Math.PI / 8;

let model;
let customModel = { points: [], faces: [] };
let models = { cube: new Cube(1), pyramid: new Pyramid(1) };
let modelsLoaded = false;

function loop() {
    console.log(modelsLoaded)
    if (modelsLoaded)
    {
        dt = FPS / 1000;
    
        handleShapes();
        drawing.handleRotation();
        
        drawing.clear();
        console.log(model)
        drawing.drawFaces(model.faces, model.points, show_points.checked, [angle_x, angle_y, angle_z], scale, offset)
    }
    setTimeout(loop, 1000 / FPS);
}

reset.onclick = () => {
    offset = new Vector2D(render.width / 2, render.height / 2);
    scale = 100;
}

reset_canvas.onclick = () => {
    render.width = 800;
    render.height = 600;
    offset = new Vector2D(render.width / 2, render.height / 2);
}

setTimeout(loop, 100)
