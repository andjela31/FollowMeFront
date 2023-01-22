import { useParams } from "react-router-dom";
import Header from "./Header";
import OthersProfile from "./OthersProfile";

function OtherProfilePage() {

    const id = useParams();
    console.log("HEYYY" + id.personId)

    return (
        <div className="center2">
            <div className="hee2">
                <Header />
            </div>
            <div className="pola">
                <OthersProfile id={id.personId} />
            </div>
        </div>
    )

}

export default OtherProfilePage;