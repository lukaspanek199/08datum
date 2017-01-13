var datum = new Date();
alert(datum.getTime());
alert(datum.getDate());
alert(datum.getFullYear());
alert(datum.getDay());
alert(datum.getHours());
alert(datum.getMilliseconds());
alert(datum.getTimezoneOffset());
alert(datum.toDateString());
alert(datum.toTimeString());
alert(datum.toJSON());
alert(datum.toLocaleString());
alert(datum.toISOString());

var mojeNarozeniny = new Date();
mojeNarozeniny.setDate(1);
mojeNarozeniny.setMonth(9);
mojeNarozeniny.setHours(0);
mojeNarozeniny.setMinutes(0);
mojeNarozeniny.setSeconds(0);
mojeNarozeniny.setMilliseconds(0);
alert(mojeNarozeniny.toLocaleString());
alert(mojeNarozeniny.getTime()-datum.getTime());


