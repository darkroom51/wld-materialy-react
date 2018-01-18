import Counter from './Counter'
import DefaultPropsComponent from './DefaultPropsComponent'
import FetchingJSONFromPublic from './FetchingJSONFromPublic'
import PassingParamFromURL from './PassingParamFromURL'
import REST from './REST'
import RestToDoList from './RestToDoList'
import FirebaseComponent from './FirebaseComponent'
import FirebaseCounter from './FirebaseCounter'

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
    }
]

export default routes