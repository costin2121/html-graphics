class Drawing {
    constructor(canvasContext, backgroundColor, circleColor, lineColor) {
        this.ctx = canvasContext;
        this.backgroundColor = backgroundColor;
        this.circleColor = circleColor;
        this.lineColor = lineColor;
    }

    clear() {
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.fillRect(0, 0, render.width, render.height);
    }

    circle(pos, r) {
        this.ctx.beginPath();
        this.ctx.arc(pos.x, pos.y, r, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.circleColor;
        this.ctx.fill();
        this.ctx.strokeStyle = this.circleColor;
        this.ctx.stroke();
    }

    line(v1, v2, w = 2) {
        this.ctx.beginPath();
        this.ctx.moveTo(v1.x, v1.y);
        this.ctx.lineTo(v2.x, v2.y);
        this.ctx.lineWidth = w;
        this.ctx.strokeStyle = this.lineColor;
        this.ctx.stroke();
    }

    drawFaces(faces, points, showVerts, rot = [0, 0, 0], scale = 100, offset = new Vector2D(render.width / 2, render.height / 2)) {
        for (const face of faces) {
            for (let i = 0; i < face.length; i++) {
                try {
                    const a = points[face[i]];
                    const b = points[face[(i + 1) % face.length]];
                    
                    if (!a || !b) continue;
                    const a_proj = a.rotate_x(rot[0]).rotate_y(rot[1]).rotate_z(rot[2]).project2D().mult(scale).add(offset);
                    const b_proj = b.rotate_x(rot[0]).rotate_y(rot[1]).rotate_z(rot[2]).project2D().mult(scale).add(offset);


                    this.line(a_proj, b_proj, 1);

                    if (showVerts) {
                        let rotated = a.rotate_x(angle_x);
                        rotated = rotated.rotate_y(angle_y);
                        rotated = rotated.rotate_z(angle_z);
                        let projected = rotated.project2D(angle_z);
                        let point = projected.mult(scale).add(offset);

                        drawing.circle(point, 3);
                    }
                } catch (e) {
                    console.log(e)
                }

            }
        }
    }

    handleRotation() {
        if (!autorot_x.checked) angle_x = degToRad(rot_x.value);
        if (!autorot_y.checked) angle_y = degToRad(rot_y.value);
        if (!autorot_z.checked) angle_z = degToRad(rot_z.value) + Math.PI;

        x_val.innerText = rot_x.value;
        y_val.innerText = rot_y.value;
        z_val.innerText = rot_z.value;

        rot_x.disabled = autorot_x.checked;
        rot_y.disabled = autorot_y.checked;
        rot_z.disabled = autorot_z.checked;

        if (sync_rot.checked) {
            synced_rot += d_angle * dt * rot_speed.value;
            if (autorot_x.checked) {
                angle_x = synced_rot;
                angle_x = angle_x % (2 * Math.PI);
                rot_x.value = radToDeg(angle_x);
            };
            if (autorot_y.checked) {
                angle_y = synced_rot;
                angle_y = angle_y % (2 * Math.PI);
                rot_y.value = radToDeg(angle_y);
            };
            if (autorot_z.checked) {
                angle_z = synced_rot;
                angle_z = angle_z % (2 * Math.PI);
                rot_z.value = radToDeg(angle_z);
            };
        }
        else {
            if (autorot_x.checked) {
                angle_x += d_angle * dt * rot_speed.value;
                angle_x = angle_x % (2 * Math.PI);
                rot_x.value = radToDeg(angle_x);
            };
            if (autorot_y.checked) {
                angle_y += d_angle * dt * rot_speed.value;
                angle_y = angle_y % (2 * Math.PI);
                rot_y.value = radToDeg(angle_y);
            };
            if (autorot_z.checked) {
                angle_z += d_angle * dt * rot_speed.value;
                angle_z = angle_z % (2 * Math.PI);
                rot_z.value = radToDeg(angle_z);
            };
        }
    }

}