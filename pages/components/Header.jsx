import Image from 'next/image';

export default function Header() {

    return (
        <div className="header">
            {/* <img src="https://res.cloudinary.com/djdqpnyx4/image/upload/v1713162007/checklist_czat77.png" className="header_logo" alt="logo" /> */}
            <Image src="https://res.cloudinary.com/djdqpnyx4/image/upload/v1713162007/checklist_czat77.png" className="header_logo" alt="logo" height={35} width={35} />

            
            <span className="header_title">TODO</span>
        </div>
    )
}