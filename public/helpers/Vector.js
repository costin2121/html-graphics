class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * 
     * @param {Vector2D} v 
     * @returns Vector2D
     */
    add(v) {
        return new Vector2D(this.x + v.x, this.y + v.y);
    }

    /**
     * 
     * @param {Vector2D} v 
     * @returns Vector2D
     */
    sub(v) {
        return new Vector2D(this.x - v.x, this.y - v.y);
    }

    /**
     * 
     * @param {number} s - Scalar to multiply by
     * @returns Vector2D
     */
    mult(s) {
        return new Vector2D(this.x * s, this.y * s);
    }

    /**
     * @param {{ x: number, y: number }} obj 
     * @returns Vector2D
     */
    static fromObject(obj) {
        return new Vector2D(obj.x, obj.y)
    }
}

class Vector3D {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    project2D() {
        return new Vector2D(this.x, this.y)
    }

    /**
     * 
     * @param {Vector3D} v 
     * @returns Vector3D
     */
    add(v) {
        return new Vector3D(this.x + v.x, this.y + v.y, this.z + v.z);
    }

    /**
     * 
     * @param {Vector3D} v 
     * @returns Vector3D
     */
    sub(v) {
        return new Vector3D(this.x - v.x, this.y - v.y, this.z - v.z);
    }

    /**
     * 
     * @param {number} s - Scalar to multiply by
     */
    mult(s) {
        return new Vector3D(this.x * s, this.y * s, this.z * s);
    }

    /**
     * 
     * @param {number} angle - Angle in radians
     */
    rotate_x(angle) {
        let rotated_y = this.y * Math.cos(angle) - this.z * Math.sin(angle);
        let rotated_z = this.z * Math.cos(angle) + this.y * Math.sin(angle);
        return new Vector3D(this.x, rotated_y, rotated_z);
    }

    /**
     * 
     * @param {number} angle - Angle in radians
     */
    rotate_y(angle) {
        let rotated_x = this.x * Math.cos(angle) + this.z * Math.sin(angle);
        let rotated_z = this.z * Math.cos(angle) - this.x * Math.sin(angle);
        return new Vector3D(rotated_x, this.y, rotated_z);
    }

    /**
     * 
     * @param {number} angle - Angle in radians
     */
    rotate_z(angle) {
        let rotated_x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
        let rotated_y = this.y * Math.cos(angle) + this.x * Math.sin(angle);
        return new Vector3D(rotated_x, rotated_y, this.z);
    }

    /**
     * @param {{ x: number, y: number, z: number }} obj 
     * @returns Vector3D
     */
    static fromObject(obj) {
        return new Vector3D(obj.x, obj.y, obj.z)
    }
}

/**
 * 2D Vector with x, y coordinates set to 1
 */
class UnitVector2D extends Vector2D {
    constructor() {
        this.x = 1;
        this.y = 1;
    }
}

/**
 * 3D Vector with x, y, z coordinates set to 1
 */
class UnitVector3D extends Vector3D {
    x = 1;
    y = 1;
    z = 1;
}