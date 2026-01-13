document.onkeydown = (e) => {
    if (e.key == 'ArrowUp') scale += 0.1 * scale;
    if (e.key == 'ArrowDown') scale -= 0.1 * scale;
    console.log(e)
    if (e.key.toLowerCase() == 'a') offset.x -= (e.shiftKey ? 1 : 0.1) * scale;
    if (e.key.toLowerCase() == 'd') offset.x += (e.shiftKey ? 1 : 0.1) * scale;
    if (e.key.toLowerCase() == 'w') offset.y -= (e.shiftKey ? 1 : 0.1) * scale;
    if (e.key.toLowerCase() == 's') offset.y += (e.shiftKey ? 1 : 0.1) * scale;

    if (e.key == 'l') {
        if (render.width >= 1600) return;
        render.width += 100;
        offset.x = render.width / 2;
    }

    if (e.key == 'j') {
        if (render.width <= 100) return;
        render.width -= 100;
        offset.x = render.width / 2;
    }

    if (e.key == 'i') {
        if (render.height <= 100) return;
        render.height -= 100;
        offset.y = render.height / 2;
    }

    if (e.key == 'k') {

        if (render.height >= 800) return;
        render.height += 100;
        offset.y = render.height / 2;
    }
}