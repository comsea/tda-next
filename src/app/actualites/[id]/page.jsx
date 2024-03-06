'use client'

import MiniaSlide from "@/components/MiniaSlide";

export default function Actus() {
    const test = ["/images/Accueil/bg.png", "/images/Accueil/article.png"]

    return(
        <div className="w-[90%] flex flex-col justify-center items-center">
            <div className="w-full flex flex-row items-center justify-center py-12">
                <div className="w-[90%] flex flex-col justify-center items-start text-start space-y-12">
                    <div className="w-full flex flex-col items-end space-y-1">
                        <p className="text-[#BBBBBB] text-base">Date de publication</p>
                        <MiniaSlide images={test} />
                    </div>
                    <div className="text-6xl font-bold mb-10 w-full">
                        <h1 className="drop-shadow-[30px_25px_0px_rgba(255,255,255,0.25)]">TITRE DE L'ACTUALITÉ</h1>
                        <div className="h-[2px] bg-[#DF0624] w-[300px] z-10"></div>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices sagittis orci a scelerisque purus. Volutpat odio facilisis mauris sit amet. Nascetur ridiculus mus mauris vitae ultricies leo. Urna condimentum mattis pellentesque id. Quam quisque id diam vel quam elementum. Elementum nisi quis eleifend quam adipiscing vitae proin. Commodo elit at imperdiet dui accumsan. Tellus in metus vulputate eu. Neque convallis a cras semper. Vitae turpis massa sed elementum tempus egestas. Donec ac odio tempor orci dapibus ultrices in iaculis. Mauris nunc congue nisi vitae suscipit. Lacus luctus accumsan tortor posuere ac ut consequat semper. Integer malesuada nunc vel risus commodo viverra maecenas. Sem et tortor consequat id porta.</p>
                        <p>At lectus urna duis convallis. Sed arcu non odio euismod lacinia at quis risus sed. Volutpat commodo sed egestas egestas fringilla phasellus. Facilisi morbi tempus iaculis urna id volutpat. Tristique senectus et netus et. Massa sapien faucibus et molestie. A diam sollicitudin tempor id eu nisl nunc. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Sed ullamcorper morbi tincidunt ornare. Et tortor at risus viverra adipiscing at in. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Sit amet purus gravida quis blandit turpis cursus. Condimentum vitae sapien pellentesque habitant. Nibh praesent tristique magna sit amet purus gravida.</p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <p>Notre actualité vous plait ? Partagez la !</p>
                        <div className="flex flex-row space-x-4">
                            <a href="" className="bg-[#0E76A8] p-2"><img src="/images/Footer/linkedin.png" alt="Linkedin" className="w-[25px]" /></a>
                            <a href="" className="bg-[#3B5998] p-2"><img src="/images/Footer/facebookb.png" alt="Facebook" className="w-[25px]" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}