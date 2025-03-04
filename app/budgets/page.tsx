
import {Header} from "@/app/components/Header";
import {BudgetView} from "@/app/components/BudgetView";
export default function BudgetPage (){
    return (
        <div>
            <Header user={{
                profileImage: "/images/profile.jpg"
            }}></Header>
            <BudgetView/>
        </div>

    )
}