// Дано расписание автобусов:
// Первый отправляется в 6:00, и далее с интервалом в 15 минут
// Последний отправляется в 0:00
// найти время до выхода из дома, чтобы попасть на следующий автобус, дорога пешком до автобуса займет 5 минут
// Входные данные - текущее время в формате HH:MM
// Результат должен быть равен количество минут



function timetable() {
    let start = new Date(); 
    start.setHours(6, 0, 0, 0);
    let end = new Date();
    end.setHours(0, 0, 0, 0);
    end.setHours(end.getHours() + 24);
    let now = new Date();
    
    function whenBus ()  { 
        if (((now - start) < 300000) || now > start && now < end) {
            now.getMinutes();
            let user = new Date();
            user.setMinutes(user.getMinutes() + 5 );
            
            let bus00t = new Date();
            bus00t.setMinutes(0, 0, 0);
            bus00t.setMinutes(bus00t.getMinutes() + 60 ); 
            let bus15 = new Date();
            bus15.setMinutes(15, 0, 0);
            let bus15t = new Date();
            bus15t.setMinutes(0, 0, 0);
            bus15t.setMinutes(bus15t.getMinutes() + 75 );
            let bus30 = new Date();
            bus30.setMinutes(30, 0, 0);
            let bus45 = new Date();
            bus45.setMinutes(45, 0, 0);


             let buses = [bus15, bus30, bus45, bus00t, bus15t]; //t - переход часа

            let nextBus = [];
            buses.forEach((i) => {
                if(i > user) {
                    nextBus.push(i);
                }
            });console.log(nextBus[0]);
            let exitMoning = nextBus[0] - user;
            let hours = Math.floor(exitMoning / (1000*60*60) % 24);
            let minutes = Math.floor((exitMoning / 1000 / 60) % 60);
            
            alert(`Вам нужно выйти через ${hours}:${minutes}`);



        } else { 
            let firstBus = new Date();
            firstBus.setHours(6, 0, 0, 0);
            let user = new Date();
            user.setMinutes(user.getMinutes() + 5 );
            let exitMoning = firstBus - user; 
            let hours = Math.floor(exitMoning / (1000*60*60) % 24);
            let minutes = Math.floor((exitMoning / 1000 / 60) % 60);
            
            
            alert(`Вам нужно выйти через ${hours}:${minutes}`);

    }} whenBus();
}

timetable();










