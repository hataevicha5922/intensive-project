# Intensive-project
-------------------------------------------------------------------------------------------------------------------
> - Предметная область: приложение поиска фильмов.
> - Используемое API: [KinopoiskAPI](https://kinopoiskapiunofficial.tech/documentation/api/)
>
>
## Основной функционал 
>
> - Регистрация и авторизация пользователя.
> - Избранные фильмы. У зарегестрированного пользователя есть возможность добавлять и удалять фильмы в избранное.
> - Поиск по названию фильма.
> - История просмотренных фильмов.
> - Зарегестрированный пользователь может просмотреть полную информацию про фильм.
>
> ## Реализация требований
>
 - [x] Реализованы требования функционала.
 - [x] Для хранения данных используется LocalStorage [logInUser](https://github.com/hataevicha5922/intensive-project/blob/main/src/utils/global.ts)
>
> ### React
>
 - [x] Пишем функциональные компоненты с хуками: [components](https://github.com/hataevicha5922/intensive-project/tree/main/src/components),[pages](https://github.com/hataevicha5922/intensive-project/tree/main/src/pages).
 - [x] Есть разделение на [умые](https://github.com/hataevicha5922/intensive-project/tree/main/src/components/FilmSearchResults) и [глупые](https://github.com/hataevicha5922/intensive-project/tree/main/src/components/Poster) компоненты.
 - [x] Есть рендеринг [списков](https://github.com/hataevicha5922/intensive-project/tree/main/src/pages/FilmsPage/FilmList)
 - [x] Реализована фотябы одна [форма](https://github.com/hataevicha5922/intensive-project/blob/main/src/pages/RegisterPage/RegisterPage.tsx)
 - [x] Есть применение [ConextAPI](https://github.com/hataevicha5922/intensive-project/blob/main/src/context/ThemeContext.tsx)
 - [x] Есть применение [предохранителя](https://github.com/hataevicha5922/intensive-project/blob/main/src/components/ErrorBoundary/ErrorBoundary.tsx)
 - [x] Кастомный [хук](https://github.com/hataevicha5922/intensive-project/tree/main/src/hooks)
 - [x] Поиск не должен триггерить много запросов [debounce](https://github.com/hataevicha5922/intensive-project/blob/main/src/hooks/useDebounce.ts)
 - [x] Есть применение [Lazy+Suspense](https://github.com/hataevicha5922/intensive-project/blob/main/src/components/MainRouter/MainRouter.tsx)
>
> ### Redux
>
 - [x] Используем [Modern Redux with Redux Toolkit](https://github.com/hataevicha5922/intensive-project/blob/main/src/store/store.ts)
 - [x] Используем [слайсы](https://github.com/hataevicha5922/intensive-project/tree/main/src/store/userSlice)
 - [x] Кастомная [middleware](https://github.com/hataevicha5922/intensive-project/blob/main/src/store/middleware/logger.ts)
 - [x] Используем [RTK Query](https://github.com/hataevicha5922/intensive-project/blob/main/src/store/filmSlice/filmSlice.ts)
 - [x] Используем [Transforming Responses](https://github.com/hataevicha5922/intensive-project/blob/main/src/store/filmSlice/filmSlice.ts)
>
> ## 2 уровень
>
 - [x] Использование **TypeScripte
 - [x] Использование [Firebase](https://github.com/hataevicha5922/intensive-project/blob/main/src/config/firebase-config.ts)
 - [x] Использование [createSelector](https://github.com/hataevicha5922/intensive-project/blob/main/src/store/favoritesSlice/selectors.ts)
