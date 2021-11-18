import React from 'react';
import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import Header from "../Components/SearchPage/Header/Header";
import SectionContent from "../Components/SearchPage/SectionContent/SectionContent";
import { IRootReducer } from '../redux/rootReducer/state';
import { AuthActions } from '../redux/user/actions';

type ILoginContainerProps = ReturnType<typeof mapDispatchToProps>
const Search:React.FC<ILoginContainerProps> = ({checkUser}) => {
    const user = useSelector((state:IRootReducer) => state.user)
    useEffect(()=>{
        checkUser()
    }, [])
    return (
        <React.Fragment>
            <Header/>
            <SectionContent/>
        </React.Fragment>
    );
};
const mapDispatchToProps = (dispatch:Dispatch) => ({
    checkUser:()=>dispatch(AuthActions.checkUser())
})
export default connect(null,mapDispatchToProps)(Search);