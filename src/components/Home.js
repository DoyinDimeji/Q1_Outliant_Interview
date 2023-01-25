import { useContext, useEffect } from "react";
import { ACTION_TYPES } from "../constants/strings";
import { AppDispatchContext } from "../contexts/AppContexts";

const Home = () => {
    const dispatch = useContext(AppDispatchContext);

    useEffect (() => {
        dispatch({
            type: ACTION_TYPES.CHANGE_PAGE_TITLE,
            value: "Home"
        });
    }, []);

    return(
        <div className="home">
            <div className="first-section">
                <div>
                    <h1>Lorem Ipsum dolor sit consectetur</h1>
                    <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
                    <div>
                        <a className="button">Call to Action</a>
                        <a className="button-white">See Workspace</a>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className="second-section">
                <div>
                    <p className="heading">Header Text</p>
                    <p className="text">Lorem Ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
                </div>
                <div />
                <div>
                    <div>
                        <p className="heading">Header Text</p>
                        <p className="text">Lorem Ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;