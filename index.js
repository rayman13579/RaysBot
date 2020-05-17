require('dotenv').config();
const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.TOKEN);

bot.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log('Date: %s | Response time: %sms', start, ms);
})

bot.use((ctx, next) => {
    let args = [];
    args = ctx.message.text.split(' ');
    args.shift();
    ctx.state.args = args;
    next();
})

bot.start((ctx) => ctx.reply('Yo \\o/ \n check out /help'));
bot.help((ctx) => ctx.reply('Available Commands: \n' +
    '\n' +
    '   /shrug \n' +
    '   /lenny \n' +
    '   /tableflip \n' +
    '   /praise \n' +
    '   /kirbydance \n' +
    '   !UNDER CONSTRUCTION! /randomupper <text> \n' +
    '   /uwantsumfuk \n' +
    '   !UNDER CONSTRUCTION! /upsidedown <text> \n' +
    '   /pingpong \n' +
    '   /bark <text> \n' +
    '   /reverse <text> \n' +
    '   /binarize <text> \n' +
    '   /dealwithit \n' +
    '   /timeout <username> <time in minutes> \n' +
    '   /showusers (only doable by me \uD83D\uDE0B) \n' +
    '   /addtest <date> <subject> <teacher> <topic> \n' +
    '   /showtests \n' +
    '   /removetest <date> <teacher> \n' +
    '   /timeoutbeni (times beni out for 1 min) \n' +
    '   /ahe \n' +
    '   /ufe \n' +
    '   /content \n' +
    '   /hmmm \n' +
    '   /takedis \n' +
    '   /letitsnow \n' +
    '   /everyone \n' +
    '   /seppuku \n' +
    '   /cake \n' +
    '\n' +
    'Stay tuned for more updates ^^'));
bot.command('shrug', (ctx) => ctx.reply('¯\\_(ツ)_/¯'));
bot.command('lenny', (ctx) => ctx.reply('( ͡° ͜ʖ ͡° )'));
bot.command('tableflip', (ctx) => ctx.reply(new Date() %2 ? '(╯°□°）╯︵ ┻━┻' : '|_ ─┬ ¯\\_(ಠ_ಠ)_/¯'));
bot.command('praise', (ctx) => ctx.reply('\\[T]/'));
bot.command('kirbydance', (ctx) => ctx.reply('<(\'-\'<) (>\'-\')>  ^(\' - \')^ <(\'-\'<) (>\'-\')>'));
bot.command('randomupper', (ctx) => {
    let args = ctx.state.args;
 //   ctx.reply('');
});
bot.command('uwantsumfuk', (ctx) => ctx.reply('u want\n' +
    '\n' +
    '       __,--------__\n' +
    '  <::..____ :  (ö) \':\n' +
    '          \':\'\'          :\n' +
    '             \\            \\\n' +
    '\n' +
    '---------------------------\n' +
    '\n' +
    ' sum fuk?\n' +
    '\n' +
    '          .----;;;;;;\'\'\':\n' +
    '       (Ö)  |_-_|  (Ö)\n' +
    '       |                   |\n' +
    '      |                     |\n' +
    '      |                     |'));
bot.command('upsidedown', (ctx) => {
    let args = ctx.state.args;
    //   ctx.reply('');
});
bot.command('pingpong', (ctx) => ctx.reply('Q( - _-)__o__¦_____Q(-_ - )'));
bot.command('bark', (ctx) => {
    ctx.reply(ctx.state.args.toString().replace(new RegExp(',', 'g'), ' ') + '\n' +
        '___________________________________________________________________ \n' +
        '                                 (___)       \n' +
        '   / \\____                  (__)\n' +
        '  (       @\\_____        (_)\n' +
        '  /                   O      o\n' +
        ' /          (_____/\n' +
        '/______/');
});
bot.command('reverse', (ctx) => {
   let reply = '';
   ctx.state.args.reverse().forEach(text => reply += text.split('').reverse().join('') + ' ');
   ctx.reply(reply);
});
bot.launch();