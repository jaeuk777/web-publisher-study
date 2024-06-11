const MyProfile=(props)=> {
    // 클래스형: this.props, 함수형: props로 접근
        // const mystyle = {
        //     backgroundColor :'skyblue',
        // }
        // const profileicon = {
        //     width: '50px',
            
        // }
        const imgbox = {
            width: '100px',
            heigth: '100px',
            ObjectFit: 'cover'
        }

        // const myprofiles = {
        //     username,
        //     userId,
        //     userEmail,
        //     usertel
        // }

        const {
            username,
            userId,
            userEmail,
            usertel
        } = props
        // const {MyProfiles} = this.props
        // const {name, userId, userEmail, usertel} = props;
        return (
            <div>
                <h3>MyProfile</h3>
                {/* 이미지 */}
                <span><img  style={imgbox} src="./imgsrc/1017_1650_4748.jpg" alt="" /></span>
                {/* 이름, 아이디, 이메일주소, 연락처 */}
                <h4>이름: {username}</h4>
                <h4>아이디: {userId}</h4>
                <h4>이메일: {userEmail}</h4>
                <h4>전화번호: {usertel}</h4>
            </div>
        )
    }

export default MyProfile;