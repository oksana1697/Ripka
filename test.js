"use strict";
const assert = require('assert');
import * as eventReducers from './src/reducers/events'
const User = [{
    "id": 1,
    "user_name": "Oksana Oleniuk",
    "user_description": "'Добрі справи 2018'- фестиваль, що має за мету зібрати в одному місці велику кулькість людей які займаються благодійністтю та роблять добрі справи. Зокрема це будуть громадські організації та благодійні фонди, а також ініціативні групи чи люди які своїми соціальними проектами чи добрими вчинками зробили великий внесок в скарбницю добрих справ і заслуговують розказати про себе і залучити до своєї діяльності як можна більше людей з числа гостей фестивалю. А ще на всіх гостей фестивалю чекатиме сюрприз в формі інтерактивнлї гри, в якій зможе взяти участь кожен і виграти подарунки від наших спонсорів та партнерів.",
    "user_date": "1222-12-22T12:12:00.000+02:00",
    "user_interests": "My interests",
    "user_contacts": "+38098678594",
    "user_location": "Київська область, Київ",
    "user_photo": "http://res.cloudinary.com/ucu/image/upload/c_scale,r_5,w_265/v1520958024/photo-event_vwr3vn.jpg"
}];
const Event = {
    "id": "1",
    "name": "Event Name",
    "description": "Good Event",
    "date": null,
    "organization": "Organization Name",
    "contacts": "+12 345 67 89",
    "location": "Kyiv",
    "photo": "https://res.cloudinary.com/ucu/image/upload/v1521905282/hlehumlq5evp7opbvn8k.png"
};

describe('tests', function () {
    it('get default events state', function () {
        assert.deepEqual(eventReducers.events(undefined, {}),[])
    });
    it('add event to events state', function () {
        assert.deepEqual(eventReducers.events(Event, 'ADD_EVENT_START'),Event)
    });
    it('receive events', function () {
        assert.deepEqual(eventReducers.events(undefined, 'FETCH_EVENTS'),[])
    });
});