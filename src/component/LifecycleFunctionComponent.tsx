import React, {useState,useEffect}  from 'react';
// import { LifecycleType } from "../type/LifecycleType";
import { PropsSampleProps} from "../type/PropsSampleProps";
const LifecycleFunctionComponent: React.FC = (props: any) => {

    /**
     * 컴포넌트 호출 시 가장 먼저 호출이 되는 공간
     * 컴포넌트에서 사용 될 state나 함수들을 정의 하는 공간입니다.
     */
    console.log(props);
    console.log("해당 부분이 제일 먼저 호출이 됩니다.");

    const [userInfo, setUserInfo] = useState<PropsSampleProps>({
        userId: 'adjh54',
        userAge: 50,
        isShowTempComponent: false,
    });

    useEffect(() => {
        console.log("전달 받은 props의 값에 변화가 생겼을 경우 / 사용자 나이의 변화가 발생하였을 경우 수행이 된다. : componentDidUpdate()와 동일");
    }, [props.appState, userInfo.userAge]);

    return (
        <>
         {console.log("Renering ...")}
            <div>
                <h1>Main Function Component 입니다.</h1>
                <div>{userInfo.userAge}</div>
            </div>
        </>
    )

};
export default LifecycleFunctionComponent;