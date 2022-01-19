const {Telegraf} = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)
try {
bot.command('reference', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: 'res/pic.png'
    })
})
var bodya = ["богдан", "бодя", "Богдан", "БОДЯ", "Бодя"];
var ansti = ["настя", "ансти", "Настя", "ansti", "Ansti", "Ансти", "Анусти", "Anusti", "anusti"];
var sasha = ["sasha", "саня", "Саша", "Александра", "саса", "Саса", "Sasha"];

bot.hears(ansti, (ctx) => {
    ctx.reply("🤪😘🥳😘👌🤗🤗🤗😘😝🥳😘😹😛🤪😘😝🥳😘😹😝🥳😘👌🤗🤗🤗😘🥰🥀🤬🥺🤯");
}  )
bot.hears(bodya, (ctx) => {
    ctx.reply("🥳😘😹😝🥳😘👌🤗🤗🤗😛🤪😘🥳😘😹😝🥳😘👌🤗🤗🤗😝");
}  )

bot.hears(sasha, (ctx) => {
    ctx.reply("👌🤗🤗🤗🥳😘😹😝🥳😘👌🤗🤗🤗😘");
}  )







bot.command('next', (ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, "Исходя из этой таблицы /reference, у вас " + comparing(vyvod) );
    bot.telegram.sendMessage(ctx.chat.id, 'Следует отметить, что индекс массы тела рекомендуется рассчитывать для мужчин и женщин в возрасте от 20-ти до 65-ти лет. При использовании ИМТ для оценки телосложения профессиональных спортсменов (высокое значение индекса в этом случае объясняется развитой мускулатурой) или подростков (до 18-ти лет), полученные результаты могут быть неверными.');
    function comparing (tttt) {



        let fort = "ожирение 3-й степени";
        let c = "ожирение 2-й степени";
        let h = "ожирение 1-й степени";
        let o = "лишний вес"
        let u = "нормальный вес";
        let d = "дефицит веса";
        let dd = "значительный дефицит веса";



        if  (40 < tttt) {
            return fort }
        else if ( 35 < tttt  ) {
                return c }
        else if ( 30 < tttt  ) {
                    return h }
        else if ( 25 < tttt  ) {
                    return o }
        else if ( 18 < tttt  ) {
                    return u }
        else if ( 16 < tttt  ) {
                return d }
        else if ( 16 > tttt  ) {
            return dd
        }
        
        


    }


    
    

})

bot.command('start', (ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, 'Привет!)');
    bot.telegram.sendMessage(ctx.chat.id, 'Введите свой рост и вес через пробел:');
    
    

})
}
catch(e) {
    console.error(e)
}

bot.use((ctx) => {
    try {
    
    
    var input = ctx.message.text;
    
    var inpt = input.split(" ");

    var arrINPUT = input.split(" ");
    var a = isNaN(arrINPUT.shift());
    var b = isNaN(arrINPUT.pop());
    console.log(a,b);
    
    function numbb (aa, bb) {
        
        
        if ( aa == true) {
            bot.telegram.sendMessage(ctx.chat.id, 'Введите данные корректно');
         }
        else if ( bb == true ) { 
            bot.telegram.sendMessage(ctx.chat.id, 'Введите данные корректно');
        }
        else { return inpt }
        }

        
    } catch(e) {
        console.error(e)
    }

    try {

    var MAIN = [ ];


MAIN = ( numbb(a,b) );
console.log(FirstN);
console.log(SecondN);
var SecondN = MAIN.pop();
var FirstN = MAIN.shift();



// let input = ctx.message.text;
// let inputArray = input.split(" ");;
// let a = inputArray.shift();
// let b = inputArray.pop();


function indd (hh, ww) {
    let c = "Введите реалистичные числа";
    let e = hh*0.01;
    let d = ww/(e*e);
    
    
    if (hh > 252) {
        return c }
    else if (hh < 50) {
        return c}
    else if (ww < 20) {
        return c }
    else if (ww > 200) {
        return c }
     else {
        return d }

        
    

    
}

vyvod = indd(FirstN, SecondN);
console.log(vyvod);

function mess (t) {
    let nummmm = (parseInt(vyvod * 100)) / 100;
    let send = "Ваш идекс массы тела: " + nummmm;
    if (t == "Введите реалистичные числа" ) {
        return vyvod
    }
    else {
        return send
    }
}


console.log(mess(vyvod));
bot.telegram.sendMessage(ctx.chat.id, mess(vyvod));

bot.telegram.sendMessage(ctx.chat.id, 'Чтобы узнать что это значить нажмите сюда /next');












   
        
        
        
} 
catch(e) {
    console.error(e)
}
})







bot.launch();
