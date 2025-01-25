import Image from "next/image";

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.text}>مرحبا بك في معين</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    backgroundColor: '#f0f0f0', // Optional background color
  },
  text: {
    fontSize: '36px', // Adjust font size as needed
    fontFamily: '"Arial", sans-serif', // Change the font family
    textAlign: 'center',
  },
};