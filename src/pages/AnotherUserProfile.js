import {FollowProvider} from "../Folowing/followprovider/FollowProvider"
import {AnotherUser} from "../Folowing/AnotherUserFriendList/AnotherUser"

function AnotherUserPage(){
    return (
        <div>
            <FollowProvider>
                <AnotherUser />
            </FollowProvider>
        </div>
    )
}

export default AnotherUserPage;