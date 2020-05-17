require('dotenv').config();
const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.TOKEN);

bot.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log('%s > %s < %sms', start, ctx.message.text, ms);
})

bot.use((ctx, next) => {
    if (ctx.updateType === 'message' && ctx.updateSubTypes.includes('text')) {
        let args = [];
        args = ctx.message.text.split(' ');
        args.shift();
        ctx.state.args = args;
    }
    next();
})

bot.start((ctx) => ctx.reply('Yo \\o/ \n check out /help'));
bot.help((ctx) => ctx.reply('Available Commands: \n' +
                                                        '   /shrug \n' +
                                                        '   /lenny \n' +
                                                        '   /tableflip \n' +
                                                        '   /praise \n' +
                                                        '   /kirbydance \n' +
                                                        '   /uwantsumfuk \n' +
                                                        '   /pingpong \n' +
                                                        '   /dealwithit \n' +
                                                        '   /ahe \n' +
                                                        '   /ufe \n' +
                                                        '   /content \n' +
                                                        '   /hmmm \n' +
                                                        '   /letitsnow \n' +
                                                        '   /cake \n' +
                                                        '\n' +
                                                        'Commands with input:\n' +
                                                        '   /randomupper <text> \n' +
                                                        '   /upsidedown <text> \n' +
                                                        '   /bark <text> \n' +
                                                        '   /reverse <text> \n' +
                                                        '   /binarize <text> \n' +
                                                        '   /takedis <text> \n' +
                                                        '\n' +
                                                        'Stuff:\n' +
                                                        '   /everyone \n' +
                                                        '   /seppuku \n' +
                                                        '   /timeout <username> <time in minutes> \n' +
                                                     '   /timeoutbeni (time out BenBan for 1 min) \n' +
                                                        '   /showusers (only doable by me \uD83D\uDE0B) \n' +
                                                        '\n' +
                                                        'Removed commands (no more school YaY \\o/):\n' +
                                                        '   /addtest <date> <subject> <teacher> <topic> \n' +
                                                        '   /removetest <date> <teacher> \n' +
                                                        '   /showtests \n' +
                                                        '\n' +
                                                        'Stay tuned for more updates ^^'
));
bot.command('shrug', (ctx) => ctx.reply('¯\\_(ツ)_/¯'));
bot.command('lenny', (ctx) => ctx.reply('( ͡° ͜ʖ ͡° )'));
bot.command('tableflip', (ctx) => ctx.reply(new Date() %2 ? '(╯°□°）╯︵ ┻━┻' : '|_ ─┬ ¯\\_(ಠ_ಠ)_/¯'));
bot.command('praise', (ctx) => ctx.reply('\\[T]/'));
bot.command('kirbydance', (ctx) => ctx.reply('<(\'-\'<) (>\'-\')>  ^(\' - \')^ <(\'-\'<) (>\'-\')>'));
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
                                                                    '      |                     |'
));
bot.command('pingpong', (ctx) => ctx.reply('Q( - _-)__o__¦_____Q(-_ - )'));
bot.command('dealwithit', (ctx) => ctx.reply('(•_•) \\n" +\n' +
                                                                    '( •_•)>⌐■-■ \\n" +\n' +
                                                                    '(⌐■_■)'
));
bot.command('ahe', (ctx) => ctx.reply('\u2B07" + " ahe " + "\u2B07'));
bot.command('ufe', (ctx) => ctx.reply('\u2B06" + " ufe " + "\u2B06'));
bot.command('content', (ctx) => ctx.reply('<code>C O N T E N T\\n" +\n' +
                                                                    'O O\\n" +\n' +
                                                                    'N   N\\n" +\n' +
                                                                    'T     T\\n" +\n' +
                                                                    'E       E\\n" +\n' +
                                                                    'N         N\\n" +\n' +
                                                                    'T           T</code>'
));
bot.command('hmmm', (ctx) => ctx.reply('hmmmm...\\n" +\n' +
                                                                    '\\n" +\n' +
                                                                    '             ⢀⣀⣀⣀\\n" +\n' +
                                                                    '⠀⠀⠀⠰⡿⠿⠛⠛⠻⠿⣷\\n" +\n' +
                                                                    '⠀⠀⠀⠀⠀⠀⣀⣄⡀⠀⠀⠀⠀⢀⣀⣀⣤⣄⣀⡀\\n" +\n' +
                                                                    '⠀⠀⠀⠀⠀⢸⣿⣿⣷⠀⠀⠀⠀⠛⠛⣿⣿⣿⡛⠿⠷\\n" +\n' +
                                                                    '⠀⠀⠀⠀⠀⠘⠿⠿⠋⠀⠀⠀⠀⠀⠀⣿⣿⣿⠇\\n" +\n' +
                                                                    '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⠀⠀⠈⠉⠁\\n" +\n' +
                                                                    '\\n" +\n' +
                                                                    '⠀⠀⠀⠀⣿⣷⣄⠀⢶⣶⣷⣶⣶⣤⣀\\n" +\n' +
                                                                    '⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠈⠙⠻⠗\\n" +\n' +
                                                                    '⠀⠀⠀⣰⣿⣿⣿⠀⠀⠀⠀⢀⣀⣠⣤⣴⣶⡄\\n" +\n' +
                                                                    '⠀⣠⣾⣿⣿⣿⣥⣶⣶⣿⣿⣿⣿⣿⠿⠿⠛⠃\\n" +\n' +
                                                                    '⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄\\n" +\n' +
                                                                    '⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁\\n" +\n' +
                                                                    '⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁\\n" +\n' +
                                                                    '⠀⠀⠛⢿⣿⣿⣿⣿⣿⣿⡿⠟\\n" +\n' +
                                                                    '⠀⠀⠀⠀⠀⠉⠉⠉'
));
bot.command('letitsnow', (ctx) => ctx.reply('･ ｡\n' +
                                                                    ' ☆∴｡ *\n' +
                                                                    ' ･ﾟ*｡★･\n' +
                                                                    '  ･ *ﾟ｡   *\n' +
                                                                    '  ･ ﾟ*｡･ﾟ★｡\n' +
                                                                    '   ☆ﾟ･｡°*. ﾟ\n' +
                                                                    '*  ﾟ｡·*･｡ ﾟ*\n' +
                                                                    '   ﾟ *.｡☆｡★ ･\n' +
                                                                    '  * ☆ ｡･ﾟ*.｡\n' +
                                                                    '    * ★ ﾟ･｡ *  ｡\n' +
                                                                    '    ･  ﾟ☆ ｡'
));
bot.command('cake', (ctx) => ctx.reply('{\\__/}\n' +
                                                                    '( • - •)\n' +
                                                                    '/ ⊃\uD83C\uDF82'
));

bot.command('randomupper', (ctx) => {
    let reply = '';
    ctx.state.args.forEach(text => {
        for (let i = 0; i < text.length; i++) {
            if (i%3 === 0 || i%5 === 0) {
                reply += text[i].toUpperCase();
            } else {
                reply += text[i];
            }
        }
        reply += ' ';
    });
    ctx.reply(reply);
});
bot.command('upsidedown', (ctx) => {
    let normal = 'abcdefghijklmnopqrstuvwxyz_,;.?!/\\\'' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789';
    let flipped = 'ɐqɔpǝɟbɥıظʞןɯuodbɹsʇnʌʍxʎz‾\'؛˙¿¡/\\,' + '∀qϽᗡƎℲƃHIſʞ˥WNOԀὉᴚS⊥∩ΛMXʎZ' + '0ƖᄅƐㄣϛ9ㄥ86';
    let textFlipped = '';

    ctx.state.args.forEach(text => {
        text.split('').reverse().forEach(char => textFlipped += flipped.charAt(normal.indexOf(char)));
        textFlipped += ' ';
    });

    ctx.reply(textFlipped);
});
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
bot.command('binarize', (ctx) => {
    let reply = '';
    ctx.state.args.forEach(text => {
        text.split('').forEach(char => reply += char.charCodeAt(0).toString(2) + ' ');
        reply += '\n';
    });

    ctx.reply(reply);
});
bot.command('takedis', (ctx) => ctx.reply('༼ つ ◕_◕ ༽つ ' + ctx.state.args.toString().replace(new RegExp(',', 'g'), ' ')));

bot.command('seppuku', async(ctx) => timeOut(ctx, ctx.from.id, 1500));
bot.command('timeout', async(ctx) => {
    let user = ctx.state.args[0];
    let time = ctx.state.args[1] * 60000;
    timeOut(ctx, user, time);
});
bot.command('timeoutbeni', async (ctx) => timeOut(ctx, 129383764, 60000));
bot.command('test', async(ctx) => console.log(ctx.restrictChatMember(ctx.chat.id, ctx.from.id)));

bot.launch();

var timeout = (ms) =>new Promise(resolve => setTimeout(resolve, ms));

var timeOut = async (ctx, user, time) => {
    let reset = {
        can_send_messages: true,
        can_send_media_messages: true,
        can_send_polls: true,
        can_send_other_messages: true,
        can_add_web_page_previews: true,
        can_change_info: true,
        can_invite_users: true,
        can_pin_messages: true
    };
    ctx.reply((await ctx.restrictChatMember(user).catch(reason => reason.description)) === 'Bad Request: can\'t remove chat owner' ? 'Can\'t time an admin out' : 'Successfully timed out');
    await timeout(time);
    await ctx.restrictChatMember(user, reset).catch(reason => '');
}