//今日の日付を取得
const today = new Date();

const MyBirthday = new Date('1999/08/25/00:00:00')


var diffYear = today.getFullYear() - MyBirthday.getFullYear() +1;

if (MyBirthday.getMonth() > today.getMonth()) {
    var diffMonth = MyBirthday.getMonth() - today.getMonth()
}else {
    var diffMonth = 12 - today.getMonth() + MyBirthday.getMonth()
}

if (MyBirthday.getDate() > today.getDate() ) {
    var diffDate = MyBirthday.getDate() - today.getDate() 
}else {
    var diffDate = today.getDate() - MyBirthday.getDate()
}

document.write(`・あと${diffMonth}ヶ月と${diffDate}日で${diffYear}才になります！`);