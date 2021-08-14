export const point = json => {
  return ctx => {
    ctx.beginPath();
    ctx.moveTo(json.x - 5, json.y - 5);
    ctx.lineTo(json.x + 5, json.y - 5);
    ctx.lineTo(json.x + 5, json.y + 5);
    ctx.lineTo(json.x - 5, json.y + 5);
    ctx.lineTo(json.x - 5, json.y - 5);
    ctx.stroke();
  };
};
