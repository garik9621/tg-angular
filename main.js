import {Telegraf, Markup} from 'telegraf';
import { message } from "telegraf/filters"

const token = '6340439412:AAEFAvAm8ugA90awEH7i-auv9aYoAOmhEbc';
const webAppUrl = 'https://tg-angular-app.web.app';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
    ctx.reply(
        'Привет',
        Markup.keyboard([
            Markup.button.webApp(
                'Отправить сообщение',
                webAppUrl + '/feedback'
            )
        ])
    )
})

bot.on(message('web_app_data'), async (ctx) => {
    const data = ctx.webAppData.data.json();
    ctx.reply(`Сообщение ${data?.feedback ?? ""}  принято`);
})

bot.launch();