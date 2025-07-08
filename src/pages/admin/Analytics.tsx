import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      <div className="container mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-orbitron text-4xl font-bold text-gradient-cyber mb-2">
            ANALYTICS
          </h1>
          <p className="text-foreground/60">Track your portfolio performance and visitor insights</p>
        </motion.div>

        <Card className="cyber-border p-8 text-center">
          <h2 className="font-orbitron text-2xl mb-4">Coming Soon</h2>
          <p className="text-foreground/60 mb-6">Analytics dashboard will be available soon.</p>
          <Link to="/admin">
            <Button className="cyber-button">Back to Dashboard</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;