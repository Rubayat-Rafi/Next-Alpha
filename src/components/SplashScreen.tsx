import Image from 'next/image';
const SplashScreen = () => {

  return (
    <div style={styles.container} className="splash-screen">
      <div className="logo-wrapper">
        <Image
          src="/logo Main.png" 
          alt="Alpha Video Editing Logo"
          width={150}
          height={150}
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