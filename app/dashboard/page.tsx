
import {Header} from "@/app/components/Header";
import {ReportsView} from "@/app/components/ReportsView";

export default function ExpensesPage (){
    return (
        <div>
            <Header user={{
                profileImage: "/images/profile.jpg"
            }}></Header>
            <ReportsView/>
        </div>

    )
}