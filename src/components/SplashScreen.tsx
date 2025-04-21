import Image from 'next/image';
const SplashScreen = () => {

  return (
    <div style={styles.container} className="splash-screen">
      <div className="logo-wrapper">
        <Image
          src="/logo Main.png" // Ensure this path is correct
          alt="Alpha Video Editing Logo"
          width={200}
          height={200}
          priority
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#0a0416',
  },
};

export default SplashScreen;