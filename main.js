import {Telegraf, Markup} from 'telegraf';

const token = '6340439412:AAEFAvAm8ugA90awEH7i-auv9aYoAOmhEbc';
const webAppUrl = 'https://tg-angular-app.web.app/';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
    ctx.reply(
        'Привет',
        Markup.keyboard([
            Markup.button.webApp(
                'Отправить сообщение',
                webAppUrl
            )
        ])
    )
})

bot.launch();