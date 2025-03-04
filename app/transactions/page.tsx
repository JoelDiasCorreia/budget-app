
import {Header} from "@/app/components/Header";
import {TransactionsView} from "@/app/components/TransactionsView";

export default function TransactionsPage (){
    return (
        <div>
            <Header user={{
                profileImage: "/images/profile.jpg"
            }}></Header>
            < TransactionsView
            />
        </div>

    )
}