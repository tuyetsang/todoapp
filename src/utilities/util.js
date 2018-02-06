export function createDateTime(){
  var now = new Date();
  var then = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDay()+ ' '+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
  return then;
}
