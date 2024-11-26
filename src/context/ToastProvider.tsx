

import { ReactNode } from 'react';
import { Bounce, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  
//   const contextClass = {
//     success: styles.success,
//     error: styles.error,
//     info: styles.info,
//     warning: styles.warning,
//     default: styles.default,
//      styles.dark,
//   };

  return (
    <>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Bounce}
        toastClassName="font-press-start text-xs"
        bodyClassName="font-press-start text-xs"
      />
    </>
  );
};