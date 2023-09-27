// css
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.scss';

// components
import GlobalProvider from '@/components/GlobalProvider';

export const metadata = {
  title: 'Gain payrun',
  description: 'Generated by create next app'
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <GlobalProvider>{children}</GlobalProvider>
    </body>
  </html>
);

export default RootLayout;
