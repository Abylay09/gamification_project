import { createSlice } from "@reduxjs/toolkit";
import LocalizedStrings from 'react-localization';

let language = new LocalizedStrings({
 en:{
    next:"NEXT",
    login: "Sign in",
    welcom: "Welcom to OpenSkill",
    input_phone: "Enter your phone number",
    phone: "Phone number",
    required_field: "The field is required",
    registration: "Registration",
    restore: "Restore password",
    password: "Password",
    input_password: "Enter password",
    invalid_data: "Wrong data",
    invalid_phone: "Wrong phone number",
    error: "Error",
    password_not_equals: "Passwords do not match",
    password_create: "Create a new password",
    password_rules: "The password must contain at least:",
    password_8: "8 symbols",
    password_digit: "Single digit (0-9)",
    password_up: "Single letter upper case",
    sms_is_required: "Fill out the SMS form",
    sms_incorrect: "You entered the wrong SMS code",
    sms_code: "Confirmation code",
    on_phone: "On phone",
    sms_sended: "sended SMS with confirmation code",
    sms_retry: "Send SMS again",
    sms_seconds: "Send SMS again via",
    seconds: "seconds",
    confirm: "CONFIRM",
    game_end: "The game is over",
    game_score: "Score",
    game_back: "Return to Games",
    time: "Time",
    cards_color: "Cards with colors",
    cards_game_title: "Does the meaning match the color?",
    cards_game_title2: "Does the meaning of the first card match the color of the second?",
    yes: "Yes",
    no: "No",
    lectures: "Lectures",
    tasks: "Tasks",
    lecture: "Lecture",
    task: "Task",
    level: "Level",
    theory: "Theory",
    chapter: "Chapter",
    pet: "Pet",
    play: "PLAY",
    indicators: "Indicators",
    indicators_logical_thinking: "Logical thinking",
    indicators_creativity: "Creativity",
    indicators_thinking: "Thinking",
    indicators_memory: "Memory",
    indicators_mindfulness: "Mindfulness",
    profile: "Profile",
    quests: "Quests",
    find_digit: "Find Digit",
    remember_items: "Memorizing items",
    direction_and_move: "Direction and movement",
    shop_title: "Shop",
    my_coupons: "My Coupons",
    no_coupons: "You don't have active coupons",
    you_have: "You have",
    coupons: "coupons",
    coupns_activity: "Active",
    coupns_ended: "Completed",
    about: "About",
    terms: "Terms",
    address: "Address",
    grafic: "Schedule",
    buy: "BUY",
    your_answer: "Your answer",
    answer: "Answer",
    check: "CHECK",
    well_done: "Well done",
    no_answer: "There should be an answer",
    stats_indicatrors: "Indicators",
    filter_by: "Filter by",
    by_class: "By class",
    by_school: "By school",
    general: "General",
    classmate: "Classmate",
    gold: "Gold"
 },
 ru: {
    next:"ПРОДОЛЖИТЬ",
    login: "Войти",
    welcom: "Добро пожаловать в OpenSkill",
    input_phone: "Введи номер телефона",
    phone: "Номер телефона",
    required_field: "Поле обязательна к заполнению",
    registration: "Регистрация",
    restore: "Восстановить пароль",
    password: "Пароль",
    input_password: "Введи пароль",
    invalid_data: "Неправильные данные",
    invalid_phone: "Неправильный номер телефона",
    error: "Ошибка",
    password_not_equals: "Пароли не совпадают",
    password_create: "Придумай пароль",
    password_rules: "Пароль должен содержать не менее:",
    password_8: "8 символов",
    password_digit: "Одной цифры (0-9)",
    password_up: "Одной буквы Верхнего регистра",
    sms_is_required: "Заполните смс форму",
    sms_incorrect: "Вы ввели неправильный смс код",
    sms_code: "Код подтверждения",
    on_phone: "На номер",
    sms_sended: "отправлен SMS с кодом подтверждения",
    sms_retry: "Отправить смс повторно",
    sms_seconds: "Отправить смс повторно через",
    seconds: "секунд",
    confirm: "ПОДТВЕРДИТЬ",
    game_end: "Игра окончена",
    game_score: "Счет",
    game_back: "Вернуться в игры",
    time: "Время",
    cards_color: "Карточки с цветами",
    cards_game_title: "Совпадает ли значение написанного с цветом?",
    cards_game_title2: "Совпадает ли значение первой карточки с цветом второй?",
    yes: "Да",
    no: "Нет",
    lectures: "Лекции",
    tasks: "Задания",
    lecture: "Лекция",
    task: "Задание",
    level: "Уровень",
    theory: "Теория",
    chapter: "Глава",
    pet: "Питомец",
    play: "ИГРАТЬ",
    indicators: "Индикаторы",
    indicators_logical_thinking: "Логическое мышление",
    indicators_creativity: "Креативность",
    indicators_thinking: "Мышление",
    indicators_memory: "Память",
    indicators_mindfulness: "Внимательность",
    profile: "Профиль",
    quests: "Квесты",
    find_digit: "Найди число",
    remember_items: "Запоминание предметов",
    direction_and_move: "Направление и движение",
    shop_title: "Лавка",
    my_coupons: "Мои купоны",
    no_coupons: "У вас нет активных купонов",
    you_have: "У вас",
    coupons: "купонов",
    coupns_activity: "Активные",
    coupns_ended: "Завершенные",
    about: "Описание",
    terms: "Условия",
    address: "Адрес",
    grafic: "График работы",
    buy: "КУПИТЬ",
    your_answer: "Введите ответ",
    answer: "Ответ",
    check: "Проверить",
    well_done: "Молодец",
    no_answer: "Тут должен быть ответ",
    stats_indicatrors: "Показатели",
    filter_by: "Фильтровать по",
    by_class: "По классу",
    by_school: "По школе",
    general: "Общий",
    classmate: "Одноклассник",
    gold: "Золота"
 }
});

const initialState = {
  language,
  languages: [ "en", "ru" ]
}


export const languageSlice = createSlice({
    name : 'languageSlice',
    initialState,
    reducers: {
      setLanguage: (state, action) => {
        state.language.setLanguage(action.payload)
      },
    }
})

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;