import '../styles/reset.scss'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { createWrapper } from 'next-redux-wrapper';
import {Provider} from 'react-redux'
import store from '../redux/store';


function MyApp({ Component, pageProps }: AppProps) {

    return (
        <Provider store={store}>
        <Component {...pageProps} />
        </Provider>
    )
}
const makestore = () => store;
const wrapper = createWrapper<any>(makestore)
export default wrapper.withRedux(MyApp);