
import {Header} from "@/app/components/Header";
import {IncomeForm} from "@/app/components/IncomeForm";

export default function IncomePage (){
    return (
        <div>
            <Header user={{
                profileImage: "/autor.jpeg"
            }}></Header>
            <IncomeForm/>
        </div>

    )
}