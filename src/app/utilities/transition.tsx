import { motion } from 'framer-motion';

export default function (Component: () => JSX.Element) {
  return () => (
    <>
      <Component />
      <motion.div
        className="overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}
