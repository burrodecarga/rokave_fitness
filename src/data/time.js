var msDiff = new Date(this.state.expire_date).getTime() - new Date().getTime();    //Future date - current date
var daysTill = Math.floor(msDiff / (1000 * 60 * 60 * 24));