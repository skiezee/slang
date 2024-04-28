import React from "react";
import Image from "next/image";

export default function Trusted() {
    return (
        <>
            <div className="bg-[#3A3C40] mt-[175px] mb-12">
                <div className="mx-auto text-center">
                    <div className="flex flex-col mx-auto text-center">
                        <p className="font-semibold text-[24px] text-[#FFFFFF] mt-12">Trusted by nearly 5000+ learners</p>
                        <div className="flex flex-wrap justify-between m-16 mx-24">
                            <Image src="/waverio.svg" width={164.74} height={36.8} alt="waverio"/>
                            <Image src="/square.svg" width={164.74} height={36.8} alt="square"/>
                            <Image src="/martino.svg" width={164.74} height={36.8} alt="martino"/>
                            <Image src="/virogan.svg" width={164.74} height={36.8} alt="virogan"/>
                            <Image src="/asana.svg" width={164.74} height={36.8} alt="asana"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}