import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

interface Spline3DProps {
  scene: string;
  className?: string;
}

const Spline3D: React.FC<Spline3DProps> = ({ scene, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        }
      >
        <Spline 
          scene={scene}
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
};

export default Spline3D;