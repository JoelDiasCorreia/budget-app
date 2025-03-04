import {ExpenseForm} from "@/app/components/ExpenseForm";
import {Header} from "@/app/components/Header";

export default function ExpensesPage (){
    return (
        <div>
            <Header user={{
                profileImage: "/images/profile.jpg"
            }}></Header>
            <ExpenseForm/>
        </div>

    )
}