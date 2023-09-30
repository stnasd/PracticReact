# Rick and Morty

Предметная область: приложение о персонажах вселенной "Рик и Морти".

Использованное API: в приложении используется API Rick and Morty.

## Основной функционал:

##### Регистрация и авторизация: пользователи могут создать учетную запись и авторизоваться в приложении.

##### Поиск персонажей: приложение предоставляет возможность быстрого поиска персонажей вселенной "Рик и Морти" по их именам.

##### Избранные персонажи: пользователи могут добавлять персонажей в список избранных.

##### История поиска: приложение сохраняет историю поиска, что помогает пользователю найти персонажа, которого они искали ранее.

---

## _Реализация требований:_

### _1 уровень (обязательный - необходимый минимум)_

-   [x] Пишем функциональные компоненты c хуками
-   [x] Есть разделение на [умные](practicReact/src/components/pages/MainPage/MainPage.js) и [глупые](practicReact/src/components/CharsList/CharsList.js) компоненты
-   [x] Есть рендеринг [списков](practicReact/src/components/CharsList/CharsList.js)
-   [x] Реализована хотя бы одна [форма](practicReact/src/components/Form/Form.js)
-   [x] Есть применение Контекст [API](practicReact/src/components/context/context.js)
-   [x] Есть применение [предохранителя](practicReact/src/components/ErrorBoundary/ErrorBoundary.js)
-   [x] Есть хотя бы один кастомный [хук](practicReact/src/components/hooks/http.hook.js)
-   [x] отя бы несколько компонентов используют PropTypes [1](practicReact/src/components/CharsList/CharsList.js),[2](/blob/main/src/components/Form/Form.js)
-   [x] Поиск не должен триггерить много запросов к серверу [(debounce)](practicReact/src/components/SearchItem/SearchItem.js)
-   [x] Есть применение [lazy](practicReact/src/components/app/AnimatedRoutes.js) + [Suspense](/blob/main/src/components/app/App.js)
-   [x] Используем Modern Redux with Redux [Toolkit](practicReact/src/components/store/index.js)
-   [x] Используем [слайсы](practicReact/src/components/pages/MainPage/MainPage.Slice.js)
-   [x] Есть хотя бы одна кастомная [мидлвара](practicReact/src/components/store/middleWare/middleWare.js)
-   [x] Используется [RTK Query](practicReact/src/apiFirebase/apiFireBase.Slice.js)
-   [x] Используется [Transforming Responses](practicReact/src/apiFirebase/apiFireBase.Slice.js)

---

### 2 уровень (необязательный)

-   [x] Использование Firebase
-   [x] Настроен CI
