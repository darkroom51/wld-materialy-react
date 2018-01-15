import Counter from './Counter'
import DefaultPropsComponent from './DefaultPropsComponent'
import FetchingJSONFromPublic from './FetchingJSONFromPublic'

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
    }
]

export default routes