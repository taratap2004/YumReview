import Link from "next/link";
import Image from "next/image";

function page() {
  return (
    <div>

      <h1 className="text-3xl text-red-700 text-center">Hello World</h1>
      <p className="text-xl text-blue-400" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dignissimos eligendi molestiae, accusantium 
        aperiam, porro iure autem cumque possimus ipsam facere voluptatum nulla aliquid doloremque voluptate libero id dolorem commodi?</p>
        <Link href = "https://chatgpt.com/" target="_blank">Click Here</Link>
        <div className="grid sm:justify-center lg:justify-start" >
        <Image  src = "/Messi.jpg" alt="Messi" width="400" height="400" />
        <Image src="https://rmuti.ac.th/one/wp-content/uploads/2023/05/PARTNER-ZONE-1-768x397-1.webp" alt="rmuti" width="400" height="400"></Image>
        </div>
        
    </div>

  );
}

export default page