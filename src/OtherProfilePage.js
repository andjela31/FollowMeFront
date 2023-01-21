import { useParams } from "react-router-dom";
import Header from "./Header";
import OthersProfile from "./OthersProfile";

function OtherProfilePage() {

    const {id} = useParams();
    console.log("HEYYY" + id)

    return (
        <div className="center2">
            <div className="hee2">
                <Header />
            </div>
            <div className="pola">
                ovo je id {id}
                <OthersProfile />
            </div>
        </div>
    )

}

export default OtherProfilePage;