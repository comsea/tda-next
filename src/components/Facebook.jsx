'use client'

import { FacebookIcon, FacebookShareButton } from "react-share"

export default function Facebook(shareProps) {
    return (
        <div>
            <FacebookShareButton 
                url={shareProps.shareUrl}
                quote={shareProps.shareQuote}>
                <FacebookIcon size={40} round />
            </FacebookShareButton>
            
        </div>
    )
}