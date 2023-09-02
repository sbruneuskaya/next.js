import Link from "next/link";
import {Metadata} from "next";

const AboutLayout=({children}: {children: React.ReactNode})=>{
    return(
        <div>
            <h1>ABOUT US TITLE</h1>
            <div>
                <Link href={'/about/team'}>Team</Link>
                <Link href={'/about/contacts'}>Contacts</Link>
            </div>

            {children}
        </div>
    )
}

export default AboutLayout