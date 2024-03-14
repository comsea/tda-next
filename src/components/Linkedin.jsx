'use client'

import { LinkedinIcon, LinkedinShareButton } from "react-share"

export default function Linkedin(shareProps) {
    return (
        <div>
            <LinkedinShareButton
                url={shareProps.shareUrl}
            >
                <LinkedinIcon size={40} />
            </LinkedinShareButton>
        </div>
    )
}