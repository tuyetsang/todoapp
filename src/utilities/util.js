// để sử dung moment bạn phải cài thêm
// lệnh cài thêm: npm install moment --save
// là sử dụng được moment

// import Date from 'moment'; // tôi dùng thêm moment để hộ trỡ mình format date time cho dễ nhìn


// dùng cách thường
export function createDateTime(){
    var t = new Date();
    var month = t.getMonth()+1;
    var formatted = t.getFullYear()+"/"+t.getMonth()+"/"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds();
    return formatted;
}



// export function createTime(){
//     var t = new Date();
//     var formatted = t.format("hh:mm:ss");
//     return formatted;
// }

// export function createDate(){
//     var t = new Date();
//     var formatted = t.format("DD/MM/YYYY");
//     return formatted;
// }