import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Container for the image and text */}
      <div className="flex items-center gap-4"> {/* Add gap between image and text */}
        {/* Text */}
        <div style={styles.text}>Your All In One Automation Builder Application!</div>

        {/* Image */}
        <Image
          src="/M.jpg" // Ensure the image is in the `public` folder
          width={500} // Adjust the size as needed
          height={500}
          alt="muain logo"
          className="shadow-sm"
        />
      </div>
    </div>
  );
}

const styles = {
  text: {
    fontSize: "29px", // Adjust font size as needed
    fontFamily: '"Arial", sans-serif', // Change the font family
    textAlign: "center",
  },
};