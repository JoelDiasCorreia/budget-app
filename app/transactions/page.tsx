
import {Header} from "@/app/components/Header";
import {TransactionsView} from "@/app/components/TransactionsView";

export default function TransactionsPage (){
    return (
        <div>
            <Header user={{
                profileImage: "/autor.jpeg"
            }}></Header>
            < TransactionsView
            />
        </div>

    )
}