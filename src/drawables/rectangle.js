export const rectangle = json => {
  return ctx => {
    ctx.beginPath();
    ctx.moveTo(json.x, json.y);
    ctx.lineTo(json.x + json.width, json.y);
    ctx.lineTo(json.x + json.width, json.y + json.height);
    ctx.lineTo(json.x, json.y + json.height);
    ctx.lineTo(json.x, json.y);
    ctx.stroke();
  };
};