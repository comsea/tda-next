'use client'

import { FacebookIcon, FacebookShareButton } from "react-share"

export default function Facebook(shareProps) {
    return (
        <div>
            <FacebookShareButton 
                url={shareProps.shareUrl}
            >
                <FacebookIcon size={40} />
            </FacebookShareButton>
        </div>
    )
}