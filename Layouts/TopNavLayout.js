import { Fragment } from "react";
import Link from "next/link";
import CircumIcon from "@klarr-agency/circum-icons-react"

function TopNavLayout(){
    return (
        <Fragment>
            <nav className="w-full top-0 fixed z-50 flex justify-normal bg-gray-500">
                <div className="p-4 flex justify-start">
                    <Link href="/">
                        <CircumIcon name="music_note_1"/>
                    </Link>
                </div>
            </nav>
        </Fragment>
    )
}

export default TopNavLayout;