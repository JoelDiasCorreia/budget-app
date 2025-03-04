import {SettingsView} from "@/app/components/SettingsView";
import {Header} from "@/app/components/Header";

export default function SettingsPage (){
    return (
        <div>
            <Header user={{
                profileImage: "/images/profile.jpg"
            }}></Header>
            <SettingsView/>
        </div>

    )
}