import Friendlist from "../../Folowing/FriendList/Friendlist";
import MainUserFriends from "../../Folowing/MainUserFriends/MainUserFriendList";
// import { Box } from "@mui/system";

function Friends(){
    return(
        <div>
            <div>
                <Friendlist />
            </div>
            <div >
                <MainUserFriends />
            </div>

        </div>
    )
}

export default Friends;