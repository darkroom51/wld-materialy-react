import Counter from './Counter'
import DefaultPropsComponent from './DefaultPropsComponent'
import FetchingJSONFromPublic from './FetchingJSONFromPublic'
import PassingParamFromURL from './PassingParamFromURL'
import REST from './REST'
import RestToDoList from './RestToDoList'
import FirebaseComponent from './FirebaseComponent'
import FirebaseCounter from './FirebaseCounter'
import FireBaseToDo from './FireBaseToDo'
import FireBaseLogIn from './FireBaseLogIn'
import ReduxToDo from './ReduxToDo'
import ReduxSimpleText from './ReduxSimpleText' //uwaga! to importuje katalog
import ReduxRectangle from './ReduxRectangle'
import ReduxCounter from './ReduxCounter'
import ReduxAsyncActions from './ReduxAsyncActions'

const routes = [
    {
        path: '/component/counter',
        text: 'Counter',
        component: Counter
    },
    {
        path: '/component/default-props',
        text: 'defaultProps example',
        component: DefaultPropsComponent
    },
    {
        path: '/component/fetch-public',
        text: 'Fetching JSON from public folder',
        component: FetchingJSONFromPublic
    },
    {
        path: '/component/passing-params/:uid/:secondParam',
        to: '/component/passing-params/12345/someRandomString',
        text: 'Passing params from URL',
        component: PassingParamFromURL
    },
    {
        path: '/component/rest',
        text: 'Simple REST GET data',
        component: REST
    },
    {
        path: '/component/rest-to-do',
        text: 'REST Todo list',
        component: RestToDoList
    },
    {
        path: '/component/firebase',
        text: 'Firebase Basics',
        component: FirebaseComponent
    },
    {
        path: '/component/firebase-counter',
        text: 'Firebase Counter',
        component: FirebaseCounter
    },
    {
        path: '/component/firebase-to-do',
        text: 'Firebase ToDo',
        component: FireBaseToDo
    },
    {
        path: '/component/firebase-login',
        text: 'Firebase Login',
        component: FireBaseLogIn
    },
    {
        path: '/component/redux-to-do',
        text: 'Redux ToDo',
        component: ReduxToDo
    },
    {
        path: '/component/redux-simple-text',
        text: 'Redux Simple Text',
        component: ReduxSimpleText
    },
    {
        path: '/component/redux-rectangle',
        text: 'Redux Rectangle',
        component: ReduxRectangle
    },
    {
        path: '/component/redux-counter',
        text: 'Redux Counter',
        component: ReduxCounter
    },
    {
        path: '/component/redux-async',
        text: 'Redux Async',
        component: ReduxAsyncActions
    }
]

export default routes